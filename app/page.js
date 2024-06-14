'use client'
import  Button  from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';


export default function Home() {
  return (
    <>
    <section className="container-fluid m-0 p-0">
      <Splide aria-label="My Favorite Images" className="z-0 position-relative m-0 p-0 border-bottom">
        <SplideSlide className="position-relative m-0 p-0 heightSlide">
          <video className="video" autoplay="true" muted="true" loop="true"><source src="https://cdn.group.renault.com/alp/master/alpine-new-cars/homepage/banners/desktop/alpine-teasing3-video-a290-hp-desktop.mp4.asset.mp4/e8ba72fc99.mp4" /></video>
          <div className="position-absolute top-50 start-0 translate-middle-y mx-5 px-5 text-light bw-bold ">
            <h3 className="fw-bold">A290</h3>
            <h6 className="mt-3">LE MANS - 13 JUNE 2024</h6>
            <button className="btn btn-outline-light rounded-0 mt-4">RESTEZ INFORME</button>
          </div>
        </SplideSlide>
        <SplideSlide className="position-relative m-0 p-0 heightSlide">
          <img className="imgHeader" src="https://cdn.group.renault.com/alp/master/alpine-new-cars/homepage/banners/desktop/alpine-autopromo-UK-008-desktop.jpg.ximg.largex2.webp/50561ac9a8.webp" alt="Image 1"/>
          <div className="position-absolute top-50 start-0 translate-middle-y mx-5 px-5 text-light bw-bold ">
            <h3 className="fw-bold">A110 R TURINI</h3>
            <h6 className="mt-3">LA PLUS RADICALE DES A110</h6>
            <button className="btn btn-light rounded-0 mt-4">DECOUVRIR</button>
          </div>
        </SplideSlide>
        <SplideSlide className="position-relative m-0 p-0 heightSlide">
          <video className="video" autoplay="true" muted="true" loop="true"><source src="https://cdn.group.renault.com/alp/master/alpine-new-cars/homepage/banners/desktop/alpine-teasing2-video-alpenglow-hp-desktop.mp4.asset.mp4/b0f702da0b.mp4" /></video>
          <div className="position-absolute top-50 start-0 translate-middle-y mx-5 px-5 text-light bw-bold ">
            <h3 className="fw-bold">ALPENGLOW</h3>
            <h6 className="mt-3">SPA-FRANCORCHAMPS</h6>
            <button className="btn btn-outline-light rounded-0 mt-4">DECOUVRIR</button>
          </div>
        </SplideSlide>
        <SplideSlide className="position-relative m-0 p-0 heightSlide">
          <img className="imgHeader" src="https://cdn.group.renault.com/alp/master/alpine-new-cars/homepage/banners/desktop/alpine-A110s-hp-desktop.jpg.ximg.largex2.webp/87fab305ac.webp" alt="Image 2"/>
          <div className="position-absolute top-50 start-0 translate-middle-y mx-5 px-5 text-light bw-bold ">
            <h3 className="fw-bold">A110 S</h3>
            <h6 className="mt-3">SPORTIVITÉ INCARNÉE</h6>
            <button className="btn btn-light rounded-0 mt-4">DECOUVRIR</button>
          </div>
        </SplideSlide>
      </Splide>
    </section>

    <section className="container-fluid m-0 p-0 position-relative">
      <img className="imgHeader" src="https://cdn.group.renault.com/alp/master/alpine-new-cars/homepage/editorial/homepage-2024/alpine-homepage-001-desktop.jpg.ximg.largex2.webp/c04dd679a2.webp" alt="Image 1"/>
      <div className="position-absolute top-0 start-0 m-5 p-5  text-light bw-bold ">
            <h3 className="fw-bold">A110</h3>
            <h6 className="text-uppercase mt-3">Une icône de légèreté et de sportivité</h6>
            <button className="btn btn-outline-light rounded-0 mt-4">DECOUVRIR</button>
          </div>
    </section>

    <section className="bgBlack m-0 p-0 border-bottom border-3">
      <div className="row justify-content-evenly py-5 text-center mx-5">
        <div className="col-12 col-xl-4 position-relative my-4 my-xl-0 divMax ">
          <p className="position-absolute top-0 start-50 translate-middle-x fw-bold text-light mt-3 ">CONFIGURER ALPINE</p>
          <img className="imgSection imghover" src="https://cdn.group.renault.com/alp/master/alpine-new-cars/homepage/editorial/homepage-2024/alpine-homepage-002.jpg.ximg.largex2.webp/2ce92b218f.webp"/>
          <p className="btn btn-outline-light position-absolute bottom-0 start-50 translate-middle-x mb-2 rounded-0 ">CONFIGURER</p>
        </div>
        <div className="col-12 col-xl-4 position-relative my-4 my-xl-0 divMax ">
          <p className="position-absolute top-0 start-50 translate-middle-x fw-bold text-light mt-3 ">NOUS RENDRE VISITE</p>
          <img className="imgSection imghover" src="https://cdn.group.renault.com/alp/master/alpine-new-cars/homepage/editorial/homepage-2024/alpine-homepage-003.jpg.ximg.largex2.webp/3a8a14e91e.webp"/>
          <p className="btn btn-outline-light position-absolute bottom-0 start-50 translate-middle-x mb-2 rounded-0 ">STORE</p>
        
        </div>
        <div className="col-12 col-xl-4 position-relative my-4 my-xl-0 divMax ">
          <p className="position-absolute top-0 start-50 translate-middle-x fw-bold text-light mt-3 ">ESSAI</p>
          <img className="imgSection imghover" src="https://cdn.group.renault.com/alp/master/alpine-new-cars/homepage/editorial/homepage-2024/alpine-homepage-004.jpg.ximg.largex2.webp/521cc09a65.webp"/>
          <p className="btn btn-outline-light position-absolute bottom-0 start-50 translate-middle-x mb-2 rounded-0 ">CONTACTEZ-NOUS</p>
        </div>
      </div>
    </section>

    <section className="bgBlack m-0 p-0 ">
      <div className="row align-items-center ">
        <div className="col-6 text-light ps-5">
          <h1 className="fw-bold mb-3">FORMULE 1® </h1>
          <p>L’agilité Alpine à la conquête des circuits de F1®</p>
          <p className="btn btn-outline-light rounded-0 mt-4">DECOUVRIR</p>
          
        </div>
        <div className="col-6 p-0">
          <img className="height100Vh w-100" src="https://cdn.group.renault.com/alp/master/alpine-new-cars/homepage/editorial/homepage-2024/alpine-homepage-005.jpg.ximg.largex2.webp/965b4bd838.webp" />
        </div>

      </div>

    </section>

    <section className="bgBlack m-0 p-0">
      <div className="row align-items-center ">
      <div className="col-6 p-0">
          <img className="height100Vh w-100" src="https://cdn.group.renault.com/alp/master/alpine-new-cars/homepage/editorial/homepage-2024/alpine-homepage-006.jpg.ximg.largex2.webp/6eaf56de72.webp" />
        </div>
        <div className="col-6 text-light ps-5">
          <h1 className="fw-bold mb-3">WEC </h1>
          <p>Le savoir-faire technologique et design Alpine repousse les limites</p>
          <p className="btn btn-outline-light rounded-0 mt-4">DECOUVRIR</p>
        </div>
      </div>
    </section>
    <section className="bgBlack m-0 p-0 border-top border-3">
      <h2 className="text-center text-light mt-4 fw-bold">LIFESTYLE</h2>
      <div className="row justify-content-center my-5 px-5 mx-5">
        <div className="col-12 col-xl-4 py-4 py-xl-0 position-relative imgGray">
          <img className='imgSoc text-center ' src="https://cdn.group.renault.com/alp/master/alpine-new-cars/homepage/editorial/homepage-2024/alpine-homepage-007.jpg.ximg.largex2.webp/7f6a3aeab9.webp" />
          <div className="position-absolute top-0 mt-5 ms-5 text-light"><h4 className="fw-bold">ALPINE X PADEL</h4><p>La rencontre de l’agilité et de la performance</p></div>
          <p className="btn btn-outline-light position-absolute bottom-0 end-0 mb-4 me-5 rounded-0 ">DECOUVRIR</p>
        </div>
        <div className="col-12 col-xl-4 py-4 py-xl-0 row justify-content-center px-0">
            <div className="col-12 pb-4 py-xl-0 position-relative imgGray">
              <img className="imgSocMiddle text-center " src="https://cdn.group.renault.com/alp/master/alpine-new-cars/homepage/editorial/homepage-2024/alpine-homepage-008.jpg.ximg.largex2.webp/905cc8ba64.webp" />
              <p className="btn btn-outline-light position-absolute bottom-0 end-0 mb-4 me-5 rounded-0 ">DECOUVRIR</p>
              <div className="position-absolute top-0 mt-5 ms-5 text-light"><h4 className="fw-bold">COLLECTIONS ALPINE</h4><p>Un style empreint de légèreté et de technicité</p></div>
            </div>
            <div className="col-12 pt-4 py-xl-0 row justify-content-center align-items-end position-relative imgGray">
              <img className="imgSocMiddle text-center p-0 " src="https://cdn.group.renault.com/alp/master/alpine-new-cars/homepage/editorial/homepage-2024/alpine-homepage-009.jpg.ximg.largex2.webp/40aa9a6869.webp" />
              <p className="btn btn-outline-light position-absolute bottom-0 end-0 mb-4 me-0 me-xl-5 rounded-0 buttonInscription">INSCRIRE</p>
              <div className="position-absolute top-0 mt-5 ms-5 text-light"><h4 className="fw-bold">NEWSLETTER</h4><p>Ne manquez rien des news Alpine</p></div>
            </div>
        </div>
        <div className="col-12 col-xl-4 py-4 py-xl-0 position-relative imgGray">
          <img className='imgSoc text-center ' src="https://cdn.group.renault.com/alp/master/alpine-new-cars/homepage/editorial/homepage-2024/alpine-homepage-010.jpg.ximg.largex2.webp/8ae1756532.webp" />
          <p className="btn btn-outline-light position-absolute bottom-0 end-0 mb-4 me-5 rounded-0 ">DECOUVRIR</p>
          <div className="position-absolute top-0 mt-5 ms-5 text-light"><h4 className="fw-bold">COLLABORATIONS ALPINE</h4><p>Projets et rencontres célébrant notre anticonformisme</p></div>
        </div> 
      </div>
    </section>

    <div className="bgBlack text-center row justify-content-center">
      <img src="./images/Alpine.svg" className="col-2"/>
    </div >
    <div className="bgBlack text-center row justify-content-center">
      <div className="col-1 d-flex">
        <div className="flag bg-primary"></div>
        <div className="flag bg-light"></div>
        <div className="flag bg-danger "></div>
      </div>
    </div>
    </>
  );
}
