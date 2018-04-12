import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import infoIcon from '../../icons/info.svg'
import githubIcon from '../../icons/github.svg'
import linkedinIcon from '../../icons/linkedin.svg'
import searchIcon from '../../icons/search.svg'
import { Line } from '../Utils/line'
import { Heading1, Heading4 } from '../Utils/text-styles'

const Content = styled.div`
  ${'' /* display: grid; */}
  ${'' /* grid-gap: 10px; */}
  ${'' /* grid-template-columns: 100%; */}
  ${'' /* margin: 0 auto; */}
  ${'' /* padding: 2rem 0.5rem 0rem 0.5rem; */}
  width: 100%;
`
const Title = Heading1.extend`
  text-align: center;
`
const Subtitle = Heading4.extend`
  text-align: center;
`
const BrandLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.textPrimaryColor} !important;
  &:hover {
    color: ${props => props.theme.linkColor} !important;
  }
  &:visited {
    color: ${props => props.theme.color1} !important;
  }
  &:active {
    color: ${props => props.theme.color1} !important;
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
`

const Header = () => {
  return (
    <div>
      <Content>
        <Title>
          {/* <BrandLink to="/">Ronan Doherty</BrandLink> */}
          Ronan Doherty
        </Title>
        <Subtitle>web and game developer</Subtitle>

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
