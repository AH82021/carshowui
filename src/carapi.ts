import axios from "axios";
import { Car, CarEntry, CarResposnse } from "./types";


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
      'Content-Type': 'application/json'
    }
  });
  return response.data;
}

export const updateCar =async (carEntry:CarEntry) => {

  
  const response = await axios.put(`${import.meta.env.VITE_API_URL}/${carEntry.url}`,carEntry.car,{
 
    
    headers : {
      'Content-Type': 'application/json'
    }
  })
  return response.data;
}