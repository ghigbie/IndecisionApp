

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
                <h3>{subTitle}</h3>
            </div>
        </div>
    )
}


const appRoot = document.getElementById('react-container');
ReactDOM.render(<Header/>, appRoot);