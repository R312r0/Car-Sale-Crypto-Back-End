import {ApiProperty} from "@nestjs/swagger";
import {User} from "../../users/users.model";

export class CreateCarDto {
    @ApiProperty({title: "BMW", description: "Car brand"})
    readonly brand: string;
    @ApiProperty({title: "535i", description: "Car model"})
    readonly model: string;

    @ApiProperty({title: "2015", description: "Year car was produced"})
    readonly year: string;


    @ApiProperty({title: "1", description: "Id of car owner"})
    readonly owner: User;

}