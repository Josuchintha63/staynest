import {
    createContext,
    useState
} from "react";

export const AuthContext =
    createContext();

export function AuthProvider({
    children
}) {

    const [user,
        setUser] =
        useState(() => {
            const stored = localStorage.getItem("adminUser");
            return stored ? JSON.parse(stored) : null;
        });

    const login = (
        userData,
        token
    ) => {
        setUser(userData);
        localStorage.setItem("adminUser", JSON.stringify(userData));
        if (token) {
            localStorage.setItem("adminToken", token);
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("adminUser");
        localStorage.removeItem("adminToken");
        localStorage.clear();
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}