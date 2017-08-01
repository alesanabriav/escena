import React, { Component } from 'react'
import Select from 'react-select'
import InputRange from 'react-input-range';

class UsersFilters extends Component {
  state = {
    size: [],
    availability_week: [],
    age: {
      min: 18,
      max: 50
    },
    weight: {
      min: 20,
      max: 80
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
    const state = {...this.state, [field]: val};
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

    const {size, availability_week, age, weight} = this.state

    return (
      <div className="row users-filters">
        <div className="col-lg-3">
          <Select
            multi={true}
            value={size}
            options={options}
            onChange={this.handleChange.bind(null, 'size')}
          />
        </div>
        <div className="col-lg-3">
          <Select
            multi={true}
            name="form-field-name"
            value={availability_week}
            options={optionsAvailability}
            onChange={this.handleChange.bind(null, 'availability_week')}
          />
        </div>
        <div className="col-lg-3">
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
        <div className="col-lg-3">
          <div className="range-container">
            <InputRange
              step={5}
              formatLabel={value => `${value} kilos`}
              maxValue={100}
              minValue={20}
              value={weight}
              onChange={this.handleRange.bind(null, 'weight')}
              onChangeComplete={this.handleRangeComplete.bind(null, 'weight')}
            />
          </div>
        </div>
        <style jsx>{`
          .users-filters {
            padding: 20px 0;
          }
          
          .range-container {
            padding: 0 20px;
          }
        `}</style>
      </div>

    )
  }
}

export default UsersFilters
