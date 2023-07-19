import { useDispatch, useSelector } from 'react-redux';
import '../Css/Header.css';
import profileSvg from '../pictures/profile.svg';
import DropDown from './DropDown';
import { showDropDown } from '../redux/actions/actionsPage';

export default function Header() {
  const dispatch = useDispatch();
  const { dropDownIsActive } = useSelector((state) => state.page);

  return (
    <header className="w-100 d-flex justify-content-between position-fixed top-0 shadow mb-5 z-3">
      <h1>
        Project
      </h1>
      <>
        <button type="button" onClick={ () => dispatch(showDropDown()) }>
          <img src={ profileSvg } alt="Ícone de perfil"/>
        </button>
        {
          dropDownIsActive && <DropDown />
        }
      </>
    </header>
  );
}
