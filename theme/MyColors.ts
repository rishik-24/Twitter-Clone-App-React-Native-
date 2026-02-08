export const MyColors = {
  // Common colors used in both themes

  brand: {
    primary: "#1D9BF0", // Twitter blue
    hover: "#1A8CD8",
    pressed: "#1577B5",
  },

  icon: {
    default: "#E7E9EA",
    inactive: "#71767B",
    active: "#1D9BF0",
  },

  status: {
    like: "#F91880",
    retweet: "#00BA7C",
    warning: "#FFD400",
    error: "#F4212E",
  },

  // Light theme colors below

  light: {
    background: "#edf6f9",
    text: "#011627",
    card: "#F9FAFB",
    border: "#E5E7EB",
  },

  // Dark theme colors below

  dark: {
    background: {
      primary: "#000000", // Main app background
      secondary: "#16181C", // Cards, tweets, modals
      hover: "#1D1F23", // Hover / pressed states
      border: "#2F3336", // Dividers & outlines
    },

    text: {
      primary: "#E7E9EA", // Main text
      secondary: "#71767B", // Usernames, timestamps
      muted: "#536471", // Disabled text
      inverted: "#000000", // Text on blue buttons
    },
  },
};

export type ThemeMode = "light" | "dark";
