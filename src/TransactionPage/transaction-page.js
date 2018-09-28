import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import '../App.css';
import '../TransactionPage/transaction-page.scss';

class TransactionPage extends Component {

    constructor(props) {
        super(props)
        this.state = {}
        if(!this.props.location.params){
            this.props.history.push('/homePage');
        }
    }

    componentDidMount() {
        
    }

    

    render() {
        const selRecord = this.props.location.params;
        var htmlData;
        if(this.props.location.params){
            htmlData = <div>
                <div className="transcation-page">
                    <h1>Transaction {selRecord.account}</h1>
                    <hr/>
                    <div>
                        <span>Account No:</span>
                        <span>{selRecord.account}</span>
                    </div>
                    <div>
                        <span>Account Name:</span>
                        <span>{selRecord.accountName}</span>
                    </div>
                    <div>
                        <span>Account Code:</span>
                        <span>{selRecord.currencyCode}</span>
                    </div>
                    <div>
                        <span>Amount:</span>
                        <span>{selRecord.amount}</span>
                    </div>
                    <div>
                        <span>Transaction Type:</span>
                        <span>{selRecord.transactionType}</span>
                    </div>
                </div>
                <div className="back">
                    <Link to={{ pathname: '/homePage'}}>
                        <div>Back</div>
                    </Link>
                </div>
            </div>
        }
        return (
            <div>
                {htmlData}
            </div>
        );
    }

}

export default withRouter(TransactionPage);
