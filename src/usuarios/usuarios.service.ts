import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import {v4 as uuid} from 'uuid';

@Injectable()
export class UsuariosService {

  constructor(
    @InjectModel(Usuario)
    private usuarioModel: typeof Usuario
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto):Promise<Usuario> {
    let usuario = {...createUsuarioDto} as Usuario;
    usuario.codigo = uuid();    
    return this.usuarioModel.create(usuario);
  }

  async findAll(): Promise<Usuario[]> {
    return this.usuarioModel.findAll();
  }

  async findOne(id: number): Promise<Usuario> {
    return this.usuarioModel.findByPk(id);
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioModel.update(updateUsuarioDto, {
      where:{
        id: id
      }
    });    
  }

  async remove(id: number):Promise<void> {
    const usuario:Usuario = await this.findOne(id);
    usuario.destroy();
  }
}
