import React, { useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import { SocketContext } from '../SocketContext';

function VideoPlayer() {
    const { name, call, stream, myVideo, userVideo, callAccepted, CallEnded } = useContext(SocketContext);
    return (
        <Container>
            <Row className="justify-content-center">
                {/* my video */}
                <Col xs={12} md={6}>
                    {
                        stream && (
                            <Card>
                                <Card.Header>{name || 'You'}</Card.Header>
                                <Card.Body className="p-0">
                                    <video className="h-100 w-100" playsInline muted ref={myVideo} autoPlay />
                                </Card.Body>
                            </Card>
                        )
                    }
                </Col>
                {/* user's video */}
                {
                    callAccepted && !CallEnded && (
                        <Col xs={12} md={(callAccepted && !CallEnded) ? 6 : 12}>
                            <Card>
                                <Card.Header>{call.name || 'Person'}</Card.Header>
                                <Card.Body className="p-0">
                                    <video className="h-100 w-100" playsInline ref={userVideo} autoPlay />
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }

            </Row>
        </Container>
    );
}

export default VideoPlayer;
