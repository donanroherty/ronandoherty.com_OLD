import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Content = styled.div``
const Banner = styled.div`
  min-width: 100%;
  height: 6rem;
  background-color: lightgray;
`
const Title = styled.div`
  font-family: ${props => props.theme.fontPrimary};
  font-size: ${props => props.theme.fontSizeTitle2};
  line-height: 1.6;
`
const Description = styled.div`
  font-size: ${props => props.theme.fontSizePrimary};
`
const PostLink = () => (
  <div>
    <Content>
      <Banner />
      <Link to="/">
        <Title>Post Title</Title>
      </Link>
      <Description>
        Zombie ipsum reversus ab viral inferno. Summus brains sit​​. Zombie
        ipsum reversus ab viral inferno. Summus brains sit​​.
      </Description>
    </Content>
  </div>
)

export default PostLink
