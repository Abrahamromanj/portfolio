import './TechnologiesSection.scss';

export const TechnologiesSection = () => {
    return (
        <section id="technologies_section" className="technologies_section  container-md-fluid px-4 py-5">
            <h2 className="pb-2 border-bottom text-center m-auto" data-aos="fade-up"  data-aos-duration="1500">Tecnologías que utilizo</h2>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5" >

                <div className="col d-flex align-items-start" data-aos="fade-up"  data-aos-duration="1500">
                    <svg className="bi text-body-secondary flex-shrink-0 me-3" width="3em" height="3em"><use href="#icon-html"/></svg>
                    <div>
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">HTML</h3>
                        <p>🔤 HTML es el lenguaje de marcado estándar utilizado para crear y estructurar contenido en la web.</p>
                    </div>
                </div>

                <div className="col d-flex align-items-start" data-aos="fade-up"  data-aos-duration="1500">
                    <svg className="bi text-body-secondary flex-shrink-0 me-3" width="3em" height="3em"><use href="#icon-css"/></svg>
                    <div>
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">CSS</h3>
                        <p>🎨 CSS (Cascading Style Sheets) es el lenguaje de estilos utilizado para definir la apariencia y el formato de un documento HTML.</p>
                    </div>
                </div>

                <div className="col d-flex align-items-start" data-aos="fade-up"  data-aos-duration="1500">
                    <svg className="bi text-body-secondary flex-shrink-0 me-3" width="3em" height="3em"><use href="#icon-javascript"/></svg>
                    <div>
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">JavaScript</h3>
                        <p>📝 Lenguaje de programación versátil utilizado tanto en el desarrollo web como en aplicaciones de escritorio y móviles.</p>
                    </div>
                </div>

                <div className="col d-flex align-items-start" data-aos="fade-up"  data-aos-duration="1500">
                    <svg className="bi text-body-secondary flex-shrink-0 me-3" width="3em" height="3em"><use href="#icon-react"/></svg>
                    <div>
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">React</h3>
                        <p>⚛️ React es una biblioteca de JavaScript desarrollada por Facebook para construir interfaces de usuario.</p>
                    </div>
                </div>

                <div className="col d-flex align-items-start" data-aos="fade-up"  data-aos-duration="1500">
                    <svg className="bi text-body-secondary flex-shrink-0 me-3" width="3em" height="3em"><use href="#icon-vite"/></svg>
                    <div>
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Vite</h3>
                        <p>⚡ Vite es una herramienta de construcción front-end extremadamente rápida y ligera que mejora significativamente la experiencia de desarrollo.</p>
                    </div>
                </div>

                <div className="col d-flex align-items-start" data-aos="fade-up"  data-aos-duration="1500">
                    <svg className="bi text-body-secondary flex-shrink-0 me-3" width="3em" height="3em"><use href="#icon-bootstrap"/></svg>
                    <div>
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Bootstrap</h3>
                        <p>📱 Bootstrap es un framework CSS para el diseño web adaptable.</p>
                    </div>
                </div>

                <div className="col d-flex align-items-start" data-aos="fade-up"  data-aos-duration="1500">
                    <svg className="bi text-body-secondary flex-shrink-0 me-3" width="3em" height="3em"><use href="#icon-php"/></svg>
                    <div>
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">PHP</h3>
                        <p>🐘 PHP es un lenguaje de scripting del lado del servidor, ampliamente utilizado para el desarrollo web.</p>
                    </div>
                </div>

                <div className="col d-flex align-items-start" data-aos="fade-up"  data-aos-duration="1500">
                    <svg className="bi text-body-secondary flex-shrink-0 me-3" width="3em" height="3em"><use href="#icon-node"/></svg>
                    <div>
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Node.js</h3>
                        <p>🌐 Node.js es un entorno de ejecución para JavaScript en servidor.</p>
                    </div>
                </div>

                <div className="col d-flex align-items-start" data-aos="fade-up"  data-aos-duration="1500">
                    <svg className="bi text-body-secondary flex-shrink-0 me-3" width="3em" height="3em"><use href="#icon-sql"/></svg>
                    <div>
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">SQL</h3>
                        <p>💾 SQL (Structured Query Language) es un lenguaje utilizado para gestionar y manipular bases de datos relacionales.</p>
                    </div>
                </div>

                <div className="col d-flex align-items-start" data-aos="fade-up"  data-aos-duration="1500">
                    <svg className="bi text-body-secondary flex-shrink-0 me-3" width="3em" height="3em"><use href="#icon-mysql"/></svg>
                    <div>
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">MySQL</h3>
                        <p>🐬 MySQL es un sistema de gestión de bases de datos relacional, utilizado para almacenar y gestionar grandes volúmenes de datos.</p>
                    </div>
                </div>

                <div className="col d-flex align-items-start" data-aos="fade-up"  data-aos-duration="1500">
                    <svg className="bi text-body-secondary flex-shrink-0 me-3" width="3em" height="3em"><use href="#icon-yarn"/></svg>
                    <div>
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Yarn</h3>
                        <p>📦 Yarn es un administrador de paquetes de JavaScript que permite instalar y gestionar dependencias de manera eficiente.</p>
                    </div>
                </div>

                <div className="col d-flex align-items-start" data-aos="fade-up"  data-aos-duration="1500">
                    <svg className="bi text-body-secondary flex-shrink-0 me-3" width="3em" height="3em"><use href="#icon-git"/></svg>
                    <div>
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Git</h3>
                        <p>🔧 Git es un sistema de control de versiones distribuido que facilita la colaboración y el seguimiento de cambios en proyectos de software.</p>
                    </div>
                </div>
            </div>

        </section>
    );
};
