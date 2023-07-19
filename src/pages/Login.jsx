import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import alertSvg from '../pictures/alert.svg';
import { loginDone } from "../redux/actions/actionsLogin";
import '../Css/Login.css'


export default function Login() {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const { email, password } = form;
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.page);

  const fetchApi = async () => {
    try {
      const response = await fetch('https://api-homolog.simdescontonaluz.com.br/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        const responseData = await response.json();
        dispatch(loginDone(responseData.token_access));
        history.push("/form");
        console.log('Resposta do servidor:', responseData);
        // Aqui você pode tratar a resposta do servidor, como fazer redirecionamento ou mostrar uma mensagem de sucesso.
      } else {
          setShowError(true);
        // Aqui você pode tratar o erro de acordo com o retorno do servidor.
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      // Aqui você pode tratar erros de rede ou outros erros que possam ocorrer durante a requisição.
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value
    });
  };



  const handleClick = () => {
    if (email.length === 0 || password.length === 0) {
      setShowError(true);
      setError('Preencha todos os campos!');
    } else {
      setShowError(false);
      fetchApi();
    }
  };

  /* is-invalid */
  return (
    <div className={ theme === 'dark' ? 'vh-100 d-flex flex-column justify-content-center align-items-center theme-dark' : 'vh-100 d-flex flex-column justify-content-center align-items-center bg-white' }>
      <form action="" method="post"
        className={
          theme === 'dark' ?
          'd-flex flex-column justify-content-center border p-5 border-primary rounded-4 text-white' :
          'd-flex flex-column justify-content-center border p-5 border-primary rounded-4 text-white theme-light'}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            className="form-control p-3"
            placeholder="name@gmail.com"
            value={ email }
            onChange={ handleChange }
          />
        </label>
        <label className="mt-2">
          Password:
          <input
            type="password"
            name="password"
            className="form-control p-3"
            placeholder="******"
            value={ password }
            onChange={ handleChange }
          />
        </label>
        <button
          type="button"
          className="btn btn-outline-primary btn-lg mt-3"
          onClick={ handleClick }
        >
          Middle
        </button>
      </form>
      {
        showError &&
          <div className="d-flex justify-content-center align-items-center alert alert-danger me-5 align-self-end" role="alert">
            <img src={alertSvg} alt="Ícone de alerta" className="me-2" />
            <p className="m-0">{error}</p>
          </div>
      }
    </div>
  );
}
