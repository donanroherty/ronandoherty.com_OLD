import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Content = styled.div`
  padding: 0rem 1rem 0.2rem 0.5rem;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto 1fr;
  grid-template-rows: 100%;
`
const ProfileImageContainer = styled.div``
const ProfileImg = styled(Img)`
  border-radius: 50%;
`
const Line = styled.hr`
  color: ${props => props.theme.brandColor};
`
const ProfileText = styled.div`
  font-family: ${props => props.theme.fontPrimary};
  font-size: ${props => props.theme.fontSizeSecondary};
  color: ${props => props.theme.textSecondaryColor};
`

const footer = props => (
  <div>
    <Line />
    <Content>
      <ProfileImageContainer>
        <ProfileImg
          title="Profile Image"
          alt="Profile Image"
          resolutions={props.profileImage.resolutions}
        />
      </ProfileImageContainer>
      <ProfileText>
        <div>
          Hi, I'm Ronan.
          <br />
          I build apps and games in Ireland.
          <br />
          Thanks for visiting!
          <br />
          <Link to="/">more(...);</Link>
        </div>
      </ProfileText>
    </Content>
  </div>
)

export default footer
