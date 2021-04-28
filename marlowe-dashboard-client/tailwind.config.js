"use strict";

module.exports = {
  purge: [
    "src/**/*.purs",
    "web-common/**/*.purs",
    "web-common-marlowe/**/*.purs"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#283346",
      lightgray: "#eeeeee",
      gray: "#dfdfdf",
      green: "#00a551",
      lightgreen: "#00e872",
      darkgray: "#b7b7b7",
      overlay: "rgba(10,10,10,0.4)",
      white: "#ffffff",
      purple: "#4700c3",
      lightpurple: "#8701fc",
      grayblue: "#f5f9fc",
      purple: "#4c41e5",
      red: "#e04b4c",
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "24px",
      "2xl": "34px",
      "3xl": "46px",
      "big-icon": "100px",
    },
    scale: {
      77: ".77",
    },
    borderRadius: {
      sm: "5px",
      DEFAULT: "10px",
      lg: "25px",
      full: "9999px",
    },
    boxShadow: {
      none: "none",
      sm: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
      DEFAULT:
        "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
      lg: "0 20px 25px -5px rgba(0,0,0,0.2), 0 10px 10px -5px rgba(0,0,0,0.04)",
      xl: "0 25px 50px -12px rgba(0,0,0,0.25)",
      deep: "0 2.5px 5px 0 rgba(0, 0, 0, 0.22)",
    },
    extend: {
      animation: {
        "from-below": "from-below 250ms ease-out 1",
        "to-bottom": "to-bottom 250ms ease-out 1",
      },
      keyframes: {
        "from-below": {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0px)", opacity: 1 },
        },
        "to-bottom": {
          "0%": { transform: "translateY(0px)", opacity: 1 },
          "100%": { transform: "translateY(20px)", opacity: 0 },
        },
      },
      gridTemplateRows: {
        main: "auto minmax(0, 1fr) auto",
        "contract-setup": "auto auto minmax(0, 1fr)",
      },
      gridTemplateColumns: {
        "2-contract-home-card": "repeat(2, minmax(240px, 1fr))",
        "auto-fill-contract-home-card": "repeat(auto-fill, minmax(240px, 1fr))",
      },
      spacing: {
        "5pc": "5%",
      },
      width: {
        sm: "375px",
        md: "640px",
        lg: "768px",
        "contract-card": "264px",
        /* This width is used by a padding element in both sides of the carousel and is enough
           to push the first and last card to the center */
        "carousel-padding-element": "calc(50% - 264px / 2)",
      },
      height: {
        "contract-card": "467px",
      },

      borderWidth: {
        half: "0.5px",
      },
      maxWidth: {
        sm: "375px",
        md: "640px",
        lg: "768px",
        "90p": "90%",
      },
      minWidth: {
        button: "120px",
        "90p": "90%",
        sm: "375px",
      },
    },
  },
  variants: {
    extend: {
      // note 'disabled' goes last so that it takes priority
      backgroundColor: ["last", "hover", "disabled"],
      backgroundImage: ["hover", "disabled"],
      boxShadow: ["hover", "disabled"],
      cursor: ["hover", "disabled"],
      // This causes an error
      // spacing: ['first', 'last'],
      textColor: ["hover", "disabled"],
      margin: ["first", "last"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
  corePlugins: {
    container: false,
    space: true,
    divideWidth: false,
    divideColor: false,
    divideStyle: false,
    divideOpacity: false,
    accessibility: false,
    appearance: false,
    backgroundAttachment: false,
    backgroundClip: false,
    backgroundColor: true,
    backgroundImage: true,
    gradientColorStops: true,
    backgroundOpacity: false,
    backgroundPosition: false,
    backgroundRepeat: false,
    backgroundSize: false,
    borderCollapse: false,
    borderColor: true,
    borderOpacity: false,
    borderRadius: true,
    borderStyle: false,
    borderWidth: true,
    boxSizing: false,
    cursor: true,
    display: true,
    flexDirection: true,
    flexWrap: false,
    placeItems: false,
    placeContent: false,
    placeSelf: false,
    alignItems: true,
    alignContent: true,
    alignSelf: true,
    justifyItems: false,
    justifyContent: true,
    justifySelf: false,
    flex: true,
    flexGrow: true,
    flexShrink: true,
    order: false,
    float: true,
    clear: false,
    fontFamily: false,
    fontWeight: true,
    height: true,
    lineHeight: true,
    listStylePosition: false,
    listStyleType: false,
    maxHeight: true,
    maxWidth: true,
    minHeight: false,
    minWidth: true,
    objectFit: false,
    objectPosition: false,
    opacity: true,
    outline: true,
    overflow: true,
    overscrollBehavior: false,
    placeholderColor: false,
    placeholderOpacity: false,
    pointerEvents: true,
    position: true,
    inset: true,
    resize: false,
    boxShadow: true,
    ringWidth: true,
    ringOffsetColor: false,
    ringOffsetWidth: false,
    ringColor: true,
    ringOpacity: false,
    fill: false,
    stroke: false,
    strokeWidth: false,
    tableLayout: false,
    textAlign: true,
    textOpacity: false,
    textOverflow: true,
    fontStyle: false,
    textTransform: true,
    textDecoration: true,
    fontSmoothing: false,
    fontVariantNumeric: false,
    letterSpacing: false,
    userSelect: false,
    verticalAlign: false,
    visibility: true,
    whitespace: true,
    wordBreak: false,
    width: true,
    zIndex: true,
    gap: true,
    gridAutoFlow: false,
    gridTemplateColumns: true,
    gridAutoColumns: false,
    gridColumn: false,
    gridColumnStart: false,
    gridColumnEnd: false,
    gridTemplateRows: true,
    gridAutoRows: false,
    gridRow: false,
    gridRowStart: false,
    gridRowEnd: false,
    transform: true,
    transformOrigin: true,
    scale: true,
    rotate: false,
    translate: true,
    skew: false,
    transitionProperty: true,
    transitionTimingFunction: true,
    transitionDuration: true,
    transitionDelay: false,
    animation: true,
  },
};
