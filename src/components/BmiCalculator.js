import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function BmiCalculator() {
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
          <div className="text-center">
            <h1>BMI Calculator</h1>
            <Form>
              <Form.Group controlId="formHeight">
                <Form.Label>Height (cm):</Form.Label>
                <Form.Control
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formWeight">
                <Form.Label>Weight (kg):</Form.Label>
                <Form.Control
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" onClick={calculateBmi}>
                Calculate BMI
              </Button>
            </Form>
            {bmi && (
              <div className="result mt-3">
                <p>Your BMI: {bmi}</p>
                <p>Category: {category}</p>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default BmiCalculator;
