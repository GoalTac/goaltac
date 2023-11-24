"use client"

import * as React from "react"

import { cn } from "../utils"
import { Icons } from "./ui/icons"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { api } from "~/utils/api";
import { useToast } from "./ui/use-toast"
import { Form, FormLabel } from "./ui/form"
import { redirect } from "next/dist/server/api-utils"
import { useRouter } from "next/router";


interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}
interface FormData {
  email: string,
  password: string
}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [data, setData] = React.useState<FormData>({
    email: '',
    password: ''
  })
  const [isFormValid, setFormValid] = React.useState<boolean>(false)
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email: string = event.target.value
    setData({
      ...data,
      email: email,
    });
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      password: event.target.value,
    });
  };

  const signinEmail = api.auth.sign_in_email.useMutation();
  const { toast } = useToast()
  const router = useRouter()

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    //valiation of user authentication
    const process = async() => {

      //sends request to routers/auth.ts to sign in email
      const emailSignIn = await signinEmail.mutateAsync({
        email: data.email,
        password: data.password
      })

      //if the email & pass have issues
      const error = emailSignIn.error
      console.log(error)
      if (error) {
        setFormValid(true)
        return { error: Error("The email or password is incorret, or maybe you haven't registered the email yet") }
      } else {
        setFormValid(false)
        return { error: null }
      }
    }
    
    //can the account details be registed successfully?
    const status = await process().finally(()=>setIsLoading(false))

    //if so, reset the data
    if (status.error == null) {
      setData({
        email: '',
        password: ''
      })
      toast({
        duration: 3000,
        variant: 'success',
        description: 'Logging in now...'
      })
      router.push("/dashboard")
    } else {
      toast({
        duration: 6000,
        variant: 'destructive',
        description: status.error.message
      })
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
      <div className="grid gap-2">
        <div>
            <Label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</Label>
            <Input type="email" value={data.email} onChange={(event)=>handleEmailChange(event)} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required/>
        </div>
        <div>
            <Label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</Label>
            <Input type="password" value={data.password} onChange={(event)=>handlePasswordChange(event)} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
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
            <a href="/" className="text-xs font-medium text-black hover:underline dark:text-white">Forgot password?</a>
        </div>
        <Button type='submit' disabled={isLoading} className='w-full text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'>
          {isLoading && (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          )}
          Sign In with Email
        </Button>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400 mt-2">
            Don’t have an account yet? <a href="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
        </p>
      </div>
      </form>
    </div>
  )
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