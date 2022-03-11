import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { MainContext } from 'stores'
import { containers } from 'styles'
import { Form } from 'components'


export default function Login() {
  const { state, actions } = useContext(MainContext);
  const history = useHistory()

  const onSubmit = (data) => {
    actions.login(data);
  };

  useEffect(() => {
    if (state.loggedIn) {
      history.push('/')
    }
  }, [state.loggedIn])

  const formOptions = {
    onSubmit: onSubmit,
    buttonType: 'secondary',
    formData: [ {
      name: 'email',
      label: 'email',
      type: 'email',
      placeholder: 'Your email',
      value: '',
    }, {
      name: 'password',
      label: 'password',
      type: 'password',
      placeholder: 'Your password',
      value: '',
    } ]
  };


  return (
    <containers.main style={ { marginTop: '45px', height: '90vh' } }>
      <containers.col_center noPadding style={ { marginBottom: '50px' } }>
        <Form { ...formOptions } />
      </containers.col_center>
    </containers.main>
  );
}
