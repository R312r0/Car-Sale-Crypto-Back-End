import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Car} from "./cars.model";
import {CreateCarDto} from "./dto/create-car.dto";

@Injectable()
export class CarsService {

    constructor(@InjectModel(Car) private carRepository: typeof Car) {}

    async createCar(dto: CreateCarDto) {
        const cars = await this.carRepository.create(dto);
        return cars;
    }

    async getAllCars() {
        const cars = await this.carRepository.findAll({include: {all: true}});
        return cars;
    }

}
