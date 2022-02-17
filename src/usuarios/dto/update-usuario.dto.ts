import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsEmail } from 'class-validator';
import { CreateUsuarioDto } from './create-usuario.dto';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {

    @IsString()    
    username: string;

    @IsString()    
    roles: string;

    @IsString()        
    password: string;
    
    @IsEmail()      
    email: string;   

}
