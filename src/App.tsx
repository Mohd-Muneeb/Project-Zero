import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { useAuthState } from 'react-firebase-hooks/auth';
import './App.css';
import { auth } from './components/app';
import SignIn from './pages/SignIn';
import Home from './pages/Home';

function App() {
    const [count, setCount] = useState(0);
    const [user] = useAuthState(auth);

    return (
        <div className="App">
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
                <div>{user ? <Home /> : <SignIn />}</div>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    );
}

export default App;