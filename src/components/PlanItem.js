import CareScale from "./CareScale"
import '../styles/PlanItem.css'
function handleClick() {
    console.log('Ceci est un cliic')
}
function PlanItem(props) {
    const {name, cover, id, light, water} = props

    return (
        <li key={id} className='lmj-plant-item' onClick={handleClick}>
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