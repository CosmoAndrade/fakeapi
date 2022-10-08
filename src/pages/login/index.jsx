
import { useContext, useState } from 'react'

import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';

import { Button, Container, Input } from "./loginStyled";

function Login() {

    const navigator = useNavigate()
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')

    const {
        login
    } = useContext(AuthContext)

    function handleLogin() {
        api.post('auth/login', { username: user, password: pass })
            .then((response) => {
                console.log(response)
              
                navigator('/products')

            })
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center'}} >Login</h1>

            <Container>

                <Input type="text" 
                placeholder="Username"
                value={user}
                onChange={e => setUser(e.target.value)}
                />
                <Input type="password" 
                placeholder="Password"
                value={pass}
                onChange={e => setPass(e.target.value)}
                />

                <Button 
                type="button"
                  onClick={handleLogin}
                >Entrar</Button>

            </Container>

        </div>
     );
}

export default Login;
