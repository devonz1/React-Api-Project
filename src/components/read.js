import React, { useState } from 'react';
import { Table, Checkbox } from "semantic-ui-react";
import { useEffect } from 'react';
import axios from 'axios';

///the APIData State wil store the response data form the api
///setApiData function will  take in the response data.
// 


const Read = () => {

    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        axios.get(`https://63ffaf129f84491029832a21.mockapi.io/Members`)
            .then((response) => {
                setAPIData(response.data);
            })

    }, [])



    return (


        <div>
            <h2 className='Reading'> Read Data</h2>
            <Table compact celled definition>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell />
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>

                                </Table.Cell>
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

    )
}

export default Read;