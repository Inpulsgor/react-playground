import { lazy } from "react";

export const HomePage = lazy(
  () => import("pages/Home" /* webpackChunkName: "HomePage" */),
);

export const LoginPage = lazy(
  () => import("pages/Login" /* webpackChunkName: "LoginPage" */),
);

export const RegistrationPage = lazy(
  () => import("pages/Registration" /* webpackChunkName: "RegistrationPage" */),
);

export const RecoveryPage = lazy(
  () => import("pages/Recovery" /* webpackChunkName: "RecoveryPage" */),
);

export const BlogPage = lazy(
  () => import("pages/Blog" /* webpackChunkName: "BlogPage" */),
);

export const NotFoundPage = lazy(
  () => import("pages/NotFound" /* webpackChunkName: "NotFoundPage" */),
);

export enum ROUTES {
  HOME = "/",
  BLOG = "blog",
  POST = "blog/post/:id",
  NEW_POST = "blog/post/new-post",
  AUTH = "/auth",
  RECOVERY = "/auth/recovery",
  REGISTRATION = "/auth/registration",
  NOT_FOUND = "*",
}
