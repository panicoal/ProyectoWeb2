
function CardTres(props) {
    return (
        <div>
            <h2 class="pb-2 border-bottom">{props.tSeccion}</h2> 
            <div class="card-group">
            <div class="card">
                <img src={props.fotoC} class="card-img-top cardtresAltura" alt="FotoCard" />
                <div class="card-body">
                    <h5 class="card-title">{props.tituloC}</h5>
                    <p class="card-text">{props.textoC}</p>
                </div>
            </div>
            <div class="card">
                <img src={props.fotoC2} class="card-img-top cardtresAltura" alt="FotoCard" />
                <div class="card-body">
                    <h5 class="card-title">{props.tituloC2}</h5>
                    <p class="card-text">{props.textoC2}</p>
                </div>
            </div>
            <div class="card">
                <img src={props.fotoC3} class="card-img-top cardtresAltura" alt="FotoCard" />
                <div class="card-body">
                    <h5 class="card-title">{props.tituloC3}</h5>
                    <p class="card-text">{props.textoC3}</p>
                </div>
            </div>
        </div></div>

    );
}

export default CardTres;