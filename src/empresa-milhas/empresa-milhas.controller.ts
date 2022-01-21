import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EmpresaMilhasService } from './empresa-milhas.service';
import { CreateEmpresaMilhaDto } from './dto/create-empresa-milha.dto';
import { UpdateEmpresaMilhaDto } from './dto/update-empresa-milha.dto';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { EmpresaMilha } from './entities/empresa-milha.entity';

@Controller('empresa-milhas')
export class EmpresaMilhasController {
  constructor(private readonly empresaMilhasService: EmpresaMilhasService) {}

  @Post()
  async create(@Body(new ValidationPipe) createEmpresaMilhaDto: CreateEmpresaMilhaDto):Promise<EmpresaMilha> {
    return this.empresaMilhasService.create(createEmpresaMilhaDto);
  }

  @Get()
  async findAll():Promise<EmpresaMilha[]> {
    return this.empresaMilhasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string):Promise<EmpresaMilha> {
    return this.empresaMilhasService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body(new ValidationPipe) updateEmpresaMilhaDto: UpdateEmpresaMilhaDto,
  ):Promise<[number, EmpresaMilha[]]> {
    return this.empresaMilhasService.update(+id, updateEmpresaMilhaDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.empresaMilhasService.remove(+id);
  }
}
