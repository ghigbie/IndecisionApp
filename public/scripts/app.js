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
                React.createElement(Options, null),
                React.createElement(Form, null)
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

var options = ['Walk doggie', 'Pet kitty', 'Hunt Javelinas'];

var Options = function Options() {
    var onRemoveAllOptions = function onRemoveAllOptions() {
        console.log('remove');
        options = [];
    };

    return React.createElement(
        'div',
        { className: 'Container' },
        React.createElement(
            'button',
            { className: 'btn-small btn-outline-danger',
                onClick: onRemoveAllOptions
            },
            'Remove All'
        ),
        React.createElement(
            'h4',
            null,
            options.length > 0 ? 'Here are your options:' : 'No options for you!'
        ),
        React.createElement(
            'ol',
            null,
            options && options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        )
    );
};

var Form = function Form() {
    var onFormSubmit = function onFormSubmit(e) {
        e.preventDefault();
        var option = e.target.elements.option.value;
        if (option) {
            options.push(option);
            console.log(options.length);
            document.getElementById('optionAdder').value = '';
        }
    };

    return React.createElement(
        'div',
        null,
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text',
                name: 'option',
                id: 'optionAdder',
                className: 'form-control',
                placeholder: 'Add an option here...' }),
            React.createElement('input', { type: 'submit',
                className: 'btn-sm btn-outline-success' })
        )
    );
};

var appRoot = document.getElementById('react-container');
ReactDOM.render(React.createElement(IndecisionApp, null), appRoot);
