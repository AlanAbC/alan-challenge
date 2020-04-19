import { initialState } from './initialState';
import { SET_USER_PROFILE } from './actionsType';

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE:
      return {
        ...state,
        email: action.userProfile.email,
        name: action.userProfile.name,
        lastname: action.userProfile.lastname,
        date: action.userProfile.date,
        imageUrl: action.userProfile.imageUrl,
      };
    default:
      return {
        ...state,
      };
  }
};
