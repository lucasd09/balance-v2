"use client";
import { api } from "@/services/axios";
import { useUserStore } from "@/stores/user-store";
import { setCookie } from "nookies";
import { createContext } from "react";
import { jwtDecode } from "jwt-decode";

type AuthContextType = {
  isAuthenticated: boolean;
  signIn: (data: SignInProps) => Promise<string | undefined>;
};

type JwtProps = {
  sub: number;
  email: string;
  name: string;
  token: string;
};

type SignInProps = {
  email: string;
  password: string;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const user = useUserStore();

  const isAuthenticated = !!user.token;

  async function signIn({ email, password }: SignInProps) {
    const res = await api.post("/login", { email, password });

    if (res.status === 200) {
      const token: string = res.data.access_token;

      setCookie(undefined, "balance-token", token, {
        maxAge: 60 * 60 * 1, // 1 hour
      });

      api.defaults.headers["Authorization"] = `Bearer ${token}`;

      const jwt = jwtDecode<JwtProps>(token);

      user.updateId(jwt.sub);
      user.updateUsername(jwt.name);
      user.updateToken(token);

      return token;
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
