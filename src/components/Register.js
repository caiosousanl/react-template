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


const Register = (props) => {
    useClass('bg-grey')
    const handleLogin = () => {
        console.log('fazer o HTTP request aqui')
    }
    return(
        <div className="mt-5 flex-row align-items-center">
            <Container>
                <Row className="justify-content-center">
                    <Col md="6">
                        <Card >
                            <CardBody>
                                <Form >
                                    <h1>Registre-se</h1>
                                    <p>Insira seu nome, email e senha. <br/>Já possui login? <Link to='/login'>Login</Link></p>
                                    <InputGroup className="mb-3">
                                        <Input type="text" placeholder="Nome" ></Input>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="email" placeholder="E-mail" ></Input>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="password" placeholder="Password" ></Input>
                                    </InputGroup>
                                    <div className='d-flex flex-row bd-highlight mb-3'> 
                                        <InputGroup className='mb-3'>
                                            <Button outline color="primary" onClick={handleLogin}>Entrar</Button>
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

export default Register;