import React from 'react'
import Head from 'next/head'
import Nav from './nav'

export default (props) => (
  <div>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" />

       <link href="https://fonts.googleapis.com/css?family=Roboto+Slab|Ruda" rel="stylesheet" />
       <link href="/react-select/dist/react-select.css" rel="stylesheet" />
       <link href="/react-input-range/lib/bundle/react-input-range.css" rel="stylesheet" />
       <link href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet" />
    </Head>
    <Nav />
    <div className="container-fluid">
      {props.children}
    </div>
    <style global jsx>{`
      body, html {
        height: 100%;
      }
      body {
        overflow: none;
        font-family: 'Roboto Slab', Serif;
        font-size: 16px;
        background-color: #f5f5f5;
      }
      h1,h2,h3,h4,h5, h6 {
        font-family: 'Ruda', Sans-Serif;
      }
      a:hover {
        text-decoration: none
      }
    `}</style>

  </div>

)
