import logo from "../images/ironhack-logo-xs.png"
import menu from "../images/menu-top-xs.png"

function Hero () {
return <div className="hero">
    <nav>
    <div>
        <img src = {logo} alt = "Logo da Ironhack com fundo branco"/>
    </div>
    <div>
        <img src = {menu} alt ="Linhas de menu"/>
    </div>
    </nav>
</div> 

}

export default Hero