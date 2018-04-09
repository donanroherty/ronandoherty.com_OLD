import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Container = styled.div`
  padding: 0.5rem;
  align-content: center;
`
const Content = styled.div`
  ${'' /* padding: 20px; */};
  display: grid;
  grid-gap: 5px;
  grid-template-columns: auto 1fr;
  grid-template-rows: 100%;
`
const ProfileImageContainer = styled.div`
  ${'' /* padding: 5px; */};
`
const ProfileImg = styled(Img)`
  border-radius: 50%;
`

const footer = props => (
  <Container>
    <Content>
      <ProfileImageContainer>
        <ProfileImg
          title="Profile Image"
          alt="Profile Image"
          resolutions={props.profileImage.resolutions}
        />
      </ProfileImageContainer>
      <div>
        Hi I'm Ronan.
        <br />
        I build apps and games
        <br />
        Thanks for visiting!
        <Link to="/">more(...);</Link>
      </div>
    </Content>
  </Container>
)

export default footer
