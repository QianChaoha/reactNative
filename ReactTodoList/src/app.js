/**
 * Created by cqian on 2017/11/14.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import AppTitleSearch from './components/AppTitleSearch';
import AppContent from './components/AppContent';
var TodoList = React.createClass({
    // 初始化数据
    getInitialState: function () {
        return {
            allList: [],
            searchlist: [],
            isSearch:false
        };
    },
    // 接收一个传入的数据，并将它实时更新到组件的 state 中，以便组件根据数据重新render
    handleChange: function (rows) {
        this.setState({
            allList: rows,
            isSearch:false
        });
    },
    searchData: function (rows) {
        this.setState({
            searchList: rows,
            isSearch:true
        });
    },
    render: function () {
        return (
            <div>
                {/*集成 AppTitleSearch 组件，传入两个属性 onAdd 和 toDo,用于显示顶部搜索内容*/}
                <AppTitleSearch onAdd={this.handleChange} toDo={this.state.allList} onSearch={this.searchData}/>
                {/*
                 集成 AppContent 组件，传入两个属性onDel和 toDo,用于显示主体内容*/}
                <AppContent onDel={this.handleChange} toDo={this.state.allList} searchResult={this.state.searchList} isSearch={this.state.isSearch}/>
            </div>
        );
    }
});
// 将 TodoList 组件渲染到页面
ReactDOM.render(<TodoList/>, document.getElementById('app'));