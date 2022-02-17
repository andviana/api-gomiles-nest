import { IsEmail, IsNotEmpty, IsString, } from "class-validator";
import { Pessoa } from "src/pessoas/entities/pessoa.entity";

export class CreateUsuarioDto {

    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    roles: string;

    @IsString()    
    @IsNotEmpty()
    password: string;
    
    @IsEmail()  
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    pessoa: Pessoa;
}
