import './intro.css'
import { useEffect,useState } from 'react'
// import {init} from 'ityped'

export const Intro = () => {
    let [count,setCount] = useState(0)
    // let RefData = useRef()
   
    // useEffect(() => {
    //     init(RefData.current, {
    //        showCursor: true,
    //         backDelay: 1500,
            //   backSpeed: 60,
    //        string: ["Devolper", "Frelancer", "ReactJs"]
    //     })
    // },[])

    let MyName = ["Devolpers", "ReactsJs", "JavaScripts"]

    let getData =() => {
        setCount(MyName.reverse(MyName))
    }

    useEffect(()=> {
        setInterval(() => {
            getData()
        },1000);     
      
    },[])

    return (
        <div className='intro' id='intro'>           
                <div className='Right'>
                    <div className='items'>
                    <img src="assets/Screenshot .png" alt="" />
                    </div>
                </div>
                 <div className='left'>
                    <div className='basics'>
                     <h2>Hii There i'am </h2>
                     <h1>Reacts Documentations</h1>
                     <h3>FreeLancer:- <span className='spacify'>{count }</span></h3>
                     </div>
                 </div>
        </div>
    )
}
