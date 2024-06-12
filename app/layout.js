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
      <body className="bgBlack">
      <nav class="navbar navbar-expand-lg position-fixed z-3">
        <div class="container-fluid">
          <Link href="/" className="mx-3 navbar-brand mt-1 me-5"><img src="./images/alpine/alpine-logo-1-removebg-preview.png" style={{width: 100 + 'px'}}/></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link href="/" className="mx-3 text-decoration-none mt-3 hoverMenu"><h4 className="fw-bold text-light ">HOME</h4></Link>
              <Link href="/configurator" className="mx-3 text-decoration-none mt-3 hoverMenu"><h4 className="fw-bold text-light ">CONFIGURATOR</h4></Link>
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
      
        </body>
    </html>
    </StoreProvider>
  );
}
