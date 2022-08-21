import React from "react";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components";

import theme from "./theme";
import App from "./src/App";

export default function Root() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
