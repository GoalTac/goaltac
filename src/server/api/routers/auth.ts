import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import {supabase} from '../../../utils/supabaseClient'


export const authRouter = createTRPCRouter({
  sign_up_email: publicProcedure
    .input(z.object({ email: z.string(), password: z.string(), }))
    .mutation(async({ input }) => {
        console.log(input.email,input.password)

        const { data, error } = await supabase.auth.signUp({
            email: input.email,
            password: input.password,
            options: {
                emailRedirectTo: 'https://localhost:3000/dashboard'
            }
        })
        const userExists = data?.user?.identities?.length == 0
        console.log(data,error)
        return { data, error, userExists };
    }),

    sign_in_email: publicProcedure
    .input(z.object({ email: z.string(), password: z.string(), }))
    .mutation(async({ input }) => {
        console.log(input.email,input.password)

        const { data, error } = await supabase.auth.signInWithPassword({
            email: input.email,
            password: input.password,
        })
        console.log(data,error)
        return { data, error };
    }),
  
  sign_out: publicProcedure
    .input(z.object({  }))
    .mutation(async({  }) => {
        const { error } = await supabase.auth.signOut()
        return error;
    }),
});
