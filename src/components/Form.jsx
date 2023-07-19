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
  const { companies, idToEdit, type } = useSelector((state) => ({
    companies: state.form.companies,
    idToEdit: state.form.idToEdit,
    type: state.form.type,
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
    // Limpar os campos do formulário, exceto o campo plano_id
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
  };

    const handleClickEdit = () => {
      dispatch(editSuccessful({
        ...form,
        plano_id: idToEdit
      }));
      dispatch(toggleTypeForm());
      dispatch(updateIdToEdit(''));
      // Limpar os campos do formulário, exceto o campo plano_id
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
      /* history.push("/table"); */
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
        console.log(companies.length);
        const company = companies.find(({plano_id}) => plano_id === idToEdit);
        setForm({
          ...company
        });
      };
    }, []);


  return (
    <main className="d-flex flex-column">
      <h1>Formulário de inscrição</h1>
      <form action="" method="post" className="d-flex flex-column justify-content-center p-4">
          <label>
            Razão social:
            <input
              type="text"
              name="razao_social"
              className="form-control p-3"
              placeholder="Razão social"
              value={ razao_social }
              onChange={ handleChange }
            />
          </label>

          <label>
            Nome:
            <input
              type="text"
              name="nome_fantasia"
              className="form-control p-3"
              placeholder="name@gmail.com"
              value={ nome_fantasia }
              onChange={ handleChange }
            />
          </label>

          <label>
            Inscrição municipal:
            <input
              type="number"
              name="inscricao_municipal"
              className="form-control p-3"
              placeholder='123'
              value={ inscricao_municipal }
              onChange={ handleChange }
            />
          </label>

          <label>
            Inscrição estadual:
            <input
              type="number"
              name="inscricao_estadual"
              className="form-control p-3"
              placeholder="name@gmail.com"
              value={ inscricao_estadual }
              onChange={ handleChange }
            />
          </label>

          <label>
            CNPJ:
            <input
              type="number"
              name="cnpj"
              className="form-control p-3"
              placeholder="name@gmail.com"
              value={ cnpj }
              onChange={ handleChange }
            />
          </label>

          <label>
            CEP:
            <input
              type="number"
              name="cep"
              className="form-control p-3"
              placeholder="name@gmail.com"
              value={ cep }
              onChange={ handleChange }
            />
          </label>

          <label>
            Endereço:
            <input
              type="text"
              name="endereco"
              className="form-control p-3"
              placeholder="name@gmail.com"
              value={ endereco }
              onChange={ handleChange }
            />
          </label>

          <label>
            Número:
            <input
              type="number"
              name="numero"
              className="form-control p-3"
              placeholder="name@gmail.com"
              value={ numero }
              onChange={ handleChange }
            />
          </label>

          <label>
            Complemento:
            <input
              type="text"
              name="complemento"
              className="form-control p-3"
              placeholder="name@gmail.com"
              value={ complemento }
              onChange={ handleChange }
            />
          </label>

          <label>
            Bairro:
            <input
              type="text"
              name="bairro"
              className="form-control p-3"
              placeholder="name@gmail.com"
              value={ bairro }
              onChange={ handleChange }
            />
          </label>

          <label>
            Cidade:
            <input
              type="text"
              name="cidade"
              className="form-control p-3"
              placeholder="name@gmail.com"
              value={ cidade }
              onChange={ handleChange }
            />
          </label>

          <label>
            Estado:
            <input
              type="text"
              name="estado"
              className="form-control p-3"
              placeholder="name@gmail.com"
              value={ estado }
              onChange={ handleChange }
            />
          </label>

        {/* <label>
          Id:
          <input
            type="text"
            name="plano_id"
            className="form-control p-3"
            placeholder="name@gmail.com"
            value={ plano_id }
            onChange={ handleChange }
          />
        </label> */}

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
