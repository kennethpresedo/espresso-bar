import { useState } from 'react';
import styles from './AuthPage.module.scss';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
// import Logo from '../../components/Logo/Logo';
import Landing from '../Landing/Landing';
import Break from '../../components/Break/Break';
import Arabica from '../../components/Arabica/Arabica';
import Robusta from '../../components/Robusta/Robusta';
import Footer from '../../components/Footer/Footer'

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className={styles.AuthPage}>
      <Landing /> 
      <Break />
      <Arabica />
      <Robusta />
      <div>
        <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Not A Member?' : 'Already A Member?'}</h3>
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
      </div>
      <Footer />
    </main>
  );
} 