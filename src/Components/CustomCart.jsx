import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { Context } from "../Store/ContextProvider";
import { Container } from 'react-bootstrap';
import { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
function CustomCart() {
  const ctx = useContext(Context);

  return (<div>
    <Button variant="primary" className='mx-3' onClick={() => { ctx.setIsCart(true) }}>
      Cart <Badge bg="secondary">0</Badge>
    </Button>

    {ctx.isCart && <div
      className="modal show"
      style={{ display: 'block', position: 'initial', marginTop: "280px", marginRight: "100px" }}
    >
      <Modal.Dialog className='mt-1'>
        <Modal.Header closeButton onClick={() => { ctx.setIsCart(false) }} style={{ display: "flex", justifyContent: "space-around" }}>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {ctx.cartElements.map((item, index) => {
                return <tr key={index}>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td><Button>Remove</Button></td>
                </tr>
              })}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">Purchase</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>}
  </div>
  );
}

export default CustomCart;