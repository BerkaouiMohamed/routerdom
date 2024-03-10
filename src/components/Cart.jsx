import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Cart({children}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={children.image}/>
      <Card.Body>
        <Card.Title>{children.title}</Card.Title>
        <Card.Text>
       {children.description.slice(0,150)}...
        </Card.Text>
       <Link to={`/products/${children.id}`}><Button variant="primary">Go somewhere</Button></Link> 
      </Card.Body>
    </Card>
  );
}

export default Cart;