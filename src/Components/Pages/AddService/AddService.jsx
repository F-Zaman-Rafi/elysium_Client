import axios from "axios";
import useAuth from "../../Providers/useAuth";

const AddService = () => {
    const { user } = useAuth()
    const { displayName, email, photoURL } = user


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

        // "_id": "abcdef123456",
        // "serviceName": "Game Level Design Consultation",
        // "serviceImage": "https://example.com/game_level_design.jpg",
        // "description": "Receive expert guidance on designing game levels.",
        // "providerImage": "https://example.com/game_designer.jpg",
        // "providerName": "Alice Johnson",
        // "providerEmail": "alice.johnson@example.com",
        // "serviceArea": "Online",
        // "servicePrice": "$80"


        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/services`, addServiceData)
            console.log(data)
        }
        catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
            <p className="font-press text-center text-5xl my-10">Add Service</p>
            <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-transparent">
                <form onSubmit={handleAddJobs}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-2">

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Service Image URL</label>
                            <input name="serviceImage" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Service Name</label>
                            <input name="serviceName" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Price</label>
                            <input name="servicePrice" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Service Area</label>
                            <select name="serviceArea" type="text" className="block select w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                <option disabled selected>Select Your Service Area</option>
                                <option>Online</option>
                                <option>Local</option>
                                <option>Global</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >description</label>
                            <input name="description" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
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

export default AddService;


