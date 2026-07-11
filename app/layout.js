import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Providers from "./Components/Providers";
import BootstrapClient from "./Components/BootstrapClient";
import NavBar from "./Components/NavBar";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <BootstrapClient />
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
