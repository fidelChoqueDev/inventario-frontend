import React, { useState } from "react";
import { addProduct } from "../../interfaces";
import style from "./ProductsAdd.module.css"
import logo from '/clean-box.png'

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
      <div className={style.conteiner}>
        <img src={logo} alt="Logo de empresa" />
        <h1 className={style.title}>Ingreso Nuevo Producto</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              onChange={handleChangeInput} 
              value={formData.name} 
              required placeholder="ej: El Padrino, El testamento Maya" />
          </div>
          <div>
            <label htmlFor="name">Description: </label>
            <input 
              type="text" 
              name="description" 
              id="description" 
              onChange={handleChangeInput} 
              value={formData.description} 
              placeholder=" product descripcion" />
          </div>
          <div>
            <label htmlFor="name">Supplier: </label>
            <input 
              type="text" 
              name="supplier" 
              id="suplier" 
              placeholder="supplier's name" 
              onChange={handleChangeInput} 
              value={formData.supplier}  />
          </div>
          <div>
            <label htmlFor="name">Unit Price: </label>
            <input 
              type="text" 
              name="UnitPrice" 
              id="UnitPrice" 
              placeholder="price of the product" 
              onChange={handleChangeInput} 
              value={formData.UnitPrice}  />
          </div>
          <div>
            <label htmlFor="name">Category: </label>
            <input 
              type="text" 
              name="category" 
              id="category" 
              placeholder="category that corresponds to the product" 
              onChange={handleChangeInput} 
              value={formData.category}  />
          </div>
          <div>
            <label htmlFor="name">Imagen: </label>
            <input 
              type="file" 
              name="imagen" 
              id="imagen" 
              placeholder="product photo" 
              onChange={handleChangeInput} 
              value={formData.imagen}  />
          </div>

          <div className={style.containerButton}>
            <button type="reset">cancel</button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </>
  );
}
export default ProductsAdd;