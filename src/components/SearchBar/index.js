import React, {Component} from 'react'
import {Link} from '../utils/text-styles'
import Icon from '../utils/icon'
import styled from 'styled-components'

const Container = styled.div `
  display: grid;
  ${ ''/* grid-template-rows: auto; */} grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  line-height: 0;
  text-align: right;
`
const SearchBar = (props, {location}) => {
  const iconSize = 30

  console.log(location)

  return (
    <Container>

      {/* <Link to="/" type="icon">
        <Icon icon="filter" size={iconSize} />
      </Link> */}
      <Link to="/" type="icon">
        <Icon icon="arrow" size={iconSize}/>
      </Link>

      <div/>
      <Link to="/about-me" type="icon">
        <Icon icon="info" size={iconSize}/>
      </Link>
    </Container>
  )
}

export default SearchBar
