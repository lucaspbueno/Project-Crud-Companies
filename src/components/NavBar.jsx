/* eslint-disable jsx-a11y/anchor-is-valid */
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTypeForm, updateIdToEdit } from '../redux/actions/actionsForm';
import '../Css/NavBar.css';
import moonSvg from '../pictures/moon.svg';
import sunSvg from '../pictures/sun.svg';
import { toggleTheme } from '../redux/actions/actionsPage';

export default function NavBar({ active }) {
  const dispatch = useDispatch();
  const { type, theme } = useSelector((state) => ({
    type: state.form.type,
    theme: state.page.theme
  }));
  const history = useHistory();

  const handleClick = (route) => {
    if (route === 'table' && type === 'edit') {
      dispatch(toggleTypeForm());
      dispatch(updateIdToEdit(''));
    }
    history.push(`/${route}`);
  };

  return (
    <nav className={ theme === 'dark' ? 'navbar navbar-expand-lg bg-secondary bg-gradient z-2' : 'navbar navbar-expand-lg bg-dark-subtle z-2' }>
      <div className="container-fluid">
        <div className="collapse navbar-collapse content-nav" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a
              className={ `nav-link ${ active === 'form' && 'active' } ${ theme === 'dark' && 'text-white' }`}
              onClick={ () => handleClick('form') }
            >
              Formulário
            </a>
            <a
              className={ `nav-link ${ active === 'table' && 'active ' } ${ theme === 'dark' && 'text-white' }`}
              onClick={ () => handleClick('table') }
            >
              Tabela
            </a>
          </div>
          <div>
            {
              theme === 'dark' ? (
                <button type="button" className="bg-transparent border-0" onClick={ () => dispatch(toggleTheme()) }>
                  <img src={ moonSvg } alt="Ícone da lua"/>
                </button>
              ) : (
                <button type="button" className="bg-transparent border-0" onClick={ () => dispatch(toggleTheme()) }>
                  <img src={ sunSvg } alt="Ícone do sol"/>
                </button>
              )
            }
          </div>
        </div>
      </div>
    </nav>
  );
}
