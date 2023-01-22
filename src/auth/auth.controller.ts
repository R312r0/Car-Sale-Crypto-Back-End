import {Body, Controller, Post} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {CreateUserDto} from "../users/dto/create-user.dto";
import {AuthService} from "./auth.service";
import {RequestWalletDto} from "./dto/request-wallet.dto";

@ApiTags("Authorization")
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {
    }

    @Post('/login')
    login(@Body() userDto: CreateUserDto) {
        return this.authService.login(userDto);
    }

    @Post('/req-wallet')
    register(@Body() reqWDto: RequestWalletDto) {
        // create wallet and send it to specified email.
        return this.authService.createWallet(reqWDto);
    }

}
