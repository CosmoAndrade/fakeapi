import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link, useNavigate } from "react-router-dom"
import { Div } from "./produto";

function Produtos() {
    const history = useNavigate()
    const [products, setProducts] = useState([])

    function getProducts() {
        api.get("products?limit=5")
            .then((response) => setProducts(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }


    useEffect(() => {

        getProducts()
    }, [])



    return (
        <Div>
            <h1>Produtos</h1>
            <Link style={{
                float: 'right',
                marginBottom: '25px',
                backgroundColor: 'blue',
                padding:'5px 25px',
                color:'white'

            }} to={'/'}>Login</Link>

            {products.map((product) => {
                return (
                    <div>

                        <table>
                            <thead>
                                <tr>
                                    <th>Produto</th>
                                    <th>Categoria</th>
                                    <th>Imagem</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{product.title}</td>
                                    <td>{product.category}</td>
                                    <td>
                                        <img style={{ width: '50px' }} src={product.image} alt="" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                )
            })}




        </Div>
    );
}

export default Produtos;
