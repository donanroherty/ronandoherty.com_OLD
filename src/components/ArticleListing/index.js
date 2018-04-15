import React from 'react'
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

const ArticleListing = () => (
  <Container>
    <Banner />
    <Link to="/article">
      <Title>Post Title</Title>
    </Link>
    <H4>27 October 1983</H4>
    <Description>
      Zombie ipsum reversus ab viral inferno. Summus brains sit​​. Zombie ipsum
      reversus ab viral inferno. Summus brains sit​​.
    </Description>
  </Container>
)

export default ArticleListing
