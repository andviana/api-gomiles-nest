import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoSaidasService } from './tipo-saidas.service';
import { CreateTipoSaidaDto } from './dto/create-tipo-saida.dto';
import { UpdateTipoSaidaDto } from './dto/update-tipo-saida.dto';

@Controller('tipo-saidas')
export class TipoSaidasController {
  constructor(private readonly tipoSaidasService: TipoSaidasService) {}

  @Post()
  create(@Body() createTipoSaidaDto: CreateTipoSaidaDto) {
    return this.tipoSaidasService.create(createTipoSaidaDto);
  }

  @Get()
  findAll() {
    return this.tipoSaidasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoSaidasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoSaidaDto: UpdateTipoSaidaDto) {
    return this.tipoSaidasService.update(+id, updateTipoSaidaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoSaidasService.remove(+id);
  }
}
