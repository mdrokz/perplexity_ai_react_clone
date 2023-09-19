import { Nav } from './components/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Modal } from './components/Modal';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { Button } from './components/Button';
import { useEffect, useState } from 'react';
import React from 'react';
import { Search } from './components/Search';

export const AppContext = React.createContext<any>({});


const AuthModal = ({ onGoogleLoginSuccess, onGoogleLoginFailure }: any) => {
  return (<div className="p-4">
    <span>Sign in or sign up to continue</span>
    <div className="flex flex-col items-center space-y-2 p-2">
      <GoogleLogin theme='filled_black' onSuccess={onGoogleLoginSuccess} onError={onGoogleLoginFailure} />
      <Button label="Continue with Apple" icon={["fab", "apple"]} />
      <hr />
      <input placeholder="henry@example.com" className="rounded-xl border text-sm px-2 py-1 outline-none w-full hover:border-teal-500 transition duration-300 ease-in-out" />
      <Button label="Continue with Email" icon={["fas", "envelope"]} />
    </div>
  </div>)
}

const SearchModal = () => {
  return (<div className="p-4 w-full h-full">
    <Search />
  </div>)
}

function App() {

  const [authType, setAuthType] = useState<"login" | "signup" | "">("");

  const [showModal, setShowModal] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isProfileSetup, setIsProfileSetup] = useState(false);

  useEffect(() => {

    window.addEventListener("keydown", (e) => {
      // ctrl + I
      if (e.ctrlKey && e.key == "i") {
        setShowModal(true);
        setAuthType("");
      }
    })

    return () => {
      window.removeEventListener("keydown", () => { });
    }

  }, []);

  const onGoogleLoginSuccess = (res: CredentialResponse) => {
    if (authType == "login") {
      setShowModal(false);
    }
    if (isProfileSetup && authType == "signup") {
      setIsLoggedIn(true);
    }
    console.log(res);
  }

  const onGoogleLoginFailure = () => {
    console.error("Failed to login with Google");
    alert("Failed to login with Google");
  }

  return (
    <AppContext.Provider value={{
      authType,
      isLoggedIn,
      setAuthType,
      showModal,
      setShowModal
    }
    }>
      <section className="flex h-screen w-screen">
        <Modal title={authType != "" ? "Welcome" : ""} isOpen={showModal} closeModal={() => {
          setShowModal(false);
          setAuthType("");
        }}>
          {(authType == "login" || authType == "signup") && <AuthModal onGoogleLoginSuccess={onGoogleLoginSuccess} onGoogleLoginFailure={onGoogleLoginFailure} />}
          {authType == "" && <SearchModal />}
        </Modal>
        <Nav />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </section>
    </AppContext.Provider>
  )
}

export default App
