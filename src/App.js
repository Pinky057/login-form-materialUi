import React from 'react';
import './App.css';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';
 import * as Yup from 'yup';
 import { useFormik } from 'formik';



function App() {
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required('Fullname is required'),
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
  });

  const formik = useFormik({
    initialValues: {
      fullname:'',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });


  return (
    <div className="App"> 
      <Typography gutterBottom variant="h3" align="center">
        Create an account
       </Typography>
      <Grid>
        <Card className="login">
          <CardContent>
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={1}>
                <Grid xs={12} item>
                  <Typography align="left" style={{ margin:5}}>Full Name</Typography>
                  <TextField 
                  id="fullname"
                  name="fullname"
                  placeholder="Mei Lee"
                   variant="outlined" 
                   fullWidth required
                   value={formik.values.fullname}
                   onChange={formik.handleChange}
                   error={formik.touched.fullname && Boolean(formik.values.fullname)}
                   helperText={formik.touched.fullname && formik.errors.fullname}

                    />
                </Grid>
                <Grid item xs={12}>
                <Typography align="left" style={{ margin:5}}>Email</Typography>
                  <TextField 
                   id="email"
                   name="email"
                  type="email"
                   placeholder="mei.lee@mail.com"  
                   variant="outlined" 
                   fullWidth required 
                   value={formik.values.email}
                   onChange={formik.handleChange}
                   error={formik.touched.email && Boolean(formik.errors.email)}
                   helperText={formik.touched.email && formik.errors.email}
                 
                 />
                
                </Grid>
                <Grid item xs={12}>
                <Typography align="left" style={{ margin:5}}>Password</Typography>

                  <TextField 
                  id="password"
                  name="password"
                  type="password" 
                  placeholder="Enter password"  
                  variant="outlined" 
                  fullWidth required 
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                   helperText={formik.touched.password && formik.errors.password}
                  
                />
              
                </Grid>
                <Grid item xs={12}>
                <Typography align="left" style={{ margin:5}}>Confirm Password</Typography>

                  <TextField 
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                   placeholder="Enter confirm password" 
                    variant="outlined"
                     fullWidth required 
                     value={formik.values.confirmPassword}
                   onChange={formik.handleChange}
                  error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                  helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                   />
                   
                </Grid>
                
                <Grid item xs={12}>
                  <Button 
                  style={{ marginTop: 20}}
                  type="submit" 
                  variant="contained"
                   color="primary" 
                   fullWidth
                   >
                     CREATE ACCOUNT
                     </Button>
                </Grid>

              </Grid>
            </form>
            <p className="login_p">By create an account you agree to our{" "}
            <span className="login_span">Terms of Service</span> and <span className="login_span">Privacy Policy</span>
        </p>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default App;