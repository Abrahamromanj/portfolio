import './PresentationSection.scss'
import selfieImage from '../../assets/images/selfie/selfie_abraham.jpg'

export const PresentationSection = () =>{
    return (
        <div className="presentation-section d-flex flex-column justify-content-center px-4 py-5 text-center ">

            <img className="presentation-section__img d-block mx-auto mb-4" src={selfieImage} alt=""/>
            
            <h1 className="text-body-emphasis mb-3">
                <span className='display-6 text-white fw-normal'> Abraham Roman </span><br/><strong className='typed display-5 fw-bolder' data-type-text='Business&&Startup&&Agency' style={{color:'#FFA07A'}}>Ingeniero de Sistemas</strong>
                <span className="typed" data-type-text="Business&amp;&amp;Startup&amp;&amp;Agency">Age</span>
            </h1>

            <div className="col-lg-6 mx-auto">

                <p className="lead mb-3">

                    Dedicado a la investigación y desarrollo de <strong>soluciones tecnológicas de alta calidad</strong> 🌟 utilizando <strong>las mejores metodologías y técnicas del mercado</strong>. 🚀

                </p>

                <p className='lead mb-3'>
                    <strong>¿Quiere desarrollar un proyecto de calidad? <em>¡Contáctame!</em></strong> Estaré encantado de ayudarle. 📩💬
                </p>
                
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    
                    <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Contáctame Ahora</button>
                
                </div>

            </div>
      </div>
    )
}

