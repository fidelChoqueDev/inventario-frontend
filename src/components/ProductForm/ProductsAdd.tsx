import React, { useState } from "react";
import { addProduct } from "../../interfaces";
import style from "./ProductsAdd.module.css"
import logo from '/clean-box.png'

const ProductsAdd = () => {
  const [formData, setFormData] = useState<addProduct>({
    code: '',
    name: '',
    supplier: '',
    unitPrice: '',
    image:'',
    description: '',
    category: '',
    warehouse: ''
  })

  const handleChangeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData(prevData => ({...prevData, [name]: value}))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const backendUrl = "https://66bf86b842533c4031466d2b.mockapi.io/zaikoApi/v1/productos";

    try{
      const response = await fetch(backendUrl, {
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
      body:JSON.stringify({
        name: formData.name,
        description: formData.description,
        unitPrice: formData.unitPrice,
        suppelier: formData.supplier,
        image: formData.image,
        category: formData.category,
        warehouse: formData.warehouse
      }),
    });

    if (!response.ok){throw new Error("Error in registration");}

    const jsonData = await response.json();
    console.log("Registro exitoso", jsonData);
    }catch (error) {
      throw new Error("Something it`s wrong!!");
    }
  };
  
  return (
    <>
      <div className={style.container}>
        <img src={logo} alt="Company logo" />
        <h1 className={style.title}>Registro de nuevo producto</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nombre: </label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              onChange={handleChangeInput} 
              value={formData.name} 
              required placeholder="ej: El Padrino, El testamento Maya" />
          </div>
          <div>
            <label htmlFor="name">Descripcion: </label>
            <input 
              type="text" 
              name="description" 
              id="description" 
              onChange={handleChangeInput} 
              value={formData.description} 
              placeholder="Descripcion del producto" />
          </div>
          <div>
            <label htmlFor="name">Proveedor: </label>
            <input 
              type="text" 
              name="supplier" 
              id="suplier" 
              placeholder="Nombre del proveedor" 
              onChange={handleChangeInput} 
              value={formData.supplier}  />
          </div>
          <div>
            <label htmlFor="name">Precio por unidad: </label>
            <input 
              type="text" 
              name="unitPrice" 
              id="unitPrice" 
              placeholder="Precio del producto" 
              onChange={handleChangeInput} 
              value={formData.unitPrice}  />
          </div>
          <div>
            <label htmlFor="name">Categoria: </label>
            <input 
              type="text" 
              name="category" 
              id="category" 
              placeholder="Categoria al que corresponde el producto" 
              onChange={handleChangeInput} 
              value={formData.category}  />
          </div>
          <div>
            <label htmlFor="name">Imagen: </label>
            <input 
              type="file" 
              name="image" 
              id="image" 
              placeholder="Foto y/o imagen del producto" 
              onChange={handleChangeInput} 
              value={formData.image}  />
          </div>

          <div className={style.containerButton}>
            <button type="reset">Cancelar</button>
            <button type="submit">Añadir</button>
          </div>
        </form>
      </div>
    </>
  );
}
export default ProductsAdd;