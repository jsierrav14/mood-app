import { User } from '../types/User';
import apiClient from './apiClient';

export class Auth {
  signIn(user:User) {
    return apiClient.post<User>('auth/signin', user);
  }
}
