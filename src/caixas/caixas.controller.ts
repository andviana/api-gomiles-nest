import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CaixasService } from './caixas.service';
import { CreateCaixaDto } from './dto/create-caixa.dto';
import { UpdateCaixaDto } from './dto/update-caixa.dto';

@Controller('caixas')
export class CaixasController {
  constructor(private readonly caixasService: CaixasService) {}

  @Post()
  create(@Body() createCaixaDto: CreateCaixaDto) {
    return this.caixasService.create(createCaixaDto);
  }

  @Get()
  findAll() {
    return this.caixasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.caixasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCaixaDto: UpdateCaixaDto) {
    return this.caixasService.update(+id, updateCaixaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.caixasService.remove(+id);
  }
}
