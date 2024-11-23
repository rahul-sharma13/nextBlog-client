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
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Excited to see you back!</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={userLogin}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Password</Label>
                <Input
                  id="password"
                  placeholder="Enter your password"
                  onChange={handleChange}
                />
              </div>
            </div>
            <Button className="mt-5" type="submit" disabled={loading}>
              {loading ? "Please wait" : "Login"}
            </Button>
          </form>
        </CardContent>
      </Card>
      {errorMessage && (
        <p className="text-red-600 text-lg text-center mt-3">{errorMessage}</p>
      )}
    </div>
  );
}
