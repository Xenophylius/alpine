import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import StoreProvider from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alpine",
  description: "Alpine configurator",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
    <html lang="en">
      <body>
      <ul className="text-center">
        <li>
          <Link href="/" className="mx-3">Home</Link>
          <Link href="/configurator" className="mx-3">Configurator</Link>
        </li>
      </ul>
      <main>{children}</main>
      
        </body>
    </html>
    </StoreProvider>
  );
}
