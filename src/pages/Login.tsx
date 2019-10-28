import React from 'react'
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

interface IProps extends InjectedFormProps{
    
}

const Login =  (props: IProps) => {
    const { handleSubmit, pristine, submitting, reset } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username</label>
                <div>
                    <Field
                        name="username"
                        component="input"
                        type="text"
                        placeholder="Username"
                    />
                </div>
            </div>
            <div>
                <label>Password</label>
                <div>
                    <Field
                        name="password"
                        component="input"
                        type="password"
                        placeholder="Password"
                    />
                </div>
            </div>
            
            <div>
                <button type="submit" disabled={pristine || submitting}>
                    Submit
                </button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                </button>
            </div>
        </form>
    )
}
export default reduxForm({
    form: 'login'
})(Login);

