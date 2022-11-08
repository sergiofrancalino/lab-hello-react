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
    <div>
      <h1> Say hello to ReactJS</h1>
      <h2> You will learn how to use
           the most popular fronteend library,
           and become a super Ninja developer.
      </h2>
      <button> Awesome!</button>    
    </div>
 
</div> 

}

export default Hero