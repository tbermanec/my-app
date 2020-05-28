import React from 'react';
import { useFormik, Field } from 'formik';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';

import axios from 'axios';

const CarForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      manufacturer: '',
      description: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      manufacturer: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      description: Yup.string()
        .max(200, 'Must be 200 characters or less')
        .required('Required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      axios
        .post('http://localhost:3001/api/cars', {
          name: formik.values.name,
          manufacturer: this.state.manufacturer,
          description: this.state.description,
        })
        .then((res, req) => {
          console.log(res.data);
          console.log(this.state.name);
          console.log('ovo je req: ' + req);
        })
        .catch(function (error) {
          console.log(error);
        });

      //TODO
      this.props.history.push('/');
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Field
        label="name"
        //id="outlined-size-normal"
        //variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}
      <TextField
        label="manufacturer"
        id="outlined-size-normal"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.manufacturer}
      />
      {formik.touched.manufacturer && formik.errors.manufacturer ? (
        <div>{formik.errors.manufacturer}</div>
      ) : null}
      <TextField
        id="outlined-multiline-static"
        label="Description"
        multiline
        rows={5}
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.manufacturer}
      />
      {formik.touched.Description && formik.errors.Description ? (
        <div>{formik.errors.Description}</div>
      ) : null}
      <button type="submit">Submit</button>
    </form>
  );
};

export default CarForm;
