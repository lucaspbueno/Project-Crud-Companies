import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import '../Css/Table.css';
import trashSvg from '../pictures/trash.svg';
import pencilSvg from '../pictures/pencil.svg';
import { removeCompany, toggleTypeForm, updateIdToEdit } from '../redux/actions/actionsForm';

export default function Table() {
  const { companies, token, theme } = useSelector((state) => ({
    companies: state.form.companies,
    token: state.login.token,
    theme: state.page.theme
  }));
  const dispatch = useDispatch();
  const history = useHistory();

  const fetchApiDelete = async (form) => {
    try {
      const response = await fetch('https://api-homolog.simdescontonaluz.com.br/api/v1/empresa/deletar/1', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const responseData = await response.json();
        console.log('Resposta do servidor:', responseData);
      } else {
        console.log(response);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };

  const deleteCompany = (plano_id) => {
    dispatch(removeCompany(plano_id));
    fetchApiDelete();
  };

  const editCompany = (plano_id) => {
    dispatch(toggleTypeForm());
    dispatch(updateIdToEdit(plano_id));
    history.push("/form");
  };

  return (
    <div className="content z-2 vh-100">
      <table className={ theme === 'dark' ? 'table table-dark table-striped table-hover table-bordered' : 'table table-striped table-hover table-bordered' }>
        <thead className='table-dark'>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Razão social</th>
            <th scope="col">Nome</th>
            <th scope="col">Inscrição municipal</th>
            <th scope="col">Inscrição estadual</th>
            <th scope="col">CNPJ</th>
            <th scope="col">CEP</th>
            <th scope="col">Endereço</th>
            <th scope="col">Número</th>
            <th scope="col">Complemento</th>
            <th scope="col">Bairro</th>
            <th scope="col">Cidade</th>
            <th scope="col">Estado</th>
            <th scope="col">Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {
            companies && (
              companies.map(({
                razao_social,
                nome_fantasia,
                inscricao_municipal,
                inscricao_estadual,
                cnpj,
                cep,
                endereco,
                numero,
                complemento,
                bairro,
                cidade,
                estado,
                plano_id}) => (
                <tr key={ plano_id }>
                  <th scope="row">{ plano_id }</th>
                  <td>{ razao_social }</td>
                  <td>{ nome_fantasia }</td>
                  <td>{ inscricao_municipal }</td>
                  <td>{ inscricao_estadual }</td>
                  <td>{ cnpj }</td>
                  <td>{ cep }</td>
                  <td>{ endereco }</td>
                  <td>{ numero }</td>
                  <td>{ complemento }</td>
                  <td>{ bairro }</td>
                  <td>{ cidade }</td>
                  <td>{ estado }</td>
                  <td className="teste">
                    <button type="button" onClick={ () => deleteCompany(plano_id) }>
                      <img src={ trashSvg } alt="Ícone de uma lixeira" />
                    </button>

                    <button type="button" onClick={ () => editCompany(plano_id) }>
                      <img src={ pencilSvg } alt="Ícone de um lápis" />
                    </button>
                  </td>
                </tr>
              ))
            )
          }
        </tbody>
      </table>
    </div>
  );
}
