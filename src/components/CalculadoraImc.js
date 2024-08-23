import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

function CalculadoraImc() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBmi = () => {
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);
    setCategory(getBmiCategory(bmiValue));
  };

  const getBmiCategory = (bmi) => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 24.9) return 'Normal weight';
    if (bmi < 29.9) return 'Overweight';
    return 'Obesity';
  };

  return (
    <Container>
      <Row className="justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Col xs={12} md={6} lg={4}>
          <Card className="text-center p-4 bg-info-subtle">
            <Card.Body>
              <Card.Title>IMC Calculator</Card.Title>
              <Form>
                <Form.Group controlId="formHeight">
                  <Form.Label>Altura (cm):</Form.Label>
                  <Form.Control
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formWeight" className="mt-3">
                  <Form.Label>Peso (kg):</Form.Label>
                  <Form.Control
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary mt-3" onClick={calculateBmi}>
                  Calcular IMC
                </Button>
              </Form>
              {bmi && (
                <Card className="result mt-3">
                  <Card.Body>
                    <Card.Text>Tu IMC: <strong>{bmi}</strong></Card.Text>
                    <Card.Text>Categoria: <strong>{category}</strong></Card.Text>
                  </Card.Body>
                </Card>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CalculadoraImc;
