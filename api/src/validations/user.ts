import { body } from "express-validator";

export const registerValidation = [
  body("userName", "Invalid name").isLength({ min: 5 }),
  body("email", "Invalid email address").isEmail(),
  body("password", "Password should contain min. 5 symbols").isLength({
    min: 5,
  }),
  body("avatar", "Inncorrect avatar url").optional().isURL(),
];
