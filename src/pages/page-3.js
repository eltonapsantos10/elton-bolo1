import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


import slide20 from '../images/slide20.jpg'

import { Card, Button, Form, FormGroup } from "react-bootstrap"

const ThirdPage = () => (
  <Layout>
    <SEO title="Contatos" />

    <br></br>
    <br></br>
    <br></br>
    <br></br>

    <Card className="fundo1">


      <Card.ImgOverlay>
        <Card.Title></Card.Title>
        <Card.Text>
          <a href="https://github.com/eltonapsantos10?tab=repositories" target="_blank">  <img src="https://img.icons8.com/fluent/96/000000/github.png" /> </a>
        </Card.Text>

      </Card.ImgOverlay>
    </Card>

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Deixe seu e-mail:</Form.Label>
        <Form.Control type="email" placeholder="seu e-mail" />
        <Form.Text className="text-muted">
         Seu e-mail não será compartilhado.
    </Form.Text>
      </Form.Group>
    </Form>



    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Button id="bot"><Link id="te" to="/"><span>Pagina incial </span></Link></Button>

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
  </Layout>
)

export default ThirdPage
