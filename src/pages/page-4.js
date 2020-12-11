import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Card, CardGroup, Button } from "react-bootstrap"

import slide23 from '../images/slide23.png'
import slide24 from '../images/slide24.jpg'
import slide27 from '../images/slide27.png'
import slide28 from '../images/slide28.jpg'
import slide26 from '../images/slide26.png'
import slide25 from '../images/slide25.jpg'


const FourthPage = () => (
  <Layout>
    <SEO title="Salgados" />
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>




    <CardGroup>
      <Card className="bg1">

        <Card.Body>
          <img src={slide23} alt="nome" />
          <Card.Text>
            <Card.Title id="text1"> Empadinha </Card.Title>
          </Card.Text>
        </Card.Body>

      </Card>
      <Card className="bg1">
        <Card.Body>
          <img src={slide24} alt="nome" />
          <Card.Title id="text1">Quibe Assado</Card.Title>
          <Card.Text>

          </Card.Text>
        </Card.Body>

      </Card>

      <Card className="bg1">
        <Card.Body>
          <img src={slide27} alt="nome" />
          <Card.Title id="text1">Bolinho de Carne</Card.Title>
          <Card.Text>

          </Card.Text>
        </Card.Body>

      </Card>

      <Card className="bg1">
        <Card.Body>
          <img src={slide26} alt="nome" />
          <Card.Title id="text1">Quibe Frito</Card.Title>
          <Card.Text>

          </Card.Text>
        </Card.Body>

      </Card>


      <Card className="bg1">
        <Card.Body>
          <img src={slide28} alt="nome" />
          <Card.Title id="text1">Enroladinhos</Card.Title>
          <Card.Text>

          </Card.Text>
        </Card.Body>

      </Card>
    </CardGroup>


    <CardGroup>
      <Card className="bg2">

        <Card.Body>
          <img src={slide24} alt="nome" />
          <Card.Text>
            <Card.Title id="text1">Quibe Assado</Card.Title>
          </Card.Text>
        </Card.Body>

      </Card>
      <Card className="bg2">
        <Card.Body>
          <img src={slide28} alt="nome" />
          <Card.Title id="text1">Enroladinhos</Card.Title>
          <Card.Text>

          </Card.Text>
        </Card.Body>

      </Card>

      <Card className="bg2">
        <Card.Body>
          <img src={slide26} alt="nome" />
          <Card.Title id="text1">Quibe Frito</Card.Title>
          <Card.Text>

          </Card.Text>
        </Card.Body>

      </Card>

      <Card className="bg2">
        <Card.Body>
          <img src={slide23} alt="nome" />
          <Card.Title id="text1">Empadinha</Card.Title>
          <Card.Text>

          </Card.Text>
        </Card.Body>

      </Card>


      <Card className="bg2">
        <Card.Body>
          <img src={slide27} alt="nome" />
          <Card.Title id="text1">Bolinho de Carne</Card.Title>
          <Card.Text>

          </Card.Text>
        </Card.Body>

      </Card>
    </CardGroup>

    <CardGroup>
      <Card className="bg3">

        <Card.Body>
          <img src={slide25} alt="nome" />
          <Card.Title id="text1">Bolinho de Bacalhau</Card.Title>
        </Card.Body>

      </Card>
      <Card className="bg3">
        <Card.Body>
          <img src={slide24} alt="nome" />
          <Card.Title id="text1">Quibe Assado</Card.Title>
          <Card.Text>

          </Card.Text>
        </Card.Body>

      </Card>

      <Card className="bg3">
        <Card.Body>
          <img src={slide23} alt="nome" />
          <Card.Title id="text1">Empadinha</Card.Title>
          <Card.Text>

          </Card.Text>
        </Card.Body>

      </Card>

      <Card className="bg3">
        <Card.Body>
          <img src={slide27} alt="nome" />
          <Card.Title id="text1">Bolinho de Carne</Card.Title>
          <Card.Text>

          </Card.Text>
        </Card.Body>

      </Card>


      <Card className="bg3">
        <Card.Body>
          <img src={slide28} alt="nome" />
          <Card.Title id="text1">Enroladinhos</Card.Title>
          <Card.Text>

          </Card.Text>
        </Card.Body>

      </Card>
    </CardGroup>

    <CardGroup>
      <Card className="bg1">

        <Card.Body>
          <img src={slide23} alt="nome" />
          <Card.Text>
            <Card.Title id="text1"> Empadinha </Card.Title>
          </Card.Text>
        </Card.Body>

      </Card>
      <Card className="bg1">
        <Card.Body>
          <img src={slide24} alt="nome" />
          <Card.Title id="text1">Quibe Assado</Card.Title>
          <Card.Text>

          </Card.Text>
        </Card.Body>

      </Card>

      <Card className="bg1">
        <Card.Body>
          <img src={slide27} alt="nome" />
          <Card.Title id="text1">Bolinho de Carne</Card.Title>
          <Card.Text>

          </Card.Text>
        </Card.Body>

      </Card>

      <Card className="bg1">
        <Card.Body>
          <img src={slide26} alt="nome" />
          <Card.Title id="text1">Quibe Frito</Card.Title>
          <Card.Text>

          </Card.Text>
        </Card.Body>

      </Card>


      <Card className="bg1">
        <Card.Body>
          <img src={slide28} alt="nome" />
          <Card.Title id="text1">Enroladinhos</Card.Title>
          <Card.Text>

          </Card.Text>
        </Card.Body>

      </Card>
    </CardGroup>

    <CardGroup>
      <Card className="bg3">

        <Card.Body>
          <img src={slide25} alt="nome" />
          <Card.Title id="text1">Bolinho de Bacalhau</Card.Title>
        </Card.Body>

      </Card>
      <Card className="bg3">
        <Card.Body>
          <img src={slide24} alt="nome" />
          <Card.Title id="text1">Quibe Assado</Card.Title>
          <Card.Text>

          </Card.Text>
        </Card.Body>

      </Card>

      <Card className="bg3">
        <Card.Body>
          <img src={slide23} alt="nome" />
          <Card.Title id="text1">Empadinha</Card.Title>
          <Card.Text>

          </Card.Text>
        </Card.Body>

      </Card>

      <Card className="bg3">
        <Card.Body>
          <img src={slide27} alt="nome" />
          <Card.Title id="text1">Bolinho de Carne</Card.Title>
          <Card.Text>

          </Card.Text>
        </Card.Body>

      </Card>


      <Card className="bg3">
        <Card.Body>
          <img src={slide28} alt="nome" />
          <Card.Title id="text1">Enroladinhos</Card.Title>
          <Card.Text>

          </Card.Text>
        </Card.Body>

      </Card>
    </CardGroup>

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

export default FourthPage