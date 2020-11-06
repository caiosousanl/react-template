import React from 'react';
import { Link } from 'react-router-dom';
import useClass from '../hooks/add-class-body'; // parei min 6
import {
    Button,
    Container,
    Col,
    Row,
    Form,
    Card,
    CardBody,
    Input,
    InputGroup
} from 'reactstrap';



const Login = (props) => {
    useClass('bg-grey')
    const handleLogin = () => {
        console.log('fazer o HTTP request aqui')
        return(
            <div>
                <Link to="/" className="btn btn-primary">hello</Link>
            </div>
        )

    }
    return(
        <div className="mt-5 flex-row align-items-center">
            <Container>
                <Row className="justify-content-center">
                    <Col md="6">
                        <Card >
                            <CardBody>
                                <Form >
                                    <h1>Login</h1>
                                    <p>Entre com seu email e senha. <br/>Ainda não possui login? <Link to='/register'>Crie sua conta</Link></p>
                                    <InputGroup className="mb-3">
                                        <Input type="email" placeholder="E-mail" ></Input>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="password" placeholder="Password" ></Input>
                                    </InputGroup>
                                    <div className='d-flex flex-row bd-highlight mb-3'> 
                                        <InputGroup className='mb-3'>
                                            <Link to="/">
                                                <Button outline color="primary" onClick={handleLogin}>Entrar</Button>
                                            </Link>
                                        </InputGroup>
                                        <InputGroup className='mb-3'>
                                            <Link to='/forgot'>
                                                <Button color="link">Esqueci minha senha</Button>
                                            </Link>
                                        </InputGroup>
                                    </div>

                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login;