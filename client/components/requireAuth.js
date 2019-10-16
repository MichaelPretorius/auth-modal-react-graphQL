import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { graphql } from 'react-apollo';
import currentUserQuery from 'Queries/CurrentUser';

export default (WrappedComponent) => {
  const RequireAuth = (props) => {
    const { loading, currentUser } = props.data;

    useEffect(() => {
      if (!loading && !currentUser) {
        props.history.push('/');
      }
    }, [loading, currentUser])
  
    return (
      <WrappedComponent {...props} />
    );
  };
  
  return withRouter(graphql(currentUserQuery)(RequireAuth));
}
