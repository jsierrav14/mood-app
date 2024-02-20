import { IAnalysis } from '../types/IAnalysis';
import apiClient from './apiClient';

export class Analysis {
  createAnalysis(content: string) {
    console.log("🚀 ~ Analysis ~ createAnalysis ~ content:", content)
    return apiClient.post('analyze', {content});
  }
  getAnalysis(){
    return apiClient.get<IAnalysis[]>('analyze/me');
  }
}
