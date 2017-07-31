import React from 'react'

export default (user) => {
  return (
  <div className="col-lg-3">
    <div className="card user-card">
      {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
      <div className="card-block">
        <h4 className="card-title">{user.name} {user.lastname}</h4>
        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Edad: {user.age}</li>
        <li className="list-group-item">Altura: {user.age}</li>
        <li className="list-group-item">Peso: {user.weight}</li>
        <li className="list-group-item">Ojos: {user.eyes}</li>
        <li className="list-group-item">Talla: {user.size}</li>
        <li className="list-group-item">Disponibilidad semana: {user.availability_week}</li>
        <li className="list-group-item">Disponibilidad fines de semana: {user.availability_weekends}</li>
      </ul>
      <div className="card-block">
        <a href="#" className="card-link">Perfil</a>
      </div>
    </div>
    <style jsx>{`
      .user-card {
        margin-bottom: 40px;
      }

      .user-card .list-group-item {
        padding: 10px;
      }
    `}</style>
  </div>
)}
