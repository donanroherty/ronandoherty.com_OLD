import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import profileImage from '../../img/profile.jpg'
const Container = styled.div`
  padding: 0.5rem;
`
const Content = styled.div`
  ${'' /* padding: 20px; */};

  display: grid;
  grid-template-columns: auto 1fr;
`

const footer = () => (
  <Container>
    <Content>
      <div>
        <img src="../../img/profile.jpg" alt="Profile Picture" />
      </div>
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
