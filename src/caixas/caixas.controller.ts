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
import { Caixa } from './entities/caixa.entity';

@Controller('caixas')
export class CaixasController {
  constructor(private readonly caixasService: CaixasService) {}

  // @Post()
  // create(@Body() createCaixaDto: CreateCaixaDto) {
  //   return this.caixasService.create(createCaixaDto);
  // }

  @Post()
  async create(@Body() caixa: Caixa) {
    return this.caixasService.create(caixa);
  }

  @Get()
  async findAll():Promise<Caixa[]> {
    return this.caixasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string):Promise<Caixa > {
    return this.caixasService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCaixaDto: UpdateCaixaDto) {
  //   return this.caixasService.update(+id, updateCaixaDto);
  // }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() caixa: Caixa): Promise<[number, Caixa[]]> {
    return this.caixasService.update(+id, caixa);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.caixasService.remove(+id);
  }
}
