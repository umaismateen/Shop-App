import React, { useState} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Spinner from '../../components/UI/Spinner/Spinner/Spinner';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './Auth.css';
import * as actions from '../../store/actions/index';


const auth = props => {
    
    const [authForm, setAuthForm] = useState({
        email: {
            elementConfig: {
                type: 'text',
                label: 'E-mail'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            touched: false,
        },
        password: {
            elementConfig: {
                type: 'password',
                label: 'Password'
            },
            value: '',
            validation: {
                required: true,
                minLength: 6
            },
            valid: false,
            touched: false,
        },
    });
    const [isSignup, setIsSignUp] = useState(false);

    const inputChangeHandler = (event, controlName) => {
        const updateControls = {
            ...authForm,
            [controlName]: {
                ...authForm[controlName],
                value: event.target.value,
                valid: checkValidity(event.target.value, authForm[controlName].validation),
                touched: true,
            }
        };
        setAuthForm(updateControls);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.onAuth(authForm.email.value, authForm.password.value,isSignup);
    }

    const switchAuthModeHandler = () => {
        setIsSignUp(!isSignup);
    }


    const formElementsArray = [];
    for (let key in authForm) {
        formElementsArray.push({
            id: key,
            config: authForm[key],
        });
    }

    let form = formElementsArray.map(formElement => (
        <Input
            key={formElement.id}
            changed={(event) => inputChangeHandler(event, formElement.id)}
            invalid={!formElement.config.valid}
            touched={formElement.config.touched}
            shouldValidate={formElement.config.validation}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            label={formElement.config.elementConfig.label}
            type={formElement.config.elementConfig.type}
        />
    ))

    let authRedirect = null;
    if (props.isAuth) {
        let url ='/';
        if(props.product){
            url=`/products/${props.product.id}`
        }
        authRedirect = < Redirect to={url} />
    }

    if (props.loading) {
        form = <Spinner />
    }

    let errorMessage = null;
    if (props.error) {
        errorMessage = (
            <p style={{ color: "red" }} >{props.error.message}</p>
        )
    }

    return (
        <div className={classes.Auth} >
            {authRedirect}
            {errorMessage}
            <form onSubmit={submitHandler} >
                {form}
                <Button disabled={!(authForm['email'].valid && authForm['password'].valid)} btnType="Success" >{isSignup ? 'Sign Up' : 'Sign In'}</Button>
            </form>
            <Button
                clicked={switchAuthModeHandler}
                btnType="Danger" >
                SWITCH TO {isSignup ? 'SIGN IN' : 'SIGN UP'}</Button>
        </div>
    );

}

const checkValidity = (value, rules) => {
    let isValid = true;
    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid;
    }
    return isValid;
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuth: state.auth.token !== null,
        product: state.product.product,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(auth);