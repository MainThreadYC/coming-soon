import { ChangeEvent, useState } from "react";

const Main:React.FC = () => {
    const [email, setEmail] = useState("");
    const [isBtnDisabled, setIsButtonDisabled] = useState(true);
    const onUpdateEmail = (e:ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    
    const onSubmitForm = (e:ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("Sent!");
    }

    return  (
        <main>
            <h3 className="p-2 text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF00E5] via-[#29F2FF] to-[#FFE600]">
                Coming soon
            </h3>
            <form className="mt-12 flex justify-center w-full items-center" onSubmit={onSubmitForm}>
                <input autoFocus className="bg-[#383D6A] text-white font-normal px-3 py-4 min-w-[350px] rounded-tl-lg rounded-bl-lg focus:ring-offset-0 focus:ring-2 focus:ring-[#5FE2FF] focus:outline-[#5FE2FF]" type="email" placeholder="youremail@email.com" value={email} onChange={onUpdateEmail} />
                <button disabled={isBtnDisabled} className={`${isBtnDisabled ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'font-normal bg-white hover:ring-2 hover:ring-[#5FE2FF] active:scale-105'} px-3 py-4 rounded-tr-lg rounded-br-lg ease-in-out`} type="submit">Notify Me!</button>
            </form>
        </main>
    )
}
   

export default Main;