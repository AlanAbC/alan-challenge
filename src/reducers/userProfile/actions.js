import { SET_USER_PROFILE } from './actionsType';

export const setUserProfile = (userProfile) => ({
  type: SET_USER_PROFILE,
  userProfile,
});
