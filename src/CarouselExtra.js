import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class BootstrapCarouselComponent extends React.Component {
    render() {
        return (
            <div>

                <div className='container-fluid' >
                    <div className="row">
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://picsum.photos/500/300?img=1"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>HEllo Gyes Chai pee lo</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://picsum.photos/500/300?img=2"
                                        alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Ebla Ya HAewaan</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://picsum.photos/500/300?img=3"
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>ERJA Al LOOBY</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}
export default BootstrapCarouselComponent;