/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Loader2 } from "lucide-react";
import { FormInputField } from "./FormInput";
import { NavLink } from "react-router";

interface AuthFormProps {
  type: "login" | "signup";
}

const baseSchema = {
  email: z.string().email("Invalid email").max(50),
  password: z.string().min(8, "Password must be at least 8 characters").max(50),
};

const loginSchema = z.object(baseSchema);
const signupSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  ...baseSchema,
});

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const isSignup = type === "signup";
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof signupSchema | typeof loginSchema>>({
    resolver: zodResolver(isSignup ? signupSchema : loginSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      // Simulate request
      await new Promise((res) => setTimeout(res, 1500));
      console.log("Submitted data:", data);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 bg-background shadow-xl rounded-2xl p-8 border border-border">
      <h2 className="text-2xl font-semibold text-center mb-6">
        {isSignup ? "Create an Account" : "Welcome Back"}
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {isSignup && (
            <FormInputField
              control={form.control}
              name="name"
              label="Name"
              placeholder="Your full name"
              disabled={isLoading}
            />
          )}

          <FormInputField
            control={form.control}
            name="email"
            label="Email"
            type="email"
            placeholder="you@example.com"
            disabled={isLoading}
          />

          <FormInputField
            control={form.control}
            name="password"
            label="Password"
            type="password"
            placeholder="********"
            disabled={isLoading}
          />

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : isSignup ? (
              "Sign Up"
            ) : (
              "Log In"
            )}
          </Button>
        </form>
      </Form>
      <p className="text-sm text-muted-foreground text-center mt-4">
        {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
        <NavLink
          to={isSignup ? "/login" : "/signup"}
          className="text-primary hover:underline"
        >
          {isSignup ? "Log in" : "Sign up"}
        </NavLink>
      </p>
    </div>
  );
};

export default AuthForm;
