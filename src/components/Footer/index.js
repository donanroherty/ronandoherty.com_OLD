import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'
import githubIcon from '../../icons/github.svg'
import linkedinIcon from '../../icons/linkedin.svg'
import { Line } from '../Utils/line'

const Content = styled.div`
  margin: auto;
  ${'' /* padding: 0rem 1rem 0.2rem 0.5rem; */} display: grid;
  grid-gap: 0.5rem;
  grid-template-rows: auto 1fr;
  grid-template-columns: auto auto auto;
`
const ProfileImg = styled(Img)`
  border-radius: 50%;
`
const ProfileText = styled.div`
  font-family: ${props => props.theme.quoteFont};
  color: ${props => props.theme.color3};
`
const SocialIcon = styled.svg`
  width: 30px;
  height: 30px;
  fill: ${props => props.theme.linkColor} !important;
  ${'' /* padding: 0.3rem 0rem; */};
`

const Footer = props => (
  <Content>
    {/* <ProfileImg
        title="Profile Image"
        alt="Profile Image"
        resolutions={props.profileImage.resolutions}
      /> */}

    <Line />

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
)

export default Footer
