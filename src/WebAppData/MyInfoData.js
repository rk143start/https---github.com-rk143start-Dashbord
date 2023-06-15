import './myInfoData.css'

export const MyInfoData = ({id,title,active,setSelected}) => {
    return (
         <li className={active ? "activedata" : "activedata id"} onClick={() => setSelected(id)}>
            {title}
        </li>
    )
}
