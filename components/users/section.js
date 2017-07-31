import React, { Component } from 'react'
import { createApolloFetch } from 'apollo-fetch'
import User from './user';
import Filters from './filters';
const uri = 'http://localhost:3000/graphql/'
const apolloFetch = createApolloFetch({ uri })

class UsersSection extends Component {
  state = {
    users: []
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
      query getUsers($size: JSON, $availabilityWeek: JSON) {
        users(where: {size: $size, availability_week: $availabilityWeek}){
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

    const variables = {
      "size": {"in": filters.size},
      "availabilityWeek": {"in": filters.availability_week}
    }

    this.getUsers(query, variables)
  }

  handleFilters = (filters) => {
    this.filterUsers(filters)
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <Filters onChange={this.handleFilters} />
        <div className="row">
          {users.map(user => {
            console.log(...user);
            return <User key={user.id} {...user} />
          })}
        </div>
      </div>
    )
  }
}

export default UsersSection
