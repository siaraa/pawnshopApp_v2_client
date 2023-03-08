import './LoginPage.scss'
import { Link } from "react-router-dom"

export default function LoginPage() {
  return (
    <div className="home-mainContainer">
      <div className="home-mainContainer--wrapper">
        <div className="home-logo-container">
          <h1 className="home-logo-container__logo">Pawnshop App</h1>
        </div>
        <div className="home-loginField">
          <div className="home-loginField-inputsContainer">
            <input type="text" placeholder='login'/>
            <input type="password" placeholder='password'/>
          </div>
          <button>ZALOGUJ</button>
          <Link to='/home'>LINK</Link>
        </div>
      </div>
    </div>
  )
}
