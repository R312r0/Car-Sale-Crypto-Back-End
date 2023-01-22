import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import {ConfigModule} from "@nestjs/config";
import { UsersModule } from './users/users.module';
import {User} from "./users/users.model";
import { CarsModule } from './cars/cars.module';
import {Car} from "./cars/cars.model";
import { AuthModule } from './auth/auth.module';

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env'
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, Car],
            autoLoadModels: true
        }),
        UsersModule,
        CarsModule,
        AuthModule,
    ]

})
export class AppModule {}