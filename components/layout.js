import React from 'react'
import Head from 'next/head'

export default (props) => (
  <div>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
       <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
       <link href="https://fonts.googleapis.com/css?family=Roboto+Slab|Ruda" rel="stylesheet" />
       <link href="/react-select/dist/react-select.css" rel="stylesheet" />
    </Head>
    <div className="container">
      {props.children}
    </div>
    <style global jsx>{`
      body {
        overflow: none;
        Font-Family: 'Roboto Slab', Serif;
        Font-Size: 16px;
        background-color: #f5f5f5;
      }
      h1,h2,h3,h4,h5, h6 {
        Font-Family: 'Ruda', Sans-Serif;
      }

    `}</style>

  </div>

)
