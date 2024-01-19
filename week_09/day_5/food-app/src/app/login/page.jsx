"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button, Paper, TextField } from "@mui/material";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";

const LoginPage = () => {
  const router = useRouter();

  const supabase = createClient(
    "https://xglwanpkbcvknvwjbovk.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhnbHdhbnBrYmN2a252d2pib3ZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUwMzkxNjAsImV4cCI6MjAyMDYxNTE2MH0.WiXWLqfjCg_Gs0mNsjgPBi-qvBoiyhMvmIvchaSelfs"
  );

  const signIn = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (data.user && data.session) {
      router.push("/home");
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Paper className="w-2/6 mx-auto p-12 absolute top-1/2 left-1/2">
        <h1>Log In</h1>
        <form method="POST">
          <TextField
            className="flex w-3/4 mx-auto"
            id="email"
            name="email"
            label="Email"
            variant="standard"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            className="flex w-3/4 mx-auto mt-4"
            id="password"
            name="password"
            label="Password"
            variant="standard"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex w-3/4 mx-auto mt-8">
            <Link href="/password-reset">
              <Button className="ml-auto" variant="outlined">
                Forgot Password
              </Button>
            </Link>
            <Button
              className="ml-auto"
              variant="outlined"
              type="submit"
              onClick={(e) => signIn(e)}
            >
              Sign In
            </Button>
          </div>
        </form>
        If you do not have an account, please{" "}
        <Link href="/register">Register</Link>.
      </Paper>
    </>
  );
};

export { LoginPage, LoginPage as default };
