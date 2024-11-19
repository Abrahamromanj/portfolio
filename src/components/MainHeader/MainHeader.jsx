import './MainHeader.scss'

export const MainHeader = () =>{
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">

            <div className="container-fluid">

                <a className="navbar-brand" href="#">Ing. Abraham Roman</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                    <div className="navbar-nav">

                        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        <a className="nav-link" href="#">Sobre Mí</a>
                        <a className="nav-link" href="#">Habilidades técnicas</a>
                        <a className="nav-link" href="#">Proyectos</a>
                        <a className="nav-link" href="#">Educación</a>
                        <a className="nav-link">Contacto</a>

                    </div>

                </div>
            </div>
            
        </nav>
    )
}