import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { Products } from './entities/products.entity.js';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { PartialUpdateProductDto } from './dto/partial-update-product.dto.js';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private readonly productsRepo: Repository<Products>,
  ) {}

  async create(dto: CreateProductDto) {
    const product = this.productsRepo.create(dto);
    const saved = await this.productsRepo.save(product);
    return { message: 'Product created successfully', data: saved };
  }

  async findAll() {
    const data = await this.productsRepo.find({
      order: { createdAt: 'DESC' },
    });
    return { message: 'All products fetched', count: data.length, data };
  }

  async findOne(id: number) {
    const product = await this.productsRepo.findOne({ where: { id } });
    if (!product) throw new NotFoundException(`Product with id ${id} not found`);
    return { message: 'Product fetched', data: product };
  }

  async update(id: number, dto: PartialUpdateProductDto) {
    await this.findOne(id);
    await this.productsRepo.update(id, dto);
    const updated = await this.productsRepo.findOne({ where: { id } });
    return { message: 'Product updated successfully', data: updated };
  }

  async replace(id: number, dto: UpdateProductDto) {
    await this.findOne(id);
    await this.productsRepo.update(id, dto);
    const updated = await this.productsRepo.findOne({ where: { id } });
    return { message: 'Product replaced successfully', data: updated };
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.productsRepo.delete(id);
    return { message: 'Product deleted successfully', id };
  }

  async findByCategory(category: string) {
    const data = await this.productsRepo.find({ where: { category } });
    return { message: 'Products fetched by category', count: data.length, data };
  }

  async search(keyword: string) {
    const data = await this.productsRepo.find({
      where: { name: ILike(`%${keyword}%`) },
    });
    return { message: 'Search results', count: data.length, data };
  }

  async toggleActive(id: number) {
    const product = await this.productsRepo.findOne({ where: { id } });
    if (!product) throw new NotFoundException(`Product with id ${id} not found`);
    product.isActive = !product.isActive;
    const saved = await this.productsRepo.save(product);
    return { message: 'Product toggled successfully', data: saved };
  }
}