import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoEntradasService } from './tipo-entradas.service';
import { CreateTipoEntradaDto } from './dto/create-tipo-entrada.dto';
import { UpdateTipoEntradaDto } from './dto/update-tipo-entrada.dto';

@Controller('tipo-entradas')
export class TipoEntradasController {
  constructor(private readonly tipoEntradasService: TipoEntradasService) {}

  @Post()
  create(@Body() createTipoEntradaDto: CreateTipoEntradaDto) {
    return this.tipoEntradasService.create(createTipoEntradaDto);
  }

  @Get()
  findAll() {
    return this.tipoEntradasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoEntradasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoEntradaDto: UpdateTipoEntradaDto) {
    return this.tipoEntradasService.update(+id, updateTipoEntradaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoEntradasService.remove(+id);
  }
}
