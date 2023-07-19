import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import '../Css/Form.css'
import { registerSuccessful, toggleTypeForm, editSuccessful, updateIdToEdit } from '../redux/actions/actionsForm';
import { useHistory } from 'react-router-dom';

export default function Form() {
  const [form, setForm] = useState({
    razao_social: '',
    nome_fantasia: '',
    inscricao_municipal: 0,
    inscricao_estadual: 0,
    cnpj: 0,
    cep: 0,
    endereco: '',
    numero: 0,
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
    plano_id: 0
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const { companies, idToEdit, token, type, theme } = useSelector((state) => ({
    companies: state.form.companies,
    idToEdit: state.form.idToEdit,
    token: state.login.token,
    type: state.form.type,
    theme: state.page.theme
  }));

  const {
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
    plano_id
  } = form;

  const handleChange = ({ target : { name, value } }) => {
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleClick = () => {
    const updateForm = {
      ...form,
      plano_id: form.plano_id += 1
    }
    dispatch(registerSuccessful(form));
    setForm({
      ...updateForm,
      razao_social: '',
      nome_fantasia: '',
      inscricao_municipal: 0,
      inscricao_estadual: 0,
      cnpj: 0,
      cep: 0,
      endereco: '',
      numero: 0,
      complemento: '',
      bairro: '',
      cidade: '',
      estado: ''
    });
    history.push("/table");
  };

  const fetchApiEdit = async () => {
    try {
      const response = await fetch('https://api-homolog.simdescontonaluz.com.br/api/v1/empresa/salvar', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
          plano_id: idToEdit 
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Resposta do servidor: EDITAR', responseData);
      } else {
        console.log(response);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };

    const handleClickEdit = () => {
      fetchApiEdit();
      dispatch(editSuccessful({
        ...form,
        plano_id: idToEdit
      }));
      dispatch(toggleTypeForm());
      dispatch(updateIdToEdit(''));
      setForm({
        razao_social: '',
        nome_fantasia: '',
        inscricao_municipal: 0,
        inscricao_estadual: 0,
        cnpj: 0,
        cep: 0,
        endereco: '',
        numero: 0,
        complemento: '',
        bairro: '',
        cidade: '',
        estado: '',
        plano_id: companies.length
      });
      history.push("/table");
    };

    useEffect(() => {
      if (plano_id === 0) {
        setForm({
          ...form,
          plano_id: companies.length
        });
      };
      if (typeof idToEdit !== 'string') {
        console.log('TO AQUI');
        const company = companies.find(({plano_id}) => plano_id === idToEdit);
        setForm({
          ...company
        });
      };
    }, []);


  return (
    <main className={ theme === 'dark' && 'text-white-50' }>
      <h1>Formulário de inscrição</h1>
      <form action="" method="post" className={ theme === 'dark' ? 'd-flex flex-column p-4' : 'd-flex flex-column p-4 border rounded-2' }>
          <label className="form-label">
            Razão social:
            <input
              type="text"
              name="razao_social"
              className={ theme === 'dark' ? 'form-control p-3 bg-transparent border-secondary text-light custom-placeholder' : 'form-control p-3 bg-transparent' }
              placeholder="Corporate reason"
              value={ razao_social }
              onChange={ handleChange }
            />
          </label>

          <label>
            Nome:
            <input
              type="text"
              name="nome_fantasia"
              className={ theme === 'dark' ? 'form-control p-3 bg-transparent border-secondary text-light custom-placeholder' : 'form-control p-3 bg-transparent' }
              placeholder="Name"
              value={ nome_fantasia }
              onChange={ handleChange }
            />
          </label>

          <label>
            Inscrição municipal:
            <input
              type="number"
              name="inscricao_municipal"
              className={ theme === 'dark' ? 'form-control p-3 bg-transparent border-secondary text-light custom-placeholder' : 'form-control p-3 bg-transparent' }
              value={ inscricao_municipal }
              onChange={ handleChange }
            />
          </label>

          <label>
            Inscrição estadual:
            <input
              type="number"
              name="inscricao_estadual"
              className={ theme === 'dark' ? 'form-control p-3 bg-transparent border-secondary text-light custom-placeholder' : 'form-control p-3 bg-transparent' }
              value={ inscricao_estadual }
              onChange={ handleChange }
            />
          </label>

          <label>
            CNPJ:
            <input
              type="number"
              name="cnpj"
              className={ theme === 'dark' ? 'form-control p-3 bg-transparent border-secondary text-light custom-placeholder' : 'form-control p-3 bg-transparent' }
              value={ cnpj }
              onChange={ handleChange }
            />
          </label>

          <label>
            CEP:
            <input
              type="number"
              name="cep"
              className={ theme === 'dark' ? 'form-control p-3 bg-transparent border-secondary text-light custom-placeholder' : 'form-control p-3 bg-transparent' }
              value={ cep }
              onChange={ handleChange }
            />
          </label>

          <label>
            Endereço:
            <input
              type="text"
              name="endereco"
              className={ theme === 'dark' ? 'form-control p-3 bg-transparent border-secondary text-light custom-placeholder' : 'form-control p-3 bg-transparent' }
              placeholder="Rua Eurita"
              value={ endereco }
              onChange={ handleChange }
            />
          </label>

          <label>
            Número:
            <input
              type="number"
              name="numero"
              className={ theme === 'dark' ? 'form-control p-3 bg-transparent border-secondary text-light custom-placeholder' : 'form-control p-3 bg-transparent' }
              value={ numero }
              onChange={ handleChange }
            />
          </label>

          <label>
            Complemento:
            <input
              type="text"
              name="complemento"
              className={ theme === 'dark' ? 'form-control p-3 bg-transparent border-secondary text-light custom-placeholder' : 'form-control p-3 bg-transparent' }
              placeholder="------"
              value={ complemento }
              onChange={ handleChange }
            />
          </label>

          <label>
            Bairro:
            <input
              type="text"
              name="bairro"
              className={ theme === 'dark' ? 'form-control p-3 bg-transparent border-secondary text-light custom-placeholder' : 'form-control p-3 bg-transparent' }
              placeholder="Santa Tereza"
              value={ bairro }
              onChange={ handleChange }
            />
          </label>

          <label>
            Cidade:
            <input
              type="text"
              name="cidade"
              className={ theme === 'dark' ? 'form-control p-3 bg-transparent border-secondary text-light custom-placeholder' : 'form-control p-3 bg-transparent' }
              placeholder="Belo Horizonte"
              value={ cidade }
              onChange={ handleChange }
            />
          </label>

          <label>
            Estado:
            <input
              type="text"
              name="estado"
              className={ theme === 'dark' ? 'form-control p-3 bg-transparent border-secondary text-light custom-placeholder' : 'form-control p-3 bg-transparent' }
              placeholder="name@gmail.com"
              value={ estado }
              onChange={ handleChange }
            />
          </label>

        {
          type === 'add' ? (
            <button
            type="button"
            className="btn btn-outline-primary btn-lg mt-3"
            onClick={ handleClick }
            >
              Add
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-outline-warning btn-lg mt-3"
              onClick={ handleClickEdit }
            >
              Edit
            </button>
          )
        }
      </form>
    </main>
  );
}
