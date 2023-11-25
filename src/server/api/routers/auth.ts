import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { supabase } from "~/utils/supabaseClient";

export const authRouter = createTRPCRouter({
  signUpEmail: publicProcedure
    .input(z.object({ email: z.string(), password: z.string(), }))
    .mutation(async({ input }) => {

        const { data, error } = await supabase.auth.signUp({
            email: input.email,
            password: input.password,
            options: {
                emailRedirectTo: 'https://localhost:3000/dashboard'
            }
        })

        if(error) {
            throw new TRPCError({code: 'UNAUTHORIZED', message: error.message})
        }

        const userExists = data?.user?.identities?.length == 0

        if (userExists) {
            throw new TRPCError({code: 'UNAUTHORIZED', message: "The email is already in use."})
        }
  
        if(data.session)
        await supabase.auth.setSession(data.session)

        return { data, error, userExists };
    }),

    signInEmail: publicProcedure
    .input(z.object({ email: z.string(), password: z.string(), }))
    .mutation(async({ input }) => {
        const { data, error } = await supabase.auth.signInWithPassword(input)

        if(error) {
            throw new TRPCError({code: 'UNAUTHORIZED', message: error.message})
        }

        await supabase.auth.setSession(data.session)

        return { data, error };
    }),
    signOut: publicProcedure
    .mutation(async() => {
        const { error } = await supabase.auth.signOut()

        if(error) {
            throw new TRPCError({code: 'UNAUTHORIZED', message: error.message})
        }

        return true;
    }),
});
