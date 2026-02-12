"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Theme from "../Theme";

export default function Providers({ children }) {
  return (
    <AppRouterCacheProvider options={{ key: "css" }}>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
