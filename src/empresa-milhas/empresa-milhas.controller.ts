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

@Controller('empresa-milhas')
export class EmpresaMilhasController {
  constructor(private readonly empresaMilhasService: EmpresaMilhasService) {}

  @Post()
  create(@Body() createEmpresaMilhaDto: CreateEmpresaMilhaDto) {
    return this.empresaMilhasService.create(createEmpresaMilhaDto);
  }

  @Get()
  findAll() {
    return this.empresaMilhasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.empresaMilhasService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmpresaMilhaDto: UpdateEmpresaMilhaDto,
  ) {
    return this.empresaMilhasService.update(+id, updateEmpresaMilhaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empresaMilhasService.remove(+id);
  }
}
