import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { supabase } from "~/utils/supabaseClient";
import { useSession, useSupabaseClient } from "~/utils/sessionProvider";

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
        const userExists = data?.user?.identities?.length == 0

        return { data, error, userExists };
    }),

    signInEmail: publicProcedure
    .input(z.object({ email: z.string(), password: z.string(), }))
    .mutation(async({ input }) => {
        const { data, error } = await supabase.auth.signInWithPassword(input)

        if(error) {
            throw new TRPCError({code: 'UNAUTHORIZED', message: error.message})
        }
        console.log(data, error)

        return { data, error };
    }),
    signOut: publicProcedure
    .input(z.object({  }))
    .mutation(async({  }) => {
        const { error } = await supabase.auth.signOut()
        return error;
    }),
    getSession: publicProcedure
    .input(z.object({  }))
    .query(async({  }) => {
        const { session: session } = useSession();
        console.log(session)
        return session;
    }),
    getUser: publicProcedure
    .input(z.object({  }))
    .query(async({  }) => {
        const { user: user } = useSession();
        return user;
    }),
});
