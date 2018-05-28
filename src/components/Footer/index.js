import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Line } from '../utils/common-elements'
import Icon from '../utils/icon'
import { Link } from '../utils/text-styles'

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
  color: ${props => props.theme.color3};
  width: 15rem;
`

const Footer = props => (
  <Content>
    {/*<ProfileImg
      title="Profile Image"
      alt="Profile Image"
      resolutions={props.profileImage.resolutions}
    />*/}
    <Line />
    <ProfileText>
      <div>
        {props.siteMetadata.welcomeMessage}
        <br />
        <Link to="/">more...</Link>
      </div>
    </ProfileText>
    <div>
      <div>
        <Link to="/" type="icon">
          <Icon icon="github" />
        </Link>
      </div>
      <div>
        <Link to="/" type="icon">
          <Icon icon="linkedIn" />
        </Link>
      </div>
    </div>
  </Content>
)

export default Footer
