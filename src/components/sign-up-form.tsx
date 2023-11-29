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
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useState } from "react";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export function SignUpForm({ setSubmitted }: any) {
  const { toast } = useToast();
  const router = useRouter();
  const supabase = useSupabaseClient()

  const signUpEmailMutation = api.auth.signUpEmail.useMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(formData: z.infer<typeof formSchema>) {
    async function signUp() {
      const { data, error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
              emailRedirectTo: "http://localhost:3000/auth/callback"
          }
      })

      if(error) {
          throw new Error(error.message)
      }

      const userExists = data?.user?.identities?.length == 0

      if (userExists) {
          throw new Error('The email is already in use')
      }

      if(data.session) await supabase.auth.setSession(data.session)

      return { data, error, userExists };
    }

    const process = await signUp()
    
    //this means the singup process was successful
    if (process.data) {
      form.reset();
      toast({
        variant: "success",
        title: "One more thing...",
        description:
          "A verification email has been sent to your inbox. Please verify your account!",
      });
      setSubmitted(formData.email)
    }

    if (process.error) {
      toast({
        duration: 6000,
        variant: "destructive",
        description: process.error,
      })
    }
    
    /*signUpEmailMutation.mutate(data, {
      onSuccess: () => {
        form.reset();
        toast({
          variant: "success",
          title: "One more thing...",
          description:
            "A verification email has been sent to your inbox. Please verify your account!",
        });
      },
      onError: (error) =>
        toast({
          duration: 6000,
          variant: "destructive",
          description: error.message,
        }),
    });*/
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
                    {signUpEmailMutation.data?.userExists && 
                      <span className="text-xs text-destructive">
                      {" Email already registed"}
                    </span>}
                    <FormControl>
                      <Input className="text-black"
                      type='email'
                      placeholder="Enter your email.." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}/>
          </div>
          <div>
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-900 dark:text-white">Password</FormLabel>
                  <FormControl>
                    <Input className="text-black"
                      type="password"
                      placeholder="Enter your password..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}/>
          </div>
          <Button
            type="submit"
            disabled={signUpEmailMutation.isLoading}
            className="focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4">
            {signUpEmailMutation.isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign Up with Email
          </Button>
        </div>
      </form>
      </Form>

      <p className="px-8 text-center text-sm text-muted-foreground">
        By clicking continue, you agree to our{" "}
        <Link
          href="/terms"
          className="underline underline-offset-4 hover:text-primary"
        >
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link
          href="/privacy"
          className="underline underline-offset-4 hover:text-primary"
        >
          Privacy Policy
        </Link>
        .
      </p>
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
