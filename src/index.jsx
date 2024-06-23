

import React from 'react'
import { classNames } from '../../Shared/Util'

const Listagent = (props) => {

    const { id, username, email, role, is_active } = props

    return (
        <>
            <tr className=" text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    <h1>{id}</h1>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    <h1>{username}</h1>
                </td>
                <td className="px-6 py-4">
                    {email}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    <h1 className={classNames(
                        role.startsWith("Agent") ? "  text-blue-700 px-3 py-1 uppercase font-bold text-xs" : null,
                        role.startsWith("Customer") ? " text-pink-600 px-3 py-1 uppercase font-bold text-xs" : null
                    )}>{role}</h1>
                </td>
                <td className=" w-20 px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    <h1 className={classNames(
                        is_active.startsWith("Active") ? " bg-green-100 text-green-700 px-3 py-1 uppercase leading-wide font-bold text-xs rounded-full shadow-sm" : null,
                        is_active.startsWith("Inactive") ? "bg-red-100 text-red-700 px-3 py-1 uppercase leading-wide font-bold text-xs rounded-full shadow-sm" : null
                    )}>{is_active}</h1>
                </td>
                <td className="px-6 py-2 space-x-1" >

                    <a
                        href="#"
                        className=" bg-green-500 text-white px-3 py-1 uppercase leading-wide font-bold text-xs rounded-sm shadow-sm "
                    >
                        Edit
                    </a>
                    <a
                        href="#"
                        className="w-20 bg-red-500 text-white px-3 py-1 uppercase leading-wide font-bold text-xs rounded-sm shadow-sm"
                    >
                        Remove
                    </a>
                </td>
            </tr>
        </>

    )
}

export default Listagent;