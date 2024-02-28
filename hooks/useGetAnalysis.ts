import {useQuery} from 'react-query';
import {Analysis} from '../api/analysis';

const anlysisService = new Analysis();

export const useGetAnalysis = (date:string) => {
  return useQuery('analyze/me', () => anlysisService.getAnalysis(date));
};

export const useGetAnalysisById = (id:string) => {
  return useQuery('analyze/id', () => anlysisService.getAnalysisById(id));
};
