import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  price: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Type(() => Number)
  stock: number;

  @IsNotEmpty()
  @IsString()
  category: string;

  @IsOptional()
  @IsBoolean()
  isActive: boolean;
}