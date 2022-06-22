import { body } from "express-validator";

export const createPostValidation = [
  body("title", "Enter article title").isLength({ min: 3 }).isString(),
  body("text", "Enter article text").isLength({ min: 10 }).isString(),
  body("tags", "Incorrect tags format(use array)").optional().isArray(),
  body("imageUrl", "Incorrect image link").optional().isString(),
];
