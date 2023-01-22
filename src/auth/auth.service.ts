import {Injectable} from '@nestjs/common';
import {CreateUserDto} from "../users/dto/create-user.dto";
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";
import {RequestWalletDto} from "./dto/request-wallet.dto";
import {ethers} from "ethers";
import * as nodemailer from 'nodemailer';

@Injectable()
export class AuthService {

    constructor(private userService: UsersService, private jwtService: JwtService) {}

    async login(userDto: CreateUserDto) {
        const candidate = await this.userService.getUserByAddress(userDto.address);

        if(candidate) {
            return this.generateToken(candidate);
        }
        else {
            const newUser = await this.userService.createUser(userDto);
            return this.generateToken(newUser);
        }
    }

    async createWallet(reqWDto: RequestWalletDto) {

        const wallet = ethers.Wallet.createRandom();
        const transporter = nodemailer.createTransport({
            service: process.env.EMAIL_SERVICE,
            host: 'smtp.gmail.com',
            secure: false,
            auth: {
                user: process.env.EMAIL_AUTH,
                pass: process.env.EMAIL_AUTH_PASSWORD
            }
        })
        const mailOptions = {
            from: process.env.EMAIL_AUTH,
            to: reqWDto.email,
            subject: "New wallet request",
            text: `
            
                Requested new wallet address, sensible information will not store on our servers just public address!
            
                address: ${wallet.address}
                seed-phrase: ${wallet.mnemonic.phrase}
                private-key: ${wallet.privateKey}
            `
        }

        try {
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error)
                }
                else {
                    console.log("Email was sent successfully")
                }
            })
            return {status: 200}

        }
        catch (e) {
            return {status: 400}
        }

    }

    async generateToken(user) {
        const payload = {id: user.id, address: user.address}
        return {
            token: this.jwtService.sign(payload)
        }
    }
}
