import React ,{useState, useEffect} from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import {ListGroup,ListGroupItem} from 'react-bootstrap'
import './App.css';

const UserList = () => {
    const [UserList, setUserList] = useState([])
        
    const fetchUser =()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>setUserList(res.data)).catch(err=>(console.log(err)))
    }

    useEffect(() => {
        fetchUser()
    }, [])
    return (
        <div className="user">
            {UserList.map((el,i)=>(

                    <Card  style={{ width: '18rem', margin: '10px'}}>
  <Card.Img  className="img"
   variant="top"
    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairDreads01&accessoriesType=Prescription02&hairColor=Brown&facialHairType=BeardLight&facialHairColor=Blonde&clotheType=GraphicShirt&clotheColor=Heather&graphicType=SkullOutline&eyeType=Happy&eyebrowType=RaisedExcited&mouthType=Twinkle&skinColor=Yellow" />
  <Card.Body>
    <Card.Title>{el.name}</Card.Title>
    <Card.Text>
    address: {el.address.street} {el.address.suite} {el.address.city} {el.address.zipcode}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>User Name: {el.username}</ListGroupItem>
    <ListGroupItem>Email: {el.email}</ListGroupItem>
    <ListGroupItem>Phone: {el.phone}</ListGroupItem>
  </ListGroup>
</Card>
                )) }
        </div>
    )
}

export default UserList
