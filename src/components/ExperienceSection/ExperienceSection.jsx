import './ExperienceSection.scss'
import logo_upwork from '../../assets/images/general/logo-upwork.webp'
import logo_satrim from '../../assets/images/general/logo_satrim.webp'
import logo_solanum from '../../assets/images/general/LOGO_SOLANUM.webp'

export const ExperienceSection = () => {
    return (
        <section id='experience_section' className="experience_section container justify-content-center">
            <h2 className="pb-4 mb-4 border-bottom text-center mt-5" data-aos="fade-up" data-aos-duration="1500">
                Experiencia
            </h2>

            <div className="mt-2" data-aos="fade-up" data-aos-duration="1500">
                <h3 className="mb-1">Upwork - Desarrollador Web</h3>
                <p className="blog-post-meta">Noviembre 2024, Profesional independiente</p>
                <img src={logo_upwork} alt="Upwork Logo" className="img-fluid mb-3" width="100" />
                <p className="mb-2" style={{textIndent:'1rem'}}> 
                    En Upwork me dedico a ofrecer servicios de Desarrollo Web.
                </p>
            </div>

            <hr data-aos="fade-up" data-aos-duration="1500"/>

            <div className="mt-2" data-aos="fade-up" data-aos-duration="1500">
                <h3 className="mb-1">Soporte Técnico Informático </h3>
                <p className="blog-post-meta">Julio 2017 - Actualidad, Autónomo</p>
                <p className="mb-2" style={{textIndent:'1rem'}}>
                    Desde Julio de 2017 me he dedicado a ofrecer mis servicios de soporte técnico informático de forma autónoma. Mantenimeinto preventivo y correctivo, instalación de sistemas operativos, recuperación de datos corruptos, recuperación de datos de dispositivos de almacenamiento dañados, configuración de redes ipv4, instalación de software, entre otros.   
                </p>
            </div>
            <hr data-aos="fade-up" data-aos-duration="1500"/>

            <div className="mt-2" data-aos="fade-up" data-aos-duration="1500">
                <h3 className="mb-1">Servicio de Administración Tributaria Municipal (SATRIM Alcaldía de Girardot) - Técnico de soporte de TI</h3>
                <p className="blog-post-meta">Febrero 2024 - Noviembre 2024, Contrato temporal</p>
                <img src={logo_satrim} alt="SATRIM Logo" className="img-fluid mb-3"  width="150"/>
                <p className="mb-2" style={{textIndent:'1rem'}}>
                    Perteneciente a la Gerencia de Sistemas y Actividades Financieras, cumplo con las tareas de brindar soporte técnico informático a todo el Servicio de Administración Tributario Municipal para garantizar que las operaciones de dicha institución se realicen sin ninguna interrupción que pueda comprometer la calidad del servicio tributario.
                </p>
            </div>
            <br/>
            <hr data-aos="fade-up" data-aos-duration="1500"/>  

            <div className="mt-2" data-aos="fade-up" data-aos-duration="1500">
                <h3 className="mb-1">Servicio de Administración Tributaria Municipal (SATRIM Alcaldía de Girardot) - Ingeniero de prácticas</h3>
                <p className="blog-post-meta">Septiembre 2024 - Diciembre 2024</p>
                <img src={logo_satrim} alt="SATRIM Internship" className="img-fluid mb-3" width="150" />
                <p className="mb-2" style={{textIndent:'1rem'}}>
                    En mis prácticas profesionales fui asignado a la Gerencia de Sistemas y Actividades Financieras de SATRIM (Alcaldía de Girardot), donde realicé un Sistema de Inventario para dicha gerencia, aplicando mis conocimientos de análisis, diseño y programación adquiridos durante mis estudios. También cumplí funciones de gestión informática, logrando mantener la operatividad de los equipos en SATRIM. Esta experiencia me permitió utilizar mis habilidades de comunicación y trabajo en equipo para encontrar y solucionar las problemáticas presentadas.
                </p>
            </div>

            <hr data-aos="fade-up" data-aos-duration="1500"/>  

            <div className="mt-2" data-aos="fade-up" data-aos-duration="1500">
                <h3 className="mb-1">Servicios Agrícolas Solanum C.A - Desarrollador Web</h3>
                <p className="blog-post-meta">Enero 2018 - Diciembre 2018</p>
                <img src={logo_solanum} alt="Solanum Logo" className="img-fluid mb-3" width="300"/>
                <p className="mb-2" style={{textIndent:'1rem'}}>
                    En Servicios Agrícolas Solanum C.A participé en su proyecto de creación de su sitio web como programador Front-End utilizando tecnologías como HTML, CSS y JavaScript. Esta oportunidad me permitió adquirir mis primeras experiencias reales en el mundo de la programación y poner en práctica el conocimiento adquirido hasta dicho momento. Entre los logros más destacados que conseguí fue la codificación del diseño completo de la web.
                </p>
            </div> 

        </section>
    );
}
