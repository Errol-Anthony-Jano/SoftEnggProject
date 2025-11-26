import { Field, Input } from "@headlessui/react"
import { useNavigate } from "react-router";

const LoginForm = () => {

    const navigate = useNavigate();

    const handleLogin = (e) => {
        // 3. IMPORTANT: Prevent the browser from refreshing the page
        e.preventDefault();

        // (In the future, your DB check logic goes here)

        // 4. Navigate to the dashboard (root path)
        navigate('/');
    };
    return (
        <form className="flex flex-col h-full p-4 gap-4 justify-between">
            <div className="flex flex-col w-full h-[90%] gap-4">
                <div className="flex justify-center items-center">
                    <h1>Login</h1>
                </div>
                <Field className="flex flex-col w-full">
                    <label>Enter email</label>
                    <Input type="email" className="border border-[#646464] rounded-sm hover:border hover:border-white hover:transition duration-300 ease-in-out grow" />
                </Field>
                <Field className="flex flex-col w-full">
                    <label>Enter password</label>
                    <Input type="password" className="border border-[#646464] rounded-sm hover:border hover:border-white hover:transition duration-300 ease-in-out grow" />
                </Field>
            </div>
            <button className="w-full bg-[#adc9d4] h-[10%] rounded-lg" onClick={handleLogin}>Login</button>
        </form>
    )
}

export default LoginForm