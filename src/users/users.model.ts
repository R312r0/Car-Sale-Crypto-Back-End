import {Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Car} from "../cars/cars.model";

interface UserCreationAttribute {
    address: string,
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttribute> {

    @ApiProperty({example: '1', description: "Uniq identifier"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true,  primaryKey: true})
    id: number;

    @ApiProperty({example: '0x388C818CA8B9251b393131C08a736A67ccB19297', description: "Ethereum address"})
    @Column({type: DataType.STRING, unique: true})

    address: string;

    @ApiProperty({example: [{brand: "BMW", model: "535i", year: "2015"}], description: "User cars for sale"})
    @HasMany(() => Car, "id")
    cars: [Car]

}