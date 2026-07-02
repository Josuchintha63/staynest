import {
    createContext,
    useContext,
    useState
} from "react";

import {
    login
} from "../services/authApi";

export const AuthContext =
    createContext();

export function AuthProvider({
    children
}) {

    const [user,
        setUser] =
        useState(null);

    const signIn =
        async (
            email,
            password
        ) => {

            const response =
                await login({
                    email,
                    password
                });

            localStorage.setItem(
                "accessToken",
                response.accessToken
            );

            localStorage.setItem(
                "refreshToken",
                response.refreshToken
            );

            setUser(response);

            return response;
        };

    const logout =
        () => {

            localStorage.clear();

            setUser(null);
        };

    return (
        <AuthContext.Provider
            value={{
                user,
                signIn,
                logout
            }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth =
    () =>
        useContext(
            AuthContext
        );