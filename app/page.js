'use client'
import  Button  from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';


export default function Home() {
  return (
    <>
    <section className="container-fluid m-0 p-0 border-bottom border-2">
      <Splide aria-label="My Favorite Images" className="z-0 position-relative m-0 p-0">
        <SplideSlide className="position-relative m-0 p-0">
          <video className="video" autoplay="true" muted="true" loop="true"><source src="https://cdn.group.renault.com/alp/master/alpine-new-cars/homepage/banners/mobile/alpine-teasing3-video-a290-hp-mobile.mp4.asset.mp4/3288366b89.mp4" /></video>
          <div className="position-absolute top-50 start-0 translate-middle-y mx-5 px-5 text-light bw-bold ">
            <h3>A290</h3>
            <h6 className="mt-3">LE MANS - 13 JUNE 2024</h6>
            <button className="btn btn-outline-light rounded-0 mt-4">RESTEZ INFORME</button>
          </div>
        </SplideSlide>
        <SplideSlide className="position-relative m-0 p-0">
          <img style={{height : 89 + 'vh !important;', width : 100 + '%'}} src="https://cdn.group.renault.com/alp/master/alpine-new-cars/homepage/banners/desktop/alpine-autopromo-UK-008-desktop.jpg.ximg.largex2.webp/50561ac9a8.webp" alt="Image 1"/>
          <div className="position-absolute top-50 start-0 translate-middle-y mx-5 px-5 text-light bw-bold ">
            <h3>A110 R TURINI</h3>
            <h6 className="mt-3">LA PLUS RADICALE DES A110</h6>
            <button className="btn btn-light rounded-0 mt-4">DECOUVRIR</button>
          </div>
        </SplideSlide>
        <SplideSlide className="position-relative m-0 p-0">
          <video className="video" autoplay="true" muted="true" loop="true"><source src="https://cdn.group.renault.com/alp/master/alpine-new-cars/homepage/banners/mobile/alpine-teasing2-video-alpenglow-hp-mobile.mp4.asset.mp4/93bcfc02ed.mp4" /></video>
          <div className="position-absolute top-50 start-0 translate-middle-y mx-5 px-5 text-light bw-bold ">
            <h3>ALPENGLOW</h3>
            <h6 className="mt-3">SPA-FRANCORCHAMPS</h6>
            <button className="btn btn-outline-light rounded-0 mt-4">DECOUVRIR</button>
          </div>
        </SplideSlide>
        <SplideSlide className="position-relative m-0 p-0">
          <img style={{height : 89 + 'vh !important;',  width : 100 + '%'}} src="https://cdn.group.renault.com/alp/master/alpine-new-cars/homepage/banners/desktop/alpine-A110s-hp-desktop.jpg.ximg.largex2.webp/87fab305ac.webp" alt="Image 2"/>
          <div className="position-absolute top-50 start-0 translate-middle-y mx-5 px-5 text-light bw-bold ">
            <h3>A110 S</h3>
            <h6 className="mt-3">SPORTIVITÉ INCARNÉE</h6>
            <button className="btn btn-light rounded-0 mt-4">DECOUVRIR</button>
          </div>
        </SplideSlide>
      </Splide>
    </section>

    <section className="container-fluid m-0 p-0 position-relative">
      <img style={{height : 100 + 'vh !important;', width : 100 + '%'}} src="https://cdn.group.renault.com/alp/master/alpine-new-cars/homepage/editorial/homepage-2024/alpine-homepage-001-desktop.jpg.ximg.largex2.webp/c04dd679a2.webp" alt="Image 1"/>
      <div className="position-absolute top-0 start-0 m-5 p-5  text-light bw-bold ">
            <h3>A110</h3>
            <h6 className="text-uppercase mt-3">Une icône de légèreté et de sportivité</h6>
            <button className="btn btn-outline-light rounded-0 mt-4">DECOUVRIR</button>
          </div>
    </section>

    <section className="bgBlack m-0 p-0 ">
      <div className="row justify-content-evenly py-5 text-center ">
        <div className="col-4 position-relative">
          <p className="position-absolute top-0 start-50 translate-middle-x fw-bold text-light mt-3 ">CONFIGURER ALPINE</p>
          <img className="imgSection" src="https://cdn.group.renault.com/alp/master/alpine-new-cars/homepage/editorial/homepage-2024/alpine-homepage-002.jpg.ximg.xsmall.webp/2ce92b218f.webp 375w, https://cdn.group.renault.com/alp/master/alpine-new-cars/homepage/editorial/homepage-2024/alpine-homepage-002.jpg.ximg.small.webp/2ce92b218f.webp 640w, https://cdn.group.renault.com/alp/master/alpine-new-cars/homepage/editorial/homepage-2024/alpine-homepage-002.jpg.ximg.xsmallx2.webp/2ce92b218f.webp 750w, https://cdn.group.renault.com/alp/master/alpine-new-cars/homepage/editorial/homepage-2024/alpine-homepage-002.jpg.ximg.medium.webp/2ce92b218f.webp 1024w, https://cdn.group.renault.com/alp/master/alpine-new-cars/homepage/editorial/homepage-2024/alpine-homepage-002.jpg.ximg.large.webp/2ce92b218f.webp 1280w, https://cdn.group.renault.com/alp/master/alpine-new-cars/homepage/editorial/homepage-2024/alpine-homepage-002.jpg.ximg.mediumx2.webp/2ce92b218f.webp 2048w, https://cdn.group.renault.com/alp/master/alpine-new-cars/homepage/editorial/homepage-2024/alpine-homepage-002.jpg.ximg.largex2.webp/2ce92b218f.webp 2560w"/>
          <p className="btn btn-outline-light position-absolute bottom-0 start-50 translate-middle-x mb-2 rounded-0 ">CONFIGURER</p>
        </div>
        <div className="col-4 position-relative">
          <p className="position-absolute top-0 start-50 translate-middle-x fw-bold text-light mt-3 ">NOUS RENDRE VISITE</p>
          <img className="imgSection" src="https://cdn.group.renault.com/alp/master/alpine-new-cars/homepage/editorial/homepage-2024/alpine-homepage-003.jpg.ximg.xsmall.webp/3a8a14e91e.webp 375w, https://cdn.group.renault.com/alp/master/alpine-new-cars/homepage/editorial/homepage-2024/alpine-homepage-003.jpg.ximg.small.webp/3a8a14e91e.webp 640w, https://cdn.group.renault.com/alp/master/alpine-new-cars/homepage/editorial/homepage-2024/alpine-homepage-003.jpg.ximg.xsmallx2.webp/3a8a14e91e.webp 750w, https://cdn.group.renault.com/alp/master/alpine-new-cars/homepage/editorial/homepage-2024/alpine-homepage-003.jpg.ximg.medium.webp/3a8a14e91e.webp 1024w, https://cdn.group.renault.com/alp/master/alpine-new-cars/homepage/editorial/homepage-2024/alpine-homepage-003.jpg.ximg.large.webp/3a8a14e91e.webp 1280w, https://cdn.group.renault.com/alp/master/alpine-new-cars/homepage/editorial/homepage-2024/alpine-homepage-003.jpg.ximg.mediumx2.webp/3a8a14e91e.webp 2048w, https://cdn.group.renault.com/alp/master/alpine-new-cars/homepage/editorial/homepage-2024/alpine-homepage-003.jpg.ximg.largex2.webp/3a8a14e91e.webp 2560w"/>
          <p className="btn btn-outline-light position-absolute bottom-0 start-50 translate-middle-x mb-2 rounded-0 ">STORE</p>
        
        </div>
        <div className="col-4 position-relative">
          <p className="position-absolute top-0 start-50 translate-middle-x fw-bold text-light mt-3 ">ESSAI</p>
          <img className="imgSection" src="https://cdn.group.renault.com/alp/master/alpine-new-cars/homepage/editorial/homepage-2024/alpine-homepage-004.jpg.ximg.xsmall.webp/521cc09a65.webp 375w, https://cdn.group.renault.com/alp/master/alpine-new-cars/homepage/editorial/homepage-2024/alpine-homepage-004.jpg.ximg.small.webp/521cc09a65.webp 640w, https://cdn.group.renault.com/alp/master/alpine-new-cars/homepage/editorial/homepage-2024/alpine-homepage-004.jpg.ximg.xsmallx2.webp/521cc09a65.webp 750w, https://cdn.group.renault.com/alp/master/alpine-new-cars/homepage/editorial/homepage-2024/alpine-homepage-004.jpg.ximg.medium.webp/521cc09a65.webp 1024w, https://cdn.group.renault.com/alp/master/alpine-new-cars/homepage/editorial/homepage-2024/alpine-homepage-004.jpg.ximg.large.webp/521cc09a65.webp 1280w, https://cdn.group.renault.com/alp/master/alpine-new-cars/homepage/editorial/homepage-2024/alpine-homepage-004.jpg.ximg.mediumx2.webp/521cc09a65.webp 2048w, https://cdn.group.renault.com/alp/master/alpine-new-cars/homepage/editorial/homepage-2024/alpine-homepage-004.jpg.ximg.largex2.webp/521cc09a65.webp 2560w"/>
          <p className="btn btn-outline-light position-absolute bottom-0 start-50 translate-middle-x mb-2 rounded-0 ">CONTACTEZ-NOUS</p>
        </div>
      </div>
    </section>

    <section className="bgBlack m-0 p-0 pt-3">
      <div className="row align-items-center ">
        <div className="col-6 text-light ps-5">
          <h1 className="fw-bold mb-3">FORMULE 1® </h1>
          <p>L’agilité Alpine à la conquête des circuits de F1®</p>
          <p className="btn btn-outline-light rounded-0 mt-4">DECOUVRIR</p>
          
        </div>
        <div className="col-6 p-0">
          <img className="height100Vh w-100" src="https://cdn.group.renault.com/alp/master/alpine-new-cars/homepage/editorial/homepage-2024/alpine-homepage-005.jpg.ximg.xsmall.webp/965b4bd838.webp 375w, https://cdn.group.renault.com/alp/master/alpine-new-cars/homepage/editorial/homepage-2024/alpine-homepage-005.jpg.ximg.small.webp/965b4bd838.webp 640w, https://cdn.group.renault.com/alp/master/alpine-new-cars/homepage/editorial/homepage-2024/alpine-homepage-005.jpg.ximg.xsmallx2.webp/965b4bd838.webp 750w, https://cdn.group.renault.com/alp/master/alpine-new-cars/homepage/editorial/homepage-2024/alpine-homepage-005.jpg.ximg.medium.webp/965b4bd838.webp 1024w, https://cdn.group.renault.com/alp/master/alpine-new-cars/homepage/editorial/homepage-2024/alpine-homepage-005.jpg.ximg.large.webp/965b4bd838.webp 1280w, https://cdn.group.renault.com/alp/master/alpine-new-cars/homepage/editorial/homepage-2024/alpine-homepage-005.jpg.ximg.mediumx2.webp/965b4bd838.webp 2048w, https://cdn.group.renault.com/alp/master/alpine-new-cars/homepage/editorial/homepage-2024/alpine-homepage-005.jpg.ximg.largex2.webp/965b4bd838.webp 2560w" />
        </div>

      </div>

    </section>

    <section className="bgBlack m-0 p-0">
      <div className="row align-items-center ">
      <div className="col-6 p-0">
          <img className="height100Vh w-100" src="https://cdn.group.renault.com/alp/master/alpine-new-cars/homepage/editorial/homepage-2024/alpine-homepage-006.jpg.ximg.xsmall.jpg/6eaf56de72.jpg" />
        </div>
        <div className="col-6 text-light ps-5">
          <h1 className="fw-bold mb-3">WEC </h1>
          <p>Le savoir-faire technologique et design Alpine repousse les limites</p>
          <p className="btn btn-outline-light rounded-0 mt-4">DECOUVRIR</p>
          
        </div>
        

      </div>

    </section>
    </>
  );
}
