export const ContactSection = () =>{
    return (
        <section id="contact_section" className="contact_section container py-5">
        <h2 className="pb-4 mb-4 border-bottom text-center" data-aos="fade-up"  data-aos-duration="1500">Información de Contacto</h2>
        <div className="row justify-content-center">
            <div className="col-md-6 text-left mb-4">
                <ul className="list-unstyled">
                    <li className="mb-3" data-aos="fade-up"  data-aos-duration="1500">
                        <svg className="bi text-body-secondary flex-shrink-0 me-3" width="3em" height="3em"><use href="#icon-whatsapp"/></svg>
                        <strong>WhatsApp:</strong> <a href="https://wa.me/584243239994?text=Hola%20Abraham,%20he%20visto%20tu%20sitio%20web%20y%20estoy%20interesado/a%20en%20tus%20servicios.%20Por%20favor,%20contáctame%20para%20más%20información.">0424-3239994</a>

                    </li>
                    <li className="mb-3" data-aos="fade-up"  data-aos-duration="1500">
                    <svg className="bi text-body-secondary flex-shrink-0 me-3" width="3em" height="3em"><use href="#icon-linkedin"/></svg>
                        <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/abrahamromanj" target="_blank">www.linkedin.com/in/abrahamromanj</a>
                    </li>
                    <li className="mb-3" data-aos="fade-up"  data-aos-duration="1500">
                        <svg className="bi text-body-secondary flex-shrink-0 me-3" width="3em" height="3em"><use href="#icon-outlook"/></svg>
                        <strong>Correo Electrónico:</strong> <a href="mailto:abrahamromanj@outlook.com?subject=Ing.%20Abraham%20Román%20-%20Solicito%20información&body=Hola%20Abraham,%0A%0AHe%20visto%20tu%20sitio%20web%20y%20estoy%20interesado/a%20en%20los%20servicios%20que%20ofreces.%20Por%20favor,%20contáctame%20para%20más%20información.%0A%0AGracias.">abrahamromanj@outlook.com</a>

                    </li>
                </ul>
            </div>
        </div>
        <div className="text-center mt-4">
            <a href="https://wa.me/584243239994?text=Hola%20Abraham,%20he%20visto%20tu%20sitio%20web%20y%20estoy%20interesado/a%20en%20tus%20servicios.%20Por%20favor,%20contáctame%20para%20más%20información." className="btn btn-success btn-lg" target="_blank">
                <i className="bi bi-whatsapp"></i> Enviar Mensaje
            </a>
        </div>
    </section>
    

    )
}