export function Home() {
  return (
    <>
      <header>
        <nav className="nav container container--hero">
          <ul className="nav_list">
            <li className="nav_item">
              <a href="#incio" className="nav_link">
                Inicio
              </a>
            </li>
            <li className="nav_item">
              <a href="#agenda" className="nav_link">
                Agenda
              </a>
            </li>
            <li className="nav_item">
              <a href="#contacto" className="nav_link">
                Contacto
              </a>
            </li>
          </ul>

          <img src="" alt="icono hamburguesa" className="nav_menu" />
        </nav>

        <section className="hero_main container container--hero">
          <article className="hero_texts">
            <h1 className="hero_title">
              ¡Bienvenido al estilo que marca la diferencia!
            </h1>
            <p className="hero_paragraph">
              <em>
                Descubre la Experiencia Única en Corte de Cabello para Hombres
              </em>
              <br></br>
              ¡Saluda a un nuevo nivel de estilo y confianza! En nuestro salón,
              no solo cortamos el cabello, esculpimos identidades, creamos
              tendencias y potenciamos la confianza en cada paso que das. ¿Estás
              listo para transformar tu imagen?
            </p>
            <a href="#" className="hero_cta" target="_blank" rel="noreferrer">
              ¡Agenda tu cita!
            </a>
          </article>

          <figure className="hero_figure">
            <img src="" alt="imagen hero bg" className="hero_img" />
          </figure>
        </section>
      </header>

      <section className="container_service">
        <div className="message_service">
          <h2>
            Sin filas y menos tiempo de espera <br />
            ¡Todo a un solo click!
          </h2>
          <button type="button">Servicios</button>
        </div>

        <div className="style_service">
          <h3 className="subtitle_service">💈 Estilo Personalizado</h3>
          <p className="paragraph_service">
            No creemos en un enfoque único para todos. Cada cliente es único, y
            tus gustos y personalidad son la inspiración para crear un estilo
            que sea exclusivamente tuyo.
          </p>

          <h3 className="subtitle_service">
            ¿Tienes una idea en mente? ¡Hablemos y hagámoslo realidad!
          </h3>

          <article className="cont_article_services">
            <div className="article_service_items">
              <img src="" alt="servicio de cortes"></img>
              <p className="service_haircut"></p>
            </div>
          </article>

          <section className="container_atencion">
            <article className="article_atencion">
              <h3 className="subtitle_atencion">💈 Estilo Personalizado</h3>
              <p className="paragraph_atencion">
                No creemos en un enfoque único para todos. Cada cliente es
                único, y tus gustos y personalidad son la inspiración para crear
                un estilo que sea exclusivamente tuyo.
              </p>
              <img src="" alt="corte con diseo"></img>

              <div className="items_atencion">
                <h4 className="subtitle_atencion">✂️ Cortes Precisos</h4>
                <p className="paragraph_atencion">
                  Desde cortes clásicos hasta estilos modernos, ofrecemos una
                  amplia gama de servicios de corte para satisfacer tus
                  preferencias.
                </p>
              </div>
              <div className="items_atencion">
                <h4 className="subtitle_atencion">
                  💆 Experiencia de Barbería
                </h4>
                <p className="paragraph_atencion">
                  Vive la auténtica experiencia de barbería con nuestros
                  servicios especializados, desde afeitados clásicos hasta
                  tratamientos capilares relajantes.
                </p>
              </div>
              <div className="items_atencion">
                <h4 className="subtitle_atencion">🎉 Ambiente Relajado</h4>
                <p className="paragraph_atencion">
                  Olvídate del estrés cotidiano. Nuestro salón es un refugio de
                  relajación donde puedes disfrutar de tu tiempo y salir
                  sintiéndote renovado.
                </p>
              </div>
            </article>

            <div className="message_atencion">
              <h2>Disfruta de nuestros servicios</h2>
              <button type="button">Agenda ya</button>
            </div>
          </section>
        </div>
      </section>

      <div className="message_reserva">
        <h2>¡Reserva tu Transformación Ahora!</h2>
        <p>
          No pierdas más tiempo y reserva tu cita para una experiencia de corte
          de cabello que va más allá de lo ordinario. Estamos aquí para realzar
          tu estilo y destacar tu verdadera esencia. <br />
          ¡Transforma tu imagen, eleva tu confianza y descubre el poder de un
          gran corte de cabello! 👨✂️
        </p>
        <button type="button">Es ahora</button>
      </div>

      <footer className="footer" id="contacto">
        <section className="footer_container container">
          <h2 className="subtitle_footer">Trabajado por @DevJeffrey!</h2>

          <ul className="footer_contact">
            <li className="footer_item">
              <a
                href="https://www.instagram.com/devjeffrey/"
                className="footer_link"
              >
                <img src="" alt="icono de Instagram" className="footer_img" />
              </a>
            </li>
            <li className="footer_item">
              <a
                href="www.youtube.com/@JeffreyMorgan-devxpersonal"
                target="_blank"
                className="footer_link"
              >
                <img src="" alt="icono de Youtube" className="footer_img" />
              </a>
            </li>
            <li className="footer_item">
              <a href="https://github.com/MADDOG25" className="footer_link">
                <img src="" alt="icono de Github" className="footer_img" />
              </a>
            </li>
            <li className="footer_item">
              <a
                href="https://www.linkedin.com/in/dev-jeffrey/"
                className="footer_link"
              >
                <img src="" alt="icono de Linkedin" className="footer_img" />
              </a>
            </li>
          </ul>
        </section>
      </footer>
    </>
  );
}
