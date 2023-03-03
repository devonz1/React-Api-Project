
import { Button, Checkbox, Form } from "semantic-ui-react";
import React, { useState } from 'react';
import axios from 'axios';



/// below we are initializing the states for the firstname lastname and
//checkbox  with the useState hook 
//starting out the firstname and lastname will be empty 
const Create = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const postData = () => {
        axios.post(`https://63ffaf129f84491029832a21.mockapi.io/Members`, {
            firstName,
            lastName,
            checkbox
        })

    } // here in the postData function we will be logging the first , last and
    // checkbox  values to the console. We will also use the postData function to send
    // data to the API.


    return (


        /////the onchange event below will
        //wait for any changes in the firstName or Lastname field
        /// and whenever someone types in their firstname or lastname
        // the two functions setFirstname function and setLastname function will 
        // trigger react to re-render the component with the updated values. 

        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to Shape Fitness Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)} />
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}
export default Create;