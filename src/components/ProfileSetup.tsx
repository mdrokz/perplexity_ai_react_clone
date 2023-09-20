import { FC } from "react"

interface ProfileSetupProps {
    isOpen: boolean;
    closeModal: () => void;
}


export const ProfileSetup: FC<React.PropsWithChildren<ProfileSetupProps>> = ({ closeModal, isOpen, children }) => {

    if (!isOpen) return null;

    return (<div className={`relative z-10`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
        {/* Background Overlay */}
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity duration-300 ease-in-out"></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="mx-auto w-[50%]">
                {/* Modal */}
                <div className="relative transform transition-transform duration-500 ease-out translate-y-full sm:translate-y-1/2 overflow-hidden rounded-lg bg-white text-left shadow-xl">
                    {/* <div className="border-b border-stroke py-4 px-7 dark:border-strokedark"> */}
                    <div>
                        <div className="w-full flex p-4 justify-between">
                            <div className="flex flex-col justify-center items-center p-2 space-y-2">
                                <span className="text-teal-500 text-md font-bold">Sign Up</span>
                            </div>
                            {/* Close Button */}
                            <button onClick={closeModal} className="px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-500 transition duration-300 ease-in-out text-white">
                                Continue
                            </button>
                        </div>
                        <hr className="border-t border-gray-300 border-b-0 border-l-0 border-r-0 h-0" />
                        {children}
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
    </div>)
}