import { Gender } from "./enum/gender.enum";

export interface IPerson {
  id: number,
  name: string,
  sexo: Gender | string,
  phone: string,
  birthDate: Date,
  cpf: string
}
