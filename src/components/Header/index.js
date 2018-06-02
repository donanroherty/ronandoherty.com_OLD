import React from 'react'
import styled, { css } from 'styled-components'
import { H4, Link } from '../utils/text-styles'
import { Line } from '../utils/common-elements'
import { media } from '../../utils/style-utils'

const Content = styled.div`
  width: 100%;
  text-align: right;
  margin-left: auto;
  max-width: 370px;

  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto;
  grid-gap: 16px;
`
const BaseText = styled.h4`
  font-family: ${props => props.theme.fontBrand};
  font-size: 4rem;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`
// Brand
const Brand = BaseText.extend`
  font-family: ${props => props.theme.fontBrand};
  font-size: 4rem;
  color: ${props => props.theme.color1};
  line-height: 3.2rem;
  margin-top: 1rem;
  margin-bottom: 0;
  font-weight: 800;

  ${media.giant`font-size:4rem;`}
  ${media.desktop`font-size:4rem;`}
  ${media.tablet`font-size:4rem;`}
  ${media.phone`font-size: 3rem;
  line-height: 2.5rem;`}
`

// Subtitle
const Subtitle = BaseText.extend`
  font-family: ${props => props.theme.fontBrand};
  font-size: ${props => props.theme.subtitleSize};
  color: ${props => props.theme.colorLightText};
  line-height: 1.2rem;
  padding: 0;
  margin: 0;

  ${media.giant`font-size:1.5rem;`}
  ${media.desktop`font-size:1.5rem;`}
  ${media.tablet`font-size:1.5rem;`}
  ${media.phone`
  font-size: 1.2rem;
  line-height: .6rem;
  `}
`

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
