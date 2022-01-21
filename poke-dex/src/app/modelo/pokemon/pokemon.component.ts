import { Injectable } from "@angular/core";

export interface Pokemon {
  id?:number;
  name?:string;
  base_experience?:number;
  height?:number;
  order?:number;
  weight?:number;
  abilities?:string;
}

