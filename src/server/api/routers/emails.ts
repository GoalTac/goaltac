import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
/**
 * Need to finish the email router stuff
 */
const resend = new Resend(process.env.RESEND_API_KEY);
let example = {
  id: 1,
  name: "Hello World",
};

export const emailRouter = createTRPCRouter({
  sendForgotPassword: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  sendWelcome: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  
  sendVerification: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      example = { id: example.id + 1, name: input.name };
      return example;
    }),

  getLatest: publicProcedure.query(() => {
    return example;
  }),
});
