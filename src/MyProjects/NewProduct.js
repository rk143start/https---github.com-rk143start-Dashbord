import React from 'react'

export const NewProduct = () => {
    let dats = [
        {
            id:"1",
            title: "This is Library"
        },
        {
            id:"2",
            title: "This is BootBoll ground"
        },
        {
            id:"3",
            title: "This is Home Page"
        },{
            id:"4",
            title: "This is Collages Name Sit"
        },

    ]
    return (
        <div>
            <h2>This is My New Products List</h2>
            <ul>
                {
                    dats.map((d) => <li>{d.title}</li>)
                }
            </ul>
        </div>
    )
}
