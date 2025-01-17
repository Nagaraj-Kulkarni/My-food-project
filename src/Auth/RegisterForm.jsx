import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../component/State/Authentication/Action";
 

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  role: "ROLE_CUSTOMER"
};

export default function RegisterForm() {
  const navigate = useNavigate();
  const dispatch= useDispatch();
  
  const handleSubmit =(values)=> {
    console.log("form values", values)
     dispatch(registerUser({userData:values, navigate}))

  };
  return (
    <div>
      <Typography variant="h5" className="text-center">
        Login
      </Typography>

      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field
            as={TextField}
            name="fullName"
            label="Full Name"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <Field
            as={TextField}
            name="email"
            label="Email"
            fullWidth
            variant="outlined"
            margin="normal"
          />

          <Field
            as={TextField}
            name="password"
            label="Password"
            fullWidth
            variant="outlined"
            margin="normal"
            type="password"
          />

          <FormControl fullWidth  margin="normal">
            <InputLabel id="role-simple-select-label">Role</InputLabel>
            <Field
            fullWidth
            margin="normal"
            as={Select}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="role"
              //value={age}
              label="Role"
              //onChange={handleChange}
            >
              <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
              <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>
            </Field>
          </FormControl>

          <Button
            sx={{ mt: 2, padding: "1rem" }}
            className="mt-5"
            fullWidth
            type="submit"
            variant="contained"
          >
            Register
          </Button>
        </Form>
      </Formik>

      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        if havwe an account already?
        <Button size="small" onClick={() => navigate("/account/login")}>
          Login
        </Button>
      </Typography>
    </div>
  );
};

//export default RegisterForm;
