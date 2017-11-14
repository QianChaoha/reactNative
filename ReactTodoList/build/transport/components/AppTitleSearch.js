/**
 * Created by cqian on 2017/11/14.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var AppTitleSearch = (function (_React$Component) {
    _inherits(AppTitleSearch, _React$Component);

    function AppTitleSearch(props) {
        _classCallCheck(this, AppTitleSearch);

        _get(Object.getPrototypeOf(AppTitleSearch.prototype), 'constructor', this).call(this, props);
    }

    _createClass(AppTitleSearch, [{
        key: 'handleAdd',
        value: function handleAdd(e) {
            // 通过 refs 获取dom元素，然后获取输入的内容
            var inputDom = this.refs.inputnew;
            var itemText = inputDom.value.trim();
            // 获取传入的todolist数据
            var rows = this.props.toDo;
            if (itemText !== '') {
                // 更新数据，并使用 onAdd 更新到 TodoList 组件的 state 中
                rows.push(itemText);
                this.props.onAdd(rows);
            }
            inputDom.value = '';
        }
    }, {
        key: 'handleSearch',
        value: function handleSearch(e) {
            // 通过 refs 获取dom元素，然后获取输入的内容
            var inputDom = this.refs.inputnew;
            var itemText = inputDom.value.trim();
            // 获取传入的todolist数据
            var rows = this.props.toDo;
            var searchResult = [];
            if (itemText !== '') {
                // 更新数据，并使用 onAdd 更新到 TodoList 组件的 state 中
                rows.map(function (item, i) {
                    if (item === itemText) {
                        searchResult.push(itemText);
                    }
                });
                this.props.onSearch(searchResult);
            } else {
                this.props.onAdd(rows);
            }
            inputDom.value = '';
        }
    }, {
        key: 'render',
        value: function render() {
            return(
                // button click时，触发 handleAdd 事件
                _react2['default'].createElement(
                    'span',
                    null,
                    _react2['default'].createElement('input', { type: 'text', ref: 'inputnew', id: 'todo-new', placeholder: '请输入姓名', autoComplete: 'off' }),
                    _react2['default'].createElement('input', { type: 'button', onClick: this.handleAdd.bind(this), value: '添加' }),
                    _react2['default'].createElement('input', { type: 'button', onClick: this.handleSearch.bind(this), value: '搜索' })
                )
            );
        }
    }]);

    return AppTitleSearch;
})(_react2['default'].Component);

exports['default'] = AppTitleSearch;

module.exports = { AppTitleSearch: AppTitleSearch };
module.exports = exports['default'];