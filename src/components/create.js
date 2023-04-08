
import { Button, Checkbox, Form } from "semantic-ui-react";
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

/// below we are initializing the states for the firstname lastname and
//checkbox  with the useState hook 
//starting out the firstname and lastname will be empty 
/// line 12 firstname will be the variable to hold the firstname values that are typed
//into the form field firstName and  setFirstname function 
//is the setter that will allow us to update the first name
const Create = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const navigate = useNavigate();
    const postData = () => {
        axios.post(`https://63ffaf129f84491029832a21.mockapi.io/Members`, {
            firstName,
            lastName,
            checkbox
        }).then(() => {
            navigate('/read')
        })





    } // here in the postData function we will be logging the first , last and
    // checkbox  values to the console. We will also use the postData function to send
    // data to the API.
    //line 19 we use the useNavigate hook so once a user submits data sucessfully
    //the page will automatically navigate to the read page so the user can view
    /// the newly added data.

    return (


        /////the onchange event below will
        //wait for any changes in the firstName or Lastname field
        /// and whenever someone types in their firstname or lastname
        // the two functions setFirstname function and setLastname function will 
        // trigger react to re-render the component with the updated values. 


        <>
            <div>
                <Form className="create-form">
                    <h2 className="Data">Create Data</h2>
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

        </>
    )
}
export default Create;