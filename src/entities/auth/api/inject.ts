import Injector from 'injector';
import { AUTH_SERVICE, AUTH_REPO } from 'injector/constants';
import HTTPAuthRepo from './HTTPAuthRepo';
import HTTPAuthService from './HTTPAuthService';
// import MockAuthRepo from "./MockAuthRepo";

Injector.set(AUTH_SERVICE, new HTTPAuthService());
Injector.set(AUTH_REPO, new HTTPAuthRepo());
// Injector.set(AUTH_REPO, new MockAuthRepo());
