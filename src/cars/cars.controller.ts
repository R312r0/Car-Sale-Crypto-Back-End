import {Body, Controller, Get, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse} from "@nestjs/swagger";
import {Car} from "./cars.model";
import {CreateCarDto} from "./dto/create-car.dto";
import {CarsService} from "./cars.service";

@Controller('cars')
export class CarsController {
    constructor(private carService: CarsService) {}

    @ApiOperation({summary: "Car creating"})
    @ApiResponse({status: 200, type: Car})
    @Post()
    create(@Body() carDto: CreateCarDto) {
        return this.carService.createCar(carDto);
    }

    @ApiOperation({summary: "Fetch all cars"})
    @ApiResponse({status: 200, type: [Car]})
    @Get()
    getAll() {
        return this.carService.getAllCars();
    }

}
