import { createAction } from '@reduxjs/toolkit';

// export const types = {
//   CHANGE_NAME: 'CHANGE_NAME',
//   CHANGE_AGE: 'CHANGE_AGE',
//   ADD_APARTMENT: 'ADD_APARTMENT',
//   REMOVE_APARTMENT: 'REMOVE_APARTMENT',
// };

const changeName = createAction('CHANGE_NAME');
const changeAge = createAction('CHANGE_AGE');
const addApartment = createAction('ADD_APARTMENT');
const removeApartment = createAction('REMOVE_APARTMENT');

// const changeName = newName => ({
//   type: types.CHANGE_NAME,
//   payload: newName,
// });

// const changeAge = newAge => ({
//   type: types.CHANGE_AGE,
//   payload: newAge,
// });

// const addApartment = apartment => ({
//   type: types.ADD_APARTMENT,
//   payload: apartment,
// });
// const remuveApartment = id => ({
//   type: types.REMOVE_APARTMENT,
//   payload: id,
// });

const actions = { changeName, changeAge, addApartment, removeApartment };
export default actions;