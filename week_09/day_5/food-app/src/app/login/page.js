import { Button, Paper, TextField } from "@mui/material";

const Login = () => {
  return (
    <>
      <Paper className="w-2/6 mx-auto p-12 absolute top-1/2 left-1/2">
        <form method="POST">
          <TextField
            className="flex w-3/4 mx-auto"
            id="email"
            name="email"
            label="Email"
            variant="standard"
          />
          <TextField
            className="flex w-3/4 mx-auto mt-4"
            id="password"
            name="password"
            label="Password"
            variant="standard"
            type="password"
          />
          <div className="flex w-3/4 mx-auto mt-8">
            <Button className="ml-auto" variant="contained" type="submit">
              Sign In
            </Button>
          </div>
        </form>
      </Paper>
    </>
  );
};

export { Login, Login as default };
