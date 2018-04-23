import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { H1, H2, H4, Link } from '../components/Utils/text-styles'

const Container = styled.div`
  font-family: ${props => props.theme.fontSecondary};
  margin: auto;
  max-width: 960px;
  height: 100%;
  display: subgrid;
`
const Grid = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.gridGap};
  grid-template-columns: repeat(8, [col] 1fr);
  height: 100%;
`
const Title = H1.extend`
  line-height: 1.8rem;
  padding: 0;
  margin: 0;
`
const Date = H4.extend`
  line-height: 2rem;
  margin: 0;
`
const BannerWrapper = styled.div`
  grid-column: col 1 / col 9;
`
const TitleWrapper = styled.div`
  grid-column: col 1 / col 9;
`
// const ToCWrapper = styled.div`
//   grid-column: col / col 9;
// `
const ContentWrapper = styled.div`
  grid-column: col / col 9;
`

const Article = props => {
  const post = props.data.markdownRemark

  return (
    <Container>
      <Grid>
        {/*<BannerWrapper>
          <Img
            alt="Banner Image"
            sizes={post.frontmatter.thumbnail.childImageSharp.sizes}
          />
        </BannerWrapper>*/}

        <TitleWrapper>
          <Title>{post.frontmatter.title}</Title>
          <Date>{post.frontmatter.date}</Date>
        </TitleWrapper>

        <ContentWrapper>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </ContentWrapper>
      </Grid>
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
        thumbnail {
          childImageSharp {
            sizes(maxWidth: 690) {
              ...GatsbyImageSharpSizes_withWebp_tracedSVG
            }
          }
        }
      }
    }
    thumbnail: imageSharp(id: { regex: "/banner-temp/" }) {
      sizes(maxWidth: 650) {
        ...GatsbyImageSharpSizes_withWebp_tracedSVG
      }
    }
  }
`
