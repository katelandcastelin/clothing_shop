import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';

import { useParams } from "react-router-dom";
import { products } from '../utils/data';

const types = ["cm", "in"];

export default function ProductOptions() {

  const [active, setActive] = useState(types[0]);

  const {productId} = useParams();
  const product = products.find(prod => prod.name === productId);

  return (
    <div style={{marginLeft: "20px"}}>
      <Typography variant="h5">{product.name}</Typography>
      <Typography variant="h6" color="text.secondary" gutterBottom>R {product.price}</Typography>
      <div>
        {
          (() => {
            if (product.status === "one of a kind")
              return (
                <div>
                  <Typography variant="overline" display="block">Size</Typography>
                  <Button>Add to cart</Button>
                </div>
              )
            if (product.status === "made to order")
              return (
                <div>
                  <div>
                    <Typography variant="overline" display="block">Made to your measurements</Typography>
                    <p>Please specify:
                      {types.map(type => (
                        <button
                          key={type}
                          active={active === type}
                          onClick={() => setActive(type)}
                        >
                          {type}
                        </button>
                      ))}
                    </p>
                    <TableContainer>
                      <Table>
                        <FormControl variant="standard">
                          {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
                          <Input
                            id="standard-basic" label="Standard" variant="standard"
                            // id="standard-adornment-weight"
                            endAdornment={<InputAdornment position="end">{active}</InputAdornment>}
                            aria-describedby="standard-weight-helper-text"
                          />
                          <FormHelperText id="standard-weight-helper-text">Bust</FormHelperText>
                        </FormControl>
                        <FormControl variant="standard">
                          <Input
                            id="standard-adornment-weight"
                            endAdornment={<InputAdornment position="end">{active}</InputAdornment>}
                            aria-describedby="standard-weight-helper-text"
                          />
                          <FormHelperText id="standard-weight-helper-text">Underbust</FormHelperText>
                        </FormControl>
                        <FormControl variant="standard">
                          <Input
                            id="standard-adornment-weight"
                            endAdornment={<InputAdornment position="end">{active}</InputAdornment>}
                            aria-describedby="standard-weight-helper-text"
                          />
                          <FormHelperText id="standard-weight-helper-text">Waist</FormHelperText>
                        </FormControl>
                        <FormControl variant="standard">
                          <Input
                            id="standard-adornment-weight"
                            endAdornment={<InputAdornment position="end">{active}</InputAdornment>}
                            aria-describedby="standard-weight-helper-text"
                          />
                          <FormHelperText id="standard-weight-helper-text">Hip</FormHelperText>
                        </FormControl>

                        {/* <tr>
                          <TextField id="bust" label="Bust" variant="standard" size="small"
                            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                          />
                          <label>{active}</label>
                        </tr>
                        <tr>
                          <TextField id="underbust" label="Underbust" variant="standard" size="small" />
                          <label>{active}</label>
                        </tr>
                        <tr>
                          <TextField id="waist" label="Waist" variant="standard" size="small" />
                          <label>{active}</label>
                        </tr>
                        <tr>
                          <TextField id="hip" label="Hip" variant="standard" size="small" />
                          <label>{active}</label>
                        </tr> */}
                      </Table>
                    </TableContainer>
                  </div>
                  <div style={{marginTop: "10px"}}>
                    <Button>Add to cart</Button>
                  </div>
                </div>
              )
            else (product.status = "sold out")
              return (<Typography variant="overline" display="block">Sold out</Typography>)
          })()
        }
      </div>
    </div>
  )
}