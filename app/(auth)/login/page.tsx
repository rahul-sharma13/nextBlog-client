"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import useLogin from "@/hooks/useLogin";

export default function Login() {
  const { loading, userLogin, handleChange, errorMessage } = useLogin();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
      <Card className="w-full max-w-[350px] sm:w-[350px]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl md:text-3xl text-center">
            Login
          </CardTitle>
          <CardDescription className="text-center">
            Excited to see you back!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={userLogin} className="space-y-4">
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email" className="text-base">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  onChange={handleChange}
                  className="h-10"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password" className="text-base">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  onChange={handleChange}
                  className="h-10"
                />
              </div>
            </div>
            <Button className="w-full mt-6" type="submit" disabled={loading}>
              {loading ? "Please wait" : "Login"}
            </Button>
          </form>
        </CardContent>
      </Card>
      {errorMessage && (
        <p className="text-red-600 text-base sm:text-lg text-center mt-4 px-4 w-full max-w-[350px]">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
