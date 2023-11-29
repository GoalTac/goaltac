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
import { PiShareNetwork, PiShareNetworkThin } from "react-icons/pi";

const formSchema = z.object({
  email: z.string().email()
});

export function BetaSignUp() {
  const { toast } = useToast();
  const router = useRouter();
  const supabase = useSupabaseClient()

  const betaRegisterMutation = api.email.email_register.useMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(formData: z.infer<typeof formSchema>) {
    betaRegisterMutation.mutate(formData, {
        onSuccess: () => {
          form.reset();
          toast({
            variant: "success",
            title: "Thank you!",
            description:
              "You have successfully registered to be notified for updates and trial testing of pre-release versions",
          });
        },
        onError: (error) => {
            form.setError("email", { type: 'custom', message: error.message });
            setTimeout(()=>{
                form.clearErrors("email")
            },6000)
        }
      })
  }

  return (
    <div className="grid gap-2 max-w-[20rem] h-min">
      <div className="shadow-lg space-y-2 p-4 sm:p-6 md:space-y-4 bg-white rounded-lg">
        <h1 className="text-lg text-center mx-auto leading-tight tracking-tight text-gray-800 font-small dark:text-white md:text-lg">
            <span>Register for updates</span>
        </h1>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-4">
                <div>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                    <FormItem>
                        <FormControl>
                        <Input 
                        type='email' className="text-black bg-gray-100"
                        placeholder="Enter your email.." {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                </div>
                <Button
                type="submit"
                disabled={betaRegisterMutation.isLoading}
                className="gap-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg px-5 py-5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 bg-gray-800 hover:bg-gray-900">
                <PiShareNetwork/>
                Enter the Network
                </Button>
            </div>
            </form>
        </Form>
      </div>
      
    </div>
  );
}
