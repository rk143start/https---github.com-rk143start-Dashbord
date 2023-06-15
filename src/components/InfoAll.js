import React from 'react'

export const InfoAll = () => {
    let users = [
        {
            id: 1,
            name: "ram karhale",
            age: 24,
            bill: 20000,
            city: "pune"
        }
    ]
    return (
        <div>
          {
            users.map((d) => (
                <>
                <h3>{d.name}</h3><br />
                 <h4>{d.age}</h4> <br />
                 <h4>{d.bill}</h4><br />
                 <h4>{d.city}</h4><br />
                </>
            ))
          }
        </div>
    )
}
