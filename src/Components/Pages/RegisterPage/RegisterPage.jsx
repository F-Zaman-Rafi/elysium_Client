import { Link, useLocation, useNavigate } from "react-router-dom"
import toast from "react-hot-toast";
import useAuth from "../../Providers/useAuth";
const RegisterPage = () => {
    const navigate = useNavigate();
    const { signInWithGoogle, createUser, updateUserProfile, user, setUser } = useAuth();
    const location = useLocation();
    const from = location.state || '/';

    const handleGoogleLogin = async () => {
        try {
            await signInWithGoogle()
            navigate(from, { replace: true })
            toast.success('Logged in with Google')
        }
        catch (error) {
            console.log(error)
            toast.error(error?.message)
        }
    }


    const handleSignUp = async (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const photo = form.photo.value;
        const password = form.password.value;

        console.log({ email, password, name, photo });
        if (password.length < 6) {
            toast.error("Password must be longer than 6 characters")
            return
        }
        if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
            toast.error("Password must contain at least one lowercase/uppercase letter, and one number.");
            return
        }



        try {
            // User Registration
            const result = await createUser(email, password);
            console.log(result);

            await updateUserProfile(name, photo);
            setUser({ ...user, photoURL: photo, displayName: name });
            navigate(from, { replace: true });
            toast.success('Signup Successful');
        } catch (error) {
            console.log(error);
            toast.error(error?.message);
        }
    };

    return (
        <div className='flex flex-row-reverse justify-center items-center min-h-[calc(100vh-306px)] my-12 relative'>
            <p className='mt-3 text-5xl font-press  text-center text-[#FFFF00] py-10 '>
                Welcome!
            </p>
            <div className='w-full max-w-sm mx-auto bg-none overflow-hidden rounded-lg shadow-lg lg:max-w-xl '>
                <div onClick={handleGoogleLogin} className='flex cursor-pointer items-center justify-center mt-4 text-[#FFFF00] border-[#FFD700] transition-colors duration-300 transform border rounded-lg hover:bg-transparent '>
                    <div className='px-4 py-2'>
                        <svg className='w-6 h-6' viewBox='0 0 40 40'>
                            <path
                                d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                                fill='#FFC107'
                            />
                            <path
                                d='M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z'
                                fill='#FF3D00'
                            />
                            <path
                                d='M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z'
                                fill='#4CAF50'
                            />
                            <path
                                d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                                fill='#1976D2'
                            />
                        </svg>
                    </div>

                    <span className='w-5/6 px-4 py-3 font-bold text-center'>
                        Sign Up with Google
                    </span>
                </div>

                <div className='flex items-center justify-between mt-4'>
                    <span className='w-1/5 border-b border-[#FFD700] lg:w-1/4'></span>

                    <div className='text-xs text-center text-green uppercase  hover:underline'>
                        or Sign Up with email
                    </div>

                    <span className='w-1/5 border-b border-[#FFD700]  lg:w-1/4'></span>
                </div>
                <form onSubmit={handleSignUp}>
                    {/* Email */}
                    <div className='mt-4'>
                        <label
                            className='block mb-2 text-sm font-medium text-[#08FF08] '

                        >
                            Email Address
                        </label>
                        <input

                            autoComplete='email'
                            name='email'
                            className='block w-full px-4 py-2 text-white bg-transparent border rounded-lg  border-[#FFD700]  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                            type='email'
                        />
                    </div>
                    {/* Name */}
                    <div className='mt-4'>
                        <label
                            className='block mb-2 text-sm font-medium text-[#08FF08] '

                        >
                            Name
                        </label>
                        <input

                            autoComplete='email'
                            name='name'
                            className='block w-full px-4 py-2 text-white bg-transparent border rounded-lg  border-[#FFD700]  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                            type='text'
                        />
                    </div>
                    {/* Photo */}
                    <div className='mt-4'>
                        <div className='flex justify-between'>
                            <label
                                className='block mb-2 text-sm font-medium text-[#08FF08] '

                            >
                                Photo URL
                            </label>
                        </div>

                        <input


                            name='photo'
                            className='block w-full px-4 py-2 text-white bg-transparent  border rounded-lg   focus:border-blue-400 focus:ring-opacity-40 border-[#FFD700]  focus:outline-none focus:ring focus:ring-blue-300'
                            type='text'
                        />
                    </div>
                    <div className='mt-4'>
                        <div className='flex justify-between'>
                            <label
                                className='block mb-2 text-sm font-medium text-[#08FF08] '
                                htmlFor='loggingPassword'
                            >
                                Password
                            </label>
                        </div>

                        <input
                            id='loggingPassword'
                            autoComplete='current-password'
                            name='password'
                            className='block w-full px-4 py-2 text-white bg-transparent  border rounded-lg   focus:border-blue-400 focus:ring-opacity-40 border-[#FFD700]  focus:outline-none focus:ring focus:ring-blue-300'
                            type='password'
                        />
                    </div>
                    <div className='mt-6'>
                        <button
                            type='submit'
                            className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-500 transform bg-transparent border-blue-700 border-2 rounded-lg hover:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                        >
                            Sign Up
                        </button>
                    </div>
                </form>

                <div className='flex items-center justify-between mt-4'>
                    <span className='w-1/5 border-b border-[#FFD700]  md:w-1/4'></span>

                    <Link
                        to='/login'
                        className='text-xs text-white uppercase  hover:underline'
                    >
                        Already have an account? Login
                    </Link>

                    <span className='w-1/5 border-b border-[#FFD700]  md:w-1/4'></span>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage
