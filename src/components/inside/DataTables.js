import React, { useEffect, useState } from 'react';
import { Row, Col, Card, CardHeader, CardBody, CardFooter, Collapse } from 'reactstrap';

import BootstrapDatatables from 'react-bootstrap-table-next';
import PaginationFactory from 'react-bootstrap-table2-paginator';

export default function DataTables() {
    const columns = [
    {
        dataField: 'id',
        text: 'ID'
    },
    {
        dataField: 'title',
        text: 'Title'
    },
    {
        dataField: 'price',
        text: 'Price'
    },
]

    const [data, setData] = useState([]);

    useEffect( () => {
        const dataset = [
            {
                id:1,
                title: 'product 1',
                price: 10
            },
            {
                id:2,
                title: 'product 2',
                price: 15
            },
            {
                id:3,
                title: 'product 3',
                price: 20
            },
            {
                id:4,
                title: 'product 4',
                price: 25
            },
            {
                id:5,
                title: 'product 5',
                price: 30
            },
            {
                id:6,
                title: 'product 6',
                price: 40
            },
            {
                id:7,
                title: 'product 7',
                price: 45
            },
            {
                id:8,
                title: 'product 8',
                price: 50
            },
            {
                id:9,
                title: 'product 9',
                price: 60
            },
            {
                id:10,
                title: 'product 10',
                price: 70
            },
            {
                id:11,
                title: 'product 1',
                price: 75
            },
        ];
        setData(dataset);
    },[])


    return(
        <div>
            <Row>
                <Col xs="12" sm="6" md="6">
                    <Card>
                        <CardHeader>
                            <h4>Datatables  </h4>
                        </CardHeader>
                        <CardBody>
                            <BootstrapDatatables 
                                keyField='id'
                                data={data}
                                columns={columns}
                                striped
                                hover
                                condensed
                                bordered={true}
                                pagination={PaginationFactory()}
                            />
                        </CardBody>
                        <CardFooter>
                            Card footer
                        </CardFooter>

                    </Card>
                </Col>
            </Row>
        </div>
    )
}