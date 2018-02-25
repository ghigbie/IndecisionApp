class IndecisionApp extends React.Component{
    constructor(props){
        super(props);

        this.title = 'Indecison App';
        this.subtitle = 'Put your life in the hands of a computer...';

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleChooseOption = this.handleChooseOption.bind(this);
        this.state = {
            options: ['Walk doggie', 'Pet kitty', 'Hunt Javelinas']
        }
    }

    handleDeleteOptions(){
        this.setState(() => ({options: []}))
    }

    handleChooseOption(){
        let random = Math.floor(Math.random() * this.props.options.length);
        alert(this.props.options[random]);
    }

    render(){
        return(
            <div>
                <Header title={this.title}
                        subtitle={this.subtitle}/>
                <Action hasOptions={this.state.options.length < 0}
                        handleChooseOption={this.handleChooseOption}
                        options={this.state.options}/>
                <Options options={this.state.options}/>
                <OptionsTwo options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}/>
                <AddOption options={this.state.options}/>
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
    render(){
        return (
            <div className="Container">
                <button className="btn-small btn-outline-calm"
                        disabled={this.props.hasOptions}
                        onClick={this.props.handleChooseOption}
                >What Should I Do?</button>
            </div>
        )
    }
}

const Options = (props) => {

    const handleRemoveAllOptions = () => {
        console.log('remove');
        props.options = [];
    };

        return(
            <div className="Container">
                <button className="btn-small btn-outline-danger"
                        disabled={props.options.length === 0}
                        onClick={handleRemoveAllOptions}
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

class OptionsTwo extends React.Component{
    render(){
        return (
            <div className="Container">
                <button className="btn-small btn-outline-danger"
                        disabled={this.props.options.length === 0}
                        onClick={this.props.handleDeleteOptions}
                        >Remove All</button>
                <h4>
                    {this.props.options.length > 0 ? `Here are your ${this.props.options.length} options:` : 'No options for you!'}
                </h4>
                <ol>
                    {this.props.options && this.props.options.map((option) => <Option key={option} optionText={option} />)}
                </ol>
            </div>
        );
    }
}

const Option = (props) => {
    return (<li>{props.optionText}</li>);
};

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
    }

    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if(option){
            //this.props.options.push(option);
            //console.log(this.props.options.length);
            console.log(option);
            document.getElementById('optionAdder').value = '';
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleAddOption}>
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