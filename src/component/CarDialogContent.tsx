import { DialogContent, TextField } from "@mui/material"
import { DialogFromProps } from "../types"


const CarDialogContent = ({car,handleChange}:DialogFromProps) => {
  return (
  <DialogContent>
    <TextField value={car.make} name="make" variant="filled" placeholder="Make" onChange={handleChange}/>
    <TextField value={car.model} name="model" variant="filled" placeholder="Model" onChange={handleChange}/>
    <TextField value={car.color} name="color" variant="filled" placeholder="Color" onChange={handleChange}/>
    <TextField value={car.registerNumber} name="registerNumber" variant="filled" placeholder="Reg.Number" onChange={handleChange}/>
    <TextField value={car.year} name="year" variant="filled" placeholder="Year" onChange={handleChange}/>
    <TextField value={car.price} name="price" variant="filled" placeholder="Price" onChange={handleChange}/>
 
  </DialogContent>
  )
}

export default CarDialogContent