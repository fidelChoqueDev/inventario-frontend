import React, { useState } from "react";
import { addProduct } from "../../interfaces";
import "./ProductsAdd.css"
import logo from '../../../public/clean-box.png'

const ProductsAdd = () => {
  const [formData, setFormData] = useState<addProduct>({
    code: '',
    name: '',
    supplier: '',
    UnitPrice: '',
    imagen:'',
    description: '',
    category: '',
    warehouse: ''
  })

  const handleChangeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData(prevData => ({...prevData, [name]: value}))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log('entro')
    e.preventDefault();
    const backendUrl = "https://66bf86b842533c4031466d2b.mockapi.io/zaikoApi/v1/productos";

    try{
      console.log(formData)
      const response = await fetch(backendUrl, {
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
      body:JSON.stringify({
        name: formData.name,
        description: formData.description,
        UnitPrice: formData.UnitPrice,
        suppelier: formData.supplier,
        imagen: formData.imagen,
        category: formData.category,
        warehouse: formData.warehouse
      }),
    });

    if (!response.ok){throw new Error("Error en el registro");}

    const jsonData = await response.json();
    console.log("Registro exitoso", jsonData);
    }catch (error) {
      throw new Error("Something it`s wrong!!");
    }
  };
  
  return (
    <>
      <img src={logo} alt="Logo de empresa" />
      <article>
        <h1 className="title">Ingreso Nuevo Producto</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              onChange={handleChangeInput} 
              value={formData.name} 
              required placeholder="ej: El Padrino, El testamento Maya, Jerusalen: Caballo de troya" />
          </div>
          <div>
            <label htmlFor="name">Description: </label>
            <input 
              type="text" 
              name="description" 
              id="description" 
              onChange={handleChangeInput} 
              value={formData.description} 
              placeholder="descripcion del producto" />
          </div>
          <div>
            <label htmlFor="name">Supplier: </label>
            <input 
              type="text" 
              name="supplier" 
              id="suplier" 
              placeholder="Proveedor del producto" 
              onChange={handleChangeInput} 
              value={formData.supplier}  />
          </div>
          <div>
            <label htmlFor="name">Unit Price: </label>
            <input 
              type="text" 
              name="UnitPrice" 
              id="UnitPrice" 
              placeholder="precio del producto" 
              onChange={handleChangeInput} 
              value={formData.UnitPrice}  />
          </div>
          <div>
            <label htmlFor="name">Category: </label>
            <input 
              type="text" 
              name="category" 
              id="category" 
              placeholder="categoria del producto" 
              onChange={handleChangeInput} 
              value={formData.category}  />
          </div>
          <div>
            <label htmlFor="name">Imagen: </label>
            <input 
              type="file" 
              name="imagen" 
              id="imagen" 
              placeholder="Imagen del producto" 
              onChange={handleChangeInput} 
              value={formData.imagen}  />
          </div>

          <div>
            <button type="submit">Save</button>
          </div>
        </form>
      </article>
    </>
  );
}
export default ProductsAdd;