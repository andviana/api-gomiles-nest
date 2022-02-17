import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoEntradasService } from './tipo-entradas.service';
import { CreateTipoEntradaDto } from './dto/create-tipo-entrada.dto';
import { UpdateTipoEntradaDto } from './dto/update-tipo-entrada.dto';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { TipoEntrada } from './entities/tipo-entrada.entity';

@Controller('tipo-entradas')
export class TipoEntradasController {
  constructor(private readonly tipoEntradasService: TipoEntradasService) { }

  @Post()
  async create(@Body(new ValidationPipe) createTipoEntradaDto: CreateTipoEntradaDto): Promise<TipoEntrada> {
    return this.tipoEntradasService.create(createTipoEntradaDto);
  }

  @Get()
  async findAll(): Promise<TipoEntrada[]> {
    return this.tipoEntradasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<TipoEntrada> {
    return this.tipoEntradasService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string, 
    @Body() updateTipoEntradaDto: UpdateTipoEntradaDto
    ):Promise<[number, TipoEntrada[]]> {
    return this.tipoEntradasService.update(+id, updateTipoEntradaDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string):Promise<void> {
    return this.tipoEntradasService.remove(+id);
  }
}
