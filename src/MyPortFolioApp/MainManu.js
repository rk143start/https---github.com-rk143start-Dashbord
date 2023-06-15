import "./MainManu.css"
// import { NavLink } from "react-router-dom"

export const MainManu = ({colorData,setColor}) => {
    return (    
        <>
         {/* <div className={"MyDatas " +(colorData && "active1")}>                
                   <ul className="LinksData">                                 
                      <li>
                    <NavLink  to="/">Intro</NavLink>
                    </li>
                    <li> 
                    <NavLink to="#contact">Contact</NavLink>
                    </li>
                    <li>
                    <NavLink to="#portfilo">Portfilo</NavLink>
                    </li>
                    <li>
                    <NavLink to="#testimonials">Testimonials</NavLink>
                    </li>
                    <li>
                    <NavLink to="#work">Work</NavLink>      
                    </li>
                    <li>
                      <NavLink to="#myNew">MyNew</NavLink>
                    </li>
                   </ul>       
             </div>  */}

                  <div className={"MyDatas "+(colorData && "active1")}>
                        <ul className="LinksData">
                            <li>
                               <p onClick={() => setColor(false)} >
                                <a href="#intro">Intro</a>
                                </p>         
                               <p onClick={() => setColor(false)}>          
                               <a href="#contact">Contact</a>
                               </p>     
                              <p onClick={() => setColor(false)}>            
                                <a href="#portfilo">Portfilo</a>
                                </p>  
                               <p onClick={() => setColor(false)}>                 
                                <a href="#testimonials">Testimonials</a>
                                </p>
                               <p onClick={() => setColor(false)}>                   
                                <a href="#work">Work</a>
                                </p> 
                                <p onClick={() => setColor(false)}>
                                  <a href="#myNew">myNew</a>
                                </p>
                                </li>                           
                        </ul>  
                   </div>  
       </>                   
    )
}
