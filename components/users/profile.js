import React, {Component} from 'react'
import qs from 'qs';
import { createApolloFetch } from 'apollo-fetch'
const uri = 'http://localhost:3000/graphql/'
const apolloFetch = createApolloFetch({ uri })

class Profile extends Component {
  componentDidMount() {
    const params = qs.parse(window.location.search.replace('?', ''))
    const id = params.id
    const query = {}
    apolloFetch();
  }

  render() {
    return (
      <div></div>
    )
  }
}

export default Profile;
