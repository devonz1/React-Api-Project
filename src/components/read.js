import React, { useState } from 'react';
import { Table, Checkbox, Button } from "semantic-ui-react";
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

///the APIData State wil store the response data form the api
///setApiData function will  take in the response data.
// line 16 we will use the useEffect hook and get method to get 
//our data from the resource in this case the resource we created at mock
//api .then will wait on the response from the api 


const Read = () => {

    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        axios.get(`https://63ffaf129f84491029832a21.mockapi.io/Members`)
            .then((response) => {
                setAPIData(response.data);
            })

    }, [])


    const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)

    }


    const onDelete = (id) => {
        axios.delete(`https://63ffaf129f84491029832a21.mockapi.io/Members/${id}`)
            .then(() => {
                getData();
            })


        const getData = () => {
            axios.get(`https://63ffaf129f84491029832a21.mockapi.io/Members`)
                .then((getData) => {
                    setAPIData(getData.data);

                })
        }
    }
    //// line 27 are destructuring the data  and then setting it into a 
    ///local storage it will store all of our data into the browser locally
    /// .
    return (


        <div>
            <h2 className='Reading'> Read Data</h2>
            <Table compact celled definition>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell />

                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row key={data.id}>
                                <Table.Cell>

                                </Table.Cell>
                                <Link to='/update'><Table.Cell><Button onClick={() => setData(data)}>Update</Button></Table.Cell></Link>
                                <Table.Cell><Button onClick={() => onDelete(data.id)}>Delete</Button></Table.Cell>
                                <Table.Cell>{data.firstName} </Table.Cell>
                                <Table.Cell>{data.lastName} </Table.Cell>
                                <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'} </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
        /////the tenerary operator above will check if the member checked
        //the checkbox if so it will display chekced.
        /// line 52 update button when clicked will allow us to see all of our 
        //updated data as an object within an array stored in the browser.
    )
}

export default Read;