import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { FacultiesService } from './faculties.service.js';
import { CreateFacultyDto } from './dto/create-faculty.dto.js';
import { Faculties } from './entities/faculty.entity.js';

@Controller('faculties')
export class FacultiesController {
  constructor(private readonly facultiesService: FacultiesService) {}

  @Post('create-faculty')
  @UsePipes(new ValidationPipe())
  async createFaculty(@Body() faculty: CreateFacultyDto): Promise<Faculties> {
    return await this.facultiesService.createFaculty(faculty);
  }
}