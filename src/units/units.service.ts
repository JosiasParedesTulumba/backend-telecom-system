import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUnitDto } from './dto/create-unit.dto';
import { UpdateUnitDto } from './dto/update-unit.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Unit } from './entities/unit.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UnitsService {

  constructor(
    @InjectRepository(Unit)
    private readonly unitRepository: Repository<Unit>,
  ) {}

  async create(createUnitDto: CreateUnitDto): Promise<Unit> {
    const newUnit = this.unitRepository.create(createUnitDto);
    return await this.unitRepository.save(newUnit);
  }

  async findAll(): Promise<Unit[]> {
    return await this.unitRepository.find();
  }

  async findOne(unit_id: number) {
    return this.unitRepository.findOneBy({ unit_id });
  }

  async update(unit_id: number, updateUnitDto: UpdateUnitDto): Promise<Unit> {
    return await this.unitRepository.save({ unit_id, updateUnitDto });
  }
}
