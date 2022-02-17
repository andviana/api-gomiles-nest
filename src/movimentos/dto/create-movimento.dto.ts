import { IsDecimal, IsNotEmpty, IsNumber } from "class-validator";

export class CreateMovimentoDto {

    @IsNotEmpty()
    @IsDecimal()
    valor: number;

    @IsNotEmpty()
    @IsNumber()
    quantidade: number;

    @IsNotEmpty()
    @IsNumber()
    idCaixa: number;

    @IsNotEmpty()
    @IsNumber()
    idUsuario: number;

    @IsNumber()
    idEntrada: number;

    @IsNumber()
    idSaida: number;

}
