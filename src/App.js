import Input from './Input/Input'
import Grid from '@material-ui/core/Grid';


function App() {
  return (
	<Grid container spacing='4' direction='row' style={{margin: '-10px auto 0 auto', width: '90%'}}>
  		<Grid item contaier direction='column' spacing='1'>
	  		<Grid item style={{marginBottom: '8px'}}>
	  			<code>{`<Input />`}</code>
	  		</Grid>
	  		<Grid item>
	  			<Input />
	  		</Grid>
		</Grid>
	  	<Grid item container direction='column' spacing='1'>
	        	<Grid item>
	  			<code>{`<Input error />`}</code>
                        </Grid>
	  		<Grid item>
                	        <Input error />
                        </Grid>
	  	</Grid>
	  	<Grid item container direction='column' spacing='1'>
                        <Grid item>
                                <code>{`<Input disabled />`}</code>
                        </Grid>
                        <Grid item>
                                <Input disabled />
                        </Grid>
                </Grid>
	  	<Grid item container direction='column' spacing='1' md='5'>
                        <Grid item>
                                <code>{`<Input helperText='Some interisting text' />`}</code>
                        </Grid>
                        <Grid item>
                                <Input helperText='Some interisting text' />
                        </Grid>
		</Grid>
	  	<Grid item container direction='column' spacing='1' md='5'>
                        <Grid item>
                                <code>{`<Input helperText='Some interisting text' error />`}</code>
                        </Grid>
                        <Grid item>
                                <Input helperText='Some interisting text' error/>
                        </Grid>
                </Grid>
	  	 <Grid item container direction='column' spacing='1' md='5'>
                        <Grid item>
                                <code>{`<Input startIcon />`}</code>
                        </Grid>
                        <Grid item>
                                <Input startIcon />
                        </Grid>
                </Grid>
                <Grid item container direction='column' spacing='1' md='5'>
                        <Grid item>
                                <code>{`<Input endIcon />`}</code>
                        </Grid>
                        <Grid item>
                                <Input endIcon />
                        </Grid>
                </Grid>
		 <Grid item container direction='column' spacing='1'>
                        <Grid item>
                                <code>{`<Input value='text' />`}</code>
                        </Grid>
                        <Grid item>
                                <Input value='Text' />
                        </Grid>
                </Grid>
		<Grid item container direction='column' spacing='1'>
                        <Grid item>
                                <code>{`<Input fullWidth />`}</code>
                        </Grid>
                        <Grid item>
                                <Input fullWidth />
                        </Grid>
                </Grid>
		 <Grid item container direction='column' spacing='1'>
                        <Grid item>
                                <code>{`<Input multiline rows='4' />`}</code>
                        </Grid>
                        <Grid item>
                                <Input multiline rows='4' />
                        </Grid>
                </Grid>
		<Grid item>
	  		<p style={{color: 'gray', marginTop: '-16px'}}>created by <strong>xxfufufu</strong> - devChallenges.io</p>
	  	</Grid>
	</Grid>
  )
};

export default App;
