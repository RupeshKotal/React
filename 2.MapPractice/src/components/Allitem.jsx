import styles from "./Allitem.module.css"

let Allitem = ( {menu} )=>{
    return(
        <ul className="list-group">
        {menu.map((item) =>(
            <li key={item} className={`list-group-item ${styles.listitem}`}>{item}</li>
          )       
          )}
        </ul>
    )
}

export default Allitem