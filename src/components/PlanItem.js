import CareScale from "./CareScale"
import '../styles/PlanItem.css'
function PlanItem(props) {
    const {name, cover, id, light, water} = props

    return (
        <li key={id} className='lmj-plant-item'>
      	<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
          {name}
           <div>
           <CareScale careType='water' scaleValue={water} /> 
            <CareScale careType='light' scaleValue={light} /> 
           </div>
        </li>
    )

}
export default PlanItem;