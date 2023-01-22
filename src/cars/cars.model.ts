import {BelongsTo, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.model";

interface CarCreationAttribute {
    brand: string,
    model: string,
    year: string
}

@Table({tableName: 'cars'})
export class Car extends Model<Car, CarCreationAttribute> {

    @ApiProperty({example: 1, description: "Uniq identifier"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'BMW', description: "Car brand name"})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    brand: string;

    @ApiProperty({example: '5 series', description: "Model of car"})
    @Column({type: DataType.STRING, allowNull: false})
    model: string;


    @ApiProperty({example: '2015', description: "Year when car was product"})
    @Column({type: DataType.STRING, allowNull: false})
    year: string;

    @BelongsTo(() => User, "id")
    owner: User;

}