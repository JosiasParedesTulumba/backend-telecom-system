import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { ApiPeruService } from 'src/common/api-peru/api-peru.service';

@Controller('customers')
export class CustomersController {
  constructor(
    private readonly customersService: CustomersService,
    private readonly apiPeruService: ApiPeruService,
  ) { }

  @Get('consult/:docType/:docNumber')
  async consult(@Param('docType') docType: string, @Param('docNumber') docNumber: string) {
    if (docType === 'dni') {
      return this.apiPeruService.getPersonByDni(docNumber);
    } else if (docType === 'ruc') {
      return this.apiPeruService.getCompanyByRuc(docNumber);
    } else {
      throw new BadRequestException('Invalid document type. Must be "dni" or "ruc".');
    }
  }

  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customersService.create(createCustomerDto);
  }

  @Get()
  findAll() {
    return this.customersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    return this.customersService.update(+id, updateCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customersService.remove(+id);
  }
}
