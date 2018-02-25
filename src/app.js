class IndecisionApp extends React.Component{
    constructor(props){
        super(props);

        this.title = 'Indecison App';
        this.subtitle = 'Put your life in the hands of a computer...';

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleChooseOption = this.handleChooseOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            options: ['Walk doggie', 'Pet kitty', 'Hunt Javelinas']
        }
    }

    handleDeleteOptions(){
        this.setState(() => ({options: []}))
    }

    handleChooseOption(){
        let random = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[random]);
    }

    handleAddOption(option){
        if(!option){
            return 'Enter valid value to add item';
        }else if(this.state.options.indexOf(option) > -1){
            return 'This item already exists';
        }else{
            this.setState((prevState) => ({options: prevState.options.concat(option) }));
        }
    }

    render(){
        return(
            <div>
                <Header title={this.title}
                        subtitle={this.subtitle}/>
                <Action hasOptions={this.state.options.length < 0}
                        handleChooseOption={this.handleChooseOption}
                        options={this.state.options}/>
                <Options options={this.state.options}
                         handleDeleteOptions={this.handleDeleteOptions}/>
                <AddOption options={this.state.options}
                           handleAddOption={this.handleAddOption}/>
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

const Action = (props) => {
    return (
        <div className="Container">
            <button className="btn-small btn-outline-calm"
                    disabled={props.hasOptions}
                    onClick={props.handleChooseOption}
                    >What Should I Do?</button>
        </div>
    );
};

const Options = (props) => {
    return(
        <div className="Container">
            <button className="btn-small btn-outline-danger"
                    disabled={props.options.length === 0}
                    onClick={props.handleDeleteOptions}
                    >Remove All</button>
            <h4>
                {props.options.length > 0 ? `Here are your ${props.options.length} options:` : 'No options for you!'}
            </h4>
            <ol>
                {props.options && props.options.map((option) => <Option key={option} optionText={option} />)}
            </ol>
        </div>
    );
};

const Option = (props) => {
    return (<li>{props.optionText}</li>);
};

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        console.log(option);
        const error = this.props.handleAddOption(option);
        this.setState(() => ({error: error}));
        console.log(error);
        document.getElementById('optionAdder').value = '';
    }

    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.props.handleAddOption}>
                    <input type="text" 
                        name="option" 
                        id="optionAdder"
                        className="form-control"
                        placeholder="Add an option here..."/>
                    <input type="submit" 
                        className="btn-sm btn-outline-success"/>
                </form>
            </div>
        );
    }
}




const appRoot = document.getElementById('react-container');
ReactDOM.render(<IndecisionApp />, appRoot);