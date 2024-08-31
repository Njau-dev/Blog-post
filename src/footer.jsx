import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function NewsLetter() {
  return (
    <Navbar className="bg-body-tertiary newsletter">
        
          <div>
              <h3>Subscribe to our Newsletter</h3>
          </div>
          
        <Form inline>
        <InputGroup>
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Form>
      
    </Navbar>
  );
}

export default NewsLetter;


