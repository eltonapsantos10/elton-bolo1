import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Carousel, Card, CardDeck, Container, Row, Col, Button, Jumbotron, } from 'react-bootstrap'

import slide01 from '../images/slide01.jpg'
import slide02 from '../images/slide02.jpg'
import slide03 from '../images/slide03.jpg'

import slide08 from '../images/slide08.jpg'
import slide06 from '../images/slide06.png'
import slide09 from '../images/slide09.png'

import slide12 from '../images/slide12.jpg'
import slide13 from '../images/slide13.png'
import slide11 from '../images/slide11.jpg'



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />




    <Jumbotron className="jumb">
<h1 className="titulo"> <a href=""> Os verdadeiros apaixonados por bolos! </a> </h1>
</Jumbotron>


    <Carousel className="fundo">
      <Carousel.Item>
        <img src={slide01} alt="nome" />
      </Carousel.Item>

      <Carousel.Item>
        <img src={slide02} alt="nome" />
      </Carousel.Item>

      <Carousel.Item>
        <img src={slide03} alt="nome" />
      </Carousel.Item>
    </Carousel>


    <CardDeck className="eu">
      <Card>
        <img src={slide09} alt="nome" />
        <Card.Body>
          <Card.Title>Quibe</Card.Title>
          <Card.Text>
            É um prato típico do Oriente Médio que consiste em um bolinho de massa de triguilho ou semolina, recheado com carne, temperada com ervas, que pode ser servido cru, cozido ou frito.
      </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="outline-danger">Aqui!</Button>
        </Card.Footer>
      </Card>
      <Card>
        <img src={slide08} alt="nome" />
        <Card.Body>
          <Card.Title>Brigadeiro</Card.Title>
          <Card.Text>
            É um doce típico da culinária brasileira, com origem no Sudeste do país, que rapidamente se difundiu pelo Brasil, tornando-se comum em todo o país a sua presença em festas.
      </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="outline-danger">Aqui!</Button>
        </Card.Footer>
      </Card>
      <Card>
        <img src={slide06} alt="nome" />
        <Card.Body>
          <Card.Title>Coxinha</Card.Title>
          <Card.Text>
            É um salgadinho brasileiro, de origem paulista, também comum em Portugal, feito com massa de farinha de trigo e caldo de galinha, que envolve um recheio elaborado com carne de frango.
      </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="outline-danger">Aqui!</Button>
        </Card.Footer>
      </Card>
    </CardDeck>

    <br></br> <br></br>
    <Container className="foto">
      <Row>
        <Col xs={6} md={4}>
          <img src={slide12} alt="nome" />
        </Col>
        <Col xs={6} md={4}>
          <img src={slide13} alt="nome" />
        </Col>
        <Col xs={6} md={4}>
          <img src={slide11} alt="nome" />
        </Col>
      </Row>
    </Container>

    <Link to="/page-2/">Página Bolos</Link> <br />
    
  </Layout>
)

export default IndexPage
