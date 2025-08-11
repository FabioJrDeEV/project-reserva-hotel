import { Link } from "react-router-dom";
import hotel from "../../assets/img/hoteis/hotel1.jpg";
import Footer from "../../components/footer/Footer";
import "./Dispo.css";

function Dispo() {
  return (
    <div className="w-100">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <h1 className="navbar-brand m-0">Reserve Hotel</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-black px-lg-4" to="/">
                  Home
                </Link>
              </li>
              <li
                className="nav-item max-width"
                style={{ backgroundColor: "#FF6600" }}
              >
                <Link className="nav-link login px-lg-3 text-light" to="#">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mb-5">
        <h1 className="text-center pt-5 fs-5 fw-bold">Pré-reserva</h1>
        <div className="line-width mx-auto"></div>
        <div className="row mt-5">
          <div className="col-12 col-lg-3 mb-3">
            <div className="card border-0 pt-lg-4">
              <img
                src={hotel}
                className="card-img-top rounded-0"
                alt="Foto Hotel"
              />
              <div className="card-body pe-0 ps-0">
                <h5 className="card-title">Hotel Natal</h5>
                <p className="card-text text-muted mb-1">Monsenhor Gil/PI</p>
                <div className="d-flex gap-1 mb-3">
                  <span className="text-warning">
                    <i className="bi bi-star-fill"></i>
                  </span>
                  <span className="text-warning">
                    <i className="bi bi-star-fill"></i>
                  </span>
                  <span className="text-warning">
                    <i className="bi bi-star-fill"></i>
                  </span>
                  <span className="text-warning">
                    <i className="bi bi-star-fill"></i>
                  </span>
                  <span className="text-warning">
                    <i className="bi bi-star-fill"></i>
                  </span>
                </div>
                <div
                  className="alert alert-success rounded-0 text-center"
                  role="alert"
                >
                  Disponivel!
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-9">
            <div className="card border-0">
              <div className="card-body">
                <form className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="nome">Nome completo</label>
                    <input
                      type="text"
                      className="form-control rounded-0"
                      id="nome"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="email">E-mail</label>
                    <input
                      type="email"
                      className="form-control rounded-0"
                      id="email"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="documento">CPF/Passaport</label>
                    <input
                      type="number"
                      className="form-control rounded-0"
                      id="documento"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="data">Data de nascimento</label>
                    <input
                      type="date"
                      className="form-control rounded-0"
                      id="data"
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="data">Telefone</label>
                    <input
                      type="tel"
                      className="form-control rounded-0"
                      id="numero"
                      required
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="pais">País</label>
                    <input
                      type="text"
                      className="form-control rounded-0"
                      id="pais"
                    />
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="estado">Estado</label>
                    <input
                      type="text"
                      className="form-control rounded-0"
                      id="estado"
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="cidade">Cidade</label>
                    <input
                      type="text"
                      className="form-control rounded-0"
                      id="cidade"
                    />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="rua">Rua</label>
                    <input
                      type="text"
                      className="form-control rounded-0"
                      id="rua"
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="bairro">Bairro</label>
                    <input
                      type="text"
                      className="form-control rounded-0"
                      id="bairro"
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="cep">CEP</label>
                    <input
                      type="number"
                      className="form-control rounded-0"
                      id="cep"
                    />
                  </div>

                  <div className="w-100 d-flex justify-content-end d-lg-flex justify-content-lg-end pt-3">
                    <button
                      type="button"
                      className="btn btn-orange pe-4 ps-4 rounded-0 text-light"
                    >
                      Próximo
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dispo;
