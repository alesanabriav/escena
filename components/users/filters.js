import React, { Component } from 'react'
import Select from 'react-select'

class UsersFilters extends Component {
  state = {
    size: ['xs'],
    availability_week: ['fulltime']
  }

  handleChange = (field, val) => {
    console.log(val);
    const value = val.map(v => {
      return v.value;
    })

    const state = {...this.state, [field]: value};
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

    const {size, availability_week} = this.state

    return (
      <div className="row">
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
      </div>
    )
  }
}

export default UsersFilters
