import { IsDecimal, IsNotEmpty, IsNumber, IsString } from "class-validator";
export class CreateEntradaDto {
          
    @IsNumber()
    milhas: number;
    
    @IsDecimal()      
    valor: number;
    
    @IsString()
    @IsNotEmpty()
    idPrograma: number;
    
    @IsString()
    @IsNotEmpty()
    idTipoEntrada: number;
    
    @IsString()
    @IsNotEmpty()
    idUsuario: number;

}
