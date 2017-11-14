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

// ListTodo 组件用于展示列表，并可以删除某一项内容，它有 noDel todo 两个属性，上文已经提到过
// 它的基本逻辑是：遍历 todo 的内容，生成数据列表和删除按钮
// 对某一项执行删除时，想将 todo 中的数据删除，
// 然后通过 onDel 事件调用 TodoList 的 handleChange 来更新state，然后react自动render

var AppContent = (function (_React$Component) {
    _inherits(AppContent, _React$Component);

    function AppContent(props) {
        _classCallCheck(this, AppContent);

        _get(Object.getPrototypeOf(AppContent.prototype), 'constructor', this).call(this, props);
    }

    _createClass(AppContent, [{
        key: 'handleDel',
        value: function handleDel(e) {
            var delIndex = e.target.getAttribute('data-key');
            // 更新数据，并使用 onDel 更新到 TodoList 的 state 中，以便 React自动render
            this.props.toDo.splice(delIndex, 1);
            this.props.onDel(this.props.toDo);
        }
    }, {
        key: 'render',
        value: function render() {
            // return (
            //     <ul id="todo-list">
            //         {
            //             // {/* 遍历数据 */}
            //             this.props.toDo.map(function (item, i) {
            //                 return (
            //                     <li>
            //                         <label>{item}</label>
            //                         <button className="destroy" onClick={this.handleDel.bind(this)} data-key={i}>delete</button>
            //                     </li>
            //                 );
            //             }.bind(this)) // {/* 绑定函数的执行this - 以便 this.handleDel */}
            //         }
            //     </ul>
            // );
            var reaultData = [];
            if (this.props.isSearch) {
                reaultData = this.props.searchResult;
            } else {
                reaultData = this.props.toDo;
            }
            return _react2['default'].createElement(
                'ul',
                { id: 'todo-list' },

                // {/* 遍历数据 */}
                reaultData.map((function (item, i) {
                    return _react2['default'].createElement(
                        'li',
                        { key: i },
                        _react2['default'].createElement(
                            'label',
                            null,
                            item
                        ),
                        _react2['default'].createElement(
                            'button',
                            { className: 'destroy', onClick: this.handleDel.bind(this), 'data-key': i },
                            'delete'
                        )
                    );
                }).bind(this)) // {/* 绑定函数的执行this - 以便 this.handleDel */}

            );
        }
    }]);

    return AppContent;
})(_react2['default'].Component);

exports['default'] = AppContent;

module.exports = { AppContent: AppContent };
module.exports = exports['default'];