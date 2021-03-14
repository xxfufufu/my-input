import { FormControl, InputLabel, OutlinedInput, FormHelperText } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Lock, Phone } from '@material-ui/icons';



export default function Input ({
  error = false,
  helperText = '',
  endIcon = false,
  startIcon = false,
	size ='',
  value = '',
	fullWidth = false,
	multiline = false,
	rows = '',
	disabled = false
}) {
  
     return endIcon ? (
      <FormControl size={size} error={error} fullWidth={fullWidth}>
        <InputLabel 
              htmlFor="trial-input" 
              shrink 
              style={{position: 'relative'}}
              >Label</InputLabel>
        <OutlinedInput 
              id='trial-input'
              placeholder='Placehoder'
              value={value}
	     multiline={multiline}
	     rows={rows}
	     disabled={disabled}
              aria-describedby='trial-input-helper'
              endAdornment={
                <InputAdornment position="end">
                  <Lock />
                </InputAdornment>}
              />  
        <FormHelperText
              id='trial-input-helper'
              >{helperText}</FormHelperText>
      </FormControl>
    ) : startIcon ? (
      <FormControl size={size} error={error} fullWidth={fullWidth}>
        <InputLabel 
              htmlFor="trial-input" 
              shrink 
              style={{position: 'relative'}}
              >Label</InputLabel>
        <OutlinedInput 
              id='trial-input' 
              placeholder='Placehoder'
              value={value}
	    multiline={multiline}
	    rows={rows}
	    disabled={disabled}
              aria-describedby='trial-input-helper'
              startAdornment={
                <InputAdornment position="start">
                  <Phone />
                </InputAdornment>}
              />  
        <FormHelperText
              id='trial-input-helper'
              >{helperText}</FormHelperText>
      </FormControl>
    ) : (
      <FormControl size={size} error={error} fullWidth={fullWidth}>
        <InputLabel 
              htmlFor="trial-input" 
              shrink 
              style={{position: 'relative'}}
              >Label</InputLabel>
        <OutlinedInput
              id='trial-input' 
              placeholder='Placehoder'
              value={value}
	    multiline={multiline}
	    rows={rows}
	    disabled={disabled}
              aria-describedby='trial-input-helper' 
              />  
        <FormHelperText
              id='trial-input-helper'
              >{helperText}</FormHelperText>
      </FormControl>
    )
  }  
