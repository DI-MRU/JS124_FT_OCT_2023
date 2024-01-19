"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Button, Paper } from "@mui/material";
import { createClient } from "@supabase/supabase-js";

const HomePage = () => {
  const router = useRouter();

  const supabase = createClient(
    "https://xglwanpkbcvknvwjbovk.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhnbHdhbnBrYmN2a252d2pib3ZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUwMzkxNjAsImV4cCI6MjAyMDYxNTE2MH0.WiXWLqfjCg_Gs0mNsjgPBi-qvBoiyhMvmIvchaSelfs"
  );

  const [userEmail, setUserEmail] = useState("");

  const getUserEmail = async () => {
    const { data, error } = await supabase.auth.getSession();
    if (data) {
      setUserEmail(data.session.user.email);
    } else {
      console.log(error);
    }
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    router.push("/login");
  };

  useEffect(() => {
    getUserEmail();
  }, []);

  useEffect(() => {
    console.log(`The user email is ${userEmail}`);
  }, [userEmail]);

  return (
    <Paper className="w-2/6 mx-auto p-12 absolute top-1/2 left-1/2">
      <h1>Home Page</h1>
      <ul>
        <li>The user email is: {userEmail}</li>
      </ul>
      <Button
        className="ml-auto"
        variant="outlined"
        onClick={(e) => signOut(e)}
      >
        Sign Out
      </Button>
    </Paper>
  );
};

export { HomePage, HomePage as default };
