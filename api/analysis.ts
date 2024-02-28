import {IAnalysis} from '../types/IAnalysis';
import apiClient from './apiClient';

export class Analysis {
  createAnalysis(content: string) {
    return apiClient.post<IAnalysis>('analyze', {content});
  }
  getAnalysis(date: string) {
    return apiClient.get<IAnalysis[]>(`analyze/me?date=${date}`);
  }

  async getAnalysisById(id: string) {
    const data = await apiClient.get<IAnalysis>(`analyze/${id}`);
    return data
  }
}
