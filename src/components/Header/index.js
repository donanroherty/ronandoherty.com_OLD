import React from 'react'
import styled from 'styled-components'
import { Brand, H4, Link } from '../Utils/text-styles'
import { Line } from '../Utils/common-elements'

const Content = styled.div`
  width: 100%;
  text-align: center;
`

const Header = props => {
  return (
    <Content>
      <Link to="/">
        <Brand>{props.title}</Brand>
      </Link>
      <H4>{`${props.tagline}`}</H4>
      <Line />
    </Content>
  )
}

export default Header
