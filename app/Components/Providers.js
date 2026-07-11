"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Theme from "../Theme";
import CartProvider from "../Contexts/CartContext";
import FavoriteProvider from "../Contexts/FavoriteContext";

export default function Providers({ children }) {
  return (
    <AppRouterCacheProvider options={{ key: "css" }}>
      <ThemeProvider theme={Theme}>
        <CssBaseline />

        <CartProvider>
          <FavoriteProvider>{children}</FavoriteProvider>
        </CartProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
