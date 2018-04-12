import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Heading2, Heading4 } from '../Utils/text-styles'

const Content = styled.div``
const Banner = styled.div`
  min-width: 100%;
  height: 6rem;
  background-color: lightgray;
`
const Title = Heading2.extend`
  line-height: 0.2rem;
`
const Description = styled.div`
  font-size: ${props => props.theme.fontSize};
`
const PostLink = () => (
  <Content>
    <Banner />
    <Link to="/article">
      <Title>Post Title</Title>
      <Heading4>27 October 1983</Heading4>
    </Link>
    <Description>
      Zombie ipsum reversus ab viral inferno. Summus brains sit​​. Zombie ipsum
      reversus ab viral inferno. Summus brains sit​​.
    </Description>
  </Content>
)

export default PostLink
