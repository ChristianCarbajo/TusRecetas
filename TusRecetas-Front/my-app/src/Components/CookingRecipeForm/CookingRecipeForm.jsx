import "./CookingRecipeForm.css"
import SaveButton from "../../IMG/guardar-el-archivo.png"
import { BsPlusSquareFill } from "react-icons/bs";
import { IoMdReturnLeft } from "react-icons/io";
import toast, { Toaster } from 'react-hot-toast';
import ApiPostService from '../../Services/ApiPostService';
import ApiPutService from '../../Services/ApiPutService.js';
import React, { useEffect, useState } from 'react'
import CategoriesInput from '../CategoriesInput/CategoriesInput';
import {useLocation, useNavigate } from 'react-router-dom';

const CookingRecipeForm = () => {

    let url = "http://localhost:8080/api/v1/cookingrecipe"

    const categories = ["Primer Plato", "Segundo Plato", "Postre", "Vegetariano"]

    let [item, setItem] = useState({ categories: categories[0] })

    let [isSubmitted, setIsSubmitted] = useState(false)

    const State = useLocation().state

    const notify = () => toast('Receta añadida! ');

    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    
    const handleSelectedCategoryChange = (category) => {
        setSelectedCategory(category);
        let temp_item = item
        temp_item["Categoría"] = category
        setItem(temp_item)
    };
    function handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let temp_item = item
        temp_item[name] = value
        setItem(temp_item)
    }
    function handleSubmit(event) {
        event.preventDefault();
        State ? ApiPutService(url, item, State.id) : ApiPostService(url, item)
        notify()
        setIsSubmitted(true)
    }
    useEffect(()=>{
        if (State) {
            
        }
    })
    function TextAreaGenerator() {
        const [count, setCount] = useState(0);
        const [textAreas, setTextAreas] = useState([]);
      
        const handleClick = () => {
          setCount(count + 1);
          setTextAreas((prevTextAreas) => [
            ...prevTextAreas,
            <div className='Form-ta' key={count + 1}>
              <label id={`label-${count}`}>Paso {count + 1}:</label>
              <textarea rows="8" type="text" onChange={handleChange} name="steps" id={`textarea-${count}`} required/>
            </div>,
          ]);
        };

    return (
        <div className='CookingRecipeForm-Form'>
            <Toaster />
            {isSubmitted ?
                <>
                    <h2 className='return-h2'>Volver a la página de inicio</h2>
                    <button className='b-return' onClick={() => {window.location.href = "/"}}><IoMdReturnLeft /></button>
                </>
                :
                <form onSubmit={handleSubmit} method="post">
                    
                    <div className='Form-row'>
                        <label>Título:</label>
                        <div className="form-row-div">
                            <input type="text" name="title" onChange={handleChange} id="" placeholder="Título" required />
                        </div>
                    <div className='Form-row'>
                        <label>URL de la imagen:</label>
                        <div className="form-row-div">
                            <input type="url" name="url" onChange={handleChange} autoComplete="off" placeholder="Url de la Imagén" required pattern="https?://.+" />
                        </div>
                    </div>
                    </div>
                    <div className='Form-row'>
                        <label>Categoría:</label>
                        <CategoriesInput categories={categories} selectedcategory={selectedCategory} onSelectedcategoryChange={handleSelectedCategoryChange} />
                    </div>
                    <div className='Form-row'>
                        <label>Ingredientes:</label>
                        <div className="form-row-div">
                            <textarea type="text" name="ingredients" onChange={handleChange} id="" placeholder="Ingredientes" required />
                        </div>
                    </div>
                    <div>
                    <h3>Dale al botón + para añadir los pasos de tu receta</h3>
                    <button onClick={handleClick}><BsPlusSquareFill/></button>
                    <button className='b-post'><image href={SaveButton}/></button>
                    </div>
                </form>
            }

        </div>
    )
            
}
}
export default CookingRecipeForm