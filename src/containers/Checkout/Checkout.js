import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import Input from '../../components/UI/Input/Input';
import classes from './Checkout.css';
import OrderSummary from '../../components/UI/OrderSummary/OrderSummary';

const checkout = props => {

    const [formIsValid, setFormIsValid] = useState(false);

    const [orderForm, setOrderForm] = useState({
        name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                label: ' Name'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            touched: false,
        },
        address: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                label: 'Address'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            touched: false,
        },
        city: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                label: 'City'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            touched: false,
        },
        contact: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                label: 'Contact Number'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            touched: false,
        },
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                label: ' Email'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            touched: false,
        },
    });

    const orderHandler = (event) => {
        event.preventDefault();
        const formData = {};
        for (let formElement in orderForm) {
            formData[formElement] = orderForm[formElement].value
        }
        const order = {
            name: props.product.name,
            price: props.product.price,
            orderData: formData,
            userId: props.product.id,
        };
        props.onPurchaseProduct(order);
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

    const inputChangeHandler = (event, inputIdentifier) => {
        const updateOrderForm = { ...orderForm };
        const updateFormElement = { ...updateOrderForm[inputIdentifier] };
        updateFormElement.value = event.target.value;
        updateFormElement.touched = true;
        updateFormElement.valid = checkValidity(updateFormElement.value, updateFormElement.validation);
        updateOrderForm[inputIdentifier] = updateFormElement;

        let formisValid = true;
        for (let inputIdentifier in updateOrderForm) {
            formisValid = updateOrderForm[inputIdentifier].valid && formisValid;
        }
        setOrderForm(updateOrderForm);
        setFormIsValid(formisValid);

    }
    const formElementsArray = [];
    for (let key in orderForm) {
        formElementsArray.push({
            id: key,
            config: orderForm[key],
        });
    }

    let form = <Redirect to="/" />;
    if (props.product) {
        form = (
            <form onSubmit={orderHandler} className={classes.Form} >
                {formElementsArray.map(formElement => (
                    <Input
                        label={formElement.config.elementConfig.label}
                        key={formElement.id}
                        changed={(event) => inputChangeHandler(event, formElement.id)}
                        invalid={!formElement.config.valid}
                        touched={formElement.config.touched}
                        shouldValidate={formElement.config.validation}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        elementType={formElement.config.elementType} />
                ))}
                <OrderSummary name={props.product.name} price={props.product.price} />
                <button className={classes.Button} disabled={!formIsValid} >ORDER</button>
            </form>
        )
    }

    return (
        <div className={classes.Checkout} >
            <h1>Checkout</h1>
            {form}
        </div>
    )


}

const mapStateToProps = state => {
    return {
        product: state.product.product,
        loading: state.product.loading,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPurchaseProduct: (order) => dispatch(actions.purchaseProduct(order)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(checkout);