import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import infoIcon from '../../icons/info.svg'
import githubIcon from '../../icons/github.svg'
import linkedinIcon from '../../icons/linkedin.svg'
import searchIcon from '../../icons/search.svg'

const Content = styled.div`
  ${'' /* display: grid; */}
  ${'' /* grid-gap: 10px; */}
  ${'' /* grid-template-columns: 100%; */}
  ${'' /* margin: 0 auto; */}
  ${'' /* padding: 2rem 0.5rem 0rem 0.5rem; */}
  width: 100%;
`
const BrandTitle = styled.div`
  font-family: ${props => props.theme.fontPrimary};
  font-size: ${props => props.theme.fontSizeBrand};
  text-align: center;
  color: ${props => props.theme.brandColor} !important;
  ${'' /* line-height: 1.2rem; */};
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
  color: ${props => props.theme.textPrimaryColor} !important;
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
const SearchIconContainer = styled.div`
  text-align: center;
  width: 100%;
  height: 50px;
  padding-top: 0.2rem;
  ${'' /* position: relative; */};
`
const SearchIcon = styled.svg`
  padding-top: 0.6rem;
  width: 20px;
  height: 20px;
  fill: ${props => props.theme.linkColor} !important;
  ${'' /* position: relative !important; */} top: -10px;
`
const Line = styled.hr`
  margin-bottom: 0;
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

const Header = () => {
  return (
    <div>
      <Content>
        <BrandTitle>
          <BrandLink to="/">Ronan Doherty</BrandLink>
        </BrandTitle>
        <BrandSubtitle>web and game developer</BrandSubtitle>

        <SearchIconContainer>
          <Line />
          {/* <Link to="/"> */}
          <SearchIcon>
            <use xlinkHref={`#${searchIcon.id}`} alt="search button" />
          </SearchIcon>
          {/* </Link> */}
        </SearchIconContainer>
      </Content>
    </div>
  )
}

export default Header
