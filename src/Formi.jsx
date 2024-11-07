import { useFormik } from 'formik';
import React from 'react';

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Full Name is required';
  } else if (values.name.length < 3) {
    errors.name = 'Full Name must be at least 3 characters';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.contact) {
    errors.contact = 'Contact Number is required';
  } else if (!/^\d{10}$/.test(values.contact)) {
    errors.contact = 'Contact Number must be 10 digits';
  }

  if (!values.dob) {
    errors.dob = 'Date of Birth is required';
  }

  if (!values.gender) {
    errors.gender = 'Please select a gender';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Confirm Password is required';
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Passwords must match';
  }

  if (!values.country) {
    errors.country = 'Country is required';
  }

  if (!values.terms) {
    errors.terms = 'You must accept the terms and conditions';
  }

  return errors;
};

const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      contact: '',
      dob: '',
      gender: '',
      password: '',
      confirmPassword: '',
      address: '',
      country: '',
      terms: false,
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div  className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="card p-4" style={{ width: '100%', maxWidth: '500px' ,backgroundColor:'rgba(20,20,31)' }}>
        <h1 className="text-center mb-4 text-primary">Registration Form</h1>

        <form className='text-light' onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-danger">{formik.errors.name}</div>
            ) : null}
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-danger">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="mb-3">
            <label htmlFor="contact" className="form-label">Contact Number</label>
            <input
              type="tel"
              id="contact"
              name="contact"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.contact}
            />
            {formik.touched.contact && formik.errors.contact ? (
              <div className="text-danger">{formik.errors.contact}</div>
            ) : null}
          </div>

          <div className="mb-3">
            <label htmlFor="dob" className="form-label">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.dob}
            />
            {formik.touched.dob && formik.errors.dob ? (
              <div className="text-danger">{formik.errors.dob}</div>
            ) : null}
          </div>

          <div className="mb-3">
            <label className="form-label">Gender</label><br />
            <div className="form-check form-check-inline">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                className="form-check-input"
                onChange={formik.handleChange}
                checked={formik.values.gender === 'male'}
              />
              <label htmlFor="male" className="form-check-label">Male</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                className="form-check-input"
                onChange={formik.handleChange}
                checked={formik.values.gender === 'female'}
              />
              <label htmlFor="female" className="form-check-label">Female</label>
            </div>
            {formik.touched.gender && formik.errors.gender ? (
              <div className="text-danger">{formik.errors.gender}</div>
            ) : null}
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-danger">{formik.errors.password}</div>
            ) : null}
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className="text-danger">{formik.errors.confirmPassword}</div>
            ) : null}
          </div>

          <div className="mb-3">
            <label htmlFor="country" className="form-label">Country</label>
            <select
              id="country"
              name="country"
              className="form-select"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.country}
            >
              <option value="">Select your country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="GB">United Kingdom</option>
              <option value="IN">India</option>
              <option value="AU">Australia</option>
            </select>
            {formik.touched.country && formik.errors.country ? (
              <div className="text-danger">{formik.errors.country}</div>
            ) : null}
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              className="form-check-input"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              checked={formik.values.terms}
            />
            <label htmlFor="terms" className="form-check-label">I agree to the terms and conditions</label>
            {formik.touched.terms && formik.errors.terms ? (
              <div className="text-danger">{formik.errors.terms}</div>
            ) : null}
          </div>

          <button type="submit" className="btn btn-primary">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
