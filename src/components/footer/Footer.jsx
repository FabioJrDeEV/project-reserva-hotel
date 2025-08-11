import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-100 bg-light">
      <div className="container pt-5 pb-4">
        <div className="row">
          <div className="col-12 col-lg-4 mb-4 mb-lg-0">
            <h5 className="mb-lg-3 text-uppercase">Reserve Hotel</h5>
            <p className="m-0 text-muted">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>

          <div className="col-12 col-lg-4 mb-4 mb-lg-0">
            <h5 className="mb-lg-3">Minha Conta</h5>
            <div className="d-flex flex-column">
              <Link to="/" className="m-0 text-muted text-decoration-none">
                Minhas viagens
              </Link>
              <Link className="m-0 text-muted text-decoration-none">
                Meu perfil
              </Link>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <h5 className="mb-lg-3">Informações Adicionais</h5>
            <p className="m-0 text-muted">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
      </div>
      <div className="w-100 bg-color-orange text-center p-2 text-light">
        <span>&copy; Todos os direitos reservados</span>
      </div>
    </footer>
  );
}

export default Footer;
