import React, { Component } from 'react'
import { createApolloFetch } from 'apollo-fetch'
import User from './user';
import Filters from './filters';
const uri = 'http://localhost:3000/graphql/'
const apolloFetch = createApolloFetch({ uri })

class UsersSection extends Component {
  state = {
    users: [],
    loading: false
  }

  componentDidMount = () => {
    const query = `
      query getUsers {
        users {
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
    this.getUsers(query);
  }

  getUsers(query, variables = {}) {
    apolloFetch({ query, variables })
    .then(res => res.data)
    .then(data => this.setState({users: data.users}))
    .catch(err => console.log(err))
  }

  filterUsers = (filters) => {
    console.log(filters);
    const query = `
      query getUsers(
        $size: JSON,
        $availabilityWeek: JSON,
        $availabilityWeekends: JSON,
        $age: JSON,
        $weight: JSON,
        $eyes: JSON
      ) {
        users(where: {
          size: $size,
          availability_week: $availabilityWeek,
          availability_weekends: $availabilityWeekends,
          age: $age,
          weight: $weight,
          eyes: $eyes
        }){
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

    let variables = {}

    variables = filters.size.length > 0
      ?  {...variables, size: {in: filters.size} }
      : variables;

    variables = filters.availability_week.length > 0
      ? { ...variables, availabilityWeek: {in: filters.availability_week} }
      : variables;

    variables = filters.availability_weekends.length > 0
        ? { ...variables, availabilityWeekends: {in: filters.availability_weekends} }
        : variables;

    variables = filters.eyes.length > 0
      ? { ...variables, eyes: {in: filters.eyes} }
      : variables;

    variables = {...variables, age: {between: [filters.age.min, filters.age.max]}}

    variables = {...variables, weight: {between: [filters.weight.min, filters.weight.max]}}

    this.getUsers(query, variables)
  }

  handleFilters = (filters) => {
    this.filterUsers(filters)
  }

  render() {
    const { users } = this.state;
    return (
      <div className="row">

        <div className="col-lg-3">
          <Filters onChange={this.handleFilters} />
        </div>
        <div className="col-lg-9">
          <div className="row">
            {users.map(user => {
              console.log(...user);
              return <User key={user.id} {...user} />
            })}
          </div>
        </div>

      </div>
    )
  }
}

export default UsersSection
