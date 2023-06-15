import React from 'react'
import { useNavigate } from 'react-router-dom'
import {people} from './UsersData'
import {getImageUrl} from './UserImgData'

export const MyData = () => {
    
    let navigate = useNavigate()
    return (
        <div>
            <h2>Scientist Information</h2>
            <div>
                <ul>
                    {
                        people.map((d) => <h4>
                            {d.id+1}).
                            {d.name}<br></br>
                            {d.accomplishment}<br></br>
                            {d.profession}<br></br>
                            <img src={getImageUrl(d)} alt="" />
                            
                    </h4> )
                    }
                </ul>
            </div>
            <button onClick={() => navigate("MyContacts")}>{"<-"}</button>
        </div>
    )
}
