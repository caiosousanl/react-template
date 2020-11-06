import React, { useState } from 'react';
import { Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import { Bar } from 'react-chartjs-2'

const data = {
    labels: ['Item 1', 'Item 2', 'Item 3','Item 4','Item 5'],
    datasets: [
        {
            label: 'First',
            backgroudColor: '#ffffff',
            borderColor: '#606060',
            borderWidth: 1,
            data: [10, 20, 30, 40, 50 ,60 ,70]
        }
    ]
}

export default function Charts() {
    return(
        <div>
            <Row>
                <Col xs="12" sm="6" md="6">
                    <Card>
                        <CardHeader>
                            <h4>Charts</h4>
                        </CardHeader>
                        <CardBody>
                            <Bar data={data} width={100} height={80}  />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}