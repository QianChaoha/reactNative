/**
 * Created by cqian on 2017/11/14.
 */
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _componentsAppTitleSearch = require('./components/AppTitleSearch');

var _componentsAppTitleSearch2 = _interopRequireDefault(_componentsAppTitleSearch);

var _componentsAppContent = require('./components/AppContent');

var _componentsAppContent2 = _interopRequireDefault(_componentsAppContent);

var TodoList = _react2['default'].createClass({
    displayName: 'TodoList',

    // 初始化数据
    getInitialState: function getInitialState() {
        return {
            allList: [],
            searchlist: [],
            isSearch: false
        };
    },
    // 接收一个传入的数据，并将它实时更新到组件的 state 中，以便组件根据数据重新render
    handleChange: function handleChange(rows) {
        this.setState({
            allList: rows,
            isSearch: false
        });
    },
    searchData: function searchData(rows) {
        this.setState({
            searchList: rows,
            isSearch: true
        });
    },
    render: function render() {
        return _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(_componentsAppTitleSearch2['default'], { onAdd: this.handleChange, toDo: this.state.allList, onSearch: this.searchData }),
            _react2['default'].createElement(_componentsAppContent2['default'], { onDel: this.handleChange, toDo: this.state.allList, searchResult: this.state.searchList, isSearch: this.state.isSearch })
        );
    }
});
// 将 TodoList 组件渲染到页面
_reactDom2['default'].render(_react2['default'].createElement(TodoList, null), document.getElementById('app'));
/*集成 AppTitleSearch 组件，传入两个属性 onAdd 和 toDo,用于显示顶部搜索内容*/ /*
                                                        集成 AppContent 组件，传入两个属性onDel和 toDo,用于显示主体内容*/