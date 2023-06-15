import './mainComp.css'
import { NavLink } from 'react-router-dom'

export const MainComp = ({colorsdata, setColor}) => {

    return (
        <div className={'mainComp '+ (colorsdata && "active1")}>
            <NavLink className="name1" onClick={() => setColor(!colorsdata)} to='/'> <p> Testomonials</p></NavLink>
            <NavLink className="name1" onClick={() => setColor(!colorsdata)} to="Contacts">Contacts</NavLink>
            <NavLink className="name1" onClick={() => setColor(!colorsdata)} to="Home">Home</NavLink>
            <NavLink className="name1" onClick={() => setColor(!colorsdata)} to="Intro">Intro</NavLink>
            <NavLink className="name1" onClick={() => setColor(!colorsdata)} to="PortFilio">PortFilio</NavLink>
        </div>
    )
}
