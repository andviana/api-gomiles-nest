import { isNotEmpty, IsNotEmpty, IsString, isString } from "class-validator";
import { Pessoa } from "src/pessoas/entities/pessoa.entity";

export class CreateUsuarioDto {

    @IsString()
    username: string;

    roles: string;
    password: string;
    email: string;
    pessoa: Pessoa;



}
