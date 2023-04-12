import React from "react";
import Paper from "@mui/material/Paper"
import FormControl from "@mui/material/FormControl"
import Input from "@mui/material/Input"
import InputLabel from "@mui/material/InputLabel"
import FormHelperText from "@mui/material/FormHelperText"
import Button from "@mui/material/Button"
import SendIcon  from '@mui/icons-material/Send';

export const UserDetail = () => (
  <Paper>
    <form>
      <FormControl>
        <InputLabel htmlFor="my-input">Name</InputLabel>
        <Input id="my-name" />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-email">Email address</InputLabel>
        <Input id="my-email" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">
          We'll never share your email.
        </FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-phone">Phone</InputLabel>
        <Input id="my-phone" aria-describedby="my-helper-text-phone" />
        <FormHelperText id="my-helper-text-phone">
          Enter your phone number.
        </FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-website">Website</InputLabel>
        <Input id="my-website" aria-describedby="my-helper-text-website" />
        <FormHelperText id="my-helper-text-website">
          Enter your website.
        </FormHelperText>
      </FormControl>
      <Button variant="outlined" startIcon={<SendIcon  />}>
        Delete
        </Button>
    </form>
  </Paper>
);

export default UserDetail;
