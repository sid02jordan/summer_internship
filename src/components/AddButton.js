import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import axios from 'axios';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
const styles = (theme) => ({
    root1: {
      margin: 0,
      padding: theme.spacing(2),
      background: '#2A3E4C 0% 0% no-repeat padding-box',
      borderRadius: '10px 10px 0px 0px',
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
    
  });
  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root1} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
      background: '#2A3E4C 0% 0% no-repeat padding-box',
    },
    
  }))(MuiDialogContent);
  
  const DialogActions = withStyles((theme) => ({
    root: {
      // margin: 0,
      padding: theme.spacing(1),
      background: '#2A3E4C 0% 0% no-repeat padding-box',
      borderBottom:"none"
    },
  }))(MuiDialogActions);
const useStyles = makeStyles((theme) => ({
    Add:{
   
        width: '99px',
        height: '45px',
        border: '1px solid #14AFF1',
        borderRadius: '10px',
        opacity: '1',
        background: '#273D49CC 0% 0% no-repeat padding-box',
        color: '#FFFFFF',
       },
    edithead:{
        color: '#FFFFFF',
        background: '#2A3E4C 0% 0% no-repeat padding-box',
        borderBottom:"none"
      },
      adddial:{
        height: '250px',
      },
      Invoicedetdial:{
        color: '#97A1A9'
      },
      Invoicedial:{
        width: '250px',
        height: '30px',
        background: '#283A46 0% 0% no-repeat padding-box',
        border: '1px solid #356680',
        borderRadius: '10px',
        opacity: '1',
      },
      close:{
        color: '#14AFF1',
      },
      customerno:{
        width: '250px',
      height: '30px',
      background: '#283A46 0% 0% no-repeat padding-box',
        border: '1px solid #356680',
        borderRadius: '10px',
        opacity: '1',
      },
      reset:{
        width: '72px',
      height: '35px',
      border: '1px solid #14AFF1',
      borderRadius: '10px',
      opacity: '1',
      color: '#FFFFFF',
      },
      savedial:{
        width: '72px',
      height: '35px',
      background: '#14AFF1 0% 0% no-repeat padding-box',
      borderRadius: '10px',
      opacity: '1',
      },
}));
function Addbut(){
    const classes = useStyles();
    const [open1, setOpen1] = React.useState(false);
  
  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleChange = e => {
    setForm({
       ...form,
      [e.target.name]: e.target.value
    });
};
const handleClear = () => {
    setForm({
        customer_name:"",
        cust_id: '',
        invoice_id: '',
        due_in_date: '',
        total_open_amount: '',
        notes: '',
    })
  };
const abc =  () => {
    console.log('abc');   
   axios.get(`http://localhost:8080/Summer_Internship_Backend/edit.do?customer_name=${form.customer_name}&cust_id=${form.cust_id}&invoice_id=${form.invoice_id}&total_amount=${form.total_amount}&due_in_date=${form.due_in_date}`)
   .then(response => {
       console.log(response); 
   })
 
   .catch(err => {
       console.log(err);
   })
   handleClose1()
}
   const [form, setForm] = useState({ 
    customer_name: '',
    cust_id: '',
    invoice_id: '',
    total_amount:'',
    due_in_date:'',
    notes: '' 
});
     

    return(
    <div >
         <Button variant="contained" className={classes.Add} onClick={handleClickOpen1}><AddIcon/>Add</Button>
         
         <Dialog onClose={handleClose1} aria-labelledby="customized-dialog-title" open={open1} maxWidth={'md'} fullWidth={true}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose1} className={classes.edithead} >
          Add Invoice
        </DialogTitle>
        <DialogContent  className={classes.adddial}>
          <Typography gutterBottom>
          <Grid container spacing={1}> 
              <Grid item xs={2} className={classes.Invoicedetdial}>
                Customer Name
              </Grid>
              <Grid item xs={3} >
              <InputBase className={classes.Invoicedial} name='customer_name'
              onChange={handleChange}
              value={form.customer_name}  />
              </Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={2} className={classes.Invoicedetdial}>
                Due Date
              </Grid>
              <Grid item xs={1}>
                <InputBase className={classes.Invoicedial}  type="date" name='due_in_date'
                onChange={handleChange}
                value={form.due_in_date}  ></InputBase>
              </Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}></Grid>
              </Grid>
          <Grid container spacing={2}>
          <Grid item xs={2} className={classes.Invoicedetdial} >
                Customer No.
              </Grid>
              <Grid item xs={2} >
              <InputBase className={classes.customerno}   name='cust_id'
              onChange={handleChange}
              value={form.cust_id}  />
              </Grid>
              <Grid item xs={7}></Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}></Grid>   
          </Grid>
          <Grid container spacing={2}>
          <Grid item xs={2} className={classes.Invoicedetdial} >
                Invoice No.
              </Grid>
              <Grid item xs={2} >
              <InputBase className={classes.customerno} name='invoice_id'
              onChange={handleChange}
              value={form.invoice_id}   />
              </Grid>
              <Grid item xs={7}></Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}></Grid>
              
          </Grid>
          <Grid container spacing={2}>
          <Grid item xs={2} className={classes.Invoicedetdial} >
                Invoice Amount.
              </Grid>
              <Grid item xs={2} >
              <InputBase className={classes.customerno} name='total_amount'
              onChange={handleChange}
              value={form.total_amount}    />
              </Grid>
          </Grid>
          </Typography>

        </DialogContent>
        
        <DialogActions>
          <Grid container spacing={1}>
            <Grid item xs={2}>
          <Button autoFocus onClick={handleClose1} className={classes.close}  >
            Cancel
          </Button>
          </Grid>
          <Grid item xs={8}></Grid>
          <Grid item xs={1}>
          <Button autoFocus onClick={handleClose1} className={classes.reset} type="clear" onClick={handleClear}>reset</Button>
          </Grid>
          <Grid item xs={1}>
          <Button autoFocus  className={classes.savedial}  onClick={abc}>save</Button>
          </Grid>
          </Grid>
        
        </DialogActions>
      </Dialog>
      
         </div>
    );
}
export default Addbut;