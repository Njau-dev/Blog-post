import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import imgCards from '/home/njau/Documents/IST/DOCS/React/Classes/blog/src/logo192.png'

function BasicExample() {
  return (
    <div className='card-stories'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={imgCards} />
          <Card.Body>
            <Card.Title>Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button id='story-btn' variant="primary">Full Story</Button>
          </Card.Body>
        </Card>
    </div>
  );
}

export default BasicExample;