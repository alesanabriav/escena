import React, { Component } from 'react'

 class UsersProfileForm extends Component {
  render() {
    return (
      <form action="">
        <div className="form-group">
          <input type="text" className="form-control"/>
        </div>
        <div className="form-group">
          <input type="text" className="form-control"/>
        </div>
        <div className="form-group">
          <input type="text" className="form-control"/>
        </div>
        <div className="form-group">
          <button>Guardar</button>
        </div>
      </form>
    )
  }
}

export default UsersProfileForm
