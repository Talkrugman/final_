import Catalog from "./Catalog";
import Cart from "./Cart";

const text = import.meta.env.VITE_NISIM;

function Main() {
    return <main>
        <h1>{text}</h1>
        <Catalog />
        <Cart />
    </main>
}

export default Main;