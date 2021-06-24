import React, { useContext } from 'react';
import { Button, Row, Col, Container } from 'react-bootstrap';
import { SocketContext } from '../SocketContext';


function Notifications() {
    const { answerCall, call, callAccepted } = useContext(SocketContext);
    return (
        <Container>
            {
                call.isReceivingCall && !callAccepted && (
                    <Row className="m-2">
                        <Col xs={6}>
                            <h4>{call.name} is calling..</h4>
                        </Col>
                        <Col xs={6}>
                            <Button varient="success" className="p-1" onClick={answerCall}>
                                <i class="bi bi-telephone-inbound"></i> &nbsp;
                                Receive
                            </Button>
                        </Col>
                    </Row>
                )
            }
        </Container>
    );
}

export default Notifications;
