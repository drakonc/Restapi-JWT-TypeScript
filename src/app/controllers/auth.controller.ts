import { Request, Response } from "express";
import User, { IUser } from "../models/User";

import jwt from "jsonwebtoken";

export const singup = async (req:Request ,res:Response) => {
    //Guardando un nuevo Usuario
    const user: IUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    const savedUser = await user.save();
    console.log(savedUser)

    //token
    jwt.sign({ _id: savedUser._id }, process.env.TOKEN_SECRET || 'tokentest');

    res.send('singup');
};

export const singin = (req:Request ,res:Response) => {
    res.send('singin');
};

export const profile = (req:Request ,res:Response) => {
    res.send('profile');
};
