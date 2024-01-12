import "/src/theme/index.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    haircutType: "",
    otherType: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const refForm = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = "service_9fp6b7a";
    const templateId = "form_cutdate";
    const apikey = "7_b7U5M8HU8dHDm7h";

    emailjs
      .sendForm(serviceId, templateId, refForm.current, apikey)
      .then((response) => console.log(response.text))
      .catch((error) => console.log(error));
  };

  return (
    <div className="App mx-auto max-w-2xl text-center p-6 mt-10 mb-10">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Agenda de Citas de Barbería
      </h1>
      <form
        ref={refForm}
        onSubmit={handleSubmit}
        className="mx-auto mt-16 max-w-xl sm:mt-20 border-t border-[--tussock]"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 m-6">
          <div className="flex items-center justify-center">
            <label className="block text-gray-800 font-semibold text-sm">
              Nombre:
              <input
                className="block w-56 text-center rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                type="text"
                name="name"
                placeholder="nombre"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="flex items-center justify-center">
            <label className="block text-gray-800 font-semibold text-sm">
              Correo Electrónico:
              <input
                className="block w-56 text-center rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                type="email"
                name="email"
                placeholder='correo'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="flex items-center justify-center">
            <label className="block text-gray-800 font-semibold text-sm">
              Fecha:
              <input
                className="block w-56 text-center rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="flex items-center justify-center">
            <label className="block text-gray-800 font-semibold text-sm">
              Hora:
              <input
                className="block w-56 text-center rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="flex items-center justify-center">
            <label className="block text-gray-800 font-semibold text-sm">
              Tipo de Corte:
              <select
                className="block w-56 text-center bg-transparent bg-none rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                name="haircutType"
                value={formData.haircutType}
                onChange={handleChange}
                required
              >
                <option value="">Seleccionar tipo de corte</option>
                <option value="Jersey">Jersey</option>
                <option value="Taper">Taper</option>
                <option value="Chaval">Chaval</option>
                <option value="BuzzCut">BuzzCut</option>
                <option value="Corte sencillo">Corte sencillo</option>
                <option value="Corte Complet">Corte Completo</option>
                {/* Agrega más opciones según sea necesario */}
              </select>
            </label>
          </div>
          <div className="flex items-center justify-center">
            <label className="block text-gray-800 font-semibold text-sm">
              Otros servicios:
              <select
                className="block w-56 text-center bg-transparent bg-none rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                name="otherType"
                value={formData.otherType}
                onChange={handleChange}
                required
              >
                <option value="">Seleccionar otros servicios</option>
                <option value="Cejas">Cejas</option>
                <option value="Barba">Barba</option>
                <option value="Diseño o Lineas">Diseño o Lineas</option>
                <option value="Cerquillo">Cerquillo</option>
                {/* Agrega más opciones según sea necesario */}
              </select>
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="cursor-pointer px-6 py-2 rounded-lg bg-[--bgButtonDark] text-[--tussockWhite] hover:bg-[--bgButtonLight] hover:text-[--tussockWhite] focus:text-[--bgButtonDark] focus:bg-gray-200 transition duration-200"
        >
          Agendar Cita
        </button>
      </form>
    </div>
  );
}
