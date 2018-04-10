import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import PostLink from '../components/PostLink'

const Content = styled.div`
  display: grid;
  grid-gap: 2rem;
`
const IndexPage = () => (
  <Content>
    <PostLink />
    <PostLink />
  </Content>
)

export default IndexPage
