
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function TextControlsExample() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title:</Form.Label>
        <Form.Control type="text" placeholder="Enter the title" />
        </Form.Group>
          
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Author:</Form.Label>
        <Form.Control type="text" placeholder="Enter author's name" />
      </Form.Group>
          
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Body</Form.Label>
         <Form.Control as="textarea" rows={3} />
        </Form.Group>
          
    <Button id='save-btn' variant="primary">save blog</Button>{' '}

    </Form>
    
      
  );
}

export default TextControlsExample;