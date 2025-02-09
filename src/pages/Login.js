"use client";

import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast"; // ✅ Fixed Import
import Link from "next/link";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { toast } = useToast();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Email and password cannot be empty.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      toast({
        title: "Login Failed",
        description: "Invalid email or password.",
        variant: "destructive",
      });
    } else {
      router.push("/dashboard"); // Redirect after successful login
    }
    setLoading(false);
  };

  if (status === "loading") {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-gray-600" />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md shadow-lg"> {/* ✅ Better Width */}
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">
            {session ? `Welcome, ${session.user?.name}` : "Welcome to ProjeX"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {!session ? (
            <>
              <div className="space-y-4">
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                />
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                />
                <Button
                  className="w-full"
                  onClick={handleLogin}
                  disabled={loading}
                >
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Login"}
                </Button>
              </div>

              <div className="mt-4 text-center text-sm text-gray-500">OR</div>

              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2 mt-2"
                onClick={() => signIn("google")}
                disabled={loading}
              >
                <FcGoogle size={20} />
                Continue with Google
              </Button>

              <p className="mt-3 text-sm text-center">
                Don't have an account?{" "}
                <Link href="/register" className="text-blue-600 hover:underline">
                  Register here
                </Link>
              </p>
            </>
          ) : (
            <Button className="w-full" onClick={() => signOut()}>
              Logout
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
