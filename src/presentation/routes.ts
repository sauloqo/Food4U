import express, { Request, Response } from "express";
import { signUpEndpoint } from "./endpoints/user/signUp";
import { loginEndpoint } from "./endpoints/user/login";
import { getUserInfoEndpoint } from "./endpoints/user/getUserInfo";
import { createRecipeEndPoint } from "./endpoints/recipe/createRecipe";
import { followUserEndpoint } from "./endpoints/user/followUser";
import { getFeedforUserEndpoint } from "./endpoints/feeds/getFeedforUser";
import { editUserInfoEndpoint } from "./endpoints/user/editUserInfo";

const app = express();
app.use(express.json());

app.post('/signup', signUpEndpoint)
app.post('/login', loginEndpoint)
app.get('/user', getUserInfoEndpoint)
app.post('/user/follow', followUserEndpoint)
app.get('/feed', getFeedforUserEndpoint)
app.post('/create/recipe', createRecipeEndPoint)
app.post('/user/editInfo', editUserInfoEndpoint)

export default app;