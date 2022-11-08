import declarative from "../images/icon1.png"
import componentes from "../images/icon2.png"
import singleWay from "../images/icon3.png"
import jsx from "../images/icon4.png"
import { React } from 'react';

function Icons () {
    return <div className="icons">
        <nav>
        <div>
            <img src = {declarative} alt = "Declarative Icon"/>
            <h1>Declarative</h1>
            <b>React Makes it painless to create interactive UIs.</b>
        </div>
        <div>
            <img src = {componentes} alt = "Componentes Icon"/>
            <h1>Components</h1>
            <b>Build encapsulated components that manage their state.</b>
        </div>
        <div>
            <img src = {singleWay} alt = "Single-Way Icon"/>
            <h1>Single-Way</h1>
            <b>A set of immutable values are passed to the component's.</b>
        </div>
        <div>
            <img src = {jsx} alt ="JSX Icon Java Script and HTML"/>
            <h1>JSX</h1>
            <b>Statically-typed. designded to run on modern browers.</b>
        </div>
        </nav>
  
    </div>
}
export default Icons