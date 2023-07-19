import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import '../Css/Table.css';
import trashSvg from '../pictures/trash.svg';
import pencilSvg from '../pictures/pencil.svg';
import { toggleTypeForm, updateIdToEdit } from '../redux/actions/actionsForm';

export default function Table() {
  const { companies, token } = useSelector((state) => ({
    companies: state.form.companies,
    token: state.login.token,
  }));
  const dispatch = useDispatch();
  const history = useHistory();

  /* const fetchApiDelete = async (form) => { // Recebendo o objeto 'form' como parâmetro
    try {
      // Recupere o token do armazenamento local
  
      const response = await fetch('https://api-homolog.simdescontonaluz.com.br/api/v1/empresa/deletar/1', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`, // Use o token recuperado no cabeçalho de autorização
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log('Resposta do servidor:', responseData);
        // Aqui você pode tratar a resposta do servidor, como fazer redirecionamento ou mostrar uma mensagem de sucesso.
      } else {
        console.log(response);
        // Aqui você pode tratar o erro de acordo com o retorno do servidor.
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      // Aqui você pode tratar erros de rede ou outros erros que possam ocorrer durante a requisição.
    }
  };

  const fetchApiEdit = async () => {
    try {
      const response = await fetch('https://api-homolog.simdescontonaluz.com.br/api/v1/empresa/salvar', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Resposta do servidor:', responseData);
        // Aqui você pode tratar a resposta do servidor, como fazer redirecionamento ou mostrar uma mensagem de sucesso.
      } else {
        console.log(response);
        // Aqui você pode tratar o erro de acordo com o retorno do servidor.
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      // Aqui você pode tratar erros de rede ou outros erros que possam ocorrer durante a requisição.
    }
  };


  const deleteCompany = () => {
    fetchApiDelete();
  };

  const editCompany = (plano_id) => {
    dispatch(toggleTypeForm());
    dispatch(updateIdToEdit(plano_id));
    history.push("/form");
    fetchApiEdit();
  }; */

  return (
    <div className="content">
      <table className="table table-striped table-hover table-bordered">
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
                    {/* <button type="button" onClick={ () => deleteCompany(plano_id) }>
                      <img src={ trashSvg } alt="Ícone de uma lixeira" />
                    </button>

                    <button type="button" onClick={ () => editCompany(plano_id) }>
                      <img src={ pencilSvg } alt="Ícone de um lápis" />
                    </button> */}
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
