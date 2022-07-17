import { useSelector } from "react-redux"
import Cart from "../components/cart/Cart"
import BottomNav from "../components/layout/BottomNav"


const cart = () => {
  const {cartItems} = useSelector(state => state.cart)
    return (
        <div>
            
            <Cart/>
            {cartItems==0&&            <BottomNav/>
            }

        </div>
    )
}


// export async function getServerSideProps(context) {
//     return {
//       props: {
//         protected: true
//       }
//     };
//   }

export default cart
