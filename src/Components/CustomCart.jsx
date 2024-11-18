import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { Context } from "../Store/ContextProvider";
import { Container } from 'react-bootstrap';
import { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
function CustomCart() {
  const ctx = useContext(Context);

  const Quantityhandler = (event) => {

    ctx.setQuantity(event.target.value);
  }
  

  return (<div>
    <Button variant="primary" className='mx-3' onClick={() => { ctx.setIsCart(true) }}>
      Cart <Badge bg="secondary">{ctx.cartElements.length}</Badge>
    </Button>

    {ctx.isCart && <Container><div
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
              {ctx.cartElements.length > 0 && ctx.cartElements.map((item, index) => {
                return <tr key={index}>
                  <td><img src={`${item.imageUrl}`} style={{ width: "50px", height: "50px" }} />{item.title}</td>
                  <td>{item.price}</td>
                  <td colSpan={1} style={{display:"flex",justifyContent:"space-around"}}><span>*{item.quantity}</span>
                    <Button 
                    onClick={()=>{
                        
      
                        ctx.setCartElements((previousState)=>{return previousState.map((CartItem)=>{
                          if(CartItem.title == item.title)
                          {
                           return CartItem.quantity >1 ? {...CartItem,"quantity":CartItem.quantity-1}: null;
                          } 
                          return CartItem; 
                        }).filter((item)=>item !== null)})
                      
                      
                    }}
                    >Remove</Button>
                  </td>
                </tr>
              })}
            </tbody>
          </Table>
          <h2>Total:  <span>
            {ctx.cartElements.reduce((acc,item)=> acc+(item.quantity*item.price),0)}
            
            </span></h2>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" type="submit">Purchase</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
    </Container>}
  </div>
  );
}

export default CustomCart;