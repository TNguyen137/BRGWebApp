declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');
var sql = require('mysql');
import axios from 'axios';
//var ssql = require('mssql');
var connection = sql.createConnection({
    host: 'localhost',
    user: 'sa',
    password: 'youknow',
    database: 'DEV_ALPHA'
});
//connection.connect(function (err) {
//    if (err) {
//        console.error('error connecting: ' + err.stack);
//        return;
//    }

//    console.log('connected as id ' + connection.threadId);
//});

//async () => {
//    try {
//        // make sure that any items are correctly URL encoded in the connection string
//        await sql.connect('mssql://username:password@localhost/database')
//        const result = await sql.query`select * from TEST where id = 1`
//        console.dir(result)
//    } catch (err) {
//        // ... error checks
//    }
//}
var test;
export class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response: {},
        };
    }

    async componentDidMount() {
        console.log('Comp Mounted');
        //fetch('/').then((data) => {
        //    let tester = data;
        //    this.setState({
        //        test: tester
        //    });
        //    return tester.json()
        //}).then((json) => {
        //    this.setState({test: json.task})
        //})
        //const res = fetch('/');//.then(response => response.json());
        //this.setState({ response: res.data })
        const res = await axios.get('/test');
        this.setState({ response: res.data })
        //fetch('/test')
        //    .then(response => response.json())
        //    .then(data => console.log(data))
        //    .catch(err => console.log(err));
    }

    render() {
        if (this.state.response != null) {
            console.log(this.state.response);
        }
        return (
            <div>
                <h1>Welcome to React  TK  !!</h1>
                <div> {this.state.response.toString()} </div>
                <div> {JSON.stringify(this.state.response)} </div>
            </div>
            //<div>{this.state.test} </div> <div> {this.state.response[0]} </div>
        );
    }
}

ReactDOM.render(<Hello />, document.getElementById('root'));
console.log("HELLO");