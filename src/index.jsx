

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Listagent from './List';

const Agents = (props) => {
    console.log("lllllllllllllll, prorps", props);
    if (!props) return "ຊອກຫາຂໍ້ມູນບໍ່ເຫັນ!";

    const { listagent } = props;
    console.log("uuuuuuuuuuuuuu", listagent);



    // const getAgent = async () =>{
    //     return await axios.get(
    //     'http://localhost:8000/api/v1/user/',
    //     {},
    //     {
    //         headers:{
    //             "content-Type": "application/json"
    //         }
    //     }
    //     )
    // }

    // const [agent, setAgent] = useState([]);

    // useEffect(() => {
    //     _getAgent();
    // }, []);

    // const _getAgent = async () =>{
    //     await getAgent()
    //     .then((result) =>{
    //         console.log("rrrrrrrrrrrrr",result)
    //         if (result && result.status === 200){
    //             setAgent(result.data.results)
    //         }
    //     }).catch((error) => {})
    // }

    return (
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className=" w-full text-gray-500 dark:text-gray-900">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-900">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Username
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Role
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {[listagent].map((item, i) => {
                            console.log("data from datdabase", item)
                            return (
                                <Listagent
                                    key={i}
                                    id={item.id}
                                    username={item.username}
                                    email={item.email}
                                    role={item.is_staff ? "Agent" : "Customer"}
                                    is_active={item.is_active ? "Active" : "Inactive"}
                                />
                            );
                        })}

                    </tbody>
                </table>
            </div>


        </div>
    )
}

export default Agents