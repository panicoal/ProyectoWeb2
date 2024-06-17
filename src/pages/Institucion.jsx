import Hero from './../componentes/Hero';
import Footer from './../componentes/Pie';
import Formulario from './../componentes/Formulario';
import CardTres from './../componentes/Card';


function Institucion() {
  return (<div className="container mt-3">
    <h1>Institucion</h1>
    <hr />
    <Hero tituloH="Sobre Nosotros" textoH="En el Centro de Salud Cruz Roja, creemos que la salud es el bien más preciado." fotoH="hero2.jpg"></Hero>
    <hr />
    <CardTres
      tSeccion="Quienes somos" fotoC="c8.jpg" tituloC="Mision" textoC="Promover la salud y el bienestar de la población a través de acciones de prevención, educación y responsabilidad social. "
      fotoC2="c4.jpg" tituloC2="Vision" textoC2="Ser el hospital líder en la región, reconocido por la calidad de nuestros servicios, la excelencia de nuestro equipo y nuestro compromiso con la salud de la comunidad. "
      fotoC3="c6.jpg" tituloC3="Valores" textoC3="Calidad: Nos comprometemos a brindar servicios médicos de alta calidad, con los más altos estándares de seguridad y satisfacción del paciente. Compasión: Tratamos a nuestros pacientes con empatía, respeto y dignidad, brindándoles un trato cálido y humano.">
    </CardTres>
    <hr />
    <Formulario></Formulario>
    <hr />
    <Footer></Footer>
  </div>
  );
}

export default Institucion;
