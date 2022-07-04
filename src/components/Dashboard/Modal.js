import './Dashboard.css';

function Modal(props) {
  console.log('props-', props);
  return (
    <div className='custom-modal'>
      <p>{props.text}</p>
      <form>
        <div className="form-group">
            <label>Expense Name</label>
            <input type="text" value={props.data.expenseName} onChange={props.onUpdate} name="expenseName" className="form-control" id="expenseName"  placeholder="Enter expenseName"/>
            <div className="text-danger">{props.validation.expenseName}</div>
          </div>
          <div className="form-group">
            <label>Amount</label>
            <input type="text" value={props.data.amount} onChange={props.onUpdate} name="amount" className="form-control" id="amount"  placeholder="Enter amount"/>
            <div className="text-danger">{props.validation.amount}</div>
          </div>
          <div className="form-group">
            <label>Paid By</label>
            <input type="text" value={props.data.paidBy} onChange={props.onUpdate} name="paidBy" className="form-control" id="paidBy"  placeholder="Enter paidBy"/>
            <div className="text-danger">{props.validation.paidBy}</div>
          </div>
          <div className="form-group">
            <label>Date</label>
            <input type="date" value={props.data.date} onChange={props.onUpdate} name="date" className="form-control" id="date"  placeholder="Enter date"/>
            <div className="text-danger">{props.validation.date}</div>
          </div>
        <button onClick={()=>props.onClose()} type="button" name='close' id='close' className="btn btn-success">Close</button>
        <button onClick={props.onSubmit} type="submit" className="btn btn-success">{props.behaviour}</button>
      </form>
    </div>
          //   <div className="modal fade" id="edit" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          //     <div className="modal-dialog" role="document">
          //         <div className="modal-content">
          //         <div className="modal-header">
          //             <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
          //             <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          //             <span aria-hidden="true">&times;</span>
          //             </button>
          //         </div>
          //         <div className="modal-body">
          //             ...
          //         </div>
          //         <div className="modal-footer">
          //             <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          //             <button type="button" className="btn btn-primary">Save changes</button>
          //         </div>
          //         </div>
          //     </div>
          // </div>
  );
}
export default Modal;
