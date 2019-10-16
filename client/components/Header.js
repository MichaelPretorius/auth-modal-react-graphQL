import React from 'react';
import { graphql } from 'react-apollo';
import query from 'Queries/CurrentUser';
import { Link } from 'react-router-dom';
import mutation from 'Mutations/Logout';
import { useStateValue } from 'State/AppProvider';

const Header = (props) => {
  const [{ modal }, dispatch] = useStateValue();

  const onLogoutClick = () => {
    props.mutate({
      refetchQueries: [{ query }]
    });
  }
  const { loading, currentUser } = props.data;

  const renderButtons = () => {
    if (loading) return <div />;
    if (currentUser) {
      return (
      <li>
        <a onClick={onLogoutClick}>Logout</a>
      </li>
      )
    } else {
      return (
        <>
          <li>
            <a onClick={() => dispatch({
              type: 'SHOW_MODAL_SIGNUP',
              showModal: true,
              form: 'signup'
              })}>Signup</a>
          </li>
          <li>
            <a onClick={() => dispatch({
              type: 'SHOW_MODAL_LOGIN',
              showModal: true,
              form: 'login'
              })}>Login</a>
          </li>
        </>
      )
    } 
  }

  return (
    <nav id="nav-header">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo left">
          Home
        </Link>
        <ul className="right">
          {currentUser && currentUser.id &&
            <li>
              <Link to="/dashboard">
                Dashboard
              </Link>
            </li>
          }
          {renderButtons()}
        </ul>
      </div>
    </nav>
  );
};

export default graphql(mutation)(
    graphql(query)(Header));