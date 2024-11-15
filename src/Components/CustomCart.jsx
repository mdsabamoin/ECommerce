import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function CustomCart() {
  return (
    <Button variant="primary" className='mx-3'>
      Cart <Badge bg="secondary">0</Badge>
    </Button>
  );
}

export default CustomCart;