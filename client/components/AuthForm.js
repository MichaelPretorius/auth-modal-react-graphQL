import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useStateValue } from 'State/AppProvider';
import { graphql } from 'react-apollo';
import query from 'Queries/CurrentUser';

const AuthForm = (props) => {
  const [{ modal }, dispatch] = useStateValue();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const clearModal = () => {
      if (props.data.currentUser !== null) {
        dispatch({
          type: 'CLEAR_MODAL',
          showModal: false,
          form: ''
        });
        props.history.push('/dashboard');
      }
    }
    clearModal()
  }, [props.data.currentUser]);

  const { onSubmit } = props;

  const backClick = () => {
    dispatch({
      type: 'CLEAR_MODAL',
      showModal: false,
      form: ''
    });
  }
  const submitForm = (e) => {
    e.preventDefault();
    onSubmit({email, password});
  }

  return (
    <div className="row">
      <form className="col s12" onSubmit={submitForm}>
        <div className="input-field">
          <input
            placeholder="Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-field">
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="errors">
          {props.errors.map(error => <div key={error} style={{ color: 'red' }}>{error}</div>)}
        </div>
        <button className="btn">Submit</button>
      </form>
      <button className="btn red"onClick={() => backClick()}>Back</button>
    </div>
    
  );
};

export default withRouter(graphql(query)(AuthForm));