import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { withStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const styles = () => ({
  card: {
    maxWidth: 420,
    marginTop: 50,
  },
  container: {
    display: 'Flex',
    justifyContent: 'center',
  },
  actions: {
    float: 'right',
  },
});

const adCategory = [
  {
    value: 'forRent',
    label: 'Rent',
  },
  {
    value: 'sell',
    label: 'Sell',
  },
];

const form = (props) => {
  const {
    classes,
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
  } = props;

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit}>
        <Card className={classes.card}>
          <CardContent>
            <TextField
              id="name"
              label="Car Model"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.name ? errors.name : ''}
              error={touched.name && Boolean(errors.name)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="manufacturer"
              label="Car Make"
              value={values.manufacturer}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.manufacturer ? errors.manufacturer : ''}
              error={touched.manufacturer && Boolean(errors.manufacturer)}
              margin="dense"
              variant="outlined"
              fullWidth
            />

            <TextField
              select
              id="adType"
              label="Ad Category"
              value={values.adType}
              onChange={handleChange('adType')}
              helperText={touched.adType ? errors.adType : ''}
              error={touched.adType && Boolean(errors.adType)}
              margin="dense"
              variant="outlined"
              fullWidth
            >
              {adCategory.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="imageUrl"
              label="imageUrl"
              type="imageUrl"
              value={values.imageUrl}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.imageUrl ? errors.imageUrl : ''}
              error={touched.imageUrl && Boolean(errors.imageUrl)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="description"
              label="Description"
              multiline
              rows={5}
              type="password"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.description ? errors.description : ''}
              error={touched.description && Boolean(errors.description)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
          </CardContent>
          <CardActions className={classes.actions}>
            <Button type="submit" color="primary" disabled={isSubmitting}>
              SUBMIT
            </Button>
            <Button color="secondary" onClick={handleReset}>
              CLEAR
            </Button>
          </CardActions>
        </Card>
      </form>
    </div>
  );
};

const Form = withFormik({
  mapPropsToValues: ({ name, manufacturer, adType, imageUrl, description }) => {
    return {
      name: name || '',
      manufacturer: manufacturer || '',
      adType: adType || '',
      imageUrl: imageUrl || '',
      description: description || '',
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required('Enter car model name.'),
    manufacturer: Yup.string().required('Enter car make.'),
    adType: Yup.string().required('Select your ad type category'),
    imageUrl: Yup.string()
      .min(8, 'imageUrl must contain at least 5 characters')
      .required('Enter the URL to your image. Image is mandatory.'),
    description: Yup.string()
      .required('Please type short description for your ad.')
      .min(10, 'You need to write at least 10 characters in ad description')
      .max(100, 'Max ad length is 100 characters'),
  }),

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      // submit to the server
      axios
        .post('http://localhost:3001/api/cars', {
          name: JSON.stringify(values.name),
          manufacturer: JSON.stringify(values.manufacturer),
          description: JSON.stringify(values.description),
          imageUrl: JSON.stringify(values.imageUrl),
          short_info: '',
        })
        .then((res, req) => {
          console.log(res.data);
          console.log(this.state.name);
        })
        .catch(function (error) {
          console.log(error);
        });

      //this.props.history.push('/');
      setSubmitting(false);
    }, 1000);
  },
})(form);

export default withStyles(styles)(Form);
