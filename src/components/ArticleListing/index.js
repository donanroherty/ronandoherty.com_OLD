import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Image, H2, H4, Link } from '../Utils/common-elements'
import GatsbyLink from 'gatsby-link'
import { media } from '../../utils/style-utils'

const Container = styled.div`
  max-width: 550px;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto;

  ${media.phone`
  grid-template-columns: auto;
  grid-template-rows: auto 1fr;
  grid-gap: 0.4rem;
  margin: auto;
  width: 100%;
  `};
`
const Title = styled.div`
  margin-top: 0;
  font-family: ${props => props.theme.fontBrand};
  font-size: ${props => props.theme.h2Size};
  color: ${props => props.theme.color1};
  line-height: 1.4rem;
  ${media.phablet`
  font-size: ${props => props.theme.h4Size}
  line-height: 1rem;
  `};
  ${media.phone`font-size: ${props => props.theme.h4Size}`};
`
const Description = styled.div`
  font-size: ${props => props.theme.fontSize};
  color: ${props => props.theme.colorLightText};

  ${'' /* width: 250px; */} overflow: hidden;
  text-overflow: ellipsis;
`
const ThumbnailContainer = styled.div`
  width: 240px;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  ${media.phone`
  width: 100%;
  `};
`
const ThumbnailNatural = styled.div`
  grid-row: 1 / 1;
  grid-column: 1 / 1;
  z-index: 20;
  filter: saturate(80%) brightness(100%);
  transition: opacity 200ms ease;
  :hover {
    opacity: 0;
  }
`
const ThumbnailTinted = styled.div`
  grid-row: 1 / 1;
  grid-column: 1 / 1;
  z-index: 20;
  filter: sepia(100%) saturate(100%) brightness(100%) hue-rotate(170deg);
`
const PostInfoContainer = styled.div`
  max-height: 150px;
  display: grid;
  grid-template-rows: auto auto 1fr;
`
const DateText = styled.div`
  color: ${props => props.theme.colorLightText};
  font-size: 0.6rem;
  font-weight: bold;
`

const ArticleListing = props => (
  <Container>
    <GatsbyLink to={`blog${props.articleData.slug}`}>
      <ThumbnailContainer>
        <ThumbnailTinted>
          {props.articleData.thumbnail !== null && (
            <Image sizes={props.articleData.thumbnail} />
          )}
        </ThumbnailTinted>
        <ThumbnailNatural>
          {props.articleData.thumbnail !== null && (
            <Image sizes={props.articleData.thumbnail} />
          )}
        </ThumbnailNatural>
      </ThumbnailContainer>
    </GatsbyLink>

    <PostInfoContainer>
      <Link to={`blog${props.articleData.slug}`}>
        <Title>{props.articleData.title}</Title>
      </Link>
      <DateText>{props.articleData.date}</DateText>
      {/* <Description>{props.articleData.description}</Description> */}
    </PostInfoContainer>
  </Container>
)

export default ArticleListing
