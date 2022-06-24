import * as Yup from "yup";

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First name is required")
    .min(3, "To short")
    .max(25, "To long"),
  lastName: Yup.string()
    .required("Last name is required")
    .min(3, "To short")
    .max(25, "To long"),
  email: Yup.string().email("Invalid email").required("The email is required"),
  password: Yup.string().required("The password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password doesn't match")
    .required("You need to confirm your password"),
});

export default SignUpSchema;
