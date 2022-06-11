import { createEffect, createSignal, Show } from "solid-js/types/reactive/signal"
import {jwt, addToCart, getCart} from "cart/cart"

export default ({ id }) =>
{
    const [loggedIn, setLoggedIn] = createSignal(false)

    createEffect(() =>
    {
        return jwt.subscribe(jwt => setLoggedIn(!!jwt))
     })

    return (
        <Show when={loggedIn()}>
            <button
                onClick={() => addToCart(id)}
                className= "bg-red-900 text-white py-2 px-5 rounded-md text-sm"
            >
                Add To Cart
            </button>

        </Show>
    )
}