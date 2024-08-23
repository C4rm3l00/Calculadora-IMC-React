import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

function CalculadoraImc() {
  const [altura, setHeight] = useState('');
  const [peso, setWeight] = useState('');
  const [imc, setBmi] = useState(null);
  const [categoria, setCategory] = useState('');

  const calculateBmi = () => {
    const Alturaenmetros = altura / 100;
    const IMCvalue = (peso / (Alturaenmetros * Alturaenmetros)).toFixed(2);
    setBmi(IMCvalue);
    setCategory(getBmiCategory(IMCvalue));
  };

  const getBmiCategory = (imc) => {
    if (imc < 18.5) return 'Poco Peso';
    if (imc < 24.9) return 'Peso Normal';
    if (imc < 29.9) return 'Mucho Peso';
    return 'Ingrese un valor valido';
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
                    value={altura}
                    onChange={(e) => setHeight(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formWeight" className="mt-3">
                  <Form.Label>Peso (kg):</Form.Label>
                  <Form.Control
                    type="number"
                    value={peso}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary mt-3" onClick={calculateBmi}>
                  Calcular IMC
                </Button>
              </Form>
              {imc && (
                <Card className="result mt-3">
                  <Card.Body>
                    <Card.Text>Tu IMC: <strong>{imc}</strong></Card.Text>
                    <Card.Text>Categoria: <strong>{categoria}</strong></Card.Text>
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
