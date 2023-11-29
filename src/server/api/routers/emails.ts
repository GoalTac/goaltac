import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { supabase } from "~/utils/supabaseClient";

export const emailRouter = createTRPCRouter({
  email_register: publicProcedure
    .input(z.object({ email: z.string() }))
    .mutation(async({ input }) => {
        
        console.log(input.email)
        //automatically sets update preferences to true because of supabase
        const { data, error } = await supabase.from('emails').upsert({
            email: input.email
        })
        console.log(data,error)

        //check for duplicate registration
        if(error?.code == '23505') {
            throw new Error('You have already registered')
        }

        if(error) {
            console.log(error.code)
            throw new TRPCError({code: 'UNAUTHORIZED', message: error.message})
        }
  
        return { data, error };
    })
});
