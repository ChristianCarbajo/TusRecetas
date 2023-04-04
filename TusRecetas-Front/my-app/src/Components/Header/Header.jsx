import "./Header.css"
import { Link } from 'react-router-dom';
import logo from '../../IMG/logo.png'
function Header(){
    return(
<div>
    
<Link className="logo" to="/"><img className='logo' src={logo}/></Link>
<Link  to="/CookingRecipeForm"><button>Añade una receta</button></Link>
</div>
    )
}
export default Header