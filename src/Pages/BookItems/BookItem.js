import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const BookItem = ({ product }) => {
    //console.log(product);
    const {user}=useContext(AuthContext);
   // console.log(user);
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
    } = product;
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name =form.name.value
        const email =form.email.value
        const location = form.location.value
        const sellingPrice = form.sellingPrice.value
        const phone = form.contact.value
        const seller = form.seller.value
        
        const booking = {
            name,
            location,
            product_id:_id,
            resalePrice,
            seller,
            email,
            phone,
            seller

        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('done');
                    
                }
                else {
                    console.log(data.error)
                }
            })

        
    };
    const handleCart=id=>{
        console.log(id);

    }
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
                <div>
                    <label htmlFor={_id} className="w-full">
                        Buy now
                    </label>
                </div>
            </div>
            <input type="checkbox" id={_id} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box h-auto relative">
                    <label
                        htmlFor={_id}
                        className="btn btn-sm btn-circle absolute right-2 top-3"
                    >
                        ✕
                    </label>
                    <form
                        onSubmit={handleRegister}
                        className="space-y-6 p-10 ng-untouched h-[40rem] ng-pristine ng-valid"
                    >
                        <div className="space-y-1 text-sm">
                            <label htmlFor="name" className="font-bold">
                                Name of Book
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                readOnly
                                defaultValue={productName}
                                placeholder="Book name"
                                className="w-full px-4 py-2 rounded-md border-gray-700 dark:bg-gray-200 text-gray-900 "
                            />
                        </div>
                        <div className="space-y-0 text-sm">
                            <label htmlFor="email" className="font-bold">
                                Your email
                            </label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                readOnly
                                defaultValue={user?.email}
                                placeholder="Book Img url"
                                className="w-full px-4 py-2 rounded-md border-gray-700 dark:bg-gray-200 text-gray-900 "
                            />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="seller" className="font-bold">
                                Your name
                            </label>
                            <input
                                type="text"
                                name="seller"
                                id="seller"
                                required
                                defaultValue={user?.displayName}
                                className="w-full px-4 py-2 rounded-md border-gray-700 dark:bg-gray-200 text-gray-900 "
                            />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="contact" className="font-bold">
                                Contact number
                            </label>
                            <input
                                type="text"
                                name="contact"
                                id="contact"
                                
                                placeholder="Enter your number"
                                className="w-full px-4 py-2 rounded-md border-gray-700 dark:bg-gray-200 text-gray-900 "
                            />
                        </div>

                        <div className="space-y-1 text-sm">
                            <label htmlFor="sellingPrice" className="font-bold">
                                Price of Book
                            </label>
                            <input
                                type="text"
                                name="sellingPrice"
                                id="sellingPrice"
                                readOnly
                                defaultValue={`Price of the book ${resalePrice}`}
                                className="w-full px-4 py-2 rounded-md border-gray-700 dark:bg-gray-200 text-gray-900 "
                            />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="location" className="font-bold">
                                Location
                            </label>
                            <input
                                type="text"
                                name="location"
                                id="location"
                                placeholder="Meeting location"
                                className="w-full px-4 py-2 rounded-md border-gray-700 dark:bg-gray-200 text-gray-900 "
                            />
                        </div>
                        <button
                            type="submit"
                            
                            className="block w-full py-2 text-center rounded-sm  bg-sky-600 text-white font-bold"
                        >
                            Confirm
                        </button>
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default BookItem;
