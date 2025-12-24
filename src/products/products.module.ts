import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductAlmacen } from './entities/product_almacen.entity';
import { ProductSeries } from './entities/product-series.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, ProductAlmacen, ProductSeries]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
