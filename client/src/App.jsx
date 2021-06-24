import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import Notifications from './components/Notifications';
import Options from './components/Options';
import VideoPlayer from './components/VideoPlayer';

export default function App() {
    return (
        <Container fluid className="bg-light p-1">
            <Card.Header className="bg-primary text-light m-0">
                <Row className="justify-content-md-center">
                    <Col sm={1}>
                        <h1>MeetVAx</h1>
                    </Col>
                </Row>
            </Card.Header>
            <Card.Body className="bg-light text-dark m-0 mt-1">
                <VideoPlayer />
                <Options>
                    <Notifications />
                </Options>
            </Card.Body>
        </Container>
    )
}

