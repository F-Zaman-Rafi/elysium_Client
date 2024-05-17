/* eslint-disable no-unused-vars */
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Navigate, useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../Providers/useAuth";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateService = () => {
    const { user } = useAuth()
    const { email } = user
    const [startDate, setStartDate] = useState(new Date());
    const navigate = useNavigate()

    const services = useLoaderData()
    const { _id, serviceName, serviceImage, description, providerName, serviceArea, servicePrice } = services
    console.log(services)


    const handleUpdate = async e => {
        e.preventDefault();
        const form = e.target

        const serviceName = form.serviceName.value
        const serviceImage = form.serviceImage.value
        const description = form.description.value
        const serviceArea = form.serviceArea.value
        const SpecialInstruction = form.SpecialInstruction.value



        const updateData = { serviceName, serviceImage, description, serviceArea, SpecialInstruction }
        console.table(updateData);


        try {
            const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/service/${_id}`, updateData)
            console.log(data)
            toast.success('Service updated successfully')
            navigate('/manage-service')
        }
        catch (err) {
            console.log(err.message)
            toast.error(err.message)
        }

    }

    return (
        <div>
            <p className="font-press text-center text-5xl my-10">Update</p>
            <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-transparent">
                <form onSubmit={handleUpdate} >
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-3">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Service ID</label>
                            <input name="_id" disabled defaultValue={_id} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Service Name</label>
                            <input name="serviceName" defaultValue={serviceName} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white  border-[#FFD700] border rounded-md dark:bg-transparent dark:text-gray-300 dark:border-[#FFD700] focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Service Image URL</label>
                            <input name="serviceImage" defaultValue={serviceImage} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white  border-[#FFD700] border rounded-md dark:bg-transparent dark:text-gray-300 dark:border-[#FFD700] focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Provider Email</label>
                            <input name="providerEmail" disabled defaultValue={email} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Provider Name</label>
                            <input name="providerName" disabled defaultValue={providerName} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Description</label>
                            <input name="description" defaultValue={description} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white  border-[#FFD700] border rounded-md dark:bg-transparent dark:text-gray-300 dark:border-[#FFD700] focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Service Area</label>
                            <select name="serviceArea" type="text" defaultValue={serviceArea} className="block select w-full px-4 py-2 mt-2 text-gray-700 bg-white  border-[#FFD700] border rounded-md dark:bg-transparent dark:text-gray-300 dark:border-[#FFD700] focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-80 dark:focus:border-blue-300 focus:outline-none focus:ring focus:text-red-500" >
                                <option disabled>Select Your Service Area</option>
                                <option>Online</option>
                                <option>Local</option>
                                <option>Global</option>
                            </select>
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

                    <div className="flex justify-end mt-5">
                        <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform w-full bg-transparent border-blue-700 border-2 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Update</button>
                    </div>
                </form>
            </section>
        </div >
    );
};

export default UpdateService;