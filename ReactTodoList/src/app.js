/**
 * Created by cqian on 2017/11/14.
 */
import React from 'react';
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
            //显示的全部数据
            allList: tempList,
            //搜索出结果的数据
            searchlist: [],
            //是否呈现搜索出的结果,默认为false,点击搜索后为true
            isSearch: false
        };
    },
    // allList改变,刷新view
    handleChange: function (rows) {
        this.setState({
            allList: rows,
            isSearch: false
        });
    },
    //searchlist改变,刷新view
    handleSearch: function (rows) {
        this.setState({
            searchList: rows,
            isSearch: true
        });
    },
    //添加一条数据
    handleAdd(inputText) {
        var rows = this.state.allList;
        if (inputText !== '') {
            var ItemData={};
            // 更新数据，并使用 onAdd 更新到 TodoList 组件的 state 中
            ItemData.itemText=inputText;
            ItemData.index=(rows.length>=0)?(rows.length):0;
            rows.push(ItemData);
            this.handleChange(rows);
        }
    },
    //删除一条数据
    handleDelete(delIndex) {
        var rows = this.state.allList;
        //删除数据
        rows.splice(delIndex, 1);
        //更新数据的index
        rows.map(function (item, i) {
            item.index=i;
        });
        this.handleChange(rows);
    },
    //查询数据
    searchData(inputText) {
        var rows = this.state.allList;
        var searchResult=[];
        if (inputText !== '') {
            // 更新数据，并使用 onAdd 更新到 TodoList 组件的 state 中
            rows.map(function (item, i) {
                if (item.itemText===inputText){
                    searchResult.push(item);
                }
            });
            this.handleSearch(searchResult);
        }else {
            this.handleChange(rows);
        }
    },
    render: function () {
        //每次添加或者删除数据时都要重新存储数据
        window.sessionStorage.setItem("data",JSON.stringify(this.state.allList))//将this.state.allList转变为字符串存储
        return (
            <div>
                {/*AppTitleSearch组件为页面的头部，传入两个属性 onAdd 和 toDo,用于显示顶部搜索内容*/}
                <AppTitleSearch onAdd={this.handleAdd} toDo={this.state.allList} onSearch={this.searchData}/>
                {/*AppContent组件为页面的显示区域，传入两个属性onDel和 toDo,用于显示主体内容*/}
                <AppContent onDel={this.handleDelete} toDo={this.state.allList} searchData={this.state.searchList}
                            isSearch={this.state.isSearch}/>
            </div>
        );
    },
});