import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    baseURL: process.env.API_KEY,
})

export const { signIn, signOut, signUp, useSession } = authClient; 