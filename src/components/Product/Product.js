import React, { useEffect } from 'react';
import * as authActions from '../../redux/actions/combined';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


const Product = props => {

    useEffect(() => {
        
    },[])

  return (
    <div>
        Product with id {props.match.params.id}
    </div>
  );
}


const mapStateToProps = state => {
    return {
        items: state.items.items,
        cart: state.cart.cart,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleCart: () => dispatch(authActions.toggleCart()),
        initItems: () => dispatch(authActions.initItems()),
        addToCart: (id) => dispatch(authActions.addToCart(id)),
        deleteFromCart: (id) => dispatch(authActions.deleteFromCart(id)),
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Product));
