import './MainHeader.scss';

export const MainHeader = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#presentation_section"><i className="fas fa-home"></i> Inicio</a>
                        <a className="nav-link" href="#aboutMe_section"><i className="fas fa-user"></i> Sobre Mí</a>
                        <a className="nav-link" href="#technologies_section"><i className="fas fa-cogs"></i> Tecnologías</a>
                        <a className="nav-link" href="#experience_section"><i className="fas fa-briefcase"></i> Experiencia</a>
                        <a className="nav-link" href="#projects_section"><i className="fas fa-project-diagram"></i> Proyectos</a>
                        {/* <a className="nav-link" href="#"><i className="fas fa-graduation-cap"></i> Educación</a> */}
                        <a className="nav-link" href="#contact_section"><i className="fas fa-envelope"></i> Contacto</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
