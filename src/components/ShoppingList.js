import { plantList } from "../data/planList"
import '../styles/ShoppingList.css'
import CareScale from "./CareScale"
import PlanItem from "./PlanItem"
function ShoppingList(){
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

    return (
		<div>
		
			<ul className="lmj-plant-list">
			{plantList.map(({id, cover, name, water, light}) => (
                <PlanItem 
                key={id}
                    id={id}
                    cover={cover}
                    name={name}
                    water={water}
                    light={light}
                     />
            ))}
			</ul>
		</div>
	)
}



export default ShoppingList