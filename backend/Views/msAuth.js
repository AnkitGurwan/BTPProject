import express from "express"
import { microsoftLogin, microsoftLoginRedirect } from "../Controllers/msAuthController.js";
// const passport = require('passport');
import { routes } from "../routes.js";


const authRouter = express.Router();
 

authRouter.get(routes.microsoft, microsoftLogin);
authRouter.get(routes.microsoft + "/redirect", microsoftLoginRedirect);
// authRouter.get(
//   routes.microsoftCallback,
//   passport.authenticate('microsoft', { failureRedirect: '/user-info' }),
//   controllers.authController.postMicrosoftLogin,
// );

export default  authRouter ;