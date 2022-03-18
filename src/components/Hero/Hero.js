import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Hi I am Irfan Farooq from Kulgam Jammu and Kashmir India.I am a MERN stack developer. I am a self taught developer with a passion for learning new technologies and solving problems. I am part time freelancer and I am currently studying Bachelors of Engineering at SSM college of Engineering and Technology.
        </SectionText>
        <a href="#about">
          <Button onClick={props.handleClick} >Learn More</Button>
        </a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;