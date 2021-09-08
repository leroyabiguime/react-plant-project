import { useState } from 'react/cjs/react.development'
import '../styles/Cart.css'

function Cart() {
    const monsteraPrice = 8
    const [cart, updateCart] = useState(0)
    const [isOpen, setIsOpen] = useState(true)

    return isOpen ? (
        <div className="lmj-cart">
            <h2>Panier</h2>
            <div>
                Montsera: {monsteraPrice}$
                <button onClick={() => updateCart(cart + 1)}>Ajouter</button>
            </div>
           <h3>
           Total: {monsteraPrice * cart} $
           </h3>

            <div>
                <button onClick={()=> updateCart(0)}>Vider le panier</button>
            </div>
           
        </div>
    ):
    (
        <button onClick={()=> setIsOpen(true)}>Ouvrir le panier</button>
    )
}
export default Cart
