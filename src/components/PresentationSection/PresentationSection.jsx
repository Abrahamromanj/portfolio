import './PresentationSection.scss';
import selfieImage from '../../assets/images/selfie/selfie_abraham.webp';
import Ityped from '../ityped/ityped';
import video from '../../assets/videos/video_comprimido/video-abraham-roman-v2.mp4'

export const PresentationSection = () => {
    return (
        <section id='presentation_section' className="presentation_section px-4 py-5 text-center">

            <video id='videoPresentation' src={video} muted autoPlay></video>

            <img className="d-block mx-auto mb-4" src={selfieImage} data-aos="fade-up"  data-aos-duration="1500" alt="" width="150" height="150" style={{objectFit:'cover',borderRadius: '100%'}}/>
            
            <h1 className='h2' data-aos="fade-up"  data-aos-duration="1500">Abraham Román</h1>

            <Ityped arrayText={['Ingeniero de Sistemas','Desarrollador de Software', 'Desarrollador Web']} typeElement="h2" elementId="title2" className="h1" />

            <div className="col-lg-6 mx-auto">

                <p className="lead mb-4">Dedicado a la investigación y desarrollo de soluciones tecnológicas de alta calidad 🌟 utilizando las mejores metodologías y técnicas del mercado. 🚀</p>

                <p className="lead mb-4">¿Quiere desarrollar un proyecto de calidad? ¡Contáctame! Estaré encantado de ayudarle. 📩💬</p>

                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5" data-aos="fade-up"  data-aos-duration="500">
                    <a href="https://wa.me/584243239994?text=Hola%20Abraham,%20he%20visto%20tu%20sitio%20web%20y%20estoy%20interesado/a%20en%20tus%20servicios.%20Por%20favor,%20contáctame%20para%20más%20información." className="btn btn-primary btn-lg px-4 gap-3">"¡Contáctame ahora!"</a>
                </div>
            </div>
    </section>
    );
};