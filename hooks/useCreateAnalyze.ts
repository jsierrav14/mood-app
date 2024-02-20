import {useMutation} from 'react-query';
import {Analysis} from '../api/analysis';

const anlysisService = new Analysis();

export const useCreateAnalysis = () => {
  return useMutation((content:string) =>anlysisService.createAnalysis(content));
};
