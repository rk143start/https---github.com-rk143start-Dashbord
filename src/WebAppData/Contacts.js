import './contact.css'
import {MyInfoData} from './MyInfoData'
import { useState, useEffect } from 'react';
import {FeaturedportFolio,
  MobilePortFolio,
  ApplicationsFeatures,
  ContaintsPortFolio,
  ApplirdportFolio
} from './ContainsAllData'

export const Contacts = () => {
  let [selected, setSelected] = useState("Featured")
  let [data,setData] = useState([])
  
    let List =[
      {
        id: "Featured",
        title: "Featured"
      },
      {
        id: "Mobile",
        title: "Mobile app"
      },
      {
        id: "Applications",
        title: "Mobile Applications "
      },
      {
        id: "Containts",
        title: "Apps Containts"
      },
      {
        id: "web Data",
        title: "Web Apps "
      },
    ]


    
    let getMyData = () => {
      switch (selected) {
        case "Featured":
          setData (FeaturedportFolio)
          break;
          case "Mobile":
            setData(MobilePortFolio) 
            break;
          case "Applications":
            setData(ApplicationsFeatures)
          break;
          case "Containts":
            setData(ContaintsPortFolio)  
         break;
         case "web Data":
          setData(ApplirdportFolio)  
          break
        default:
          setData (FeaturedportFolio)
          break;
      }
    }

    useEffect(() => {
      getMyData()
    },[selected])

    return (
        <div className='contactData' id="contacts">
           <div className='cotains'>
              <h2>PortFolio</h2>
            <ul className='items'>
             {
              List.map((d) =>(
              <MyInfoData id = {d.id}  title = {d.title} active={ selected === d.id} setSelected = {setSelected}/>))
             }
           </ul><br /> <br /><br />             
            </div>
             <div className='allimg1'>
             {
              data.map((d) => (
              <div className='item1'>
              <img style={{width:" 200px", height: "200px" }} src={d.img} alt={d.id} />
                <h2>{d.title}</h2>
              </div>               
              ))
             }
            </div>
           </div>
    )
}
