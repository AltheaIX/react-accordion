import {useState} from "react";

export default function Question({value}){
    const [isOpen, setIsOpen] = useState(false)
    const [buttonText, setButtonText] = useState('+')

    function handleClick(){
        setIsOpen(!isOpen)

        if (buttonText === "+"){
            setButtonText('-')
        }

        if (buttonText === "-"){
            setButtonText("+")
        }
    }

    return (
        <div className="question">
            <div className="title-container">
                {value.title}
                <button onClick={handleClick}>{buttonText}</button>
            </div>

            { isOpen &&
                <p>{value.info}</p>
            }
        </div>
    )
}