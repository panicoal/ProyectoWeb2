function Hero(props) {
    return (
        <div class="card text-bg-dark cardAltura">
            <img src={props.fotoH} class="card-img" alt="Foto-Hero" />
                <div class="card-img-overlay d-flex align-items-end gap-5">
                    <h5 class="card-title display-2 fst-italic">{props.tituloH}</h5>
                    <p class="card-text lead my-3">{props.textoH}</p>
                </div>
        </div>
    );
}

export default Hero;
