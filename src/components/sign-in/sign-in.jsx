import React, {PureComponent, createRef} from "react";
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {Operation} from '../../reducer/user/user.js';
import {AppRoute} from '../../utils/consts.js';
import Header from '../header/header.jsx';


class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    this.emailRef = createRef();
    this.passwordRef = createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="page page--gray page--login">
        <Header />
        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form className="login__form form"
                action=""
                onSubmit={this.handleSubmit}
              >
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input className="login__input form__input" type="email" name="email" placeholder="Email" required=""
                    ref={this.emailRef}/>
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input className="login__input form__input" type="password" name="password" placeholder="Password" required=""
                    ref={this.passwordRef}/>
                </div>
                <button className="login__submit form__submit button" type="submit">Sign in</button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>Amsterdam</span>
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }

  handleSubmit(evt) {
    const {onSubmit} = this.props;

    evt.preventDefault();

    onSubmit({
      login: this.emailRef.current.value,
      password: this.passwordRef.current.value,
    });
  }
}

SignIn.propTypes = {
  onSubmit: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(userData) {
    dispatch(Operation.login(userData, AppRoute.getRoot()));
  }
});

export {SignIn};
export default connect(null, mapDispatchToProps)(SignIn);
