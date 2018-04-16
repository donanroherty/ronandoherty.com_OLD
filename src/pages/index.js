import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import ArticleListing from '../components/ArticleListing'
import Img from 'gatsby-image'
import { H4 } from '../components/Utils/text-styles'
import PropTypes from 'prop-types'

const Content = styled.div`
  display: grid;
  grid-gap: 2rem;
`

const IndexPage = props => {
  return (
    <Content>
      {props.data.allMarkdownRemark.edges.map(({ node }) => (
        <ArticleListing
          articleData={{
            id: node.id,
            title: node.frontmatter.title,
            date: node.frontmatter.date,
            excerpt: node.excerpt,
          }}
        />
      ))}
    </Content>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            banner
          }
          excerpt
        }
      }
    }
  }
`
