class IndecisionApp extends React.Component{
    constructor(props){
        super(props);

        this.title = 'Indecison App';
        this.subtitle = 'Put your life in the hands of a computer...';
        this.options = ['Walk doggie', 'Pet kitty', 'Hunt Javelinas'];
    }

    render(){
        return(
            <div>
                <Header title={this.title}
                        subtitle={this.subtitle}/>
                <Action options={this.options}/>
                <Options options={this.options}/>
                <AddOption  />
            </div>
        );
    }
}

const Header = (props) => {
    const style = {
        backgroundColor: '#232323',
        textAlign: 'center',
        color: '#c4c4c4'
    }

    return(
        <div style={style}>
            <div className="container">
                <h1>{props.title}</h1>
                <h3>{props.subtitle && props.subtitle}</h3>
            </div>
        </div>
    )
}

class Action extends React.Component{
    constructor(props){
        super(props);
        this.onMakeDecision = this.onMakeDecision.bind(this);
    }
    onMakeDecision(){
        let random = Math.floor(Math.random() * this.props.options.length);
        alert(this.props.options[random]);
    }

    render(){
        return (
            <div className="Container">
                <button className="btn-small btn-outline-calm"
                    disabled={options.length === 0}
                    onClick={this.onMakeDecision}
                >What Should I Do?</button>
            </div>
        )
    }
}

let options = ['Walk doggie', 'Pet kitty', 'Hunt Javelinas'];

const Options = (props) => {
    const onRemoveAllOptions = () => {
        console.log('remove');
        props.options = [];
    };

    return(
        <div className="Container">
            <button className="btn-small btn-outline-danger"
                    disabled={options.length === 0}
                    onClick={onRemoveAllOptions}
                    >Remove All</button>
            <h4>
                {props.options.length > 0 ? `Here are your ${props.options.length} options:` : 'No options for you!'}
            </h4>
            <ol>
            {props.options && props.options.map((option) => <Option key={option} optionText={option} />)}
            </ol>
        </div>
    );
}

const Option = (props) => {
    return (<li>{props.optionText}</li>);
};

const AddOption = () => {
    const onFormSubmit = (e) => {
        e.preventDefault();
        const option = e.target.elements.option.value;
        if(option){
            options.push(option);
            console.log(options.length);
            document.getElementById('optionAdder').value = '';
        }
    }

    return(
        <div>
            <form onSubmit={onFormSubmit}>
                <input type="text" 
                       name="option" 
                       id="optionAdder"
                       className="form-control"
                       placeholder="Add an option here..."/>
                <input type="submit" 
                       className="btn-sm btn-outline-success"/>
            </form>
        </div>
    )
}




const appRoot = document.getElementById('react-container');
ReactDOM.render(<IndecisionApp />, appRoot);