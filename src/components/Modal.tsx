import { FC } from "react"

interface ModalProps {
    title: string;
    isOpen: boolean;
    closeModal: () => void;
}


export const Modal: FC<React.PropsWithChildren<ModalProps>> = ({ closeModal, title, isOpen, children }) => {

    if (!isOpen) return null;

    return (<div className={`relative z-10`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
        {/* Background Overlay */}
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity duration-300 ease-in-out"></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="mx-auto w-[50%]">
                {/* Modal */}
                <div className="relative transform transition-transform duration-500 ease-out translate-y-full sm:translate-y-1/2 overflow-hidden rounded-lg bg-white text-left shadow-xl">
                    {/* <div className="border-b border-stroke py-4 px-7 dark:border-strokedark"> */}
                    <div className="w-full flex p-4">
                        <div className="flex flex-col flex-1 justify-center items-center p-2 space-y-2">
                            <span className="text-teal-500 text-4xl font-bold">{title}</span>
                            {children}
                        </div>
                        {/* Close Button */}
                        <strong className="text-xl align-center cursor-pointer transform transition-transform duration-200 hover:scale-110"
                            onClick={closeModal}
                        >&times;</strong>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
    </div>)
}