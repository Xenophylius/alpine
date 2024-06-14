import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import StoreProvider from "./StoreProvider";
import { NavLink } from "react-bootstrap";
import { Nav } from "react-bootstrap";

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
      <nav class="navbar navbar-expand-lg navbar-dark position-fixed z-3">
        <div class="container-fluid">
          <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon "></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <div class="navbar-nav">
              <NavLink href="/" className="mx-3 navbar-brand mt-3 me-5"><img src="./images/alpine/logo-white.png" className="imgLogoMenu" /></NavLink>
              <NavLink href="/" className="mx-3 text-decoration-none mt-3 hoverMenu"><h4 className="fw-bold text-light ">HOME</h4></NavLink>
              <NavLink href="/configurator" className="mx-3 text-decoration-none mt-3 hoverMenu"><h4 className="fw-bold text-light ">CONFIGURATOR</h4></NavLink>
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>
        </body>
    </html>
    </StoreProvider>
  );
}
