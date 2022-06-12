import React, { Component } from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap';
import axios from 'axios';

class Fib extends Component {
  state = {
    seenIndexes: [],
    values: {},
    index: '',
  };

  componentDidMount() {
    this.fetchValues();
    this.fetchIndexes();
  }

  async fetchValues() {
    const values = await axios.get('/api/values/current');
    this.setState({ values: values.data });
  }

  async fetchIndexes() {
    const seenIndexes = await axios.get('/api/values/all');
    this.setState({
      seenIndexes: seenIndexes.data,
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post('/api/values', {
      index: this.state.index,
    });
    this.setState({ index: '' });

    window.location.reload(false);
  };

  renderSeenIndexes() {
    return this.state.seenIndexes.map(({ number }) => number).join(', ');
  }

  renderValues() {
    const entries = [];

    for (let key in this.state.values) {
      entries.push(
        <div key={key}>
          Dla k = {key} wartość ciągu Fibonacciego wynosi {this.state.values[key]}
        </div>
      );
    }

    return entries;
  }

  render() {
    return (
      <Container>
        <Card className='mt-3 mb-3'>
          <Card.Header>Formularz</Card.Header>
          <Card.Body>
            <form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Współczynnik k:</Form.Label>
                <Form.Control value={this.state.index} onChange={(event) => this.setState({ index: event.target.value })} />
              </Form.Group>
              <Button type="submit">Oblicz</Button>
            </form>
          </Card.Body>
        </Card>

        <Card className='mt-3 mb-3'>
          <Card.Header>Historia</Card.Header>
          <Card.Body>
            <Card.Title><h3>Wpisane współczynniki k:</h3></Card.Title>
            <Card.Text>
              {this.renderSeenIndexes()}
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className='mt-3 mb-3'>
          <Card.Header>Wyniki</Card.Header>
          <Card.Body>
            <Card.Title><h3>Wyliczone wartości:</h3></Card.Title>
            {this.renderValues()}
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Fib;
