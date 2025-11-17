import { Field, Input } from "@headlessui/react"

const RegistrationForm = () => {
    return (
        <form className="flex flex-col h-full p-4 gap-4 justify-between">
            <div className="flex flex-col gap-4 w-full h-[90%]">
                <div className="flex justify-center items-center">
                    <h1>Register</h1>
                </div>
                <div className="w-full flex gap-4">
                    <Field className="flex flex-col w-1/2 h-full gap-2">
                        <label>Enter first name</label>
                        <Input className="border border-[#646464] rounded-sm hover:border hover:border-white hover:transition duration-300 ease-in-out grow"/>
                    </Field>
                    <Field className="flex flex-col w-1/2 h-full gap-2">
                        <label>Enter last name</label>
                        <Input className="border border-[#646464] rounded-sm hover:border hover:border-white hover:transition duration-300 ease-in-out grow"/>
                    </Field>
                </div>
                <Field className="flex flex-col w-full">
                    <label>Enter email</label>
                    <Input type="email" className="border border-[#646464] rounded-sm hover:border hover:border-white hover:transition duration-300 ease-in-out grow" />
                </Field>
                <Field className="flex flex-col w-full">
                    <label>Enter password</label>
                    <Input type="password" className="border border-[#646464] rounded-sm hover:border hover:border-white hover:transition duration-300 ease-in-out grow" />
                </Field>
                <Field className="flex flex-col w-full">
                    <label>Confirm password</label>
                    <Input type="password" className="border border-[#646464] rounded-sm hover:border hover:border-white hover:transition duration-300 ease-in-out grow" />
                </Field>
            </div>
            <button className="w-full bg-[#adc9d4] h-[10%] rounded-lg">Register</button>
        </form>
    )
}

export default RegistrationForm