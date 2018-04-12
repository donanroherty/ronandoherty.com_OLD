import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import ArticleListing from '../components/ArticleListing'

const Content = styled.div`
  display: grid;
  grid-gap: 2rem;
`
const IndexPage = () => (
  <Content>
    <ArticleListing />
    <ArticleListing />
    <ArticleListing />
  </Content>
)

export default IndexPage
