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
        var storageList = [];
        if (typeof sessionStorage.getItem("data") !== undefined && sessionStorage.getItem("data") !== ""&&sessionStorage.getItem("data") !== null) {
            storageList = JSON.parse(sessionStorage.getItem("data"));
        }
        return {
            //显示的全部数据
            allList: storageList,
            //搜索出结果的数据
            searchlist: [],
            //是否呈现搜索出的结果,默认为false,点击搜索后为true
            isSearch: false
        };
    },
    //增加,删除和修改数据时allList会改变,数据改变后刷新view
    handleChange: function (rows) {
        this.setState({
            allList: rows,
            isSearch: false
        });
    },
    //查询数据时,查询的结果放在searchlist里面,数据改变后刷新view
    handleSearch: function (rows) {
        this.setState({
            searchList: rows,
            isSearch: true
        });
    },
    //添加一条数据,inputText是输入框中输入的文本数据
    handleAdd(inputText,index) {
        var rows = this.state.allList;
        if (inputText !== '') {
            var ItemData={};
            // 更新数据，并使用 onAdd 更新到 TodoList 组件的 state 中
            ItemData.itemText=inputText;
            if (index==0){
                ItemData.sex="男";
            }else {
                ItemData.sex="女";
            }
            ItemData.index=(rows.length>=0)?(rows.length):0;
            rows.push(ItemData);
            this.handleChange(rows);
        }else{
            alert('姓名不能为空!');
        }
    },
    //删除一条数据,delIndex是要删除数据的索引
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
            //更新数据，并使用 onAdd 更新到 TodoList 组件的 state 中
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
                {/*AppTitleSearch组件为页面的头部,用于显示顶部搜索内容,增加和搜索数据会回调handleAdd和searchData方法,
                toDo属性传递allList数据*/}
                <AppTitleSearch onAdd={this.handleAdd} toDo={this.state.allList} onSearch={this.searchData}/>
                {/*AppContent组件为页面的显示区域,用于显示主体内容,删除和搜索数据会回调handleDelete和searchList方法,
                toDo,searchData和和属性分别传递allList,searchList和isSearch数据,*/}
                <AppContent onDel={this.handleDelete} toDo={this.state.allList} searchData={this.state.searchList}
                            isSearch={this.state.isSearch}/>
            </div>
        );
    },
});