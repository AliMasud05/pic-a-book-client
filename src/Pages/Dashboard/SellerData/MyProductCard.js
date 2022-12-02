import React from 'react';

const MyProductCard = ({item}) => {
    const {
        _id,
        picture,
        productName,
        address,
        resalePrice,
        originalPrice,
        usesYear,
        sellerName,
        registered,
    } =item;
    return (
        <div className="card w-96 glass">
            <figure>
                <img className="h-96 w-full" src={picture} alt="car!" />
            </figure>
            <div className="overflow-x-auto relative">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-2 px-6">
                                Title
                            </th>
                            <th scope="col" className="py-2 px-6">
                                value
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                                scope="row"
                                className="py-2px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Product-Name:
                            </th>
                            <td className="py-2px-6">{productName}</td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th
                                scope="row"
                                className="py-2px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Seller-Name
                            </th>
                            <td className="py-2 px-6">{sellerName}</td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th
                                scope="row"
                                className="py-2 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Location
                            </th>
                            <td className="py-2 px-6">{address}</td>
                        </tr>

                        <tr className="bg-white dark:bg-gray-800">
                            <th
                                scope="row"
                                className="py-2 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Uses Year
                            </th>
                            <td className="py-2 px-6">{usesYear} Year</td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th
                                scope="row"
                                className="py-2 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Publish
                            </th>
                            <td className="py-2 px-6">{registered}</td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th
                                scope="row"
                                className="py-2 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Original Price
                            </th>
                            <td className="py-2 px-6">{originalPrice}</td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th
                                scope="row"
                                className="py-2 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Sell Price
                            </th>
                            <td className="py-2 px-6">{resalePrice}</td>
                        </tr>
                    </tbody>
                </table>
                <div className='flex justify-between'>
                   <button className='btn btn-primary'>DELETE</button>
                    <button className='btn btn-primary'>Click For ADD..</button>
                </div>
            </div>
           
        </div>
    );
};

export default MyProductCard;