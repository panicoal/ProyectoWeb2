function Footer() {
    return (
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div class="col-md-4 d-flex align-items-center">
                <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                    <img src="logo.png" alt="logo" width="120" />
                </a>
                <span class="mb-3 mb-md-0 text-body-secondary">&copy; 2024 Company, Inc</span>
            </div>

            <div class="offset-1 col-md-3 d-flex align-items-center">
                <span class="mb-3 mb-md-0 text-body-secondary text-center"><strong>Hecho por:</strong> <br />Joaquin Nicolas Paco Alanoca</span>
            </div>

            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li class="ms-3"><a class="text-body-secondary" href="https://www.facebook.com/?locale=es_LA"> <img src="face.png" alt="logo" width="30" /></a></li>
                <li class="ms-3"><a class="text-body-secondary" href="https://www.tiktok.com/login?lang=es&redirect_url=https%3A%2F%2Fwww.tiktok.com%2Fupload%3Flang%3Des"> <img src="tiktok.png" alt="logo" width="30" /></a></li>
                <li class="ms-3"><a class="text-body-secondary" href="https://www.youtube.com/"> <img src="yt.png" alt="logo" width="30" /></a></li>
            </ul>
        </footer>
    );
}

export default Footer;
