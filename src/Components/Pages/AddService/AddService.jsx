import axios from "axios";
import useAuth from "../../Providers/useAuth";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const AddService = () => {
    const { user } = useAuth()
    const { displayName, email, photoURL } = user
    const navigate = useNavigate()


    const handleAddJobs = async event => {
        event.preventDefault()
        const form = event.target
        const serviceName = form.serviceName.value
        const serviceImage = form.serviceImage.value
        const servicePrice = '$' + form.servicePrice.value
        const serviceArea = form.serviceArea.value
        const description = form.description.value
        const providerName = displayName
        const providerEmail = email
        const providerImage = photoURL
        const addServiceData = { serviceName, serviceImage, providerEmail, providerName, servicePrice, serviceArea, description, providerImage }
        console.table(addServiceData)


        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/services`, addServiceData)
            console.log(data)
            navigate('/manage-service')
            toast.success('Service Posted Successfully')
        }
        catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="font-play">
            <Helmet>
                <title>Add Service || Elysium</title>
            </Helmet>
            <p className="font-press text-center text-5xl my-10">Add Service</p>
            <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-transparent">
                <form onSubmit={handleAddJobs}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-2">

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Service Image URL</label>
                            <input name="serviceImage" required type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Service Name</label>
                            <input name="serviceName" required type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Price</label>
                            <input name="servicePrice" required type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Service Area</label>
                            <select name="serviceArea" required type="text" className="block select w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                <option disabled selected>Select Your Service Area</option>
                                <option>Online</option>
                                <option>Local</option>
                                <option>Global</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >description</label>
                            <input name="description" required type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                    </div>

                    <div className="flex justify-end mt-5">
                        <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform w-full bg-transparent border-violet-700 border-2 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Add</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddService;


