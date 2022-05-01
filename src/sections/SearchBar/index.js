import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "../../components/Form/TextField";
// import * as Yup from "yup";
import Button from "../../components/Button";

const SearchForm = () => {
  // const validate = Yup.object({
  //   firstName: Yup.string()
  //     .max(15, "Must be 15 characters or less")
  //     .required("Required"),
  //   lastName: Yup.string()
  //     .max(20, "Must be 20 characters or less")
  //     .required("Required"),
  //   email: Yup.string().email("Email is invalid").required("Email is required"),
  //   password: Yup.string()
  //     .min(6, "Password must be at least 6 charaters")
  //     .required("Password is required"),
  //   confirmPassword: Yup.string()
  //     .oneOf([Yup.ref("password"), null], "Password must match")
  //     .required("Confirm password is required"),
  // });
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
          <Form>
            <TextField label="First Name" name="firstName" type="text" />
            <TextField label="last Name" name="lastName" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="password" name="password" type="password" />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <Button
              onClickCallback={Function.prototype}
              btnText="Search"
              btnSize="small"
              btnType="Search"
              className="btn btn-dark mt-3"
              type="submit"
            />
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default SearchForm;
