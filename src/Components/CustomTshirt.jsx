import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./CustomTshirt.css"
import Card from 'react-bootstrap/Card';
import { CardBody } from "react-bootstrap";
const CustomTshirt = () => {
    const pic1url = "https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/188647/optimized_large_thumb_stream.jpg"
    const [photo, setPhoto] = useState(<img src={pic1url} style={{ width: "70%", height: "80%" }}/>);
    const pic2url = "https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/188768/optimized_large_thumb_stream.jpg"
    const pic3url = "https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/189167/optimized_large_thumb_m39309small_copy.jpg"
    const pic4url = "https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/188716/optimized_large_thumb_stream.jpg";
    const pic5url = "https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/189106/optimized_large_thumb_stream.jpg";
    const pic6url = "https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/188686/optimized_large_thumb_stream.jpg"


    const HandlePhoto = (urlpics) => {
        setPhoto(<img src={urlpics} style={{marginBottom:"100px"}}/>)
    }

    return <div><Container fluid style={{ display: "flex", padding: 0, margin: 0,justifyContent:"space-between"}}>
        <Row>

            <Col><Card style={{ width: '7rem' ,borderColor:"white"}}>
                <Card.Body>
                    <div><Container fluid style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: 0, margin: 0 }}>
                        <Row className="no-gutters">
                            <Col className="no-padding"><img src={pic1url} style={{ width: "70%", height: "80%" }} onClick={() => HandlePhoto(pic1url)} /></Col>
                        </Row>
                        <Row className="no-gutters" style={{ padding: 0, margin: 0 }}>
                            <Col className="no-padding" style={{ padding: 0, margin: 0 }}><img src={pic2url} style={{ width: "70%", height: "80%" }} onClick={() => HandlePhoto(pic2url)} /></Col>
                        </Row>
                        <Row className="no-gutters" style={{ padding: 0, margin: 0 }}>
                            <Col className="no-padding" style={{ padding: 0, margin: 0 }}><img src={pic3url} style={{ width: "70%", height: "80%" }} onClick={() => HandlePhoto(pic3url)} /></Col>
                        </Row>
                        <Row className="no-gutters" style={{ padding: 0, margin: 0 }}>
                            <Col className="no-padding" style={{ padding: 0, margin: 0 }}><img src={pic4url} style={{ width: "70%", height: "80%" }} onClick={() => HandlePhoto(pic4url)} /></Col>
                        </Row>
                        <Row className="no-gutters" style={{ padding: 0, margin: 0 }}>
                            <Col className="no-padding" style={{ padding: 0, margin: 0 }}><img src={pic5url} style={{ width: "70%", height: "80%" }} onClick={() => HandlePhoto(pic5url)} /></Col>
                        </Row>
                        <Row className="no-gutters" style={{ padding: 0, margin: 0 }}>
                            <Col className="no-padding" style={{ padding: 0, margin: 0 }}><img src={pic6url} style={{ width: "70%", height: "80%" }} onClick={() => HandlePhoto(pic6url)} /></Col>
                        </Row>
                    </Container>
                    </div>
                </Card.Body>
            </Card>
            </Col>
        </Row>
        <Row >
            <Col> <Card style={{ width: '30rem' ,borderColor:"white"}}>

                <Card.Body>
                    <h1>{photo}</h1>
                </Card.Body>
            </Card></Col>
        </Row>
        <Row>
            <Col>
            <Card style={{ width: '40rem',borderColor:"white" }}>
            <Card.Body>
            <div>
                
                <div><Card style={{backgroundColor:"green",color:"black"}}><Card.Body><h1>Cash On Delivery Available</h1></Card.Body></Card></div>
                <h2><Card style={{backgroundColor:"orange",color:"black"}}><Card.Body>Details about the Product</Card.Body></Card></h2>
                 <div><Card style={{backgroundColor:"yellow",color:"black"}}><Card.Body><h2>Reviews</h2></Card.Body></Card></div>
                 <div>
                    <Card style={{backgroundColor:"pink",color:"black"}}>
                        <Card.Body> <span>Awesome product.Go for it</span> </Card.Body>
                    </Card>
                 </div>
                 <div>
                    <Card style={{backgroundColor:"pink",color:"black"}}>
                    <Card.Body>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ullam enim natus ab dolor, voluptate fuga iure inventore cupiditate quia velit totam similique vero et. Voluptate eos inventore aliquam autem?</span>
                    </Card.Body>
                    </Card>
                 </div>
                 <div>
                    <Card style={{backgroundColor:"pink",color:"black"}}>
                    <Card.Body>
                    <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt laudantium maiores et corporis vel, eveniet nulla nihil ut cumque? Est natus impedit illo similique dignissimos dolor minima ab eaque! Accusamus.</span>
                    </Card.Body>
                    </Card>
                 </div>
                 <div>
                    <Card style={{backgroundColor:"pink",color:"black"}}>
                    <Card.Body>
                    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum recusandae delectus eveniet voluptates praesentium. Perspiciatis, ipsam velit! Voluptas, nesciunt, dolore culpa impedit eveniet itaque labore aspernatur fugiat corrupti, quibusdam quo.</span>
                    </Card.Body>
                    </Card>
                 </div>
                
            </div>
            </Card.Body>
            </Card>
            </Col>
        </Row>
    </Container>
    </div>


}
export default CustomTshirt;