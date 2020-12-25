import React, { createContext, useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import * as auth from '../services/auth';
import { UserData } from '../interfaces/user';

interface AuthContextData {
  signed: boolean;
  loading: boolean;
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const dispatch = useDispatch();
  const user = useSelector<UserData | null>((state:any) => state.user);
  
  const [loading,setLoading] = useState(true);

  function updateUser(user:UserData | null) {
    dispatch({ type: 'UPDATE_USER', user });
  }

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
      const storagedToken = await AsyncStorage.getItem('@RNAuth:token');
      
      if(storagedUser && storagedToken) {
        updateUser(JSON.parse(storagedUser));
      }
      setLoading(false);
    }

    loadStorageData();
  },[])

  async function signIn() {
    setLoading(true);
    const response:any = await auth.signIn();
    
    updateUser(response.user);

    await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
    await AsyncStorage.setItem('@RNAuth:token', response.token);
    setLoading(false);
  }

  function signOut() {
    AsyncStorage.clear().then(() => {
      updateUser(null);
    });
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, loading, signIn, signOut }} >
      {children}
    </AuthContext.Provider>
  )
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}