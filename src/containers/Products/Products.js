import React, { useEffect, useState } from 'react';
import * as authActions from '../../redux/actions/combined';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


const Products = props => {

    const [showFilter, setFilter] = useState(false);
    const [filterSelected, setFilterSelected] = useState('Select');

    useEffect(() => {
        if(props.items === null) {
            props.initItems();
        }
    },[]);
    
    const filterPressHandler = () => {
        if (showFilter) {
            document.removeEventListener('click', closeFilterMenu);
        } else {
            setTimeout(() => {                                          // callback
                document.addEventListener('click', closeFilterMenu);
            },100)
        }

        setFilter(!showFilter);
    }

    const closeFilterMenu = () => {
        setFilter(false);
        document.removeEventListener('click', closeFilterMenu);
    }

    const filterOptionHandler = (mode) => {
        setFilterSelected(mode);
        closeFilterMenu();
    }

    const formItems = () => {
        let temp = props.items;
        let tempArr = [];

        switch (filterSelected) {
            case 'Ascending':
                temp.sort((a,b) => (a.price - b.price))
                break;

            case 'Descending':
                temp.sort((a,b) => (b.price - a.price))
                break;

            default:
                temp.sort((a,b) => (a.id - b.id))
                break;
        }

        temp.map(item => {
            tempArr.push(<div>
                        <span onClick={() => props.history.push('/product/' + item.id)}>Poggers!</span>
                        <span>
                            <button onClick={() => props.addToCart(item.id)}>PLUS</button>
                            <span>{props.cart.findIndex(e => e.id === item.id) >= 0 ? props.cart[props.cart.findIndex(e => e.id === item.id)].quantity : 0}</span>
                            <button onClick={() => props.deleteFromCart(item.id)}>MINUS</button>
                        </span>
                    </div>)
        })

        return tempArr
    }

  return (
    <div>
        <div>{props.items ? props.items.length : 0} Product(s) found.</div>
        <button onClick={() => filterPressHandler()}>{filterSelected}</button>
        { showFilter ? <div>
            <button onClick={() => filterOptionHandler('Ascending')}>Ascending</button>
            <button onClick={() => filterOptionHandler('Descending')}>Descending</button>
            {filterSelected !== 'Select' ? <button onClick={() => filterOptionHandler('Select')}>Reset Filter</button> : null}
        </div> : null}
        {props.items ? formItems() : <div>Loading...</div>}
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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Products));
