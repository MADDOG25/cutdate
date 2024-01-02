// import './footer.css';
import "/src/theme/index.css";

export default function Footer() {
  return (
    <footer id="contacto">
      <section>
        <h2 className="text-center text-lg font-bold">
          Trabajado por @DevJeffrey
        </h2>

        <ul className="flex flex-row flex-wrap justify-center gap-4 p-0 m-8 list-none">
          <li className="bg-pink-700 rounded-full">
            <a
              href="https://www.instagram.com/devjeffrey/"
              target="_blank"
              rel="noreferrer"
              className="flex align-center justify-center w-12 h-12"
            >
              <img src="/instagram.svg" alt="icono de Instagram" />
            </a>
          </li>
          <li className="bg-zinc-950 rounded-full">
            <a
              href="www.youtube.com/@JeffreyMorgan-devxpersonal"
              target="_blank"
              className="flex align-center justify-center w-12 h-12"
            >
              <img src="/youtube.svg" alt="icono de Youtube" />
            </a>
          </li>
          <li className="bg-violet-800 rounded-full">
            <a
              href="https://github.com/MADDOG25"
              target="_blank"
              rel="noreferrer"
              className="flex align-center justify-center w-12 h-12"
            >
              <img src="/github.svg" alt="icono de Github" />
            </a>
          </li>
          <li className="bg-blue-800 rounded-full">
            <a
              href="https://www.linkedin.com/in/dev-jeffrey/"
              className="flex align-center justify-center w-12 h-12"
            >
              <img src="/linkedin.svg" alt="icono de Linkedin" />
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
}
