import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({title: "test@mail.com", description: "Email"})
    readonly email: string;
    @ApiProperty({title: "abX_123-yuiL", description: "Password"})
    readonly password: string;
}