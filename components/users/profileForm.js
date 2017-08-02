import React, { Component } from 'react'
import InputRange from 'react-input-range';

class UsersProfileForm extends Component {
  state = {
    weight: 50,
    size: 's',
    availability_week: 'fulltime',
    availability_weekends: 'fulltime',
  }

  render() {
    const {
      weight,
      size,
      availability_week,
      availability_weekends
    } = this.state;
    const availability = ['mañana', 'tarde', 'noche', 'fulltime'];

    return (
      <form action="">
        <h4>Basico</h4>
        <hr/>
        <div className="row">
        <div className="form-group col-lg-6">
          <input type="text" placeholder="Nombre" className="form-control"/>
        </div>

        <div className="form-group col-lg-6">
          <input type="text" placeholder="Apellido" className="form-control"/>
        </div>

        <div className="form-group col-lg-6">
          <input type="text" placeholder="Correo" className="form-control"/>
        </div>


        <div className="form-group col-lg-6">
          <select name="" className="form-control">
            <option value="">Seleccionar ciudad</option>
            <option value="Bogotá">Bogotá</option>
            <option value="Cali">Cali</option>
            <option value="Medellín">Medellín</option>
          </select>
        </div>

        <div className="form-group col-lg-6">
          <select name="" className="form-control">
            <option value="">Seleccionar Genero</option>
            <option value="male">Masculino</option>
            <option value="female">Femenino</option>
            <option value="other">Otro</option>
          </select>
        </div>
        </div>
        <h4>Fisico</h4>
        <hr/>

        <div className="row">
          <div className="form-group col-lg-6">
            <label htmlFor=""><h6>Altura Centrimetros</h6></label>
            <div className="row">
            <div className="col-lg-6">
            <select className="form-control" name="" id="">
              <option value="">1</option>
              <option value="">2</option>
            </select>
            </div>
            <div className="col-lg-6">
            <select className="form-control">
              {Array(20).fill().map((e,i)=> {
                return <option value={i * 5}>{i * 5}</option>
                })
              }
            </select>
            </div>
              </div>
          </div>


        <div className="form-group col-lg-6">
          <label htmlFor=""><h6>Peso en kilos</h6></label>
          <select className="form-control" value={weight}>
            {Array(20).fill().map((e,i)=> {
              return <option value={(i + 1) * 5}>{(i + 1) * 5}</option>
              })
            }
          </select>
        </div>
        <div className="form-group col-lg-6">
          <label htmlFor="">Tallaje</label>
          <select value={size} className="form-control">
          {
            ['xs', 's', 'm', 'l', 'xl'].map(s =>
              <option value={s}>{s.toUpperCase()}</option>
            )
          }
          </select>
        </div>
        <div className="form-group col-lg-6">
          <label htmlFor="">Tonalidad ojos</label>
          <select name="" id="" className="form-control">
            <option value="oscuros">oscuros</option>
            <option value="claros">claros</option>
          </select>
        </div>

      </div>{/* row */}


        <div className="form-group">
          <input type="text" placeholder="lenguaje" className="form-control"/>
        </div>

        <div className="form-group">
          <input type="text" placeholder="Acento" className="form-control"/>
        </div>

        <h4>Profesional</h4>
        <hr/>
        <div className="form-group">
          <textarea name="" id="" cols="30" rows="10" className="form-control" placeholder="Experiencia"></textarea>
        </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="">Disponibilidad entre semana</label>
              <select name="" id="" className="form-control" value={availability_week}>
                {availability.map(a =>
                  <option value={a}>{a}</option>
                )}
              </select>
            </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                  <label htmlFor="">Disponibilidad fines de semana</label>
              <select name="" id="" className="form-control" value={availability_weekends}>
                {availability.map(a =>
                  <option value={a}>{a}</option>
                )}
              </select>
              </div>
            </div>

        </div>

        <div className="form-group">
          <input type="text" placeholder="Disponibilidad cualquier hora" className="form-control"/>
        </div>

        <div className="form-group">
          <button className="btn btn-primary">Guardar</button>
        </div>
      </form>
    )
  }
}

export default UsersProfileForm
