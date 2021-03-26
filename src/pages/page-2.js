import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card, Container, Button,  } from "react-bootstrap"

import slide14 from '../images/slide14.jpg'
import slide13 from '../images/slide13.jpg'
import slide18 from '../images/slide18.jpg'


const SecondPage = () => (
  <Layout>
    <SEO title="Bolos" />
    <br></br> <br></br> <br></br> <br></br>

   

    <Container className="teste2">
      <Card id="teste3" style={{ width: '18rem' }}>
        <Card.Body>
          <img src={slide14} alt="nome" />
          <Card.Title id="text1">Red Vevelt</Card.Title>
          <Card.Text>

            <p className="texto">O bolo veludo vermelho é um bolo popular, com uma coloração vermelha ou marrom-avermelhada...</p>
          </Card.Text>
          <Card.Link href="https://www.montaencanta.com.br/bolo-2/bolo-de-festa-2/bolo-red-velvet/" target="_blank"><span id="bt3"><Button variant="outline-danger">Saiba Mais</Button></span></Card.Link>
        </Card.Body>
      </Card>
      <br></br>
      <Card id="teste4" style={{ width: '18rem' }}>
        <Card.Body>
          <img src={slide13} alt="nome" />
          <Card.Title id="text2">Chocolate Nescau</Card.Title>
          <Card.Text>
            <p className="texto">Bolo de chocolate é um bolo simples ou confeitado, que leva chocolate derretido ou em pó...</p>
          </Card.Text>
          <Card.Link href="https://www.montaencanta.com.br/tag/bolo-de-chocolate/" target="_blank"> <span id="bt2"><Button variant="outline-danger">Saiba Mais</Button></span></Card.Link>
        </Card.Body>
      </Card>
      <br></br>
      <Card id="teste5" style={{ width: '18rem' }}>
        <Card.Body>
          <img src={slide18} alt="nome" />
          <Card.Title id="text3">Chocolate Branco</Card.Title>
          <Card.Text>
            <p className="texto">O chocolate é um alimento feito com base na amêndoa fermentada e torrada do cacau, além de ser consumido puro...</p>
          </Card.Text>
          <Card.Link href="https://www.montaencanta.com.br/bolo-2/bolo-branco/" target="_blank"><span id="bt1"><Button variant="outline-danger">Saiba Mais</Button></span></Card.Link>
        </Card.Body>
      </Card>
    </Container>




    <Link to="/">Página inicial</Link>
  </Layout>
)

export default SecondPage
