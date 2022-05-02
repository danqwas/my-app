import { useState, useEffect, Fragment } from "react";
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import axios from "axios";



const NewUser = () => {
        const [error,setError] = useState(false)
       const [formulario,setFormulario] = useState ({
        nombre:"", 
        apellidos:"",
        identificacion:"", 
        documento_identidad:"",
        fecha_nacimiento:"",
        genero:"",
        numero_telefono:"",
        correo_electronico:"",
        contraseña:""
           
        })
        console.log(formulario)
        const {nombre,apellidos,identificacion,documento_identidad,fecha_nacimiento,genero,numero_telefono,correo_electronico,contraseña } = formulario
  
        const handleChange = (e) => {
            setFormulario({
            ...formulario,
            [e.target.name]: e.target.value,
          });
        };
        const [ showPassword, setShowPassword ] = useState(false);
        // Mostrar contraseña
        const handleClickShowPassword = (event) => {
          setShowPassword(!showPassword);
          event.preventDefault();
        };
        const handleSubmit = (e) => {
          e.preventDefault();
          if(nombre.trim()=="" || apellidos.trim() == "" || identificacion.trim()=="" ||documento_identidad.trim() == "" ||fecha_nacimiento.trim() == "" ||genero.trim()== "" || numero_telefono.trim()== "" || correo_electronico.trim()== ""|| contraseña.trim()== ""){
            setError(true)
            return;
        }
        setError(false)
          alert("El formulario se ha enviado");
        };
       
    return (
    <Grid container style={{width:'100%'}}>

      <Grid container item  xs={12} sm={12} md={7} lg={7} style={{ margin: '4rem auto'}} sx={{
            border: '1px',
            borderRadius: '15px',
            boxShadow: '5px 5px 6px 2px  rgba(125,125,125,0.43)',
            background:'rgb(250, 250, 250)'}}
        >
        <Box style={{width:'100%'}}>
          <Grid container>
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <Link
              href='./Login'
              activeStyle={{ color: '#e1e1e1!important', backgroundColor: '#000!important' }}
              underline='none'
              >
                
                <h4 className="iniciar-sesionon" style={{ cursor: 'pointer',color:'#2F8DD8',display:'flex',justifyContent:'center' }}>
                  Iniciar sesión
                </h4>
              </Link>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <Link
                activeStyle={{ color: '#e1e1e1!important', backgroundColor: '#000!important' }}
                underline='none'
              >
                <h4 className="registrarseoff" style={{ cursor: 'pointer',color:'#2F8DD8',display:'flex',justifyContent:'center' }}>
                  Registrarse
                </h4>
              </Link>
            </Grid>
          </Grid>
        </Box>
        <Box style={{width:'100%'}}>
          <Grid container>
            <form onSubmit={handleSubmit} className='formulario'>
              <TextField
                  style={{margin:'10px',width:'45%'}}
                  inputProps={{
                    style: {
                      color: '#2F8DD8'
                    }
                  }}
                  InputLabelProps={{
                    style: { color: '#2F8DD8' }
                  }}
                  type="text"
                  name='nombre'
                  label="Nombres" 
                  onChange={handleChange}
                  value={nombre}
                  />
              <TextField
                  style={{margin:'10px',width:'45%'}}
                  inputProps={{
                    style: {
                      color: '#2F8DD8'
                    }
                  }}
                  InputLabelProps={{
                    style: { color: '#2F8DD8' }
                  }}
                  type="text"
                  name='apellidos'
                  label="Apellidos" 
                  onChange={handleChange}
                  value={apellidos}
                  />
              <FormControl  style={{margin:'10px',width:'45%'}}>
                <InputLabel>Identificacion</InputLabel>
                  <Select   
                    name = "identificacion" 
                    label="Identificacion" 
                    onChange={handleChange} 
                    value={identificacion}> 
                    <MenuItem disabled value="">
                        <em>identificacion</em>
                    </MenuItem>
                    <MenuItem value ={1}>Cédula de ciudadanía</MenuItem>
                    <MenuItem value = {2}>Cédula de extranjería</MenuItem>
                    <MenuItem value = {3}>Pasaporte</MenuItem>
                  </Select>
              </FormControl>
              <TextField
                  style={{margin:'10px',width:'45%'}}
                  inputProps={{
                    style: {
                      color: '#2F8DD8'
                    }
                  }}
                  InputLabelProps={{
                    style: { color: '#2F8DD8' }
                  }}
                  type="text"
                  label="Numero De Documento" 
                  name="documento_identidad"
                  value={documento_identidad}
                  onChange={handleChange}
                  />
              <TextField 
                  style={{margin:'10px',width:'45%'}}
                  type="date"
                  name="fecha_nacimiento"
                  label='fecha de nacimiento'
                  inputProps={{
                    style:{color :'#2F8DD8'}
                  }}
                  InputLabelProps={{
                    style:{color:'#2F8DD8'},
                    shrink: true
                  }}
                  value={fecha_nacimiento}
                  onChange={handleChange}
                  />
               <FormControl  style={{margin:'10px',width:'45%'}}>
                <InputLabel>Genero</InputLabel>
              <Select 
                type="text"
                name="genero"
                label='Genero'
                value={genero}
                onChange={handleChange}
                >
                <MenuItem value = {1}>Femenino</MenuItem>
                <MenuItem value = {2}>Masculino</MenuItem>
                <MenuItem value = {3}>Prefiero no decir</MenuItem>
              </Select>
              </FormControl>
              <TextField
                  style={{margin:'10px',width:'45%'}}
                  inputProps={{
                    style: {
                      color: '#2F8DD8'
                    }
                  }}
                  InputLabelProps={{
                    style: { color: '#2F8DD8' }
                  }}
                type="text"
                label='Telefono'
                name="numero_telefono"
                value={numero_telefono}
                onChange={handleChange}
                />
              <TextField
                  style={{margin:'10px',width:'45%'}}
                  inputProps={{
                    style: {
                      color: '#2F8DD8'
                    }
                  }}
                  InputLabelProps={{
                    style: { color: '#2F8DD8' }
                  }}
                  type="text"
                  label='Correo'
                  name="correo_electronico"
                  value={correo_electronico}
                  onChange={handleChange}
                  />
              <TextField
                                        
                                        style={{margin:'10px',width:'92%'}}
                                        inputProps={{
                                          style: {
                                            color: '#2F8DD8'
                                          }
                                        }}
                                        InputLabelProps={{
                                          style: { color: '#2F8DD8' }
                                        }}
                                        id="outlined-password-input"
                                        label="Contraseña"
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        autoComplete="current-password"
                                        variant="outlined"
                                        size='small'
                                        
                                        InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              edge="end"
                              onClick={handleClickShowPassword}
                              >
                              {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                      />
                    <div style={{marginBottom:'10px',display:'flex',justifyContent:'center'}}
                   >
                      <Button 
                      variant="contained" 
                      type="submit" 
                      onChange={handleSubmit}
                    >Registrarse</Button>
                    </div>
          </form>
          {error ?  <Alert  variant="filled" severity="error" style={{width:'100%', margin:'10px'}}>Todos los campos son obligatorios</Alert> : null}
          </Grid>   
        </Box>
      </Grid>
    </Grid>
      )
    }
    export default NewUser