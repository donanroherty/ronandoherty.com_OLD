import React, { Component } from 'react'
import { Link, ExternalLink } from '../utils/text-styles'
import Icon from '../utils/icon'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  ${'' /* grid-template-rows: auto; */} grid-template-columns: auto 1fr auto auto auto;
  grid-gap: 10px;
  line-height: 0;
  text-align: right;
`
const SearchBar = props => {
  const iconSize = 24
  const isHomePage = props.location.pathname === '/'
  return (
    <Container>
      {isHomePage ? (
        <div />
      ) : (
        <Link to="/" type="icon">
          <Icon icon="arrow" size={iconSize} />
        </Link>
      )}

      <div />

      {isHomePage ? (
        <Link to="/blog/about-me" type="icon">
          <Icon icon="info" size={iconSize} />
        </Link>
      ) : (
        <div />
      )}

      {isHomePage ? (
        <ExternalLink
          to="https://www.linkedin.com/in/ronan-doherty-dev/"
          type="icon"
        >
          <Icon icon="linkedIn" size={iconSize} />
        </ExternalLink>
      ) : (
        <div />
      )}

      {isHomePage ? (
        <ExternalLink to="https://github.com/donanroherty/" type="icon">
          <Icon icon="github" size={iconSize} />
        </ExternalLink>
      ) : (
        <div />
      )}
    </Container>
  )
}

export default SearchBar
