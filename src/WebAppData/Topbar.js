import './topbar.css'

export const Topbar = ({colorsdata, setColor}) => {
    return (
        <div className= {'topbar ' + (colorsdata && "active1")}>
            <div className= 'wrapper'>
               <a href="Testomonials">soZeta.</a>
               <h2>ramkarhale@gmail.com</h2>
                <div className='alldata'>
                    <h2>+919730208154Contact</h2>    
                </div>
                <div className='bardata'>
                <div className='chnages'  onClick={() => setColor(!colorsdata)}>
                    <span>-</span>
                    <span>-</span>
                    <span>-</span>
                </div>
              </div>
            </div>
        </div>
    )
}

// 8857872554

