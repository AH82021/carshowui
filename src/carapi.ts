import axios from "axios";
import { Car, CarResposnse } from "./types";


export const getCars = async(): Promise<CarResposnse[]> =>{
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/cars`)
  return response.data;
}

export const deleteCar =async (id:number):Promise<CarResposnse> => {
  
        const response = await axios.delete(`${import.meta.env.VITE_API_URL}/delete/${id}`)
        return response.data;
  
}

export const addCar =async(car:Car):Promise<CarResposnse> =>{
  const response = await axios.post(`${import.meta.env.VITE_API_URL}/add`,car,{
    headers : {
      'Content-Type': 'appliation/json'
    }
  });
  return response.data;
}