import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import classes from './Orders.css'
import Spinner from '../../components/UI/Spinner/Spinner';
import Order from '../../components/Order/Order';
import * as actions from '../../store/actions/index';

const orders = props => {

    const { onFetchOrders } = props;
    useEffect(() => {
        onFetchOrders();
    }, [onFetchOrders])

    const deleteOrderHandler = (id) => {
        props.ondeleteOrder(id);
    }

    let orders = props.orders.map(order => (<Order
        clicked={deleteOrderHandler}
        id={order.id}
        key={order.id}
        name={order.name}
        quantity={order.quantity}
        totalPrice={order.totalPrice}
    />
    ))
    if (props.loading) {
        orders = <Spinner />
    }

    return (
        <div className={classes.Orders}>
            {orders}
        </div>
    )

}

const mapStateToProps = state => {
    return {
        loading: state.order.loading,
        orders: state.order.orders,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: () => dispatch(actions.fetchOrders()),
        ondeleteOrder: (id) => dispatch(actions.deleteOrder(id)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(orders);