import './ProjectsSection.scss'
import unefa from '../../assets/images/general/unefa.jpg'
import satrim from '../../assets/images/general/satrim.png'
import solanum from '../../assets/images/general/solanum.jpg'
import insignia from '../../assets/images/general/insignia.jpg'
import sistema_facturacion from '../../assets/images/general/sistema_facturacion_abraham.jpg'

export const ProjectsSection = () =>{
    return (
        <section className="projects_section container-xlg mt-5 px-4 py-5" id="projects_section">
            <h2 className="pb-2 border-bottom text-center text-white" data-aos="fade-up"  data-aos-duration="1500">Proyectos</h2>

            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">

                <div className="col">
                    <div
                    className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                    style={{ backgroundImage: `url(${satrim})` }}
                    data-aos="fade-up"  data-aos-duration="1500">
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <h3 className="pt-5 mb-4 fs-3 lh-1 fw-bold">
                            Sistema de inventario computarizado para la gerencia de sistemas
                        </h3>
                        <ul className="d-flex list-unstyled mt-auto">
                        <li className="d-flex align-items-center me-3">
                            <svg className="bi me-2" width="1em" height="1em">
                            <use href="#geo-fill" />
                            </svg>
                            <small>Venezuela</small>
                        </li>
                        <li className="d-flex align-items-center">
                            <svg className="bi me-2" width="1em" height="1em">
                            <use href="#calendar3" />
                            </svg>
                            <small>2023</small>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>

                <div className="col">
                    <div
                    className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                    style={{ backgroundImage: `url(${sistema_facturacion})` }}
                    data-aos="fade-up"  data-aos-duration="1500">
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <h3 className="pt-5 mb-4 fs-3 lh-1 fw-bold">
                            Sistema de información para registro de facturas y cálculo de impuestos
                        </h3>
                        <ul className="d-flex list-unstyled mt-auto">
                        <li className="d-flex align-items-center me-3">
                            <svg className="bi me-2" width="1em" height="1em">
                            <use href="#geo-fill" />
                            </svg>
                            <small>Venezuela</small>
                        </li>
                        <li className="d-flex align-items-center">
                            <svg className="bi me-2" width="1em" height="1em">
                            <use href="#calendar3" />
                            </svg>
                            <small>2023</small>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>        

                <div className="col">
                    <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: `url(${unefa})`, backgroundSize: "cover",}} data-aos="fade-up"  data-aos-duration="1500">
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                            <h3 className="pt-5 mb-4 fs-3 lh-1 fw-bold">
                                Rediseño Sitio Web Unefa
                            </h3>

                            <ul className="d-flex list-unstyled mt-auto">
                                <li className="d-flex align-items-center me-3">
                                    <svg className="bi me-2" width="1em" height="1em">
                                    <use href="#geo-fill" />
                                    </svg>
                                    <small>Venezuela</small>
                                </li>
                                <li className="d-flex align-items-center">
                                    <svg className="bi me-2" width="1em" height="1em">
                                    <use href="#calendar3" />
                                    </svg>
                                    <small>2022</small>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div
                    className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                    style={{ backgroundImage: `url(${insignia})`,backgroundPositionX: "50%",backgroundPositionY: "80%" }}
                    data-aos="fade-up"  data-aos-duration="1500">
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                            <h3 className="pt-5 mb-4 fs-3 lh-1 fw-bold">
                                Insignia - Tienda Online
                            </h3>
                            <ul className="d-flex list-unstyled mt-auto">
                            <li className="d-flex align-items-center me-3">
                                <svg className="bi me-2" width="1em" height="1em">
                                <use href="#geo-fill" />
                                </svg>
                                <small>Venezuela</small>
                            </li>
                            <li className="d-flex align-items-center">
                                <svg className="bi me-2" width="1em" height="1em">
                                <use href="#calendar3" />
                                </svg>
                                <small>2022</small>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div
                    className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                    style={{ backgroundImage: `url(${solanum})` }}
                    data-aos="fade-up"  data-aos-duration="1500">
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                            <h3 className="pt-5 mb-4 fs-3 lh-1 fw-bold">
                                Sitio Web, Servicios agrícolas solanum C.A. 
                            </h3>
                            <ul className="d-flex list-unstyled mt-auto">
                            <li className="d-flex align-items-center me-3">
                                <svg className="bi me-2" width="1em" height="1em">
                                <use href="#geo-fill" />
                                </svg>
                                <small>Venezuela</small>
                            </li>
                            <li className="d-flex align-items-center">
                                <svg className="bi me-2" width="1em" height="1em">
                                <use href="#calendar3" />
                                </svg>
                                <small>2018</small>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}