import {useQuery} from 'react-query';
import {Analysis} from '../api/analysis';

const anlysisService = new Analysis();

export const useGetAnalysis = () => {
  return useQuery('analyze/me', () => anlysisService.getAnalysis());
};
