import axios from 'axios';
import {apiUrl} from "./BaseUrl.ts";

const axiosApi = axios.create({
    baseURL: apiUrl
});
export default axiosApi;