import Hero from './../componentes/Hero';
import Footer from './../componentes/Pie';
import Banner from './../componentes/Banner';
import Formulario from './../componentes/Formulario';
import CardTres from './../componentes/Card';

function Contacto() {
  return (
    <div className="container mt-3">
    <h1>Contacto</h1>
    <hr />
    <Hero tituloH="Contacto" textoH="Contamos con un equipo de profesionales altamente calificados y experiencedos en diversas especialidades." fotoH="hero4.jpg"></Hero>
    <hr />
    <Banner tituloB="Contactanos : " textoDir=" Av. Arce, Calle #4 , Nro. 12314" textoFono=" +591 13133549" textoMail=" email@gmail.com" textoHor=" 07:00 a 22:00"  ></Banner>
    <hr />
    <Formulario></Formulario>
    <hr />
    <Footer></Footer>
  </div>
  );
}

export default Contacto;
