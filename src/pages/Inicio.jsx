import Hero from './../componentes/Hero';
import Footer from './../componentes/Pie';
import CardTres from './../componentes/Card';
import Banner from './../componentes/Banner';
import Formulario from './../componentes/Formulario';

function Inicio() {
  return (<div className="container mt-3">
    <h1>Inicio</h1>
    <hr />
    <Hero tituloH="Bienvenido" textoH="En el Centro de Salud Cruz Roja, tu salud está en buenas manos." fotoH="hero1.jpg"></Hero>

    <hr />
    <CardTres
      tSeccion="Servicios que te ofrecemos" fotoC="c1.jpg" tituloC="Medicina General" textoC="Brindar atención médica preventiva y curativa para pacientes de todas las edades. Realizamos diagnósticos, tratamientos y seguimiento de enfermedades crónicas y agudas. "
      fotoC2="c3.jpg" tituloC2="Alta Tecnologia" textoC2="Brindar atención médica preventiva y curativa para pacientes de todas las edades. Realizamos diagnósticos, tratamientos y seguimiento de enfermedades crónicas y agudas. "
      fotoC3="c2.jpg" tituloC3="Variedad de especialidades" textoC3="Brindar atención médica preventiva y curativa para pacientes de todas las edades. Realizamos diagnósticos, tratamientos y seguimiento de enfermedades crónicas y agudas. ">
    </CardTres>
    <hr />
    <Formulario></Formulario>
    <hr />
    <Footer></Footer>
  </div>
  );
}

export default Inicio;
