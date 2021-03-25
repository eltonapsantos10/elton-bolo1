import React from 'react'
import { Link } from "gatsby"

import Layout from "../components/layout"

export default function home() {
    return <div>
        <Layout>
            <br></br><br></br><br></br><br></br>

            <form id="form-geral"
                name="contact v1"
                method="post"
                data-netlify="true"
                onSubmit="submit"
                action="/success/"
                data-netlify-honeypot="bot-field"
            >

                <input type="hidden" name="form-name" value="contact v1"

                />

                <div hidden>
                    <input name="bot-field" />

                </div>

                <div>
                    <label> Nome <br />
                        <input id="borda-todas" type="text" name="first-name" autoComplete="off" />
                    </label>
                </div>


                <div>
                    <label> Sobrenome <br />
                        <input id="borda-todas" type="text" name="last-name" autoComplete="off" />
                    </label>
                </div>

                <div>
                    <label> Telefone  <br />
                        <input id="borda-todas" type="text" name="last-name" autoComplete="off" />
                    </label>
                </div>

                <div>
                    <label htmlFor="email">Email</label> <br />
                    <input id="email" type="email" name="email" autoComplete="off" />
                </div>



                <div>
                    <label> Comentário <br />
                        <textarea id="borda-todas" name="comments"></textarea>

                    </label>


                </div>

                <button id="botao-submit" type="submit">Enviar Informações</button>





            </form>

            <Link to="/">Retornar</Link>
        </Layout>


    </div>



}