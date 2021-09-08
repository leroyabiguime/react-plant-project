import { plantList } from "../data/planList"
import '../styles/ShoppingList.css'
import CareScale from "./CareScale"
import PlanItem from "./PlanItem"
function ShoppingList({cart, updateCart}){
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

    return (
		<div>
		
			<ul className="lmj-plant-list">
			{plantList.map(({id, cover, name, water, light}) => (
                <div key={id}>
                <PlanItem 
                    key={id}
                    id={id}
                    cover={cover}
                    name={name}
                    water={water}
                    light={light}
                     />
                     <button onClick={() => updateCart(cart + 1)}>Ajouter</button>
                </div>

            ))}
			</ul>
		</div>
	)
}



export default ShoppingList