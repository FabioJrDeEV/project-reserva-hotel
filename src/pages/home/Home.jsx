import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Hotel1 from "../../assets/img/hoteis/hotel1.jpg";
import "./Home.css";

function Home() {
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
                    >
                      <option value="" selected>
                        Selecione o perido
                      </option>
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
              <Link to="#" className="btn btn-orange-outline">
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
                  <Link to='#' className="w-100 rounded-0 btn btn-orange text-light">Verificar disponibilidade</Link>
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
                  <Link to='#' className="w-100 rounded-0 btn btn-orange text-light">Verificar disponibilidade</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
