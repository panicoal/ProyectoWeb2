import Hero from './../componentes/Hero';
import Footer from './../componentes/Pie';
import Formulario from './../componentes/Formulario';
import CardTres from './../componentes/Card';

function Especialidad() {
  return (
    <div className="container mt-3">
      <h1>Especialidad</h1>
      <hr />
      <Hero tituloH="Especilidades" textoH="Especialidades médicas para toda la familia: Resalta la amplia gama de servicios disponibles para todas las edades." fotoH="hero3.jpg"></Hero>
      <hr />
      <CardTres
      tSeccion="Especialidades" fotoC="car2.jpg" tituloC="Pediatria" textoC="Atención de enfermedades infantiles: Diagnosticamos y tratamos enfermedades agudas y crónicas que afectan a los niños, como infecciones respiratorias, alergias, enfermedades gastrointestinales y enfermedades crónicas como diabetes y asma. "
      fotoC2="car1.jpg" tituloC2="Cardiologia" textoC2="Consultas cardiológicas: Evaluamos la salud cardiovascular del paciente, identificamos factores de riesgo y brindamos recomendaciones para la prevención de enfermedades cardíacas. "
      fotoC3="car3.jpg" tituloC3="Imageonologia" textoC3="Resonancias magnéticas (RM): Utilizan campos magnéticos y ondas de radio para obtener imágenes detalladas de los órganos, tejidos y estructuras del cuerpo, especialmente aquellas que no se pueden visualizar bien con radiografías o TC.">
    </CardTres>
      <hr />
      <Formulario></Formulario>
      <hr />
      <Footer></Footer>
    </div>
  );
}

export default Especialidad;
