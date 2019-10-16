import React, { useState } from 'react';
import AuthForm from 'Components/AuthForm';
import { graphql } from 'react-apollo';
import mutation from 'Mutations/Login';
import query from 'Queries/CurrentUser';

const LoginForm = (props) => {
  const [errors, setErrors] = useState([]);
  const onSubmit = ({email, password}) => {
    props.mutate({
      variables: {
        email,
        password
      },
      refetchQueries: [{ query }]
    }).catch(res => {
      console.log(res);
      setErrors(res.graphQLErrors.map((err) => err.message))
    });
  }
  return (
    <div>
      <h4>Login w/ Email and Password</h4>
      <AuthForm onSubmit={onSubmit} errors={errors} />
    </div>
  );
};

export default graphql(query)(
  graphql(mutation)(LoginForm));