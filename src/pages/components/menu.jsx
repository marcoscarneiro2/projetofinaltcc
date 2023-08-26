import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import menu from './css/menu.module.css';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    {/* Div da logo e menus */}
                    <div className="navbar-brand">
                        <img src="../../assets/img/logo.png" alt="Logo" />
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Candidato</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Empresa</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contato</a>
                            </li>
                            <li className="nav-item">
                               <a className={`${menu.botao_amarelo} ${menu.botao_alinhado}`} href="#">Entrar</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <nav>
                <div className={menu.menu_pesquisa}>
                    <div className="container col-md-12">
                        <div className="text-center mb-3">
                            <span className="center">Buscar Vagas</span>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <input type="text" className="form-control" placeholder="Pesquisar" />
                            </div>
                            <div className="col-md-4">
                                <input type="text" className="form-control" placeholder="Pesquisar" />
                            </div>
                            <div className="col-md-2">
                                <button className={menu.botao_amarelo}>Pesquisar</button>
                            </div>
                        </div>

                    </div>
                </div>

            </nav>

        </div>
    );
};

export default Navbar;
