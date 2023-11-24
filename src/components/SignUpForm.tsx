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
  const [emailUsed, setEmailUsed] = React.useState<boolean>(false)
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

  const signupEmail = api.auth.sign_up_email.useMutation();
  const { toast } = useToast()

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    //valiation of user authentication
    const process = async() => {

      //sends request to routers/auth.ts to sign up email
      const emailSignUp = await signupEmail.mutateAsync({
        email: data.email,
        password: data.password
      })

      //if the email is in use
      const emailExists = emailSignUp.userExists
      if (emailExists) {
        setEmailUsed(true)
        return { error: Error("The email is already in use. Please try another one.") }
      } else {
        setEmailUsed(false)
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
        variant: 'success',
        title: 'One more thing...',
        description: 'A verification email has been sent to your inbox. Please verify your account!'
      })
    } else {
      toast({
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
              {emailUsed && <span className="text-destructive text-xs"> {' Email already registed. Try a different one!'}</span>}
              <Input type="email" required value={data.email} onChange={(event)=>handleEmailChange(event)} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"/>
          </div>
          <div>
              <Label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</Label>
              <Input type="password" required value={data.password} onChange={(event)=>handlePasswordChange(event)} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
          </div>
          <Button type='submit' disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign Up with Email
          </Button>
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