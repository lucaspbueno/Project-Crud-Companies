export const REGISTER_COMPANY = 'REGISTER_COMPANY';
export const EDIT_COMPANY = 'EDIT_COMPANY';
export const DEFINE_FORM_TYPE = 'DEFINE_FORM_TYPE';
export const UPDATE_ID_TO_EDIT = 'UPDATE_ID_TO_EDIT';
export const REMOVE_COMPANY = 'REMOVE_COMPANY';
export const CLEAR_STATE_FORM = 'CLEAR_STATE_FORM';

export const registerSuccessful = (company) => ({
  type: REGISTER_COMPANY,
  company  
});

export const toggleTypeForm = () => ({
  type: DEFINE_FORM_TYPE,
});

export const updateIdToEdit = (id) => ({
  type: UPDATE_ID_TO_EDIT,
  id
});

export const editSuccessful = (company) => ({
  type: EDIT_COMPANY,
  company
});

export const removeCompany = (idToRemove) => ({
  type: REMOVE_COMPANY,
  idToRemove
});

export const clearStageForm = () => ({
  type: CLEAR_STATE_FORM
});
