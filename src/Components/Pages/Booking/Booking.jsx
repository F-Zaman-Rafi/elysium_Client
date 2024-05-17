import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


import { useLoaderData } from "react-router-dom";
import useAuth from "../../Providers/useAuth";
import { useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

const Booking = () => {

    const { user } = useAuth();
    const service = useLoaderData();
    const { displayName, email } = user;
    const { _id, serviceName, serviceImage, providerName, providerEmail, servicePrice } = service;

    const [startDate, setStartDate] = useState(new Date());


    const handleFormSubmission = async event => {
        event.preventDefault()
        const form = event.target
        const serviceId = form._id.value
        const serviceName = form.serviceName.value
        const serviceImage = form.serviceImage.value
        const providerName = form.providerName.value
        const providerEmail = form.providerEmail.value
        const servicePrice = form.servicePrice.value
        const userName = form.displayName.value
        const userEmail = form.email.value
        const SpecialInstruction = form.SpecialInstruction.value
        const date = startDate
        const status = 'Pending'
        const bookingData = { serviceId, serviceName, serviceImage, providerEmail, providerName, servicePrice, userName, userEmail, SpecialInstruction, date, status }
        console.table(bookingData)


        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/booking`, bookingData)
            console.log(data)
        }
        catch (error) {
            console.log(error)
        }
    }



    return (
        <div>
            <Helmet>
                <title>Booking Service || Elysium</title>
            </Helmet>
            <p className="font-press text-center text-5xl my-10">Book Now</p>
            <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-transparent">
                <form onSubmit={handleFormSubmission}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-3">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Service ID</label>
                            <input name="_id" disabled defaultValue={_id} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Service Name</label>
                            <input name="serviceName" disabled defaultValue={serviceName} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Service Image URL</label>
                            <input name="serviceImage" disabled defaultValue={serviceImage} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Provider Email</label>
                            <input name="providerEmail" disabled defaultValue={providerEmail} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Provider Name</label>
                            <input name="providerName" disabled defaultValue={providerName} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Current User Name</label>
                            <input name="displayName" disabled defaultValue={displayName} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Current User Email</label>
                            <input name="email" disabled defaultValue={email} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Special Instruction</label>
                            <input name="SpecialInstruction" type="text" placeholder="Customized Service Plan" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white  border-[#FFD700] border rounded-md dark:bg-transparent dark:text-gray-300 dark:border-[#FFD700] focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Price</label>
                            <input name="servicePrice" disabled defaultValue={servicePrice} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Service Taking Data</label>
                            <DatePicker name="date" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-[#FFD700] rounded-md dark:bg-transparent dark:text-gray-300 dark:border-[#FFD700] focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" selected={startDate} onChange={(date) => setStartDate(date)} />

                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Booking;