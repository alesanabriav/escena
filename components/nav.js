import React from 'react'

export default () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Escena</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
    
    </ul>
  </div>
  <style>{`
    .navbar {
      margin-bottom: 20px
    }
    .nav-item.active a{
      color: #E80051;
    }
  `}</style>
</nav>
)
