import Dashboard from './components/Dashboard'
import SignOut from './components/SignOut'
import SignIn from './components/SignIn'
import Logo from './components/Logo'


// login'i ve dashboard + signout'u isAuthUser'a koşullu olarak görüntülemek için <></> fragment'ı kullanın

export default function Navbar() {
  const isAuthUser = false
  //const isAuthUser = true
  
  return (
    <header className='navbar-wrapper'>
      <nav className='navbar'>
        <Logo/>
        <div className='navbar-links'>     
        {isAuthUser ? <>
          <Dashboard/>
          <SignOut/>
          </> : <SignIn />}
        </div>
      </nav>
    </header>
  )
}


