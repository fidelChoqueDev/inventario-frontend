import React, { useState } from "react";
import { addProduct } from "../../interfaces";

const ProductsAdd = () => {
  const [formData, setFormData] = useState<addProduct>({
    code: '',
    name: '',
    supplier: '',
    UnitPrice: 0,
    imagen:'',
    description: '',
    category: '',
    warehouse: ''
  })

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData(prevData => ({...prevData, [name]: value}))
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    console.log('entro')
    e.preventDefault();
    try{
      console.log(formData)
    }catch (error) {
      throw new Error("Something it`s wrong!!");
    }
  }
  
  return (
    <section>
      <article>
        <h1>Ingreso Nuevo Producto</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" id="name" onChange={handleChangeInput} value={formData.name} required placeholder="ej: El Padrino, El testamento Maya, Jerusalen: Caballo de troya" />
          </div>
          <div>
            <label htmlFor="name">Description: </label>
            <input type="text" name="description" id="description" onChange={handleChangeInput} value={formData.description} placeholder="descripcion del producto" />
          </div>
          <div>
            <label htmlFor="name">Supplier: </label>
            <input type="text" name="supplier" id="suplier" placeholder="descripcion del producto" onChange={handleChangeInput} value={formData.supplier}  />
          </div>
          <div>
            <label htmlFor="name">Unit Price: </label>
            <input type="number" name="unitprice" id="unitprice" placeholder="precio del producto" onChange={handleChangeInput} value={formData.UnitPrice}  />
          </div>
          <div>
            <label htmlFor="name">Category: </label>
            <input type="text" name="category" id="category" placeholder="categoria del producto" onChange={handleChangeInput} value={formData.category}  />
          </div>
          <div>
            <label htmlFor="name">Imagen: </label>
            <input type="file" name="imagen" id="imagen" placeholder="Imagen del producto" onChange={handleChangeInput} value={formData.imagen}  />
          </div>
        </form>
      </article>
    </section>
    
  );
}
export default ProductsAdd;