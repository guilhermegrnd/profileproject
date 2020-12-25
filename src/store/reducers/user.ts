import { UserData } from '../../interfaces/user';

const INITIAL_STATE = null;

interface Action {
  type: string;
  user: UserData | null;
  darkMode: boolean;
};

const auth = (state:UserData | null = INITIAL_STATE, action:Action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, settings: { darkMode: action.darkMode }}
    case 'UPDATE_USER':
      return action.user
    default:
      return state;
  }
}

export default auth;