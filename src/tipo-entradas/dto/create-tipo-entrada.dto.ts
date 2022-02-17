import { IsNotEmpty, IsString } from "class-validator";

export class CreateTipoEntradaDto {
    @IsNotEmpty()
    @IsString()
    descricao: string;
}
