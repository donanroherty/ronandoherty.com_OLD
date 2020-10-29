import React from 'react'
import styled from 'styled-components'
import { Image } from '../components/Utils/common-elements'
import { media } from '../utils/breakpoints'

const Container = styled.div`
  font-family: ${props => props.theme.fontPrimary};
  background-color: ${props => props.theme.colorLightText};
  border-radius: 3px;
`
const BannerWrapper = styled.div``
const ContentWrapper = styled.div`
  padding: 2.5rem;

  ${media.phone`
padding: 1rem;
  `};
`

const Article = props => {
  const post = props.data.markdownRemark

  return (
    <Container>
      {post.frontmatter.banner != null && (
        <BannerWrapper>
          <Image
            alt="Banner Image"
            sizes={post.frontmatter.banner.childImageSharp.sizes}
          />
        </BannerWrapper>
      )}
      <ContentWrapper>
        <h1>{post.frontmatter.title}</h1>
        <h4>{post.frontmatter.date}</h4>

        <div
          dangerouslySetInnerHTML={{
            __html: post.html,
          }}
        />
      </ContentWrapper>
    </Container>
  )
}

export default Article

export const query = graphql`
  query ArticleQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      tableOfContents
      headings {
        value
        depth
      }
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        description
        published
        thumbnail {
          childImageSharp {
            sizes(maxWidth: 240) {
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
    }
  }
`
