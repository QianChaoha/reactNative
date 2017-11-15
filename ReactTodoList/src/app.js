/**
 * Created by cqian on 2017/11/14.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import AppTitleSearch from './AppTitleSearch';
import AppContent from './AppContent';
export default React.createClass({
    // 初始化数据
    getInitialState: function () {
        //读取数据
        var sessionStorage = window.sessionStorage;
        var tempList = [];
        if (typeof sessionStorage.getItem("data") !== undefined && sessionStorage.getItem("data") !== ""&&sessionStorage.getItem("data") !== null) {
            tempList = JSON.parse(sessionStorage.getItem("data"));
        }
        return {
            allList: tempList,
            searchlist: [],
            isSearch: false
        };
    },
    // 接收一个传入的数据，并将它实时更新到组件的 state 中，以便组件根据数据重新render
    handleChange: function (rows) {
        this.setState({
            allList: rows,
            isSearch: false
        });
    },
    searchData: function (rows) {
        this.setState({
            searchList: rows,
            isSearch: true
        });
    },
    render: function () {
        //存储数据
        window.sessionStorage.setItem("data",JSON.stringify(this.state.allList))//将this.state.allList转变为字符串存储
        return (
            <div>
                {/*集成 AppTitleSearch 组件，传入两个属性 onAdd 和 toDo,用于显示顶部搜索内容*/}
                <AppTitleSearch onAdd={this.handleChange} toDo={this.state.allList} onSearch={this.searchData}/>
                {/*
                 集成 AppContent 组件，传入两个属性onDel和 toDo,用于显示主体内容*/}
                <AppContent onDel={this.handleChange} toDo={this.state.allList} searchResult={this.state.searchList}
                            isSearch={this.state.isSearch}/>
            </div>
        );
    },
});