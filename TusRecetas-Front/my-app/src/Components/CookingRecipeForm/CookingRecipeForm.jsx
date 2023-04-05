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

    let url = "http://localhost:8080/api/v1/cookingrecipes"

    const categories = ["Elige una categoría","Primer Plato", "Segundo Plato", "Postre", "Vegetariano"]

    let [item, setItem] = useState({ categories: categories[0]})

    let [isSubmitted, setIsSubmitted] = useState(false)

    const State = useLocation().state

    const notify = () => toast('Receta añadida! ');

    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    
    const handleSelectedCategoryChange = (category) => {
        setSelectedCategory(category);
        let temp_item = item
        temp_item["categories"] = category
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
    const [showInstructions, setShowInstructions] = useState(true);

    function instructions(event) {
      event.preventDefault();
       setShowInstructions(!showInstructions)
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
                <>
                <button onClick={instructions}>Instrucciones</button>
                {showInstructions ? 
                <div className="instructions-message">
                <p>Para adjuntar una imagen debes subirla a un portal como https://imgur.com/ y seleccionar la ruta de la imagen que acabe en .jpg, .png o similar. En el caso de Imgur es el Direct Link</p>
                <p>Recuerda que todos los campos deben ser rellenados y que la categoría debe ser elegida</p>
                </div> 
                : null
                }

                <form onSubmit={handleSubmit} method="post">
                    
                    <div className='Form-row'>
                        <label>Título:</label>
                        <div className="form-row-div">
                            <input type="text" name="title" onChange={handleChange} id="" placeholder="Título" required />
                        </div>
                    </div>
                    <div className='Form-row'>
                        <label title="https://imgur.com/ aquí podrás subir tus fotos y debes introducir la url que acabe en .jpg o similar (Direct Link)">URL de la imagen:</label>
                        <div className="form-row-div">
                            <input type="url" name="url" onChange={handleChange} autoComplete="off" placeholder="Enlace de Imgur" required pattern="https?://.+" />
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
                    <div className='Form-column'>
                        <label>Receta:</label>
                        <textarea rows="8" type="text" name="description" onChange={handleChange} id="" placeholder="Receta" required />                       
                    </div>
                   <div className="div-b-post">
                    <button className="b-post"><BiSave /></button> 
                   </div>
                                     
                </form>
                </>
            }
            
        </div>
    )
            
}

export default CookingRecipeForm