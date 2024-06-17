
import { Outlet, Link } from 'react-router-dom';

function Layout() {
    return (<div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary cabecera">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    <img src="logo.png" alt="logo" width="120" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/">Inicio</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/institucion">Institucion</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/especilidad">Especilidad</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/contacto">Contacto</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
        <Outlet></Outlet>
    </div>
    );
}

export default Layout;
