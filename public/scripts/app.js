'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.title = 'Indecison App';
        _this.subtitle = 'Put your life in the hands of a computer...';
        _this.options = ['Walk doggie', 'Pet kitty', 'Hunt Javelinas'];
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: this.title,
                    subtitle: this.subtitle }),
                React.createElement(Action, { options: this.options }),
                React.createElement(Options, { options: this.options }),
                React.createElement(AddOption, null)
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
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
                props.title
            ),
            React.createElement(
                'h3',
                null,
                props.subtitle && props.subtitle
            )
        )
    );
};

var Action = function Action(props) {
    var onMakeDecision = function onMakeDecision() {
        var random = Math.floor(Math.random() * props.options.length);
        alert(props.options[random]);
    };
    return React.createElement(
        'div',
        { className: 'Container' },
        React.createElement(
            'button',
            { className: 'btn-small btn-outline-calm',
                disabled: options.length === 0,
                onClick: onMakeDecision
            },
            'What Should I Do?'
        )
    );
};

var options = ['Walk doggie', 'Pet kitty', 'Hunt Javelinas'];

var Options = function Options(props) {
    var onRemoveAllOptions = function onRemoveAllOptions() {
        console.log('remove');
        props.options = [];
    };

    return React.createElement(
        'div',
        { className: 'Container' },
        React.createElement(
            'button',
            { className: 'btn-small btn-outline-danger',
                disabled: options.length === 0,
                onClick: onRemoveAllOptions
            },
            'Remove All'
        ),
        React.createElement(
            'h4',
            null,
            props.options.length > 0 ? 'Here are your ' + props.options.length + ' options:' : 'No options for you!'
        ),
        React.createElement(
            'ol',
            null,
            props.options && props.options.map(function (option) {
                return React.createElement(Option, { key: option, optionText: option });
            })
        )
    );
};

var Option = function Option(props) {
    return React.createElement(
        'li',
        null,
        props.optionText
    );
};

var AddOption = function AddOption() {
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
