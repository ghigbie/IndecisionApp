'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp() {
        _classCallCheck(this, IndecisionApp);

        return _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).apply(this, arguments));
    }

    _createClass(IndecisionApp, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Header, null),
                React.createElement(Options, null)
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

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
                subTitle && subTitle
            )
        )
    );
};

var Options = function Options() {
    var options = ['Walk doggie', 'Pet kitty', 'Hunt Javelinas'];

    return React.createElement(
        'div',
        { className: 'Container' },
        React.createElement(
            'h4',
            null,
            options.length > 0 ? 'Here are your options:' : 'No options for you!'
        ),
        options && options.map(function (option) {
            return React.createElement(
                'p',
                null,
                option
            );
        })
    );
};

var CounterApp = function (_React$Component2) {
    _inherits(CounterApp, _React$Component2);

    function CounterApp(props) {
        _classCallCheck(this, CounterApp);

        var _this2 = _possibleConstructorReturn(this, (CounterApp.__proto__ || Object.getPrototypeOf(CounterApp)).call(this, props));

        _this2.state = {
            count: 0
        };
        return _this2;
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

    _createClass(CounterApp, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'container' },
                React.createElement(
                    'h1',
                    null,
                    'Count: ',
                    this.state.count
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'button',
                        { className: 'btn btn-outline-secondary' },
                        'Increase'
                    ),
                    React.createElement(
                        'button',
                        { className: 'btn btn-outline-secondary' },
                        'Decrease'
                    ),
                    React.createElement(
                        'button',
                        { className: 'btn btn-outline-danger' },
                        'Reset'
                    )
                )
            );
        }
    }]);

    return CounterApp;
}(React.Component);

var appRoot = document.getElementById('react-container');
ReactDOM.render(React.createElement(CounterApp, null), appRoot);
