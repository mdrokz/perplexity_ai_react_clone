import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FC } from "react"

interface ButtonProps {
    icon?: IconProp,
    label?: string,
    background?: boolean,
    onClick?: () => void,
    rounded?: string
}

export const Button: FC<ButtonProps> = ({ icon, onClick = () => [],background = true, rounded = "-md", label = "" }) => {
    return (
        <div className={`flex items-center w-full rounded${rounded} px-2 py-1 space-x-2 transition duration-300 ease-in-out ${background && `bg-gray-100`} hover:bg-gray-200`}>
            {(icon && label != "") && <span>
                <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
            </span>}
            <button onClick={onClick} className={`font-bold border-transparent w-full`}>
                {label == "" ? <FontAwesomeIcon icon={icon!}></FontAwesomeIcon> : label}
            </button>
        </div>)

}