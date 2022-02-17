import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MovimentosService } from './movimentos.service';
import { CreateMovimentoDto } from './dto/create-movimento.dto';
import { UpdateMovimentoDto } from './dto/update-movimento.dto';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { Movimento } from './entities/movimento.entity';

@Controller('movimentos')
export class MovimentosController {
  constructor(private readonly movimentosService: MovimentosService) { }

  @Post()
  async create(@Body(new ValidationPipe) createMovimentoDto: CreateMovimentoDto): Promise<Movimento> {
    return this.movimentosService.create(createMovimentoDto);
  }

  @Get()
  async findAll(): Promise<Movimento[]> {
    return this.movimentosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Movimento> {
    return this.movimentosService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMovimentoDto: UpdateMovimentoDto,
  ): Promise<[number, Movimento[]]> {
    return this.movimentosService.update(+id, updateMovimentoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.movimentosService.remove(+id);
  }
}
