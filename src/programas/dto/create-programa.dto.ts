import { IsNotEmpty, IsString } from "class-validator";

export class CreateProgramaDto {
    @IsString()
    @IsNotEmpty()
    nome: string;
  
    @IsString()
    @IsNotEmpty()
    logo: string;
  
    @IsString()
    @IsNotEmpty()
    descricao: string;
  
    @IsString()
    @IsNotEmpty()
    url: string;     
}
