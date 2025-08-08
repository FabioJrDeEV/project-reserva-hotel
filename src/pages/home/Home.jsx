import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../../components/header/Header";
import Hotel1 from "../../assets/img/hoteis/hotel1.jpg";
import Piscina from "../../assets/img/diferenciais/piscina.jpg";
import Campo from "../../assets/img/diferenciais/campo.jpg";
import Camera from "../../assets/img/diferenciais/camera.jpg";
import Quarto01 from "../../assets/img/banner/banner.jpg";
import Quarto02 from "../../assets/img/quartos/quarto02.jpg";
import Quarto03 from "../../assets/img/quartos/quarto03.jpg";
import "./Home.css";

function Home() {
  const [periodo, setPeriodo] = useState("Periodo");

  return (
    <div>
      <Header />
      <main className="w-100 min-vh-100 background-banner d-flex align-items-center">
        <div className="container">
          <div className="card rounded-1 border-0 p-1 pt-4 pb-4 p-lg-4 pb-md-0 pb-lg-0 shadow">
            <div className="card-body">
              <form className="pb-lg-2" onSubmit={(e) => e.preventDefault()}>
                <div className="row">
                  <div className="col-12 col-md-12 col-lg-3 mb-3">
                    <label htmlFor="localizacao" className="form-label fw-bold">
                      Localização
                    </label>
                    <input
                      type="text"
                      className="form-control rounded-0"
                      id="localizacao"
                      placeholder="Digite a localização"
                    />
                  </div>

                  <div className="col-12 col-md-12 col-lg-2 mb-3">
                    <label htmlFor="entrada" className="form-label fw-bold">
                      Entrada
                    </label>
                    <input
                      type="date"
                      className="form-control rounded-0"
                      id="entrada"
                    />
                  </div>

                  <div className="col-12 col-md-12 col-lg-2 mb-3">
                    <label htmlFor="saida" className="form-label fw-bold">
                      Saida
                    </label>
                    <input
                      type="date"
                      className="form-control rounded-0"
                      id="saida"
                    />
                  </div>

                  <div className="col-12 col-md-12 col-lg-3 mb-3">
                    <label htmlFor="periodo" className="form-label fw-bold">
                      Periodo
                    </label>
                    <select
                      className="form-select rounded-0"
                      id="periodo"
                      aria-label="Selecione o periodo"
                      value={periodo}
                      onChange={(e) => setPeriodo(e.target.value)}
                    >
                      <option value="">Selecione o perido</option>
                      <option value="manha">Manhã</option>
                      <option value="tarde">Tarde</option>
                      <option value="noite">Noite</option>
                      <option value="madrugada">Madrugada</option>
                    </select>
                  </div>

                  <div className="col-12 col-md 12 col-lg-2 mb-3 pt-3 d-lg-flex align-items-end">
                    <Link
                      to="#"
                      className="btn btn-lg btn-orange w-100 rounded-0 border-0 p-lg-1 text-light"
                    >
                      Pesquisar
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <section className="w-100 pb-5 pt-lg-4 pb-lg-5">
        <div className="container pt-5 pb-2 pt-lg-5 pb-lg-0">
          <h1 className="fs-4 text-center text-lg-start mb-5 fw-bold">
            Hoteis e Pousadas em destaques
          </h1>
          <div className="row mb-4">
            <div className="col-12 col-md-12 col-lg-4 mb-5">
              <div className="card shadow border-0">
                <div className="position-relative">
                  <img src={Hotel1} alt="Hotel 1" className="card-img-top" />
                  <span className="position-absolute bottom-0 right-0 bg-color-orange ps-2 pe-2 pt-1 pb-1 text-light">
                    R$: 650,99
                  </span>
                </div>
                <div className="card-body p-3">
                  <h5 className="card-title mb-1">Hotel Natal</h5>
                  <p className="text-muted">Monsenhor Gil/PI</p>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque ac nisi at diam maximus tincidunt at vel magna.
                  </p>
                  <Link
                    to="#"
                    className="btn btn-orange w-100 rounded-0 text-light"
                  >
                    Verificar disponibilidade
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-4 mb-5">
              <div className="card shadow border-0">
                <div className="position-relative">
                  <img src={Hotel1} alt="Hotel 1" className="card-img-top" />
                  <span className="position-absolute bottom-0 right-0 bg-color-orange ps-2 pe-2 pt-1 pb-1 text-light">
                    R$: 650,99
                  </span>
                </div>
                <div className="card-body p-3">
                  <h5 className="card-title mb-1">Hotel Natal</h5>
                  <p className="text-muted">Monsenhor Gil/PI</p>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque ac nisi at diam maximus tincidunt at vel magna.
                  </p>
                  <Link
                    to="#"
                    className="btn btn-orange w-100 rounded-0 text-light"
                  >
                    Verificar disponibilidade
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-4 mb-5">
              <div className="card shadow border-0">
                <div className="position-relative">
                  <img src={Hotel1} alt="Hotel 1" className="card-img-top" />
                  <span className="position-absolute bottom-0 right-0 bg-color-orange ps-2 pe-2 pt-1 pb-1 text-light">
                    R$: 650,99
                  </span>
                </div>
                <div className="card-body p-3">
                  <h5 className="card-title mb-1">Pousada Natal</h5>
                  <p className="text-muted">Monsenhor Gil/PI</p>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque ac nisi at diam maximus tincidunt at vel magna.
                  </p>
                  <Link
                    to="#"
                    className="btn btn-orange w-100 rounded-0 text-light"
                  >
                    Verificar disponibilidade
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <Link to="#" className="btn btn-orange-outline ps-4 pe-4">
                Visualizar todos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-100 pb-5 pb-lg-5">
        <div className="container">
          <div className="w-100 title mb-5 mb-md-5 mb-lg-5 pt-lg-4 pb-lg-0">
            <h1 className="fs-4 text-center text-lg-start mb-2 fw-bold">
              Hoteis e pousadas em promoção
            </h1>
          </div>
          <div className="row mb-4">
            <div className="col-12 col-md-12 col-lg-4 mb-5">
              <div className="card shadow border-0">
                <div className="position-relative">
                  <img src={Hotel1} alt="Hotel 01" className="card-img-top" />
                  <span className="position-absolute right-0 bottom-0 bg-color-roxo ps-2 pe-2 pt-1 pb-1 text-light">
                    R$: 450,00
                  </span>
                </div>
                <div className="card-body p-3">
                  <h5 className="card-tile mb-1">Hotel Natal</h5>
                  <p className="text-muted">Monsenhor Gil/PI</p>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque ac nisi at diam maximus tincidunt at vel magna.
                  </p>
                  <Link
                    to="#"
                    className="w-100 rounded-0 btn btn-orange text-light"
                  >
                    Verificar disponibilidade
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-4 mb-5">
              <div className="card shadow border-0">
                <div className="position-relative">
                  <img src={Hotel1} alt="Hotel 01" className="card-img-top" />
                  <span className="position-absolute right-0 bottom-0 bg-color-roxo ps-2 pe-2 pt-1 pb-1 text-light">
                    R$: 450,00
                  </span>
                </div>
                <div className="card-body p-3">
                  <h5 className="card-tile mb-1">Hotel Natal</h5>
                  <p className="text-muted">Monsenhor Gil/PI</p>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque ac nisi at diam maximus tincidunt at vel magna.
                  </p>
                  <Link
                    to="#"
                    className="w-100 rounded-0 btn btn-orange text-light"
                  >
                    Verificar disponibilidade
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-4 mb-5">
              <div className="card shadow border-0">
                <div className="position-relative">
                  <img src={Hotel1} alt="Hotel 01" className="card-img-top" />
                  <span className="position-absolute right-0 bottom-0 bg-color-roxo ps-2 pe-2 pt-1 pb-1 text-light">
                    R$: 450,00
                  </span>
                </div>
                <div className="card-body p-3">
                  <h5 className="card-tile mb-1">Pousada Natal</h5>
                  <p className="text-muted">Monsenhor Gil/PI</p>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque ac nisi at diam maximus tincidunt at vel magna.
                  </p>
                  <Link
                    to="#"
                    className="w-100 rounded-0 btn btn-orange text-light"
                  >
                    Verificar disponibilidade
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <Link to="#" className="btn btn-orange-outline ps-4 pe-4">
                Visualizar todos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-100">
        <div className="container">
          <div className="w-100 title mb-4 mb-md-4 mb-lg-5 pt-lg-4 pb-lg-0">
            <h1 className="fw-bold text-center fs-4 text-lg-start mb-5">
              Veja alguns dos nossos diferenciais
            </h1>
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-12 col-md-12 col-lg-4 mb-4">
                    <div className="card">
                      <img
                        src={Piscina}
                        alt="Piscina Hotel"
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <div className="card-title">Piscina</div>
                        <p className="card-text text-muted">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque ac nisi at diam maximus tincidunt at vel
                          magna.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-12 col-lg-4 mb-4">
                    <div className="card">
                      <img
                        src={Campo}
                        alt="Campo Hotel"
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <div className="card-title">Campo de Futebol</div>
                        <p className="card-text text-muted">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque ac nisi at diam maximus tincidunt at vel
                          magna.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-12 col-lg-4 mb-4">
                    <div className="card">
                      <img
                        src={Camera}
                        alt="Camera Hotel"
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <div className="card-title">Camera de Segurança</div>
                        <p className="card-text text-muted">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque ac nisi at diam maximus tincidunt at vel
                          magna.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-100 pb-4 pb-md-4 pt-lg-3 pb-lg-4">
        <div className="container pt-2 pb-2 pt-lg-4 pb-lg-5">
          <h1 className="fs-4 text-center text-lg-start mb-3 fw-bold">
            Conheça nossos quartos aconchegantes
          </h1>
          <div id="carouselControl" className="carousel slide">
            <div className="carousel-inner rounded-1">
              <div className="carousel-item active">
                <img src={Quarto01} className="d-block w-100" alt="Quarto 01" />
              </div>
              <div className="carousel-item">
                <img src={Quarto02} className="d-block w-100" alt="Quarto 02" />
              </div>
              <div className="carousel-item">
                <img src={Quarto03} className="d-block w-100" alt="Quarto 03" />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselControl"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselControl"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      <section className="w-100">
        <div className="container">
          <h1 className="fs-4 text-center text-lg-start pb-1 fw-bold">
            Avaliação dos nossos clientes
          </h1>
          <div className="line-orange m-auto"></div>
          <div className="row mt-3">
            <div className="col-12 col-md-12 col-lg-4 mb-4 mb-md-4">
              <div className="card shadow border-0 p-2">
                <div className="card-body">
                  <div className="w-100 mb-3">
                    <h4 className="fs-5">Fábio Junior</h4>
                    <span className="text-warning me-1">
                      <i className="bi bi-star-fill"></i>
                    </span>
                    <span className="text-warning me-1">
                      <i className="bi bi-star-fill"></i>
                    </span>
                    <span className="text-warning me-1">
                      <i className="bi bi-star-fill"></i>
                    </span>
                    <span className="text-warning me-1">
                      <i className="bi bi-star-fill"></i>
                    </span>
                    <span className="text-warning">
                      <i className="bi bi-star-fill"></i>
                    </span>
                    <p className="text-muted fs-6 mb-0 mt-2">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-4 mb-4 mb-md-4">
              <div className="card shadow border-0 p-2">
                <div className="card-body">
                  <div className="w-100 mb-3">
                    <h4 className="fs-5">Wesley Bruno</h4>
                    <span className="text-warning me-1">
                      <i className="bi bi-star-fill"></i>
                    </span>
                    <span className="text-warning me-1">
                      <i className="bi bi-star-fill"></i>
                    </span>
                    <span className="text-warning me-1">
                      <i className="bi bi-star-fill"></i>
                    </span>
                    <span className="text-warning me-1">
                      <i className="bi bi-star-fill"></i>
                    </span>
                    <span className="text-warning">
                      <i className="bi bi-star-fill"></i>
                    </span>
                    <p className="text-muted fs-6 mb-0 mt-2">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-4 mb-4 mb-md-4">
              <div className="card shadow border-0 p-2">
                <div className="card-body">
                  <div className="w-100 mb-3">
                    <h4 className="fs-5">Carlos Silva</h4>
                    <span className="text-warning me-1">
                      <i className="bi bi-star-fill"></i>
                    </span>
                    <span className="text-warning me-1">
                      <i className="bi bi-star-fill"></i>
                    </span>
                    <span className="text-warning me-1">
                      <i className="bi bi-star-fill"></i>
                    </span>
                    <span className="text-warning me-1">
                      <i className="bi bi-star-fill"></i>
                    </span>
                    <span className="text-warning">
                      <i className="bi bi-star-fill"></i>
                    </span>
                    <p className="text-muted fs-6 mb-0 mt-2">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-100 bg-light">
        <div className="container pt-5 pb-4">
          <div className="row">
            <div className="col-12 col-lg-4 mb-4 mb-lg-0">
              <h5 className="mb-lg-3 text-uppercase">Reserve Hotel</h5>
              <p className="m-0 text-muted">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
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
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
