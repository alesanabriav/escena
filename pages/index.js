import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default () => (
  <div>
    <Head>
      <title>Scenamia</title>
     <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
      <link href="https://fonts.googleapis.com/css?family=Roboto+Slab|Ruda" rel="stylesheet" />
    </Head>
    <header>
        <img src="static/logo.png" className="logo" />
    </header>
    <div className="slider-header container">
      <div className="row">
      <div className="col-lg-6 ">
        <div className="slider-header__title">
          <h1>
            YOUR BRAND, SELLING MORE.
            Create an online home for your brand and grow your business.
          </h1>
        </div>

      </div>
      <div className="col-lg-6">
        <form action="" >
          <div className="row">
            <div className="form-group col-lg-6">
              <input type="text" className="form-control" placeholder="Nombre" />
            </div>
            <div className="form-group col-lg-6">
              <input type="text" className="form-control" placeholder="Apellido" />
            </div>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Correo"/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Contraseña"/>
          </div>
          <div className="form-group">
            <select name="" id="" className="form-control">
              <option value="">Ciudad</option>
            </select>
          </div>
          <div className="row">
            <div className="form-group col-lg-12">
              <label htmlFor="">Fecha de nacimiento</label>
            </div>
            <div className="form-group col-lg-4">
              <select name="" id="" className="form-control">
                <option value="">Día</option>
              </select>
            </div>
            <div className="form-group col-lg-4">
              <select name="" id="" className="form-control">
                <option value="">Mes</option>
              </select>
            </div>
            <div className="form-group col-lg-4">
              <select name="" id="" className="form-control">
                <option value="">Año</option>
              </select>
            </div>
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input" />
              {' Me gustaría recibir ofertas laborales y noticias relacionadas.'}
            </label>
          </div>
          <div className="form-group" style={{float: 'right', margin: '20px 0 0 0'}}>
            <button type="submit" className="btn btn-primary">Registrarse</button>
            {' /  '}
            <button type="submit" className="btn btn-secondary">Ya tengo cuenta</button>
          </div>

        </form>
      </div>
      </div>
    </div>

    <section>
      <h2>AUTOMATE YOUR USER ENGAGEMENT</h2>
      <div className="row">
      <div className="col-lg-6">
        <h5>Get 2x More Leads Using Automation</h5>
        <p></p>
        <p>
          Statistics show that website visitors "closed" using live chat tend to buy more than others. Using Crisp Triggers, you can send automated messages to these potential leads.
        </p>
        <p>
          Crisp Bot Auto-Responder saves you time by replying automatically to frequently asked questions.
        </p>
        <button type="submit" className="btn btn-primary">Registrarse</button>
      </div>
      <div className="col-lg-6" style={{textAlign: 'center'}}>
        <img src="static/screen_1.png" alt="" width="50%"/>
      </div>
      </div>
    </section>

    <section style={{background: '#E80051', color: '#fff'}}>
      <h2>AUTOMATE YOUR USER ENGAGEMENT</h2>
      <div className="row">
      <div className="col-lg-6">
        <h5>Get 2x More Leads Using Automation</h5>
        <p></p>
        <p>
          Statistics show that website visitors "closed" using live chat tend to buy more than others. Using Crisp Triggers, you can send automated messages to these potential leads.
        </p>
        <p>
          Crisp Bot Auto-Responder saves you time by replying automatically to frequently asked questions.
        </p>
        <button type="submit" className="btn btn-secondary">Registrarse</button>

      </div>
      <div className="col-lg-6" style={{textAlign: 'center'}}>
        <img src="static/screen_2.png" alt="" width="50%"/>
      </div>
      </div>
    </section>

    <style global jsx>{`
      body {
        overflow: none;
        Font-Family: 'Roboto Slab', Serif;
        Font-Size: 16px;
      }
      h1,h2,h3,h4,h5, h6 {
        Font-Family: 'Ruda', Sans-Serif;
      }
    `}</style>

    <style jsx>{`
      header {
        position: fixed;
        top: 0;
        width: 100%;
        height: 70px;
        z-index: 999;
        padding: 10px 40px;
      }

      .slider-header {
        width: 100%;
        background: url(static/bg.jpg);
        background-position: center;
        background-size: center;
        height: 100vh;
        display: flex;
        align-items: center;
      }

      @media (max-width: 700px) {
        .slider-header {
          height: auto;
          padding: 40px 20px;
        }
        .slider-header__title {
          padding: 0;
        }
      }

      .slider-header__title {
        padding: 40px;
      }

      .slider-header h1 {
        color: #fff;
      }

      .slider-header form {
        background: #fff;
        padding: 40px;
        float: left;
        width: 100%;
        border-radius: 3px;
        box-shadow: 0 7px 17px -5px rgba(0, 0, 0, 1);
      }

      section {
        margin: 40px 0;
        padding: 40px;
      }

      section h2 {
        text-align: center;
        margin-bottom: 40px;
      }
    `}</style>

  </div>
)
