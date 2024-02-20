import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
// Define an interface for your custom Axios client configuration
interface AxiosClientConfig extends AxiosRequestConfig {
  // Add any custom configuration options here
  baseURL:string;
}

class AxiosClient {
  private instance: AxiosInstance;

  constructor(config: AxiosClientConfig) {
    // Create an instance of Axios with provided config
    this.instance = axios.create(config);
  }

  // Define methods for making HTTP requests

  async get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.instance.get<T, R>(url, config);
  }

  async post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.instance.post<T, R>(url, data, config);
  }

  async put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.instance.put<T, R>(url, data, config);
  }

  async delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.instance.delete<T, R>(url, config);
  }
}

// Export an instance of your Axios client
export default new AxiosClient({ baseURL:'http://localhost:3001/'});
