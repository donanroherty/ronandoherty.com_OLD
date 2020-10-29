import React from 'react'
import styled from 'styled-components'
import ArticleListing from '../components/ArticleListing'

const Content = styled.div`
  display: grid;
  grid-gap: 2rem;
`

const IndexPage = props => {
  const getArticleList = () => {
    const data = props.data.allMarkdownRemark.edges.map(({ node }) => node)

    const sortedData = [...data].sort(
      (a, b) =>
        new Date(a.frontmatter.date).getTime() <
        new Date(b.frontmatter.date).getTime()
    )

    const nodeData = sortedData.map(node => (
      <ArticleListing
        articleData={{
          id: node.id,
          title: node.frontmatter.title,
          date: node.frontmatter.date,
          description: node.frontmatter.description,
          excerpt: node.excerpt,
          slug: node.fields.slug,
          thumbnail: node.frontmatter.thumbnail.childImageSharp.sizes,
          banner: node.frontmatter.thumbnail.childImageSharp.sizes,
        }}
        key={node.id}
      />
    ))

    return nodeData
  }

  return <Content>{getArticleList()}</Content>
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
            description
            published
            thumbnail {
              childImageSharp {
                sizes(maxWidth: 376) {
                  ...GatsbyImageSharpSizes_withWebp_tracedSVG
                }
              }
            }
            banner {
              childImageSharp {
                sizes(maxWidth: 690) {
                  ...GatsbyImageSharpSizes_withWebp_tracedSVG
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
