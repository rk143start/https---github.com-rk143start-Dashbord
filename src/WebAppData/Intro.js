import './intro.css'

export const Intro = () => {
    let AllDatas = [
        {
            id: "1",
            name: "Ms. Lorry zenna",
            info: "All Information about Glbal Warming and Nuture information surching Data And information",
            Profection: "Globle Warmming",
            img: "assets/pexels-screen-post-4526424.jpg"
        },
        {

            id: "2",
            name: "Mr. Allec Zanders",
            info: " Semoconductor it is a part of Data and  information about the all Semiconductores and data you can easly get a data and information all is well.",
            Profection: "Semiconductor Scientiest",
            img: "assets/pexels-luis-dalvan-1770809.jpg"
        },
        {

            id: "3",
            name: "Mr. Ramanujan Maths",
            info: " she is a mathematicianse And gots lots of information and data you can easly get a data and information all is well.",
            Profection: "Phisics Scientics",
            img: "assets/pexels-matheus-bertelli-799443.jpg"
        },
    ]

    return (
        <div className='introdata' id='intro'>
            <h1>PortFolio</h1>
            <div className='containtsall'>
             {
                AllDatas.map((d) => (
                <div className="container" >
                    
                <div className='info'>
                     <img style={{width :"300px", height:"300px"   }} src={d.img} alt="" />
                </div>
                <div><br />
                    <h3 className='info1'><br />
                      {d.info}<br />
                    </h3>
                </div><br /> <br />
                <div><br />
                    <h1 className='names1'>{d.name}</h1><br />
                    <h5 className='prof1'>{d.Profection}</h5>     
                </div>
             </div> ))}    
             </div><br /><br />
        </div>
    )
}
