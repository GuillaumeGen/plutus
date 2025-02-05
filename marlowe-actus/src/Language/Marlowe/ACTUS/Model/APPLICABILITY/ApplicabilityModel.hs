{-# LANGUAGE RecordWildCards #-}

module Language.Marlowe.ACTUS.Model.APPLICABILITY.ApplicabilityModel where

import           Data.Validation                                  (Validation (..))
import           Language.Marlowe.ACTUS.Definitions.ContractTerms (ContractTerms (..), IPCB (IPCB_NTIED, IPCB_NTL),
                                                                   TermValidationError (..))

-- Applicability Validation Functions

-- Optional
_X :: p1 -> a -> p2 -> Validation err a
_X _ t _ = Success t

-- The conditional term with c=1 is optional when any of the unconditional terms with c=0 is defined.
_X_I_1 :: [Bool] -> [Bool] -> ContractTerms -> [String] -> [String] -> Validation [TermValidationError] ContractTerms
_X_I_1 _uncondCts _condCts t@ContractTerms{..} uncondNames condNames
  | or _uncondCts = Success t
  | or _condCts   = Failure [Required $ "The unconditional terms " ++ show uncondNames ++ " must be defined when any of " ++ show condNames ++ " are defined for contract type '" ++ show contractType ++ "'"]
  | otherwise     = Success t

-- If the unconditional term with c=0 in the group is defined, then at least one of the conditional terms with c=2 must be defined.
_X_I_2 :: Maybe a -> [Bool] -> ContractTerms -> String -> [String] -> Validation [TermValidationError] ContractTerms
_X_I_2 (Just _) _condCts t _ _ | or _condCts = Success t
_X_I_2 (Just _) _condCts ContractTerms{..} uncondName condNames = Failure [Required $ "At least one of the conditional terms in group " ++ show condNames ++ " must be defined when " ++ uncondName ++ " is defined for contract type '" ++ show contractType ++ "'"]
_X_I_2 Nothing _ t _ _ = Success t

-- at least one of the CAs with c=4 in this group has to be defined provided that CA IPCB of the group takes the value NTL
_X_I_4 :: [Bool] -> ContractTerms -> [String] -> Validation [TermValidationError] ContractTerms
_X_I_4 _condCts  t@ContractTerms{..} condNames =
    case ct_IPCB of
        Just IPCB_NTL ->
            if or _condCts then
                Success t else
                Failure [Required $ "At least one of the conditional terms in group " ++ show condNames ++ " must be defined when interest calculation base is NTL for contract type '" ++ show contractType ++ "'"]
        _ -> Success t

-- non-nullable / required
_NN :: (ContractTerms -> Maybe a) -> ContractTerms -> String -> Validation [TermValidationError] ContractTerms
_NN _ct t@ContractTerms{..} termName =
    case _ct t of
        Just _ -> Success t
        Nothing -> Failure [Required $ "Contract term '" ++ termName ++ "' is required for contract type '" ++ show contractType ++ "'"]

-- not applicable
_NA :: (ContractTerms -> Maybe a) -> ContractTerms -> String -> Validation [TermValidationError] ContractTerms
_NA _ct t@ContractTerms{..} termName =
    case _ct t of
        Just _ -> Failure [NotApplicable $ "Contract term '" ++ termName ++ "' is not applicable for contract type '" ++ show contractType ++ "'"]
        Nothing -> Success t

-- NN(I, 1, _) (If one is defined, all must be defined)
_NN_I_1 :: [Bool] -> ContractTerms -> [String] -> Validation [TermValidationError] ContractTerms
_NN_I_1 _cts t@ContractTerms{..} termNames
  | and _cts = Success t
  | or _cts = Failure [Required $ "All contract terms in group " ++ show termNames ++ " should be defined if one of them is defined for contract type '" ++ show contractType ++ "'"]
  | otherwise = Success t

-- not nullable if CA IPCB of the group takes the value NTIED
_NN_I_3 :: (ContractTerms -> Maybe a) -> ContractTerms -> [Char] -> Validation [TermValidationError] ContractTerms
_NN_I_3 _ct t@ContractTerms{..} termName =
    case ct_IPCB of
        Just IPCB_NTIED ->
          case _ct t of
            Just _ -> Success t
            Nothing -> Failure [Required $ "Contract term " ++ termName ++ " must be defined when interest calculation base is NTIED"]
        _ ->
            Success t
