import React, { useState } from 'react';
import Modal from 'Components/Modal';
import LoginForm from 'Components/LoginForm';
import SignupForm from 'Components/SignupForm';
import { useStateValue } from 'State/AppProvider';

const Welcome = () => {
  const [state, dispatch] = useStateValue();

  const modal = state.modal.showModal ? (
    <Modal>
      <div className="modal-box">
          {state.modal.form === 'signup' && <SignupForm />}
          {state.modal.form === 'login' && <LoginForm />}
      </div>
    </Modal>
  ) : null;

  return (
    <div style={{ minHeight: '1000px'}}>
      <h3>Welcome to the app!</h3>
      <h4>Please login or signup</h4>
      {modal}
    </div>
  );
};

export default Welcome;