import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import rodape from './css/footer.module.css';

const Footer = () => {
    return (
        <div className={rodape.cor_rodape}>
            <footer className="text-center text-white">
                <div className="container p-4 pb-0">
                    <section className="mb-4">
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <i className="fab fa-facebook-f"></i>
                        </a>

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <i className="fab fa-instagram"></i>
                        </a>

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </section>

                </div>

                <div className={rodape.cor_rodape_fundo}>
                    © 2023 Copyright:
                    <a className="text-white" href="#"> VagasTI</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
