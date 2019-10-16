import React, { useState } from 'react';
import AuthForm from 'Components/AuthForm';
import { graphql } from 'react-apollo';
import mutation from 'Mutations/Signup';
import query from 'Queries/CurrentUser';

const SignUpForm = (props) => {
  const [errors, setErrors] = useState([]);

  const onSubmit = ({email, password}) => {
    props.mutate({
      variables: {
        email,
        password
      },
      refetchQueries: [{ query }]
    }).catch(res => {
      setErrors(...errors, res.graphQLErrors.map((err) => err.message))
    });
  }
  return (
   <div>
      <h4>Signup</h4>
      <AuthForm onSubmit={onSubmit} errors={errors} />
    </div>
  );
};

export default graphql(mutation)(SignUpForm);