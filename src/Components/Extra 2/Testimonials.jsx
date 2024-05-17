/* eslint-disable react/no-unescaped-entities */

const Testimonials = () => {
    return (
        <section className="bg-white dark:bg-transparent">
            <div className="container px-6 py-10 mx-auto">
                <div className="mt-6 md:flex md:items-center md:justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold text-gray-800 capitalize font-press lg:text-3xl dark:text-white">
                            What Our Clients Are Saying
                        </h1>

                        <div className="flex mx-auto mt-6">
                            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                            <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                            <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
                        </div>
                    </div>


                </div>

                <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
                    <div className="p-8 border rounded-lg dark:border-gray-700">
                        <p className="leading-loose text-gray-500 dark:text-gray-400">
                            “Discover what our clients have to say about their experience with our game service consultancy. We value their feedback and strive to provide exceptional services that exceed their expectations.”
                        </p>

                        <div className="flex items-center mt-8 -mx-2">
                            <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                            <div className="mx-2">
                                <h1 className="font-semibold text-gray-800 dark:text-white">Robert</h1>
                                <span className="text-sm text-gray-500 dark:text-gray-400">CTO, Robert Consultency</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 bg-blue-500 dark:bg-opacity-10 bg-opacity-30 border border-transparent rounded-lg dark:bg-blue-600">
                        <p className="leading-loose text-white">
                            “Take a moment to delve into the insightful feedback provided by our esteemed clients. Their detailed testimonials shed light on the transformative experiences they've had while collaborating with our game service consultancy. From innovative strategies to tailored solutions, our team is dedicated to delivering results that resonate.”.
                        </p>

                        <div className="flex items-center mt-8 -mx-2">
                            <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-blue-200" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />

                            <div className="mx-2">
                                <h1 className="font-semibold text-white">Jeny Doe</h1>
                                <span className="text-sm text-blue-200">CEO, Jeny Consultency</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 border rounded-lg dark:border-gray-700">
                        <p className="leading-loose text-gray-500 dark:text-gray-400">
                            “Embark on a journey through the success narratives shared by our clients, illustrating how our consultancy has played a pivotal role in their achievements within the gaming industry. From overcoming challenges to seizing opportunities, these stories exemplify the value we bring to our clients' endeavors.”.
                        </p>

                        <div className="flex items-center mt-8 -mx-2">
                            <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                            <div className="mx-2">
                                <h1 className="font-semibold text-gray-800 dark:text-white">Ema Watson </h1>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Marketing Manager at Stech</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Testimonials;