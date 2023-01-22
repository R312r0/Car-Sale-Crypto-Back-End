import {Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Car} from "../cars/cars.model";

interface UserCreationAttribute {
    email: string,
    password: string
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttribute> {
    @ApiProperty({example: '1', description: "Uniq identifier"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'test@mail.com', description: "Users email"})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: 'abX_123-yuiL', description: "Users password"})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: [{brand: "BMW", model: "535i", year: "2015"}], description: "User cars for sale"})
    @HasMany(() => Car, "id")
    cars: [Car]

}