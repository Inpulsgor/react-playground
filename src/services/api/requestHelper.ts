import axios, { AxiosInstance } from 'axios';
import { getPort } from 'utils/requests/getPort';
import { RequestHelperTypes } from 'types/requests';
import 'toastr/build/toastr.css';
import * as Toastr from 'toastr';

Toastr.options.closeButton = true;
Toastr.options.newestOnTop = false;
Toastr.options.timeOut = 100000;
Toastr.options.positionClass = 'toast-bottom-right';

const stagingAPI = true;
const API_URL = process.env.REACT_APP_API_URL as string;
const API_URL_DEV = process.env.REACT_APP_API_URL_DEV as string;

const instance: AxiosInstance = axios.create({
  baseURL: stagingAPI ? API_URL_DEV : API_URL,
  headers: { 'Content-Type': 'application/json' },
});

const requestHelper = <T>({
  endpoint,
  token,
  method = 'GET',
  body,
  ...customConfig
}: RequestHelperTypes): Promise<T> => {
  const PATH = stagingAPI
    ? endpoint
    : getPort(API_URL, endpoint) + '/' + endpoint;

  if (token) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  return instance(PATH, {
    method,
    data: body,
    ...customConfig,
  })
    .then(({ status, data }) => {
      if (status === 401) {
        window.location.assign('/login');
        return;
      }

      return data;
    })
    .catch(err => {
      const errorText = err.response?.data?.error;

      if (errorText) Toastr.error(errorText);

      if (err) {
        const existing = sessionStorage.getItem('REQUEST_ERRORS');
        const prevErrors = existing ? JSON.parse(existing) : [];
        const key = 'REQUEST_ERRORS';

        prevErrors.length > 0
          ? sessionStorage.setItem(
              key,
              JSON.stringify([...prevErrors, errorText]),
            )
          : sessionStorage.setItem(key, JSON.stringify([errorText]));
      }

      console.log(`%cRequestHelper error catch`, 'color: red', err as Error);
    });
};

export { requestHelper, instance };

// export function requestHelper<T>({
//   endpoint,
//   token,
//   method = 'GET',
//   body,
//   ...customConfig
// }: RequestHelper): Promise<T> {
//   const headers: HeadersInit = {
//     'Content-Type': 'application/json',
//   };
//   if (token) {
//     headers.Authorization = `Bearer ${token}`;
//   }
//   const config: RequestInit = {
//     method: method,
//     ...customConfig,
//     headers: {
//       ...headers,
//     },
//   };
//   if (body) {
//     config.body = JSON.stringify(body);
//   }

//   let URL = '';

//   if (stagingAPI) {
//     URL = API_URL_DEV + endpoint;
//   } else {
//     URL = API_URL + getPort(endpoint) + '/' + endpoint;
//   }

//   return fetch(URL, config).then(async (response) => {
//     if (response.status === 401) {
//       // Auth.signOut();
//       window.location.assign('/login');
//       return;
//     }
//     if (response.ok) {
//       return response.json();
//     } else {
//       const errorMessage = await response.text();
//       return Promise.reject(new Error(errorMessage));
//     }
//   });
// }
