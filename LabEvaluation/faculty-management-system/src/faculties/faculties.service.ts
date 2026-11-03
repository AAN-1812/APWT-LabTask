import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Faculties } from './entities/faculty.entity.js';
import { CreateFacultyDto } from './dto/create-faculty.dto.js';

@Injectable()
export class FacultiesService {
  constructor(
    @InjectRepository(Faculties)
    private readonly facultiesRepo: Repository<Faculties>,
  ) {}

  async createFaculty(faculty: CreateFacultyDto): Promise<Faculties> {
    try {
      const facultyEntity = await this.facultiesRepo.create(faculty);
      return await this.facultiesRepo.save(facultyEntity);
    } catch {
      throw new BadRequestException('Failed to create instance');
    }
  }
}