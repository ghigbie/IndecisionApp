class CounterApp extends React.Component {
    constructor(props) {
        super(props)
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count: 0
        }
    }

    increment(){
        this.setState = (prevState) => {
            prevState.count = count + 1;
        }
    }

    decrement(){
        this.setState = (prevState) => {
            if(count > 0){
                preveState.count = count -1
            }
        }
    }

    reset(){
        console.log('Reset');
    }

    render() {
        return (
            <div className="container">
                <h1>Count: {this.state.count}</h1>
                <div>
                    <button className="btn btn-outline-secondary"
                        onClick={this.reset}>
                        Increase</button>

                    <button className="btn btn-outline-secondary"
                        onClick={this.reset}
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
ReactDOM.render(<IndecisionApp />, appRoot);