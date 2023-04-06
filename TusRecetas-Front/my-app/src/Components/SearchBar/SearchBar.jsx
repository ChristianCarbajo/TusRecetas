import "./SearchBar.css"



function SearchBar(){
    return(
        <div className="searchBar">
           <input type="text" name="search" autoComplete="off" id="" placeholder="Haz tu busqueda"/>
        </div>
    )
}

export default SearchBar