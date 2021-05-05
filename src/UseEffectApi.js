import React, { useEffect, useState } from 'react'
import { Card, Button } from "react-bootstrap";
const UseEffectApi = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        console.log(response);
        setUsers(await response.json());
        console.log(users);

    }


    useEffect(() => {
        getUsers();
    },[]);


    return (
        <div>
            <h1>Training</h1>
            <div className="container mt-5">
                <div className="row text-center">

                {

                    users.map((curElem) => {
                        console.log(users);  
                        return (
                        

                            <div key={curElem.id}>
                                <Card className="all_cards" style={{ width: '20rem' }}>
                                    <Card.Img variant="top" src={curElem.url} />
                                    <Card.Body>
                                        <Card.Title>{curElem.title}</Card.Title>
                                        <Card.Text>

                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>

                            </div>
                        )

                    })
                }

            </div>
        </div>
        </div>
       
       
    )
}
export default UseEffectApi;