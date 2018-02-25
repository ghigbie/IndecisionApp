class IndecisionApp extends React.Component{

    render(){
        return(
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption  />
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

const Action = () => {
    const onMakeDecision = () => {
        let random = Math.floor(Math.random() * options.length);
        alert(options[random]);
    }
    return (
        <div className="Container">
            <button className="btn-small btn-outline-calm"
                disabled={options.length === 0}
                onClick={onMakeDecision}
            >What Should I Do?</button>
        </div>
    )
}

let options = ['Walk doggie', 'Pet kitty', 'Hunt Javelinas'];

const Options = () => {
    const onRemoveAllOptions = () => {
        console.log('remove');
        options = [];
    };

    return(
        <div className="Container">
            <button className="btn-small btn-outline-danger"
                    disabled={options.length === 0}
                    onClick={onRemoveAllOptions}
                    >Remove All</button>
            <h4>
                {options.length > 0 ? 'Here are your options:' : 'No options for you!'}
            </h4>
            <ol>
            {options && options.map((option) => <li key={option}>{option}</li>)}
            </ol>
        </div>
    );
}

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