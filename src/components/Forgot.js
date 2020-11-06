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


const Forgot = (props) => {
    useClass('bg-grey')
    const handleSendEmail = () => {
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
                                    <h1>Esqueci minha senha</h1>
                                    <p>Insira seu email para redefinir a senha.</p>
                                    <InputGroup className="mb-3">
                                        <Input type="email" placeholder="E-mail" ></Input>
                                    </InputGroup>
                                    <div className='d-flex flex-row bd-highlight mb-3'> 
                                        <InputGroup className='mb-3'>
                                            <Button className='col-sm-2' outline color="primary" onClick={handleSendEmail}>Entrar</Button>
                                            <Link className='py-2 col-sm-2 ' to='/login'>Login</Link>
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

export default Forgot;