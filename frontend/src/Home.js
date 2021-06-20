import React from 'react';
import styled from 'styled-components';
import Logo from './images/msitadv.jpg';
import './Home.css'
import SplitPane, { Pane } from 'react-split-pane';
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;
export const Home = (props) => (
  <div>
  
      <p></p>
      <p></p>
      <p></p>
      <p></p>
       <p>MSIT (MS in IT or Masters of Science in Information Technology) is a two-year post-graduate program in Computer Science that started in 2001. MSIT is an innovative multi-university interdisciplinary post-graduate program. MSIT program is being offered by the 'Consortium of Institutions of Higher Learning' (CIHL), formed by the Universities. Under MOU with CMU, some Carnegie Mellon Researchers are providing guidance on the course content.</p>
 
   

  <GridWrapper>
    <img src={Logo} width="300" height="300" alt="logo" left="200px" />
    
  </GridWrapper>
 
  </div>
)