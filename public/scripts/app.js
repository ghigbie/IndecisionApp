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

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handleChooseOption = _this.handleChooseOption.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);

        _this.state = {
            options: ['Walk doggie', 'Pet kitty', 'Hunt Javelinas']
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handleChooseOption',
        value: function handleChooseOption() {
            var random = Math.floor(Math.random() * this.state.options.length);
            alert(this.state.options[random]);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'Enter valid value to add item';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'This item already exists';
            } else {
                this.setState(function (prevState) {
                    return { options: prevState.options.concat(option) };
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: this.title,
                    subtitle: this.subtitle }),
                React.createElement(Action, { hasOptions: this.state.options.length < 0,
                    handleChooseOption: this.handleChooseOption,
                    options: this.state.options }),
                React.createElement(Options, { options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions }),
                React.createElement(AddOption, { options: this.state.options,
                    handleAddOption: this.handleAddOption })
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
    return React.createElement(
        'div',
        { className: 'Container' },
        React.createElement(
            'button',
            { className: 'btn-small btn-outline-calm',
                disabled: props.hasOptions,
                onClick: props.handleChooseOption
            },
            'What Should I Do?'
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        { className: 'Container' },
        React.createElement(
            'button',
            { className: 'btn-small btn-outline-danger',
                disabled: props.options.length === 0,
                onClick: props.handleDeleteOptions
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

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            console.log(option);
            var error = this.props.handleAddOption(option);
            this.setState(function () {
                return { error: error };
            });
            console.log(error);
            document.getElementById('optionAdder').value = '';
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text',
                        name: 'option',
                        id: 'optionAdder',
                        className: 'form-control',
                        placeholder: 'Add an option here...' }),
                    React.createElement('input', { type: 'submit',
                        className: 'btn-sm btn-outline-success' })
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

var appRoot = document.getElementById('react-container');
ReactDOM.render(React.createElement(IndecisionApp, null), appRoot);
