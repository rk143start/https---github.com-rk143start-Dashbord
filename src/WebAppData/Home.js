import { useState } from 'react'
import './home.css'

export const Home = () => {
  let allData = [
    {
     id: 1,
     icon: "dsbhjdsv",
     title: "web App",
     desc:"implementes Data and industrial data",
     img: "assets/pexels-matheus-bertelli-799443.jpg"

    },
    {
      id: 2,
      icon: "dsvbdksjv",
      title: "Mobile Features",
      desc:"Internal Data All set of Data",
      img: "assets/pexels-markus-spiske-177598.jpg"
 
     },
     {
      id: 3,
      icon: "dsvbdksjv",
      title: "Applications",
      desc:"Internal Data All set of Data",
      img: "assets/pexels-thisisengineering-3861969.jpg"
 
     },
     {
      id: 4,
      icon: "dsvbdksjv",
      title: "webs Data",
      desc:"Internal Data All set of Data",
      img: "assets/pexels-luis-dalvan-1770809 - Copy.jpg"
 
     },
     {
      id: 5,
      icon: "dsvbdksjv",
      title: "Mobiles", 
      desc:"Internal Data All set of Data",
      img: "assets/pexels-screen-post-4526424.jpg"
     },
  ]

  let [count, setCount] = useState(0)
  // let [datas, setCount] = useState([])

  let allDataNew = allData[count]

  let clickHandler = (ways) => {
       
      setCount(count === allData.length - 1 ?  0 : count + 1)
  }

  let ClickRight = ()=> {
    setCount(count === 0 ? allData.length - 1 : count - 1)

  }

    return(
        <div className='homData' id='home'>         
                <div className='slider'             
              // style={{transform : `translateX(${count * 100}vw)` }}
                >
                  {/* {
                    allData.map((d)=> ( */}
                        <div className='item'>   
                          <div className="left" >
                            <address>
                            <p>icon:- {allDataNew.icon}</p>
                               <div>
                                <p>desc:- {allDataNew.desc}</p>
                                </div>                            
                                <h2>title:- {allDataNew.title}</h2>    
                            </address>
                          </div>
                          <div className="right">
                          <img style={{objectPosition:"cover"}} src={allDataNew.img} alt="" />
                          </div>
                     </div>
                    {/* //  ))}  */}
                </div>    
                  <button className='leftarrow'  onClick={() => clickHandler()}  >{"=>"}</button>
                  <button className='rightarrow' onClick={() => ClickRight()} >{"<="}</button>
        </div>
    )
}