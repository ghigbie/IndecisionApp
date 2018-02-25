
class Stuff extends React.Component{
    render(){
        return(
            <h1>Yo!</h1>
        )
    }
}

const appRoot = document.getElementById('react-container');
ReactDOM.render(<Stuff />, appRoot);