import { ChangeEvent } from "react";

export type CarResposnse ={
  make:string;
  model:string;
  color :string;
  registerNumber :string;
  year : number;
  price :number;
}

export type DialogFromProps ={
  car:CarResposnse;
  handleChange:(event:ChangeEvent<HTMLInputElement>) => void
}


export type Car ={
  id : number
  make:string;
  model:string;
  color :string;
  registerNumber :string;
  year : number;
  price :number;
}

export type CarEntry ={
  car : Car;
  url :string;
}



