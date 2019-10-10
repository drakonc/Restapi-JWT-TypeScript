import { Request, Response } from 'express';
import User, { IUser } from '../models/User';

import jwt from 'jsonwebtoken';

export const singup = async (req: Request, res: Response) => {
	//Guardando un nuevo Usuario
	const user: IUser = new User({
		username: req.body.username,
		email: req.body.email,
		password: req.body.password
	});
	user.password = await user.encryptPassword(user.password);
	const savedUser = await user.save();

	//token
	const token: string = jwt.sign({ _id: savedUser._id }, process.env.TOKEN_SECRET || 'v6qOLR6R62GSKo',{
		expiresIn: 60*60*24
	});

	res.header('auth-token', token).json(savedUser);
};

export const singin = async (req: Request, res: Response) => {
	const { email, password } = req.body

	const user = await User.findOne({email: email});
	if(!user) return res.status(400).json('Invalid Email');

	const correctPassword: boolean = await user.validatePassword(password);
	if(!correctPassword) return res.status(400).json('Invalid Password');

	//token
	const token: string = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET || 'v6qOLR6R62GSKo',{
		expiresIn: 60*60*24
	});

	res.header('auth-token', token).json(user);
};

export const profile = async (req: Request, res: Response) => {
	const user = await User.findById(req.userId,{ password: 0});
	if(!user) return res.status(400).json('User no Found');
	res.status(200).json(user);
};
