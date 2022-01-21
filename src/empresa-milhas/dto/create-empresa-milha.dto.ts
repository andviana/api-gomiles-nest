import { IsAlphanumeric, IsNotEmpty } from "class-validator";

export class CreateEmpresaMilhaDto {
    @IsAlphanumeric()
    @IsNotEmpty()
    nome: string;

    @IsAlphanumeric()
    @IsNotEmpty()
    logo: string;

    @IsAlphanumeric()
    @IsNotEmpty()
    url: string;

}
