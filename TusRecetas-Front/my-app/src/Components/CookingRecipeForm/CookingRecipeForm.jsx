import "./CookingRecipeForm.css"
import SaveButton from "../../IMG/guardar-el-archivo.png"
import { BsPlusSquareFill } from "react-icons/bs";
import { BiSave } from "react-icons/bi";
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

    let [item, setItem] = useState({ categories: "" })

    let [isSubmitted, setIsSubmitted] = useState(false)

    const State = useLocation().state

    const notify = () => toast('Receta añadida! ');

    const [selectedCategory, setSelectedCategory] = useState("");
    
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
                    </div>
                    <div className='Form-row'>
                        <label>URL de la imagen:</label>
                        <div className="form-row-div">
                            <input type="url" name="url" onChange={handleChange} autoComplete="off" placeholder="Url de la Imagén" required pattern="https?://.+" />
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
                    <div className='Form-row'>
                        <label>Receta:</label>
                        <div className="form-row-div">
                            <textarea type="text" name="recipe" onChange={handleChange} id="" placeholder="Receta" required />
                        </div>                      
                    </div>
                   <div className="div-b-post">
                    <button className="b-post"><BiSave /></button> 
                   </div>
                                     
                </form>
            }
            
        </div>
    )
            
}

export default CookingRecipeForm