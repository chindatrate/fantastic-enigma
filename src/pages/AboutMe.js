import React from 'react';
import Content from '../components/Content';
import Title from '../components/Title';

function AboutMe(props) {
  return (
    <div>
      <Title title={props.title} />
      {/* <Content textContent={props.textContent}> </Content> */}
      <Content>
        <p>Hello! My name is Chinda and I am an aspiring web developer.
          A creative soul who have a love for problem-solving.</p>
      </Content>
    </div>
  )
}



export default AboutMe;