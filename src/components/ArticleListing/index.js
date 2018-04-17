import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { H2, H4, Link } from '../Utils/text-styles'

const Container = styled.div``
const Banner = styled.div`
  min-width: 100%;
  height: 6rem;
  background-color: lightgray;
`
const Title = H2.extend`
  line-height: 0.2rem;
`
const Description = styled.div`
  font-size: ${props => props.theme.fontSize};
`

const ArticleListing = props => (
  <Container>
    <Img alt="Thumbnail Image" sizes={props.articleData.thumbnail} />
    <Link to={props.articleData.slug}>
      <Title>{props.articleData.title}</Title>
    </Link>
    <H4>{props.articleData.date}</H4>
    <Description>{props.articleData.excerpt}</Description>
  </Container>
)

export default ArticleListing
