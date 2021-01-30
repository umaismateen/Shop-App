import React from 'react';
import Modal from '../components/UI/Modal/Modal';
import Aux from './Auxiliry/Auxiliry';
import useHttpErrorHandler from '../hooks/http-error-handler';
import Spinner from '../components/UI/Spinner/Spinner';

const withErrorHandler = (WrappedComponent, axios) => {
    return props => {

        const [error, clearError] = useHttpErrorHandler(axios);

        return (
            <Aux>
                <Modal show={error}
                    modalClosed={clearError}>
                    {error ? error.message : null}
                </Modal>
                {error ?  <Spinner/> : null}
                <WrappedComponent {...props} />
            </Aux>
        );

    }
}

export default withErrorHandler;