import React from 'react';
import { Container, Title, Row, Panel } from '../../styles';

const Home: React.FC = () => {

  return (
    <Container>
      <Row>
       <Panel>
          <Title>Panel 1</Title>
        </Panel>
        <Panel>
          <Title>Panel 2</Title>
        </Panel> 
      </Row>
      <Row>
       <Panel>
          <Title>Panel 1</Title>
        </Panel>
        <Panel>
          <Title>Panel 2</Title>
        </Panel> 
      </Row>
    </Container>
  );
}

export default Home;