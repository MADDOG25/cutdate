import "/src/theme/index.css";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link as ScrollLink, animateScroll } from "react-scroll";

const navigation = [
  { name: "Inicio", href: "#inicio" },
  { name: "Servicios", href: "#servicios" },
  { name: "Contacto", href: "#contacto" },
];

export default function Main() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollClick = () => {
    animateScroll.scrollTo(document.getElementById("contacto").offsetTop, {
      duration: 500,
      smooth: true,
    });
  };

  return (
    <div className="bg-[--tussockWhite]">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-16 w-auto"
                src="/Logo CutDate BIG sin fondo.png"
                alt="logo cutdate"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.href.substring(1)}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer"
              >
                {item.name}
              </ScrollLink>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-lg font-bold leading-6 text-[--colorText]"
            >
              Bienvenido
            </a>
          </div>
        </nav>
        {/* MENU MOBILE */}
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[--bgNav] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-12 w-auto"
                  src="/Logo CutDate BIG sin fondo.png"
                  alt="logo cutdate"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <ScrollLink
                      key={item.name}
                      to={item.href.substring(1)}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[--colorText] hover:bg-gray-50 cursor-pointer"
                    >
                      {item.name}
                    </ScrollLink>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-md font-bold leading-7 text-[--colorText] hover:bg-gray-50"
                  >
                    Bienvenido
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      {/* TEXTS CONTAINER */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1
              id="inicio"
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
              ¡Bienvenido al estilo que marca la diferencia!
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              <strong className="text-[--colorText]">
                Descubre la Experiencia Única en Corte de Cabello para Hombres
              </strong>
              <br></br>
              ¡Saluda a un nuevo nivel de estilo y confianza! En nuestra
              barberia, no solo cortamos el cabello, esculpimos identidades,
              creamos tendencias y potenciamos la confianza en cada paso que
              das. ¿Estás listo para transformar tu imagen?
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                onClick={handleScrollClick}
                className="rounded-md bg-[--bgButtonDark] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[--bgButtonLight] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--tussock]"
              >
                ¡Agenda tu cita!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
