import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { CustomersModule } from './customers/customers.module';
import { WarehousesModule } from './warehouses/warehouses.module';
import { UnitsModule } from './units/units.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { SalesModule } from './sales/sales.module';
import { ShoppingModule } from './shopping/shopping.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'admin',
      database: 'bd_telecom_system',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: false,
    }),
    AuthModule,
    UsersModule,
    ProductsModule,
    CustomersModule,
    WarehousesModule,
    UnitsModule,
    SuppliersModule,
    SalesModule,
    ShoppingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
