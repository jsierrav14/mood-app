import {useMutation} from 'react-query';
import { Auth } from '../api/auth';
import { User } from '../types/User';

const authService = new Auth();

export const useLogin = () => {
  return useMutation((user:User) =>authService.signIn(user));
};
