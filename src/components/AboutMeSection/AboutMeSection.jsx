import './AboutMeSection.scss'
import selfie_compress from '../../assets/images/selfie/selfie-abraham-escalada.webp'

export const AboutMeSection = () =>{
    return (
        <section id='aboutMe_section' className="aboutMe_section container col-xxl-8 px-4 py-5" data-aos="fade-up"  data-aos-duration="1500">
          <div className="row align-items-center justify-content-center g-5 py-5">
            
              <div className="col-lg-6 justify-content-center">
                <h2 className="display-5 fw-bold text-body-emphasis lh-1 mb-5 text-center">¿Quién soy?</h2>
                <p className="lead text-center  fw-lighter">
                    ¡Hola! Soy <strong>Abraham Román</strong>, un  Ingeniero de     Sistemas dedicado a crear soluciones tecnológicas que facilitan la vida diaria de personas y organizaciones. 🚀💻 Además, soy desarrollador de sitios web y ofrezco servicios de Soporte Técnico Informático. 🌐🔧
                </p>
                <p className="lead text-center">  
                    Si necesitas mi ayuda para crear un sistema, desarrollar un sitio web o realizar soporte técnico, ¡no dudes en ponerte en contacto conmigo! Estoy aquí para ayudarte a alcanzar tus objetivos tecnológicos. 📞✉️
                </p>
                <div className="d-grid gap-2 d-md-flex justify-content-center mt-5">
                  <a href="https://wa.me/584243239994?text=Hola%20Abraham,%20he%20visto%20tu%20sitio%20web%20y%20estoy%20interesado/a%20en%20tus%20servicios.%20Por%20favor,%20contáctame%20para%20más%20información." className="btn btn-primary btn-lg px-4 me-md-2">"¡Contáctame ahora!"</a>
                </div>
              </div>

              <div className="container_video_selfie_abraham col-10 col-sm-8 col-lg-6" >
                  <img src={selfie_compress} className="d-block mx-lg-auto w-100" alt="Foto tipo perfil de abraham roman usando un elegante traje"/>
              </div>
          </div>
      </section>
    )
}

