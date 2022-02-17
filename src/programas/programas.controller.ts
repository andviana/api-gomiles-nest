import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  
} from '@nestjs/common';
import { ProgramasService } from './programas.service';
import { CreateProgramaDto } from './dto/create-programa.dto';
import { UpdateProgramaDto } from './dto/update-programa.dto';
import { Programa } from './entities/programa.entity';
import { ValidationPipe } from 'src/pipes/validation.pipe';

@Controller('programas')
export class ProgramasController {
  constructor(private readonly programasService: ProgramasService) {}

  @Post()
  async create(@Body(new ValidationPipe) createProgramaDto: CreateProgramaDto):Promise<Programa> {
    return this.programasService.create(createProgramaDto);
  }

  @Get()
  async findAll():Promise<Programa[]> {
    return this.programasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Programa> {
    return this.programasService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body(new ValidationPipe) updateProgramaDto: UpdateProgramaDto,
  ):Promise<[number, Programa[]]> {
    return this.programasService.update(+id, updateProgramaDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string):Promise<void> {
    return this.programasService.remove(+id);
  }
}
