import React from 'react';
import { Container, Card } from 'react-bootstrap';

export default () => {
  return (
    <Container>
        <Card className='mt-3 mb-3'>
          <Card.Body>
            <Card.Text>
              Autor: Kornel Szarapajew <br />
              Oryginalny projekt: dr. inż. Sławomir Przyłucki
            </Card.Text>
          </Card.Body>
        </Card>
    </Container>
  );
};
