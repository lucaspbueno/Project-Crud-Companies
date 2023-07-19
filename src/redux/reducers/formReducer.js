import { DEFINE_FORM_TYPE, EDIT_COMPANY, REGISTER_COMPANY, REMOVE_COMPANY, UPDATE_ID_TO_EDIT } from "../actions/actionsForm";

const INITIAL_STATE = { 
  companies: [],
  type: 'add',
  idToEdit: ''
};

const formReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_COMPANY:
      return {
        ...state,
        companies: [...state.companies, action.company]
      };
    case DEFINE_FORM_TYPE:
      return {
        ...state,
        type: state.type === 'add' ? 'edit' : 'add'
      };
    case UPDATE_ID_TO_EDIT:
      return {
        ...state,
        idToEdit: action.id
      }
    case EDIT_COMPANY:
      return {
        ...state,
        companies: state.companies.reduce((acc, company) => {
          if (company.plano_id === state.idToEdit) {
            company = {
              ...action.company
            };
          }
          acc.push(company);
          return acc
        }, [])
      }
    case REMOVE_COMPANY:
      const companiesFiltered = state.companies.filter(({plano_id}) => plano_id !== action.idToRemove);
      return {
        ...state,
        companies: companiesFiltered.reduce((acc, company, index) => {
            company = {
              ...company,
              plano_id: index + 1
            };
          acc.push(company);
          return acc
        }, [])
      }
    default:
      return state;
  }

};

export default formReducer;
