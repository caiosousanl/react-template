import React from 'react';
import { Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import { Bar } from 'react-chartjs-2'


export default function Dashboard() {
    return(
        <div>
            <Row>
                <Col xs="12" sm="6" md="6">
                    <Card>
                        <CardHeader>
                            <h4>Dashboard</h4>
                        </CardHeader>
                        <CardBody>
                            <Bar width={100} height={80}  />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}