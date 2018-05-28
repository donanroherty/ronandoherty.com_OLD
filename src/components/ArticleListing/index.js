import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { H2, H4, Link } from '../utils/text-styles'
import { Image } from '../utils/common-elements'

const Container = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: auto 1fr;
  max-height: 150px;
  max-width: 550px;
  ${'' /* background-color: green; */};
`
const Title = H2.extend`
  margin-top: 0;
`
const Description = styled.div`
  font-size: ${props => props.theme.fontSize};
  color: ${props => props.theme.colorLightText};
`
const ThumbnailContainer = styled.div`
  width: 240px;
  height: 150px;
`
const PostInfoContainer = styled.div`
  max-height: 150px;
  display: grid;
  grid-template-rows: auto auto 1fr;
  overflow: hidden;
`
const DateText = H4.extend`
  color: ${props => props.theme.colorLightText};
`

const ArticleListing = props => (
  <Container>
    <ThumbnailContainer>
      {/* <img src="http://via.placeholder.com/240x150" alt=""/> */}

      <Image alt="Thumbnail Image" sizes={props.articleData.thumbnail} />
    </ThumbnailContainer>

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
