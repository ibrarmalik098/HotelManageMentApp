import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img width={'100%'}
          className="carouselwidth"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNulW0nJ2bzUGjvZgxf_aWjV2rBd3mSR0VjQ&usqp=CAU"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={'100%'}
          className="carouselwidth"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNulW0nJ2bzUGjvZgxf_aWjV2rBd3mSR0VjQ&usqp=CAU"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={'100%'}
          className="carouselwidth"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNulW0nJ2bzUGjvZgxf_aWjV2rBd3mSR0VjQ&usqp=CAU"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;