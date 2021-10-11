// import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import MuiDialogTitle from '@material-ui/core/DialogTitle';
// import MuiDialogContent from '@material-ui/core/DialogContent';
// import MuiDialogActions from '@material-ui/core/DialogActions';
// import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';
// import Typography from '@material-ui/core/Typography';
// import CorrespondenceForm from './CorrespondenceForm';
// import jspdf from 'jspdf';



// const DialogTitle = withStyles(theme => ({
//   root: {
//     borderBottom: `1px solid ${theme.palette.divider}`,
//     marginLeft: 0.5,
//     padding: theme.spacing.unit * 2,
//   },
//   closeButton: {
//     position: 'absolute',
//     right: theme.spacing.unit,
//     top: theme.spacing.unit,
//     color: theme.palette.grey[500],
//   },
// }))(props => {
//   const { children, classes, onClose } = props;
//   return (
//     <MuiDialogTitle style={{background: '#2A3F4D'}} disableTypography className={classes.root}>
//       <Typography variant="h6">{children}</Typography>
//       {onClose ? (
//         <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
//           <CloseIcon />
//         </IconButton>
//       ) : null}
//     </MuiDialogTitle>
//   );
// });

// const DialogContent = withStyles(theme => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing.unit * 2,
//   },
// }))(MuiDialogContent);

// const DialogActions = withStyles(theme => ({
//   root: {
//     borderTop: `1px solid ${theme.palette.divider}`,
//     margin: 0,
//     padding: theme.spacing.unit,
//   },
// }))(MuiDialogActions);

// class AddButtonModal extends React.Component {
//   state = {
//     open: false,
//   };

//   handleClickOpen = () => {
//     this.setState({
//       open: true,
//     });
//   };

//   handleClose = () => {
//     this.setState({ open: false });
//   };

  

  

//   render() {
  
//     return (
//       <div style={{marginTop: '0.5rem' , marginLeft: '0.7rem'}}>
//         <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>

//          <font color='#FFFFFF'>View Correspondence</font>
//         </Button>
//         <Dialog
//           onClose={this.handleClose}
//           aria-labelledby="customized-dialog-title"
//           open={this.state.open}
//           fullWidth
//           maxWidth="lg"
    
//         >
//           <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
            
//            <font color='white'>View Correspondence</font>
//           </DialogTitle>
//           <DialogContent id='toPrint' style={{background: '#2A3F4D'}}>
//             <Typography gutterBottom>

//               < CorrespondenceForm />

//             </Typography>
//           </DialogContent>
//           <DialogActions style={{background: '#2A3F4D'}}><Button onClick={this.handleClose} color="primary">
//               <font color='cyan'>Cancel</font>
//             </Button>
//             <Button onClick={this.jsPdfGenerator} color="primary" variant='contained'>
//             <font color='white'>Download</font>
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </div>
//     );
//   }
// }

// export default AddButtonModal;



import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import CorrespondenceForm from './CorrespondenceForm';
import jspdf from 'jspdf';

export default function ResponsiveDialog({select}) {
  const [open, setOpen] = React.useState(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  var invoice ="";
  var name="";
  var amount="";
  var date="";
  var custNum="";
  var table=[];

  const jsPdfGenerator = () => {
    select.forEach(d => {
      console.log('Fetching from data')
      if (d.select) {
        table=d;
        invoice=d.invoice_id;
        name=d.name_customer;
        amount=(d.total_open_amount);
        date=(d.due_in_date);
        custNum=(d.custNumInput);
      }
    });


    var doc = new jspdf('p','pt');
    doc.text(`Subject: Invoice Details - ${name}`,20,20);
    doc.text('Dear Sir/Madam, Greetings! This is to remind you that there are one or more',20,40);
    doc.text('open invoices on your account.',20,60);
    doc.text('Please provide at your earliest convenience an update on the payment details',20,80); 
    doc.text('or clarify the reason for the delay.',20,100)
    doc.text('If you have any specific issue with the invoice(s), please let us know so that',20,120);
    doc.text('we can address it to the correct Department.',20,140);

    doc.text('Please find the details of the invoices below:',20,160);
    doc.text('Invoice Num   Invoice  Date  Currency  Amount ',20,200);
    doc.text(`${invoice}  ${custNum} ${date} USD   ${amount}`,20,220);

    doc.text(`Total Amount to be Paid: ${amount}`,20,250);
    doc.text(`In case you have already made a payment for the above items, please send us the`,20,270);
    doc.text(`details to ensure the payment is posted.`,20,290);
    doc.text(`Let us know if we can be of any further assistance. Looking forward to hearing from you.`,20,310); 
    doc.text(`Kind Regards, [Sender’s First Name][Sender’s Last Name] Phone : [Sender’s contact number]`,20,330);
    doc.text(`Fax : [If any] Email : [Sender’s Email Address] Company Name[Sender’s Company Name]`,20,350);

    doc.save("invoice_details.pdf");

  }

  return (
    <div style={{marginTop: '0.5rem' , marginLeft: '0.7rem'}}>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        View Correspondence
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        maxWidth="lg"
      >
        <DialogTitle id="responsive-dialog-title" > <font color='black'>{"View Correspondence"}</font></DialogTitle>
        <DialogContent >
          <DialogContentText >
            
            <CorrespondenceForm />
            

          </DialogContentText>
        </DialogContent >
        <DialogActions >
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={jsPdfGenerator} color="primary" autoFocus>
            Download
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}