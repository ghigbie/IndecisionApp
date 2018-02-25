class IndecisionApp extends React.Component{

    render(){
        return(
            <div>
                <Header />
                <Options />
            </div>
        );
    }
}

const Header = () => {
    const title = 'Indecison App';
    const subTitle = 'Put your life in the hands of a computer...'
    const style = {
        backgroundColor: '#232323',
        textAlign: 'center',
        color: '#c4c4c4'
    }

    return(
        <div style={style}>
            <div className="container">
                <h1>{title}</h1>
                <h3>{subTitle && subTitle}</h3>
            </div>
        </div>
    )
}

const Options = () => {
    const options = ['Walk doggie', 'Pet kitty', 'Hunt Javelinas']

    return(
        <div className="Container">
            <h4>
                {options.length > 0 ? 'Here are your options:' : 'No options for you!'}
            </h4>
            {options && options.map((option) => <p>{option}</p>)}
        </div>
    );
}

class CounterApp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    // increment = () => {
    //     this.setState = (prevState) => {
    //         prevState.count = count + 1;
    //     }
    // }

    // decrement = () => {
    //     this.setState = (prevState) => {
    //         if(count > 0){
    //             preveState.count = count -1
    //         }
    //     }
    // }

    render(){
        return(
            <div className="container">
                <h1>Count: {this.state.count}</h1>
                <div>
                    <button className="btn btn-default">Increase</button>
                    <button className="btn btn-defualt">Decrease</button>
                </div>
            </div>
        );
    }
}


const appRoot = document.getElementById('react-container');
ReactDOM.render(<CounterApp />, appRoot);