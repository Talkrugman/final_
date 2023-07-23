import { Link } from 'react-router-dom';

export default function Navbar() {
    return <nav>
        <h1>gluten free home made products</h1>
        <ul>
            <li><Link to='/'>home</Link></li>
            <li><Link to='/products'>catalog</Link></li>
            <li><Link to='/cart'>cart</Link></li>
        </ul>

    </nav>
}
