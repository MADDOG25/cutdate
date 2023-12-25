import "./styleHome.css";
// import './App/app.js';

const handlerClickMenu = () => {
  const menunav = document.querySelector(".nav_menu");
const menuList = document.querySelector(".nav_list");
const links = document.querySelectorAll(".nav_link");

menunav.addEventListener("click", function () {
  menuList.classList.toggle("nav_list--show");
});

links.forEach(function (link) {
  link.addEventListener("click", function () {
    menuList.classList.remove("nav_list--show");
  });
});

}

function Home() {
  return (
    <>
      <main>
        <header>
          <nav className="nav container container--hero">
            <ul className="nav_list">
              <li className="nav_item">
                <a href="#incio" className="nav_link">
                  Inicio
                </a>
              </li>
              <li className="nav_item">
                <a href="#servicios" className="nav_link">
                  Servicios
                </a>
              </li>
              <li className="nav_item">
                <a href="#contacto" className="nav_link">
                  Contacto
                </a>
              </li>
            </ul>

            <img
            onClick={handlerClickMenu}
              src="/src/assets/icon-menu.svg"
              alt="icono hamburguesa"
              className="nav_menu"
            />
          </nav>

          <section className="hero_main container container--hero">
            <article className="hero_texts">
              <h1 className="hero_title" id='inicio'>
                ¡Bienvenido al estilo que marca la diferencia!
              </h1>
              <p className="hero_paragraph">
                <strong>
                  Descubre la Experiencia Única en Corte de Cabello para Hombres
                </strong>
                <br></br>
                ¡Saluda a un nuevo nivel de estilo y confianza! En nuestro
                salón, no solo cortamos el cabello, esculpimos identidades,
                creamos tendencias y potenciamos la confianza en cada paso que
                das. ¿Estás listo para transformar tu imagen?
              </p>
              <a href="#" className="hero_cta" target="_blank" rel="noreferrer">
                ¡Agenda tu cita!
              </a>
            </article>

            <figure className="hero_figure">
              <img
                src="/Logo CutDate (2).jpg"
                alt="imagen hero bg"
                className="hero_img"
              />
            </figure>
          </section>
        </header>

        <section className="container container_service">
          <div className="message_service">
            <h2 id='servicios'>
              Sin filas y menos tiempo de espera <br />
              ¡Todo a un solo click!
            </h2>
            <a
              href=""
              className="message_btn_service"
              target="_blank"
              rel="noreferrer"
            >
              Servicios
            </a>
          </div>

          <div className="style_service">
            <h3 className="subtitle_service">💈 Estilo Personalizado</h3>
            <p className="paragraph_service">
              No creemos en un enfoque único para todos. Cada cliente es único,
              y tus gustos y personalidad son la inspiración para crear un
              estilo que sea exclusivamente tuyo.
            </p>

            <article className="cont_article_service">
              <div className="service_item">
                <h3 className="subtitle_service_item">
                  ¿Tienes una idea en mente? ¡Hablemos y hagámoslo realidad!
                </h3>
                <img
                  src="/corte-diseño.jpg"
                  alt="corte con diseño"
                  className="img_service_item"
                ></img>
                <p className="paragraph_service_item">Corte con líneas</p>
              </div>
            </article>

            <article className="cont_article_service">
              <div className="service_item">
                <img
                  src="/corte-barba.jpg"
                  alt="corte con diseño"
                  className="img_service_item"
                ></img>
                <p className="paragraph_service_item">Corte de barba</p>
              </div>
            </article>

            <section className="container_enjoy">
              <h3 className="subtitle_item_enjoy">Brindamos</h3>
              <div className="enjoy_items">
                <h4 className="subtitle_enjoy">✂️ Cortes Precisos</h4>
                <p className="paragraph_enjoy">
                  Desde cortes clásicos hasta estilos modernos, ofrecemos una
                  amplia gama de servicios de corte para satisfacer tus
                  preferencias.
                </p>
              </div>
              <div className="enjoy_items">
                <h4 className="subtitle_enjoy">💆 Experiencia de Barbería</h4>
                <p className="paragraph_enjoy">
                  Vive la auténtica experiencia de barbería con nuestros
                  servicios especializados, desde afeitados clásicos hasta
                  tratamientos capilares relajantes.
                </p>
              </div>
              <div className="enjoy_items">
                <h4 className="subtitle_enjoy">🎉 Ambiente Relajado</h4>
                <p className="paragraph_enjoy">
                  Olvídate del estrés cotidiano. Nuestro salón es un refugio de
                  relajación donde puedes disfrutar de tu tiempo y salir
                  sintiéndote renovado.
                </p>
              </div>

              <div className="message_enjoy">
                <h2>Disfruta de nuestros servicios</h2>
                <a
                  href="#"
                  className="message_btn_enjoy"
                  target="_blank"
                  rel="noreferrer"
                >
                  Agenda ya
                </a>
              </div>
            </section>
          </div>
        </section>

        <div className="container container_reservation">
          <h2 className="subtitle_reservation" id='contacto'>
            ¡Reserva tu Transformación Ahora!
          </h2>
          <p className="paragraph_reservation">
            No pierdas más tiempo y reserva tu cita para una experiencia de
            corte de cabello que va más allá de lo ordinario. Estamos aquí para
            realzar tu estilo y destacar tu verdadera esencia. <br /> <br />
            ¡Transforma tu imagen, eleva tu confianza y descubre el poder de un
            gran corte de cabello! 👨✂️
          </p>
          <a
            href="#"
            className="message_btn_reservation"
            target="_blank"
            rel="noreferrer"
          >
            Es ahora
          </a>
        </div>
      </main>

      <footer className="footer" id="contacto">
        <section className="footer_container container">
          <h2 className="subtitle_footer">Trabajado por @DevJeffrey!</h2>

          <ul className="footer_contact">
            <li className="footer_item">
              <a
                href="https://www.instagram.com/devjeffrey/"
                className="footer_link"
              >
                <img
                  src="/src/assets/instagram.svg"
                  alt="icono de Instagram"
                  className="footer_img"
                />
              </a>
            </li>
            <li className="footer_item">
              <a
                href="www.youtube.com/@JeffreyMorgan-devxpersonal"
                target="_blank"
                className="footer_link"
              >
                <img
                  src="/src/assets/youtube.svg"
                  alt="icono de Youtube"
                  className="footer_img"
                />
              </a>
            </li>
            <li className="footer_item">
              <a href="https://github.com/MADDOG25" className="footer_link">
                <img
                  src="/src/assets/github.svg"
                  alt="icono de Github"
                  className="footer_img"
                />
              </a>
            </li>
            <li className="footer_item">
              <a
                href="https://www.linkedin.com/in/dev-jeffrey/"
                className="footer_link"
              >
                <img
                  src="/src/assets/linkedin.svg"
                  alt="icono de Linkedin"
                  className="footer_img"
                />
              </a>
            </li>
          </ul>
        </section>
      </footer>
    </>
  );
}

export default Home;
