import React, { useEffect, useState } from 'react';
import * as authActions from '../../redux/actions/combined';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styles from './Products.module.css';

import Item from '../../components/Item/Item';
import Cart from '../../components/Cart/Cart';
import Spinner from '../../components/UI/Spinner/Spinner';
import Error from '../../components/UI/Error/Error';


const Products = props => {

    const [showFilter, setFilter] = useState(false);
    const [filterSelected, setFilterSelected] = useState('Select');

    useEffect(() => {
        if(props.items === null) {
            props.initItems();
        }
    });
    
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
        let temp = [...props.items];
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
            tempArr.push(
            <Item 
                key={item.id}
                image={item.image}
                itemId={item.id}
                price={item.price}
                name={item.title}
                click={() => props.history.push('/product/' + item.id, {index: props.items.findIndex(e => e.id === item.id)})}
            />)
            return null;
        })

        return tempArr
    }

  return (
    <div>
        <Cart />
        {props.error ? <Error/> : <div className={styles.contentWrapper}>
            <div className={styles.foundsmall}>{props.items ? props.items.length : 0} Product(s) found.</div>
            <div className={styles.menuRow}>
                <div className={styles.found}>{props.items ? props.items.length : 0} Product(s) found.</div>
                <div className={styles.filterElement}>
                    Order by 
                    <span className={styles.filterButton} onClick={() => filterPressHandler()}>{filterSelected}<span className={styles.filterArrow}>{'  v'}</span></span> 
                    { showFilter ? 
                        <div className={styles.filterDropdown}>
                            <div className={styles.filterDropdownButton} onClick={() => filterOptionHandler('Ascending')}>Ascending</div>
                            <div className={styles.filterDropdownButton} onClick={() => filterOptionHandler('Descending')}>Descending</div>
                            {filterSelected !== 'Select' ? <div className={styles.filterDropdownButton} onClick={() => filterOptionHandler('Select')}>Reset Filter</div> : null}
                        </div> 
                    : null}
                </div>
            </div>
            <div className={styles.itemsWrap}>
                {props.items ? formItems() : <Spinner/>}
            </div>
        </div>}
    </div>
  );
}


const mapStateToProps = state => {
    return {
        items: state.items.items,
        error: state.items.error,
        cart: state.cart.cart,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleCart: () => dispatch(authActions.toggleCart()),
        initItems: () => dispatch(authActions.initItems()),
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Products));
