import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { Resend } from 'resend';
import { WelcomeEmailTemplate } from "~/components/email-templates/welcome";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { supabase } from "~/utils/supabaseClient";

const resend = new Resend(process.env.RESEND_API_KEY);

export const emailRouter = createTRPCRouter({
    send: publicProcedure    
    .input(z.object({ name: z.string(), email: z.string(), type: z.enum(['welcome']) }))
    .mutation(async({ input }) => {
        await resend.emails.send({
            to: input.email,
            from: 'email',
            subject: input.type,
            text: '',
            react: WelcomeEmailTemplate({name: input.name})
        })
    }),
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
    }),
});
