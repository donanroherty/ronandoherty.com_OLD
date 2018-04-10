import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'
import githubIcon from '../../icons/github.svg'
import linkedinIcon from '../../icons/linkedin.svg'

const Content = styled.div`
  margin: auto;
  padding: 0rem 1rem 0.2rem 0.5rem;
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: auto auto auto;
`

const ProfileImg = styled(Img)`
  border-radius: 50%;
`
const ProfileText = styled.div`
  font-family: ${props => props.theme.fontPrimary};
  font-size: ${props => props.theme.fontSizeSecondary};
  color: ${props => props.theme.textSecondaryColor};
`
const SocialIcon = styled.svg`
  width: 30px;
  height: 30px;
  fill: ${props => props.theme.linkColor} !important;
  ${'' /* padding: 0.3rem 0rem; */};
`
const Line = styled.hr`
  margin-bottom: 0.5rem;

  border: 0;
  height: 1px;
  background: ${props => props.theme.brandColor};
  background-image: linear-gradient(
    to right,
    #fff,
    ${props => props.theme.brandColor},
    ${props => props.theme.brandColor},
    #fff
  );
`
const footer = props => (
  <div>
    <Content>
      <Line />

      <ProfileImg
        title="Profile Image"
        alt="Profile Image"
        resolutions={props.profileImage.resolutions}
      />

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
      <div>
        <div>
          <Link to="/">
            <SocialIcon>
              <use xlinkHref={`#${githubIcon.id}`} alt="github button" />
            </SocialIcon>
          </Link>
        </div>
        <div>
          <Link to="/">
            <SocialIcon>
              <use xlinkHref={`#${linkedinIcon.id}`} alt="linkedin button" />
            </SocialIcon>
          </Link>
        </div>
      </div>
    </Content>
  </div>
)

export default footer
