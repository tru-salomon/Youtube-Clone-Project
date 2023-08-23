import React from 'react';
import styles from './ErrorPage.css';

const ErrorPage = () => {
  return (
    <div className={styles.errorPage}>
      <h1>Oops! Something went wrong.</h1>
      <p>We're sorry, but the page you're looking for doesn't exist.</p>
    </div>
  );
};

export default ErrorPage;
