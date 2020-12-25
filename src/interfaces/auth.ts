import {UserData} from './user';

export interface AuthData {
  signed: boolean;
  user: UserData | null;
  signIn(): Promise<void>;
};