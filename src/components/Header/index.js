import React from 'react'
import styled from 'styled-components'
import { Brand, H4, Link, Subtitle } from '../Utils/text-styles'
import { Line } from '../Utils/common-elements'

const Content = styled.div`
  width: 100%;
  text-align: right;
  margin-left: auto;
  max-width: 500px;
`
const BrandContainer = styled.div``

const Header = props => {
  return (
    <Content>
      <Link to="/">
        <Brand>{props.siteMetadata.title}</Brand>
      </Link>

      <Subtitle>{`${props.siteMetadata.tagline}`}</Subtitle>
      {/* <Line /> */}
    </Content>
  )
}

export default Header
