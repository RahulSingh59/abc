import React from 'react'
import {Button} from "react-bootstrap";
const LastSection1 =()=> {
        const cardInfo=[
            {
                image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",title:"Lebron James ",text:"Lorem ipsum dolor sit amet."
            },
            {
                image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",title:"Lebron James ",text:"Lorem ipsum dolor sit amet."
            },
            {
                image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",title:"Lebron James ",text:"Lorem ipsum dolor sit amet."
            },
            {
                image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",title:"Lebron James ",text:"Lorem ipsum dolor sit amet."
            },

        ];


        const showCard = (Card, index)=>{
          
        return (
          
    
  <Card style={{ width: '18rem' }} key={index}>
  <Card.Img variant="top" src="holder.js/100px180" src={Card.image}/>
  <Card.Body>
    <Card.Title> {Card.title}</Card.Title>
    <Card.Text>
    {Card.text}
    </Card.Text>
    <Button variant="primary">Join now!</Button>
  </Card.Body>
</Card>
    );
        };
    return(
        <>
          {/* {cardInfo.map(showCard)} */}
          </>
    )
        
};
export default LastSection1;