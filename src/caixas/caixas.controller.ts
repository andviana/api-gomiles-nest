import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { CaixasService } from './caixas.service';
import { CreateCaixaDto } from './dto/create-caixa.dto';
import { UpdateCaixaDto } from './dto/update-caixa.dto';
import { Caixa } from './entities/caixa.entity';

@Controller('caixas')
export class CaixasController {
  constructor(private readonly caixasService: CaixasService) { }

 

  @Post()
  async create(@Body(new ValidationPipe) createCaixaDto: CreateCaixaDto): Promise<Caixa> {
    return this.caixasService.create(createCaixaDto);
  }

  @Get()
  async findAll(): Promise<Caixa[]> {
    return this.caixasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Caixa> {
    return this.caixasService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body(new ValidationPipe) updateCaixaDto: UpdateCaixaDto
  ): Promise<[number, Caixa[]]> {
    return this.caixasService.update(+id, updateCaixaDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.caixasService.remove(+id);
  }

  @Get('resumo')
  resumo(): string {
    return 'mostando resumo';
  }

  @Get('teste/www')
  teste(): string {
    return 'teste www';
  }

  
}
