import { Field, Input } from "@headlessui/react"

const LoginForm = () => {
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
            <button className="w-full bg-[#adc9d4] h-[10%] rounded-lg">Register</button>
        </form>
    )
}

export default LoginForm