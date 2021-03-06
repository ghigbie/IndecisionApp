class CounterApp extends React.Component {
    constructor(props) {
        super(props);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count: 0
        }
    }

    increment(){
        this.setState((prevState) => ({count: prevState.count +1}));
    }

    decrement(){
        if(this.state.count > 0){
            this.setState((prevState) => ({count: prevState.count -1})); 
        }
    }

    reset(){
        this.setState(() => ({count: 0}));
    }

    render() {
        return (
            <div className="container">
                <h1>Count: {this.state.count}</h1>
                <div>
                    <button className="btn btn-outline-secondary"
                        onClick={this.increment}>
                        Increase</button>

                    <button className="btn btn-outline-secondary"
                        onClick={this.decrement}
                    >Decrease</button>

                    <button className="btn btn-outline-danger"
                        onClick={this.reset}
                    >Reset</button>
                </div>
            </div>
        );
    }
}


const appRoot = document.getElementById('react-container');
ReactDOM.render(<CounterApp />, appRoot);