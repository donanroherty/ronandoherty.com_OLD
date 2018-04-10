import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import infoIcon from '../../icons/info.svg'
import githubIcon from '../../icons/github.svg'
import linkedinIcon from '../../icons/linkedin.svg'

const Content = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 100%;
  margin: 0 auto;
  padding: 2rem 0.5rem 0rem 0.5rem;
`
const BrandTitle = styled.div`
  font-family: ${props => props.theme.fontPrimary};
  font-size: ${props => props.theme.fontSizeBrand};
  text-align: center;
  color: ${props => props.theme.brandColor} !important;
  line-height: 1.2rem;
`
const BrandSubtitle = styled.div`
  font-family: ${props => props.theme.fontPrimary};
  font-size: ${props => props.theme.fontSizeSecondary};
  text-align: center;
  color: ${props => props.theme.textPrimaryColor};
  filter: brightness(180%);
`
const BrandLink = styled(Link)`
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.linkColor} !important;
  }
  &:visited {
    color: ${props => props.theme.brandColor} !important;
  }
  &:active {
    color: ${props => props.theme.brandColor} !important;
  }
`
const Line = styled.hr`
  color: ${props => props.theme.brandColor};
`
const IconContainer = styled.div`
  margin: auto;
`
const SocialIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: ${props => props.theme.linkColor} !important;
  padding: 0px 5px;
`

const Header = () => {
  return (
    <div>
      <Content>
        <div>
          <BrandTitle>
            <BrandLink to="/">Ronan Doherty</BrandLink>
          </BrandTitle>
          <BrandSubtitle>web and game developer</BrandSubtitle>
        </div>

        <IconContainer>
          <Link>
            <SocialIcon>
              <use xlinkHref={`#${infoIcon.id}`} alt="information button" />
            </SocialIcon>
          </Link>
          <Link>
            <SocialIcon>
              <use xlinkHref={`#${githubIcon.id}`} alt="github button" />
            </SocialIcon>
          </Link>
          <Link>
            <SocialIcon>
              <use xlinkHref={`#${linkedinIcon.id}`} alt="linkedin button" />
            </SocialIcon>
          </Link>
        </IconContainer>
      </Content>
      <Line />
    </div>
  )
}

export default Header
