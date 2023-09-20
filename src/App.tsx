import { Nav } from './components/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Modal } from './components/Modal';
import { CredentialResponse, GoogleLogin, TokenResponse, useGoogleLogin } from '@react-oauth/google';
import { Button } from './components/Button';
import { useEffect, useState } from 'react';
import React from 'react';
import { Search } from './components/Search';
import { Result } from './pages/Result';
import { Library } from './pages/Library';

export const AppContext = React.createContext<any>({});


const AuthModal = ({ onGoogleLoginSuccess, onGoogleLoginFailure }: any) => {

  const login = useGoogleLogin({
    onSuccess: onGoogleLoginSuccess,
    onError: onGoogleLoginFailure,
  })

  return (<div className="p-4">
    <span>Sign in or sign up to continue</span>
    <div className="flex flex-col items-center space-y-2 p-2">
      <Button onClick={() => login()} label="Continue with Google" icon={["fab", "google"]} />
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

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") == "true");

  const [isProfileSetup, setIsProfileSetup] = useState(localStorage.getItem("isProfileSetup") == "true");

  useEffect(() => {

    localStorage.setItem("threads", JSON.stringify([]));

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

  const onGoogleLoginSuccess = async (res: TokenResponse) => {
    if (authType == "login") {
      setShowModal(false);

      try {
        const response = await fetch('https://people.googleapis.com/v1/people/me?personFields=names,photos', {
          headers: {
            'Authorization': `Bearer ${res.access_token}`
          }
        });

        const data = await response.json();

        // const imageBlob = await (await fetch(data.photos[0].url)).blob();

        // const urlBlob = URL.createObjectURL(imageBlob); 

        localStorage.setItem("user", JSON.stringify({
          name: data.names[0].displayName,
          avatar: data.photos[0].url
        }));

        localStorage.setItem("isProfileSetup", "true");
        localStorage.setItem("isLoggedIn", "true");

        setIsProfileSetup(true);
        setIsLoggedIn(true);
        // console.log(data.names[0].displayName,data.photos[0].url);
      } catch (e) {
        console.error(e);
        alert("Failed to login with Google");
      }
    }
    if (authType == "signup" && isProfileSetup) {
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
      setIsLoggedIn,
      isProfileSetup,
      setIsProfileSetup,
      setAuthType,
      showModal,
      setShowModal
    }
    }>
      <BrowserRouter>
        <section className="flex h-screen w-screen">
          <Modal title={authType != "" ? "Welcome" : ""} isOpen={showModal} closeModal={() => {
            setShowModal(false);
            setAuthType("");
          }}>
            {(authType == "login" || authType == "signup") && <AuthModal onGoogleLoginSuccess={onGoogleLoginSuccess} onGoogleLoginFailure={onGoogleLoginFailure} />}
            {authType == "" && <SearchModal />}
          </Modal>
          <Nav />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/result" element={<Result />}></Route>
            <Route path="/library" element={<Library />} />
          </Routes>
        </section>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
