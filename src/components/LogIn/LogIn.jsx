import React, { useState } from 'react';
import { Formik } from "formik";
import classNames from "classnames";
import * as yup from "yup";
import eye from "../../images/eye.svg";
import eyeSlash from "../../images/eye-slash.svg";
import { useHistory } from 'react-router-dom';
import './LogIn.scss';

export function LogIn() {
  const [validateAfterSubmit, setValidateAfterSubmit] = useState(false);
  const [visiblePassword, setVisiblityPassword] = useState(false);

  const validationsShema = yup.object().shape({
    email: yup.string().email("Email address is invalid").required("Email required"),
    password: yup.string().required('This field is required.')
      .min(6, 'Password should be 6 chars minimum.'),
  });

  let history = useHistory();

  return (
    <div className="container">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validateOnBlur={false}
        validateOnChange={validateAfterSubmit}
        validationSchema={validationsShema}
        onSubmit={() => { history.push('/welcome') }}
      >
        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
          <form
            className="form"
            onSubmit={handleSubmit}
          >
            <div className="form__inputs">
              <label className="form__label">E-mail</label>
              <input
                className={classNames("form__input", {
                  "form__input-err": errors.email && touched.email,
                })}
                type="email"
                name="email"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && <p className="form__input-error">{errors.email}</p>}
            </div>
            <div className="form__inputs">
              <label className="form__label">Create Password</label>
              <input
                className={classNames("form__input", {
                  "form__input-err": errors.password && touched.password,
                })}
                type={visiblePassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div
                onClick={() => setVisiblityPassword(visiblity => !visiblity)}
                className="form__input-icon"
              >
                {visiblePassword
                  ? <img src={eye} alt="show" />
                  : <img src={eyeSlash} alt="hide" />
                }
              </div>
              {errors.password && touched.password && <p className="form__input-error">{errors.password}</p>}
            </div>
            <button
              disabled={!isValid && !dirty}
              className="form__input-btn"
              type="submit"
              onClick={() => {
                setValidateAfterSubmit(true);
              }}
            >
              Login
            </button>
          </form>
        )}
      </Formik>
    </div>
  )
}
