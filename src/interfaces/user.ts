export interface UserData {
  id: number;
  name: string;
  email: string;
  pass: string;
  setting: {
    darkMode: boolean;
  }
};