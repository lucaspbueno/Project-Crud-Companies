/* eslint-disable jsx-a11y/anchor-is-valid */
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import '../Css/NavBar.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTypeForm, updateIdToEdit } from '../redux/actions/actionsForm';

export default function NavBar({ active }) {
  const dispatch = useDispatch();
  const { type } = useSelector((state) => state.form);
  const history = useHistory();

  const handleClick = (route) => {
    if (route === 'table' && type === 'edit') {
      dispatch(toggleTypeForm());
      dispatch(updateIdToEdit(''));
    }
    history.push(`/${route}`);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark-subtle">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className='nav-link'>Home</a>
            <a
              className={ `nav-link ${ active === 'form' && 'active' }` }
              onClick={ () => handleClick('form') }
            >
              Formulário
            </a>
            <a
              className={ `nav-link ${ active === 'table' && 'active' }` }
              onClick={ () => handleClick('table') }
            >
              Tabela
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
