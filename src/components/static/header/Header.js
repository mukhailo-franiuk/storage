import './style/Header.css';
import { Link } from 'react-router-dom';
import usersLogo from '../../../images/user.png';
import {
    openModalUsers,
    closeModalUsers
} from './option/Actions';
export default function Header() {
    return (
        <div className="header-container">
            <header className="header">
                <div className="burger-menu">
                    <div className="burger-container" title='Open menu'>
                        <button title='Open menu'>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </button>
                    </div>
                </div>
                <div className="catalog-block">
                        <button>Catalog</button>
                </div>
                <div className="logo">
                    <Link to="">Little storage</Link>
                </div>
                <div className="action-users">
                    <button onClick={openModalUsers}>
                        <img src={usersLogo} alt="" />
                    </button>
                </div>
            </header>
            <div className="container-modals-windows">
                <div className="canvas-windows">
                    <div className="enter-user">
                        <button className="close" title='close modal window' onClick={closeModalUsers}>
                            <div className="line-01"></div>
                            <div className="line-02"></div>
                        </button>
                        <h2>Enter you info</h2>
                        <form className='enter-users-form'>
                            <div className="login">
                                <span>Login :</span>
                                <div className="inp-focus">
                                <span className="placeholder-input">Enter login</span>
                                <input type="text" name='login-enter'/>
                                </div>
                            </div>
                            <div className="pass">
                                <span>Password :</span>
                                <span className="placeholder-input">Enter password</span>
                                <input type="text" name='pass-enter'/>
                            </div>
                            <div className="save-res">
                                <input type="checkbox" name="save" />
                                <span>Save you ?</span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}