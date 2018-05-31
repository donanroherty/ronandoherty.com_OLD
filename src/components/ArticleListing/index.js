import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import {H2, H4, Link} from '../utils/text-styles'
import {Image} from '../utils/common-elements'
import GatsbyLink from 'gatsby-link'

const Container = styled.div `
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: auto 1fr;
  max-height: 150px;
  max-width: 550px;

`
const Title = H2.extend `
  margin-top: 0;
`
const Description = styled.div `
  font-size: ${props => props.theme.fontSize};
  color: ${props => props.theme.colorLightText};
`
const ThumbnailContainer = styled.div `
  width: 240px;
  height: 150px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr; 
`

const ThumbnailNatural = styled.div `
grid-row: 1 / 1;
grid-column: 1 / 1;
z-index: 20;
filter: saturate(80%) brightness(100%);
transition: opacity 200ms ease;
  :hover {
    opacity: 0;
  }
`
const ThumbnailTinted = styled.div `
grid-row: 1 / 1;
grid-column: 1 / 1;
z-index: 20;
filter: sepia(100%) saturate(100%) brightness(100%) hue-rotate(170deg);
`

const PostInfoContainer = styled.div `
  max-height: 150px;
  display: grid;
  grid-template-rows: auto auto 1fr;
  overflow: hidden;
  ${ ''/* width: 300px; */}
`
const DateText = H4.extend `
  color: ${props => props.theme.colorLightText};
`

const ArticleListing = props => (
  <Container>

    <GatsbyLink to={props.articleData.slug}>
      <ThumbnailContainer>
        <ThumbnailTinted>{props.articleData.thumbnail !== null && <Image sizes={props.articleData.thumbnail}/>}</ThumbnailTinted>
        <ThumbnailNatural>{props.articleData.thumbnail !== null && <Image sizes={props.articleData.thumbnail}/>}</ThumbnailNatural>
      </ThumbnailContainer>
    </GatsbyLink>

    <PostInfoContainer>
      <Link to={props.articleData.slug}>
        <Title>{props.articleData.title}</Title>
      </Link>
      <DateText>{props.articleData.date}</DateText>
      <Description>{props.articleData.description}</Description>
    </PostInfoContainer>

  </Container>
)

export default ArticleListing
