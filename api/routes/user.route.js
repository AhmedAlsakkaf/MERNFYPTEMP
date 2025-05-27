import express from "express";
import {test} from "../controllers/user.controller.js";
// in the user.route.js we add the .js in the fucking routes, where we get our funciotn from the controller.


const router = express.Router();

router.get("/test", test);

export default router;
