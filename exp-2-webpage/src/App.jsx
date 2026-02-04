import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap'
import { AppBar, Toolbar, Typography, Box } from '@mui/material'

function App() {
  return (
    <>
      {/* ===== Material UI Header ===== */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Student Portfolio
          </Typography>
        </Toolbar>
      </AppBar>

      {/* ===== Profile Section ===== */}
      <Container className="mt-4">
        <Card className="mb-4">
          <Card.Body>
            <Card.Title className="text-center fs-3">
              Shivom Parashari
            </Card.Title>
            <Card.Text className="text-center">
              AIML Student | React Developer
            </Card.Text>
          </Card.Body>
        </Card>

        {/* ===== Details Section ===== */}
        <Row>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Personal Details</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item><b>Name:</b> Shivom Parashari</ListGroup.Item>
                  <ListGroup.Item><b>UID:</b> 23BAI70407</ListGroup.Item>
                  <ListGroup.Item><b>Address:</b> Bareilly, Uttar Pradesh</ListGroup.Item>
                  <ListGroup.Item><b>Course:</b> B.E. AIML</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Skills</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>React.js</ListGroup.Item>
                  <ListGroup.Item>Material UI</ListGroup.Item>
                  <ListGroup.Item>React Bootstrap</ListGroup.Item>
                  <ListGroup.Item>JavaScript & HTML/CSS</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* ===== Project Section ===== */}
        <Row className="mt-4">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Academic Project</Card.Title>
                <Card.Text>
                  This portfolio webpage is developed using <b>React</b> with
                  <b> Material UI</b> and <b>React Bootstrap</b> as part of
                  EXP-2 to demonstrate component-based UI development.
                </Card.Text>
                <Button variant="primary">View Project</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* ===== Footer ===== */}
      <Box sx={{ textAlign: 'center', p: 2, mt: 4, bgcolor: '#f5f5f5' }}>
        <Typography variant="body2">
          © 2026 | Shivom Parashari | AIML Student
        </Typography>
      </Box>
    </>
  )
}

export default App
