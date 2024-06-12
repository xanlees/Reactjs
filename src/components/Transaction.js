import Item from "./Item"
import './Transaction.css'


const Transaction = (props) =>{
    const {item} = props
   return(
    <div>
        <ul className="item-list">
            {item.map((e)=>{
                return <Item {...e} key={e.id}/>
            })}
        </ul>
    </div>
    
   )
}

export default Transaction