'use strict';

var Header = function Header() {
    var title = 'Indecison App';
    var subTitle = 'Put your life in the hands of a computer...';
    var style = {
        backgroundColor: '#232323',
        textAlign: 'center',
        color: '#c4c4c4'
    };

    return React.createElement(
        'div',
        { style: style },
        React.createElement(
            'div',
            { className: 'container' },
            React.createElement(
                'h1',
                null,
                title
            ),
            React.createElement(
                'h3',
                null,
                subTitle
            )
        )
    );
};

var appRoot = document.getElementById('react-container');
ReactDOM.render(React.createElement(Header, null), appRoot);
