import { apiRequest } from "./api";

export const login = (data) =>
    apiRequest("/auth/login", {
        method: "POST",
        body: JSON.stringify(data)
    });

export const register = (data) =>
    apiRequest("/auth/register", {
        method: "POST",
        body: JSON.stringify(data)
    });

export const authApi = {
    login,
    register
};