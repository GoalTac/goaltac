"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Icons } from "./ui/icons";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { api } from "~/utils/api";
import { useToast } from "./ui/use-toast";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export function SignInForm() {
  const { toast } = useToast();
  const router = useRouter();

  const signInEmailMutation = api.auth.signInEmail.useMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    signInEmailMutation.mutate(data, {
      onSuccess: () => {
        form.reset();
        toast({
          duration: 3000,
          variant: "success",
          description: "Logging in now...",
        });
        void router.push("/dashboard");
      },
      onError: (error) =>
        toast({
          duration: 6000,
          variant: "destructive",
          description: error.message,
        }),
    });
  }

  return (
    <div className="grid gap-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-900 dark:text-white">Email</FormLabel>
                    <FormControl>
                      <Input 
                      type='email' className="text-black"
                      placeholder="Enter your email.." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-900 dark:text-white">Password</FormLabel>
                    <FormControl>
                      <Input className='text-black'
                        type="password"
                        placeholder="Enter your password..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                {/*<div className="flex items-center h-5">
                  <Input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required/>
                </div>
                <div className="ml-3 text-xs">
                  <Label className="text-gray-500 dark:text-gray-300">Remember me</Label>
                </div>*/}
              </div>
              <Link
                href="/"
                className="text-xs font-medium text-black hover:underline dark:text-white"
              >
                Forgot password?
              </Link>
            </div>
            <Button
              type="submit"
              disabled={signInEmailMutation.isLoading}
              className="focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
            >
              {signInEmailMutation.isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Sign In with Email
            </Button>
            <p className="mt-2 text-sm font-light text-gray-500 dark:text-gray-400">
              Don&apos;t have an account yet?{" "}
              <Link
                href="/signup"
                className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
}
/**
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{" "}
        Google
      </Button>
 */
