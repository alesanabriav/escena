import React, {Component} from 'react'

export default class User extends Component {
  state = {
    showDetail: false
  }
  toggleDetail = () => {
    this.setState({showDetail: !this.state.showDetail});
  }

  render() {
    const {user} = this.props;
    const {showDetail} = this.state;

    return (
    <div className="col-lg-3">
      <div className="card user-card">
        {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
        <div className="card-body">
          <h5 className="card-title">{user.name} {user.lastname}</h5>
          {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <a href="#" onClick={this.toggleDetail}>
              <i className={showDetail ? 'ion-chevron-up' : 'ion-chevron-down'}></i> Ver detalle
            </a>
          </li>
        </ul>

          {showDetail ?
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Edad: {user.age}</li>
              <li className="list-group-item">Altura: {user.age}</li>
              <li className="list-group-item">Peso: {user.weight}</li>
              <li className="list-group-item">Ojos: {user.eyes}</li>
              <li className="list-group-item">Talla: {user.size ? user.size.toUpperCase() : ''}</li>
              <li className="list-group-item">Disponibilidad semana: {user.availability_week}</li>
              <li className="list-group-item">Disponibilidad fines de semana: {user.availability_weekends}</li>
            </ul>
          : ''}

        <div className="card-body">
          <a href="#" className="card-link btn btn-primary">Perfil</a>
          <a href="#" className="card-link btn btn-primary">Solicitar</a>
        </div>
      </div>
      <style jsx>{`
        .user-card {
          margin-bottom: 40px;
          box-shadow: 0 2px 2px rgba(0,0,0, 0.02)
        }

        .user-card .list-group-item {
          padding: 10px;
        }
      `}</style>
    </div>
  )
  }
}
