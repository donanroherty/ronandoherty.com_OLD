import React, { Component } from 'react'
import { Link } from '../Utils/text-styles'
import Icon from '../Utils/icon'
import styled from 'styled-components'

const Container = styled.div`
  line-height: 0;
  text-align: center;
`
const SearchBar = props => (
  <Container>
    <Link to="/" type="icon">
      <Icon icon="search" />
    </Link>
  </Container>
)

export default SearchBar
