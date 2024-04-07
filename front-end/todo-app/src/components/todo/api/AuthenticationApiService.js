import { apiClient } from "./ApiClient";

export const executeBasicAuthenticationService
    = (token) => apiClient.get(`/basicauth`
        , {
            headers: {
                Authorization: token
            }
        }
    )
//important!!! jwt authentication post request that has username and password as a request body 
//sends a POST request to the /authenticate endpoint with the provided username and password in the request body
export const executeJwtAuthenticationService
    = (username, password) =>
        apiClient.post(`/authenticate`, { username, password })
