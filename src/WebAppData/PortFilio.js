import { useState } from 'react'
import './portFilio.css'

export const PortFilio = () => {
    let [inDAta, setInpuData] = useState({
         fullNAme: "",
         Email: "",
         textArea: ""
    })
    
    let [allDatas, setAll] = useState([])
    
    let ChnageHandler = (e) => {
       let {name, value} = e.target
       setInpuData({...inDAta,[name]: value})
    }

    let SubmitHandler = (e)=> {
          e.preventDefault()
          setAll([...allDatas,inDAta])
          console.log(allDatas)
          alert("Thanks for Your Reasponce")
          
    }

    let {fullNAme, Email,textArea } = inDAta
    return (
          <div className='portfolio'>
                <div className='left1'>
                   <img src={"assets/pexel2.jpg"} alt="" />
                </div>
                <div className='right1'>  
                <div className='Allright'>
                 <form onSubmit={SubmitHandler}>
                 <div className='myInfos'>
                  <h2 className='heds'>Contact</h2>
                  </div><br /><br />
                    <div className='infos'>
                        <label htmlFor="">Full Name</label><br /> 
                        <input type="text" name='fullNAme' value={fullNAme} placeholder='Fullname' onChange={ChnageHandler} /><br /> <br />
                        <label htmlFor="">Emaile</label><br /> <br />
                        <input type="email" name="Email" value={Email} id="inDAta" placeholder='Emaile' onChange={ChnageHandler} /><br /> 
                        <label htmlFor="">Messege for HR</label><br /> <br />
                    <textarea name="textArea" value={textArea} id="" cols="50" rows="12" onChange={ChnageHandler}></textarea><br />
                    </div><br /> <br />
                   
                    <button >Submit</button>
                 </form><br />
                 </div>
                </div>
        </div>
    )
}