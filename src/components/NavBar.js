import CartWidget from "./CartWidget"
import "./NavBar.css"
import ItemListContainer from "./ItemListContainer"

const NavBar = () => {
    return (
        <nav class = "NB" className="NavBar">
            <div>
                <button className="btn btn-dark">Canilleras Azules</button>
                <button>Guantes Spokey</button>
                <button>Casco Rojo KP&P</button>
            </div>
            <div ItemListContainer greeting={"Bienvenidos"}/>

            
            <CartWidget />
        </nav>
    )
}

export default NavBar;