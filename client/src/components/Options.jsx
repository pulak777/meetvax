import React, { useContext, useState } from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { SocketContext } from '../SocketContext';


function Options({ children }) {
    const { me, callAccepted, callEnded, name, setName, leaveCall, callUser } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');
    const [idCopied, setIdCopied] = useState(false);
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} md={4} className="offset-md-2">
                        <Form>
                            <h3>Account Info</h3>
                            <Form.Control className={idCopied ? "d-none" : ""} as="textarea" rows={1} value={name} placeholder="Enter your name" onChange={(e) => { setName(e.target.value) }} />
                            <CopyToClipboard text={me} onCopy={() => { setIdCopied(true); }}>
                                <Button variant={idCopied ? "secondary" : "primary"} className="mt-1">
                                    {
                                        idCopied ? <div><i className="bi bi-clipboard"></i> &nbsp; <span>Copied</span></div> : <div><i class="bi bi-clipboard-check"></i> &nbsp; <span>Copy ID</span></div>
                                    }
                                </Button>
                            </CopyToClipboard>
                        </Form>
                    </Col>
                    <Col xs={12} md={4}>
                        <Form>
                            <h3>Make a call</h3>
                            <Form.Control as="textarea" rows={1} value={idToCall} placeholder="Paste friend's ID" onChange={(e) => { setIdToCall(e.target.value) }} />
                            {
                                callAccepted && !callEnded ? (
                                    <Button variant="danger" className="mt-1" onClick={leaveCall}>
                                        <i className="bi bi-telephone-x"></i> &nbsp;
                                        Hang up
                                    </Button>
                                ) : (
                                    <Button variant="success" className="mt-1" onClick={() => callUser(idToCall)}>
                                        <i className="bi bi-telephone-outbound"></i> &nbsp;
                                        Call
                                    </Button>
                                )
                            }
                        </Form>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs={6}>
                        {children}
                    </Col>
                </Row>
            </Container >
        </div >
    );
}

export default Options;
