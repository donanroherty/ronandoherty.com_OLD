import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { H1, H2, H3, H4, Link } from '../components/utils/text-styles'
import { Image } from '../components/utils/common-elements'
import { media } from '../utils/style-utils'

const Container = styled.div`
  font-family: ${props => props.theme.fontPrimary};
  ${'' /* margin: 0 auto; */} width: 100%;

  background-color: ${props => props.theme.colorLightText};
  ${'' /* color: ${props => props.theme.color}; */} ${'' /* padding: 2rem; */}
  border-radius: 3px;
`
const Title = H1.extend`
  padding: 0;
  margin: 0;
  color: ${props => props.theme.color};
`
const Date = H4.extend`
  line-height: 2rem;
  margin: 0;
`
const BannerWrapper = styled.div`
  padding: 1rem;
`
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
        <Title>{post.frontmatter.title}</Title>
        <Date>{post.frontmatter.date}</Date>

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
