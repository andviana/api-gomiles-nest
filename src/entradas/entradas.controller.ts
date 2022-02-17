import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EntradasService } from './entradas.service';
import { CreateEntradaDto } from './dto/create-entrada.dto';
import { UpdateEntradaDto } from './dto/update-entrada.dto';
import { Entrada } from './entities/entrada.entity';
import { ValidationPipe } from 'src/pipes/validation.pipe';

@Controller('entradas')
export class EntradasController {
  constructor(private readonly entradasService: EntradasService) {}

  @Post()
  async create(@Body( new ValidationPipe) createEntradaDto: CreateEntradaDto):Promise<Entrada> {
    return this.entradasService.create(createEntradaDto);
  }

  @Get()
  async findAll():Promise<Entrada[]> {
    return this.entradasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string):Promise<Entrada> {
    return this.entradasService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string, 
    @Body( new ValidationPipe) updateEntradaDto: UpdateEntradaDto
    ):Promise<[number, Entrada[]]> {
    return this.entradasService.update(+id, updateEntradaDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.entradasService.remove(+id);
  }
}
