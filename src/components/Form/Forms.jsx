import { useState } from "react";
import { useForm } from "react-hook-form";
import "/src/theme/general.css";
import "./forms.css";

//ESTILOS DE VISUALIZACION
const styles = {
  transition: {
    transition: "opacity 1s ease-in-out",
  },

  hidden: {
    opacity: 0,
    height: 0,
    overflow: "hidden",
  },
  visible: { opacity: 1 },
};

//FUNCION PARA CAMBIAR VISTA DE FORMULARIOS
function Forms() {
  const [form, setForm] = useState("login");
  const handleLogin = () => {
    setForm("login");
  };
  const handleRegister = () => {
    setForm("register");
  };

  const {
    register, 
    handleSubmit,
    formState: {errors}} = useForm();
  const onSubmit= (data) => {
    console.log(data);
  };
  

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        id="cont_form_1"
        className="container cont_form"
        style={{
          ...styles.transition,
          ...(form === "login" ? styles.visible : styles.hidden),
        }}
      >
        <fieldset className="form_field">
          <img
            src="/Logo CutDate BIG sin fondo.png"
            alt="logo de cutdate"
            className="img_form"
          ></img>

          <div className="cont_links">
            <a href="#" onClick={handleLogin} disabled={form === "login"}>
              Inicia sesión
            </a>
            <a href="#" onClick={handleRegister}>
              Registrate
            </a>
          </div>

          <label form="namelogin">
            <input
              type="text"
              {...register("namelogin", {required: true})}
              id="namelogin"
              placeholder="nombre"
              className="input_form"
            ></input>
            {errors.namelogin && <p className="error_validation">Nombre incorrecto</p>}
          </label>
          <label form="passwordlogin">
            <input
              type="password"
              {...register("passwordlogin", {required: true})}
              id="passwordlogin"
              placeholder="contraseña"
              className="input_form"
            ></input>
            {errors.passwordlogin && <p className="error_validation">Contraseña invalida</p>}
          </label>

          <button type="submit" className="btn_form">
            Entra
          </button>

          <p className="paragraph_form">OR</p>

          <button type="submit" className="btn_form">
            Entra con Facebook o Google
          </button>
        </fieldset>
      </form>

      <form
        onSubmit=''
        id="cont_form_2"
        className="container cont_form"
        style={{
          ...styles.transition,
          ...(form === "register" ? styles.visible : styles.hidden),
        }}
      >
        <fieldset className="form_field">
          <img
            src="/Logo CutDate BIG sin fondo.png"
            alt="logo de cutdate"
            className="img_form"
          ></img>

          <div className="cont_links">
            <a href="#" onClick={handleLogin} >
              Inicia sesión
            </a>
            <a href="#" onClick={handleRegister} disabled={form === "register"}>
              Registrate
            </a>
          </div>

          <label form="nameregister">
            <input
              type="text"
              {...register("nameregister", {required: true})}
              id="nameregister"
              placeholder="nombre"
              className="input_form"
            ></input>
            {errors.nameregister && <p className="error_validation">Nombre incorrecto</p>}
          </label>
          <label form="passwordregister">
            <input
              type="password"
              {...register("passwordregister", {required: true})}
              id="passwordregister"
              placeholder="contraseña"
              className="input_form"
            ></input>
            {errors.passwordregister && <p className="error_validation">Contraseña invalida</p>}
          </label>
          <label form="passwordagainregister">
            <input
              type="password"
              {...register("passwordagainregister", {required: true})}
              id="passwordagainregister"
              placeholder="Vuelve a escribir la contraseña"
              className="input_form"
            ></input>
            {errors.passwordagainregister && <p className="error_validation">Contraseña no coincide</p>}
          </label>

          <button type="submit" className="btn_form">
            Registrate
          </button>

          <p className="paragraph_form">OR</p>

          <button type="submit" className="btn_form">
            Registrate con Facebook o Google
          </button>
        </fieldset>
      </form>
    </>
  );
}
export default Forms;
