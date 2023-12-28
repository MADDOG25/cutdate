import "/src/theme/general.css";
import "./login.css";

function Login() {
  return (
    <>
      <form action="post" id='cont_form_1' className="container cont_form">
        <fieldset className="form_field">
          <img
            src="/Logo CutDate (2).jpg"
            alt="logo de cutdate"
            className="img_form"
          ></img>

          <div className='cont_links'>
            <a href="#" className="">
              Inicia sesión
            </a>
            <a href="#" className="">
              Registrate
            </a>
          </div>

          <label form="namelogin">
            <input
              type="text"
              name="namelogin"
              id="namelogin"
              placeholder="nombre"
              className="input_form"
            ></input>
          </label>
          <label form="passwordlogin">
            <input
              type="password"
              name="passwordlogin"
              id="passwordlogin"
              placeholder="contraseña"
              className="input_form"
            ></input>
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

      <form action="post" id='cont_form_2' className="container cont_form">
        <fieldset className="form_field">
          <img
            src="/Logo CutDate (2).jpg"
            alt="logo de cutdate"
            className="img_form"
          ></img>

          <div className='cont_links'>
            <a href="#" className="">
              Inicia sesión
            </a>
            <a href="#" className="">
              Registrate
            </a>
          </div>

          <label form="nameregister">
            <input
              type="text"
              name="nameregister"
              id="nameregister"
              placeholder="nombre"
              className="input_form"
            ></input>
          </label>
          <label form="passwordregister">
            <input
              type="password"
              name="passwordregister"
              id="passwordregister"
              placeholder="contraseña"
              className="input_form"
            ></input>
          </label>
          <label form="passwordagainregister">
            <input
              type="password"
              name="passwordagainregister"
              id="passwordagainregister"
              placeholder="Vuelve a escribir la contraseña"
              className="input_form"
            ></input>
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
export default Login;
