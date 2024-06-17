function Formulario() {
    return (
        <div className="offset-2 col-8">
            <h2 class="pb-2 text-center border-bottom">Contacto</h2>
            <div class="input-group mt-3 mb-3">
                <span class="input-group-text" id="basic-addon1">Nombre Completo</span>
                <input type="text" class="form-control" placeholder="Joaquin Nicolas Paco Alanoca" aria-label="Username" aria-describedby="basic-addon1" />
            </div>

            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Nombre de usuario" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <span class="input-group-text" id="basic-addon2">@gmail.com</span>
            </div>

            <div class="input-group">
                <span class="input-group-text">Mensaje</span>
                <textarea class="form-control" aria-label="With textarea"></textarea>
            </div>
        </div>
    );
}

export default Formulario;