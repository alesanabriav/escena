import React, { Component } from 'react'
import { createApolloFetch } from 'apollo-fetch'
import User from './user'
import Filters from './filters'
const uri = 'http://localhost:3000/graphql/'
const apolloFetch = createApolloFetch({ uri })

const query = `
  query getUsers(
    $size: JSON,
    $availability_week: JSON,
    $availability_weekends: JSON,
    $age: JSON,
    $weight: JSON,
    $eyes: JSON,
    $id: JSON,
    $limit: Int,
    $offset: Int
  ) {
    users(where: {
        id: $id,
        size: $size,
        availability_week: $availability_week,
        availability_weekends: $availability_weekends,
        age: $age,
        weight: $weight,
        eyes: $eyes
      },
    limit: $limit,
    offset: $offset
    ){
      id
      name
      lastname
      email
      age
      height
      weight
      eyes
      size
      availability_week
      availability_weekends
    }
  }
`

class UsersSection extends Component {
  state = {
    users: [],
    loading: false,
    next: true,
    filters: {
      offset: 0,
      limit: 8
    }
  }

  componentDidMount = () => {
    const { filters } = this.state;
    this.getUsers(query, filters)
  }

  getUsers = (query, variables = {}) => {
    console.log('get users', variables)
    apolloFetch({ query, variables })
    .then(res => res.data)
    .then(data => {
      if(data.users.length > 0) {
        this.setState({
          users: data.users,
          filters: variables,
          next: true
        })
      } else {
        this.setState({next: false});
      }

    })
    .catch(err => console.log(err))
  }

  filterUsers = (filters) => {
    console.log('filters', this.state.filters);

    let variables = {...this.state.filters, offset: 0}

    variables = this.setFilterIn('size', filters, variables)
    variables = this.setFilterIn('availability_week', filters, variables)
    variables = this.setFilterIn('availability_weekends', filters, variables)
    variables = this.setFilterIn('eyes', filters, variables)

    variables = {...variables, age: { between: [filters.age.min, filters.age.max] }}
    variables = {...variables, weight: { between: [filters.weight.min, filters.weight.max] }}
    this.setState({filters: variables})
    this.getUsers(query, variables)
  }

  setFilterIn = (field, filters = {}, variables = {}) => {
    return filters[field] && filters[field].length > 0
      ? { ...variables, [field]: {'in': filters[field]} }
      : variables
  }

  handleFilters = (filters) => {
    this.filterUsers(filters)
  }

  paginate = (type, e) => {
    if(e) e.preventDefault();

    if(type == 'next') {
      const {filters} = this.state;
      const variables = {...filters, offset: this.state.filters.offset + 4}
      this.getUsers(query, variables)
    } else if (type == 'prev') {
      if(this.state.filters.offset > 0) {
        const {filters} = this.state
        const variables = {...filters, offset: this.state.filters.offset - 4}

        this.getUsers(query, variables)
      } else {
        this.setState({prev: false})
      }

    }
  }

  render() {
    const { users } = this.state;
    return (
      <div className="row">

        <div className="col-lg-3 filters-container">
          <div className="">
            <Filters onChange={this.handleFilters} />
          </div>
        </div>
        <div className="col-lg-9">
          <div className="row">
            {users.map(user => {
              return <User key={user.id} user={user} />
            })}
          </div>
          <div className="col-lg-12">
            <nav aria-label="...">
              <ul className="pagination">
                <li className={this.state.filters.offset > 0 ? 'page-item' : 'page-item disabled'}>
                  <a className="page-link" onClick={this.paginate.bind(null, 'prev')} href="#" >Anterior</a>
                </li>
                <li className={this.state.next ? 'page-item' : 'page-item disabled'}>
                  <a className="page-link" onClick={this.paginate.bind(null, 'next')} href="#">Siguiente</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <style jsx>{`
          .filters-container {
            background: #fff;
            box-shadow: 0 5px 5px rgba(0,0,0, .01);
          }
        `}</style>
      </div>
    )
  }
}

export default UsersSection
