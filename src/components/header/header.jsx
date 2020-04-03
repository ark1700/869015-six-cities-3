import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppRoute, AuthorizationStatus} from '../../utils/consts.js';
import {getUserPicture, getUserEmail, getIsUserSuper, getAuthStatus} from '../../reducer/user/selectors.js';

const Header = ({authStatus, userPicture, email, isUserSuper}) => {
  const isAuthorized = authStatus === AuthorizationStatus.AUTH;
  const userNameBlock = isAuthorized ?
    <span className="header__user-name user__name">{email}</span> :
    <span className="header__login">Sign in</span>;

  const loginLink = isAuthorized ? AppRoute.getFavorites() : AppRoute.getLogin();
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.getRoot()} className="header__logo-link">
              <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link to={loginLink} className="header__nav-link header__nav-link--profile" href="#">
                  <div className={`header__avatar-wrapper ${isUserSuper ? `header__avatar-wrapper--pro` : ``} user__avatar-wrapper`}>
                    {userPicture &&
                      <img className="header__avatar user__avatar"
                        src={`https://htmlacademy-react-3.appspot.com/six-cities${userPicture}`}
                        width="74" height="74" alt="User avatar"
                      />}
                  </div>
                  {userNameBlock}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>);
};

Header.propTypes = {
  authStatus: PropTypes.string.isRequired,
  userPicture: PropTypes.string,
  email: PropTypes.string,
  isUserSuper: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  userPicture: getUserPicture(state),
  email: getUserEmail(state),
  isUserSuper: getIsUserSuper(state),
  authStatus: getAuthStatus(state)
});

export {Header};
export default connect(mapStateToProps)(Header);
