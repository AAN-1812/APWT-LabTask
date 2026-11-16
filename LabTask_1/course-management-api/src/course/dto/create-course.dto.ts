import { IsString, IsNotEmpty, IsNumber, IsOptional, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCourseDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  code: string;

  @IsNotEmpty()
  @IsString()
  instructor: string;

  @IsNumber()
  @Min(1)
  @Max(6)
  @Type(() => Number)
  credits: number;

  @IsOptional()
  @IsString()
  description: string;
}