
import { Button, Checkbox, Form } from "semantic-ui-react";
import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';



const Update = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const [id, setID] = useState(null);

    const updateAPIData = () => {
        axios.put(`https://63ffaf129f84491029832a21.mockapi.io/Members/${id}`, {
            firstName,
            lastName,
            checkbox



        })
    }

    ////line 17 when we click the button on the table from the read page
    //its id is getting stored into the local storage and on the update 
    //page we are pulling that data then we are storing that ID in the 
    //id state. then we attach the id to the endpoint this will help us 
    //update the field of where we are passing the id.



    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setCheckbox(localStorage.getItem('Checkbox Value'))
    }, []);






    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' checked={checkbox} onChange={(e) => setCheckbox(!checkbox)} />
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}






export default Update;