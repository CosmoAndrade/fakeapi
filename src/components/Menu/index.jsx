import { Header, Nav } from "./menu";



function Menu() {

    return ( 
        <Header>
            <h1>ApiFake</h1>

            <Nav>
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Produtos</a>
                    </li>
                </ul>
            </Nav>
        </Header>
     );
}

export default Menu;