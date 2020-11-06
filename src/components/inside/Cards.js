import React, { useState } from 'react';
import { Row, Col, Card, CardHeader, CardBody, CardFooter, Collapse } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'


library.add(faArrowDown);
export default function Cards() {
    const [cardOpen, setCardOpen] = useState(true)

    function toggleCard(e) {
        e.preventDefault();
        setCardOpen(!cardOpen);
    }
    return(
        <div>
            <Row>
                <Col xs="12" sm="6" md="4">
                    <Card>
                        <CardHeader>
                            <h4>Card title</h4>
                        </CardHeader>
                        <CardBody>
                            Text
                        </CardBody>
                        <CardFooter>
                            Card footer
                        </CardFooter>

                    </Card>
                </Col>
                <Col xs="12" sm="6" md="4">
                    <Card>
                        <CardHeader className="text-right">
                            <h4>
                                <a href="#" onClick={toggleCard}>
                                    <FontAwesomeIcon icon="arrow-down"/>
                                </a>
                            </h4>
                        </CardHeader>
                        <Collapse isOpen={cardOpen}>
                            <CardBody>
                                Text
                            </CardBody>
                            <CardFooter>
                                Card footer
                            </CardFooter>
                        </Collapse>

                    </Card>
                </Col>
            </Row>
        </div>
    )
}