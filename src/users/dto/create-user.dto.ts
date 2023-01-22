import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({title: "0x388C818CA8B9251b393131C08a736A67ccB19297", description: "EVM chain address (Ethereum)"})
    readonly address: string;
}