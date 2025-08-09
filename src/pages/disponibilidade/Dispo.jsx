import { Link } from "react-router-dom";
import hotel from "../../assets/img/hoteis/hotel1.jpg";
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
      <div className="container">
        <h1 className="text-center pt-5 fs-5 fw-bold">Pré-reserva</h1>
        <div className="line-width mx-auto"></div>
        <div className="row mt-5">
          <div className="col-12 col-md col-lg-3 mb-3">
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
        </div>
      </div>
    </div>
  );
}

export default Dispo;
