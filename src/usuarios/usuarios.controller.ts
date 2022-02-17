import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { Usuario } from './entities/usuario.entity';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  async create(@Body(new ValidationPipe) createUsuarioDto: CreateUsuarioDto):Promise<Usuario> {
    return this.usuariosService.create(createUsuarioDto);
  }

  @Get()
  async findAll():Promise<Usuario[]> {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string):Promise<Usuario> {
    return this.usuariosService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body(new ValidationPipe) updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.update(+id, updateUsuarioDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string):Promise<void> {
    return this.usuariosService.remove(+id);
  }
}
