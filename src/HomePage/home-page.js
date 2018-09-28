import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import '../App.css';
import '../HomePage/home-page.scss';
import data from '../Json/transaction-details-mock-data.json';

class HomePage extends Component {

    constructor() {
        super();
        this.changeFun = this.changeFun.bind(this)
        this.state = {
            transactionList: [],
            accountType: [],
            transactionType: []

        }
    }

    componentDidMount() {
        this.setState({ transactionList: data.transactions,
                        accountType: [{name:'Savings Account',val:false}, {name:'Checking Account',val:false}, 
                            {name:'Auto Loan Account',val:false}, {name:'Credit Card Account',val:false},
                            {name:'Investment Account',val:false}, {name:'Personal Loan Account',val:false},
                            {name: 'Money Market Account',val:false}, {name:'Home Loan Account',val:false}],

                        transactionType: [{name: 'Deposit', val:false}, {name: 'Withdrawal',val:false},
                                {name: 'Invoice',val:false}, {name: 'Payment', val:false} ]
                        
                    })
    }

    changeFun (key,selData,ind, value) {

        selData.val = value;
        if(key === 'accountName'){
            var accType = this.state.accountType;
            accType[ind] = selData;
            this.setState({accountType: accType});
        }
        else if(key === 'transactionType'){
            var tranType = this.state.transactionType;
            tranType[ind] = selData;
            this.setState({transactionType: tranType});
        }

        let items = [];
        let filteredData = [];
        data.transactions.forEach( (obj) => {
        this.state.accountType.forEach( (acc) => {
            if(acc.val && obj.accountName.toLowerCase() === acc.name.toLowerCase()){
                items.push(obj);
            }
        });
        });
        items = items.length > 0 ? items : data.transactions;
        items.forEach((obj) => {
        this.state.transactionType.forEach( (tran) => {
            if(tran.val && obj.transactionType.toLowerCase() === tran.name.toLowerCase()){
                filteredData.push(obj);
            }
        });
        });
        this.setState({transactionList: filteredData.length > 0 ? filteredData : items});
    }

    render() {
        const { transactionList } = this.state;
        const { accountType } = this.state;
        const { transactionType } = this.state;
        return (
            <div>
                <div>
                    <h1>My Transactions</h1>
                    <hr/>
                </div>
                <div className="account">
                    <div className="account-menu">
                        <h3>Filters</h3>
                        <ul>
                            <li>
                                <h4>Account Name</h4>
                            </li>
                            <li>
                                {
                                    accountType.map((list,ind) => {
                                        return (
                                            <div className="form-group" key={list.name}>
                                                <input type="checkbox" value="list.val" id={"checkBoxVal1_"+ind} 
                                                    onChange={ () => this.changeFun("accountName",list,ind,!list.val)}/>
                                                <label htmlFor={"checkBoxVal1_"+ind}>{list.name}</label>
                                            </div>
                                        )   
                                    })
                                }  
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <h4>Transaction Type</h4>
                            </li>
                            <li>
                                {
                                    transactionType.map((list, ind) => {
                                        return (
                                            <div className="form-group" key={list.name}>
                                                <input type ="checkbox" value="list.val" id={"checkBoxVal2_"+ind} 
                                                    onChange ={ () => this.changeFun("transactionType",list, ind, !list.val) }/>
                                                <label htmlFor={"checkBoxVal2_"+ind}>{list.name}</label>
                                            </div>
                                        )   
                                    })
                                }
                            </li>
                        </ul>
                    </div>
                    <div className="account-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>ACCOUNT NO.</th>
                                    <th>ACCOUNT NAME</th>
                                    <th>CURRENCY</th>
                                    <th>AMOUNT</th>
                                    <th>TARANSACTION TYPE</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                transactionList.map((rec) => {
                                    return (
                                        <tr key={rec.account}>
                                            <td>
                                                <Link to={{pathname: '/transactions',params:rec}}>
                                                    <div>{rec.account}</div>
                                                </Link>
                                            </td>            
                                            <td>
                                                <div>{rec.accountName}</div>
                                            </td>
                                            <td>
                                                <div>{rec.currencyCode}</div>
                                            </td>
                                            <td>
                                                <div>{rec.amount}</div>
                                            </td>
                                            <td>
                                                <div>{rec.transactionType}</div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

}

export default withRouter(HomePage);
