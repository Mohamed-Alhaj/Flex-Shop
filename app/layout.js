import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Providers from "./Components/Providers";
import BootstrapClient from "./Components/BootstrapClient";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <BootstrapClient />
          {children}
        </Providers>
      </body>
    </html>
  );
}
