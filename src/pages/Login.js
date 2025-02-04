"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Login() {

    const login = () => {
        alert('Login')
    }

    return (
        <Card
            className="w-[400px] py-4 px-8"
        >
            <CardHeader>
                <CardTitle>Welcome to ProjeX</CardTitle>
                <CardDescription>Please login to continue.</CardDescription>
            </CardHeader>
            <CardContent>
                <form> 
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" placeholder="Email" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" placeholder="Password" />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">Register</Button>
                <Button variant="default" onClick={login}>Login</Button>
            </CardFooter>
        </Card>
    );
}