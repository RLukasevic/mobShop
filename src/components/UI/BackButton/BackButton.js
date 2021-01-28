import React from 'react';
import styles from './BackButton.module.css';
import { withRouter } from 'react-router-dom';


const AddToCartButton = props => {

  return (
    <div 
        className={styles.backButton} 
        onClick={props.history.goBack}
    >
        Back
    </div>
  );
}

export default withRouter(AddToCartButton);