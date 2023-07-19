import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '../Css/DropDown.css';
import { clearStagePage } from '../redux/actions/actionsPage';
import { clearStageForm } from '../redux/actions/actionsForm';
import { clearStageLogin } from '../redux/actions/actionsLogin';

export default function DropDown() {
  const history = useHistory();
  const dispatch = useDispatch();

  const logout = () => {
    localStorage.clear();
    dispatch(clearStageLogin());
    dispatch(clearStagePage());
    dispatch(clearStageForm());
    history.push("/"); 
  };

  return (
    <ul className="drop position-absolute d-flex justify-content-center align-items-center bg-black text-center list-unstyled p-3">
      <li>
        <button onClick={ logout } className="text-secondary">Logout</button>
      </li>
    </ul>
  );
}
