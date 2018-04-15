import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import ArticleListing from '../components/ArticleListing'
import Img from 'gatsby-image'
import { H1, H2, H4 } from '../components/Utils/text-styles'

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
const ContentWrapper = styled.div`
  grid-column: col / col 9;
`

const Article = (props, data) => (
  <Container>
    <Grid>
      <BannerWrapper>
        <Img
          title="BannerImage"
          alt="Banner Image"
          sizes={props.data.banner.sizes}
        />
      </BannerWrapper>

      <TitleWrapper>
        <Title>Post title is long and boring</Title>
        <Date>27 October 1983</Date>
      </TitleWrapper>

      <ContentWrapper>
        <p>
          Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.
          De carne lumbering animata corpora quaeritis. Summus brains sit​​,
          morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum
          mauris. Hi mindless mortuis soulless creaturas, imo evil stalking
          monstra adventus resi dentevil vultus comedat cerebella viventium.{' '}
        </p>
        <H2>Section 1</H2>
        <p>
          Qui animated corpse, cricket bat max brucks terribilem incessu zomby.
          The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem
          virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro.
        </p>
      </ContentWrapper>
    </Grid>
  </Container>
)

export default Article

// Query profile image
export const query = graphql`
  query BannerImageQuery {
    banner: imageSharp(id: { regex: "/banner-temp/" }) {
      sizes(maxWidth: 650) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
