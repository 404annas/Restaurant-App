import React, { useEffect, useState } from 'react'
import { UserRound, Mail, Lock } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Login = () => {
    const [state, setState] = useState("login");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setShowUserLogin } = useAppContext();

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div onClick={() => setShowUserLogin(false)} className='fixed top-0 bottom-0 left-0 right-0 z-30 flex items-center text-sm text-gray-600 bg-black/50'>
            <form onClick={(e) => e.stopPropagation()} className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[400px] text-gray-500 rounded-lg shadow-xl border border-gray-200 bg-white">
                <p className="text-2xl p-medium m-auto">
                    <span className="text-primary">User</span> {state === "login" ? "Login" : "Sign Up"}
                </p>
                {state === "register" && (
                    <div className="w-full p-regular">
                        <p>Name</p>
                        <div className='flex items-center gap-1 border border-primary rounded w-full p-2 mt-1'>
                            <p><UserRound size={15} className='text-primary-dull' /></p>
                            <input onChange={(e) => setName(e.target.value)} value={name} placeholder="John Doe" className="outline-none" type="text" required />
                        </div>
                    </div>
                )}
                <div className="w-full p-regular">
                    <p>Email</p>
                    <div className='flex items-center gap-2 border border-primary rounded w-full p-2 mt-1'>
                        <p><Mail size={15} className='text-primary-dull' /></p>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="johndoe@gmail.com" className="outline-none" type="email" required />
                    </div>                </div>
                <div className="w-full p-regular">
                    <p>Password</p>
                    <div className='flex items-center gap-2 border border-primary rounded w-full p-2 mt-1'>
                        <p><Lock size={15} className='text-primary-dull' /></p>
                        <input onChange={(e) => setPassword(e.target.value)} value={password} placeholder="password_123" className="outline-none" type="password" required />
                    </div>                </div>
                {state === "register" ? (
                    <p className='p-regular'>
                        Already have account? <span onClick={() => setState("login")} className="text-primary cursor-pointer p-regular">click here</span>
                    </p>
                ) : (
                    <p className='p-regular'>
                        Create an account? <span onClick={() => setState("register")} className="text-primary cursor-pointer p-regular">click here</span>
                    </p>
                )}
                <button className="bg-primary hover:bg-primary-dull transition-all text-white w-full py-2 rounded-md cursor-pointer p-regular">
                    {state === "register" ? "Create Account" : "Login"}
                </button>
            </form>
        </div>
    );
}

export default Login