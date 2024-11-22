import React from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { FaPlay } from 'react-icons/fa';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Stored = () => {
    let arr = [{ date: "JUL16", place: "DETROIT,MI", activity: "DTE ENERGY MUSIC THEATRE" },
    { date: "JUL19", place: "TORONTO,ON", activity: "DTE ENERGY MUSIC THEATRE" },
    { date: "JUL20", place: "BRISTOW, VA", activity: "JIGGY LUBE LIVE" },
    { date: "JUL25", place: "PHOENIX, AZ", activity: "AK-CHIN PAVILION" },
    { date: "JUL27", place: "LAS VEGAS, NV", activity: "T-MOBILE ARENA" },
    { date: "JUL28", place: "CONCORD, CA", activity: "CONCORD PAVILION" },
    { date: "JUL16", place: "DETROIT,MI", activity: "DTE ENERGY MUSIC THEATRE" }]
    return (<div>
        <div className="bg-secondary text-light glowing-text" style={{ height: "130px", margin: "-20px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                <Button variant="outline-info" style={{ height: "50px" }} className="text-light glowing-text">Get our Latest Album</Button>
                <Button variant="outline-info" size="lg" style={{ marginTop: "15px" }}><FaPlay /></Button>
            </div>
        </div>
        <Container>
            <div style={{ marginTop: "3%" }}>
                <h2>Tours</h2>
                {arr.map((item) => {
                    return <Container>
                        <Row>
                            <Col>{item.date}</Col>
                            <Col>{item.place}</Col>
                            <Col>{item.activity}</Col>
                            <Col><Button variant="info">BUY TICKETS</Button></Col>

                        </Row>
                        <hr style={{ borderTop: "3px solid #333" }} />
                    </Container>
                })}
            </div>
        </Container>

    </div>

    )
}

export default Stored;