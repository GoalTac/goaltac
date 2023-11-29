import { postRouter } from "~/server/api/routers/post";
import { createTRPCRouter } from "~/server/api/trpc";
import { userRouter } from "./routers/user";
import { authRouter } from "./routers/auth";
import { emailRouter } from "./routers/emails";
import { emailFormRouter } from "./routers/email-forms";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  user: userRouter,
  auth: authRouter,
  email: emailRouter,
  emailForms: emailFormRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
