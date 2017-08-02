import React, { Component } from 'react'
import Select from 'react-select'
import InputRange from 'react-input-range';

class UsersFilters extends Component {
  state = {
    size: [],
    availability_week: [],
    availability_weekends: [],
    eyes: [],
    age: {
      min: 18,
      max: 80
    },
    weight: {
      min: 20,
      max: 100
    },
    height: {
      min: 1.00,
      max: 2.00
    }
  }

  handleChange = (field, val) => {
    const value = val.map(v => {
      return v.value;
    })

    const state = {...this.state, [field]: value};
    this.setState(state);

    if(typeof this.props.onChange == 'function') {
      this.props.onChange(state);
    }
  }

  handleRange = (field, val) => {
    const state = {...this.state, [field]: val}
    this.setState(state);
  }

  handleHeight = (field, val) => {
    val['min'] = parseFloat(val.min).toFixed(2)
    val['max'] = parseFloat(val.max).toFixed(2)
    const state = {...this.state, [field]: val}
    this.setState(state);
  }

  handleRangeComplete = (field, val) => {
    const state = {...this.state, [field]: val};
    this.setState(state);

    if(typeof this.props.onChange == 'function') {
      this.props.onChange(state);
    }
  }

  render() {
    const options = [
      { value: 'xs', label: 'XS' },
      { value: 's', label: 'S' },
      { value: 'm', label: 'M' },
      { value: 'l', label: 'L' },
      { value: 'xl', label: 'XL' }
    ]

    const optionsAvailability = [
      { value: 'fulltime', label: 'Fulltime'},
      { value: 'mañana', label: 'Mañana'},
      { value: 'tarde', label: 'Tarde'},
      { value: 'noche', label: 'Noche'}
    ]

    const optionsEyes = [
      { value: 'claros', label: 'Claros'},
      { value: 'oscuros', label: 'Oscuros'}
    ]

    const {
      size,
      availability_week,
      availability_weekends,
      age,
      weight,
      height,
      eyes
    } = this.state

    return (
      <div className="row users-filters">
        <div className="col-lg-12">
          <div className="form-group">


          <Select
            multi={true}
            value={size}
            options={options}
            onChange={this.handleChange.bind(null, 'size')}
            placeholder="Seleccionar talla"
          />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-group">
          <Select
            multi={true}
            name="form-field-name"
            value={availability_week}
            options={optionsAvailability}
            onChange={this.handleChange.bind(null, 'availability_week')}
            placeholder="Seleccionar Disponibilidad semana"
          />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-group">
          <Select
            multi={true}
            name="form-field-name"
            value={availability_weekends}
            options={optionsAvailability}
            onChange={this.handleChange.bind(null, 'availability_weekends')}
            placeholder="Seleccionar Disponibilidad fines de semana"
          />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-group">
          <Select
            multi={true}
            name="form-field-name"
            value={eyes}
            options={optionsEyes}
            onChange={this.handleChange.bind(null, 'eyes')}
            placeholder="Seleccionar Tonalidad ojos"
          />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="range-container">
            <InputRange
              formatLabel={value => `${value} años`}
              maxValue={80}
             minValue={18}
             value={age}
             onChange={this.handleRange.bind(null, 'age')}
             onChangeComplete={this.handleRangeComplete.bind(null, 'age')}
            />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="range-container">
            <InputRange
              step={5}
              formatLabel={value => `${value} kl`}
              maxValue={100}
              minValue={20}
              value={weight}
              onChange={this.handleRange.bind(null, 'weight')}
              onChangeComplete={this.handleRangeComplete.bind(null, 'weight')}
            />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="range-container">
            <InputRange
              step={0.05}
              formatLabel={value => `${value} cm`}
              maxValue={2.00}
              minValue={1.00}
              value={height}
              onChange={this.handleHeight.bind(null, 'height')}
              onChangeComplete={this.handleRangeComplete.bind(null, 'height')}
            />
          </div>
        </div>
        <style jsx>{`
          .users-filters {
            padding: 20px 0;
          }

          .range-container {
            padding: 40px 20px;
          }
        `}</style>
      </div>

    )
  }
}

export default UsersFilters
