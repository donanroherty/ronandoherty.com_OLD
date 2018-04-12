import React, { Component } from 'react'
import { Icon } from '../Utils/common-elements'
import { Link } from '../Utils/text-styles'

import styled from 'styled-components'

const Container = styled.div`
  line-height: 0;
  text-align: center;
`

class SearchBar extends Component {
  render() {
    return (
      <Container>
        <Link to="/">
          <Icon icon={require('../../icons/search.svg')} />
        </Link>
      </Container>
    )
  }
}

export default SearchBar
