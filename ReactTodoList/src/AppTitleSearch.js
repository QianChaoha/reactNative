/**
 * Created by cqian on 2017/11/14.
 */
import React from 'react';

export default React.createClass({
    handleAdd(e) {
        // 通过 refs 获取dom元素，然后获取输入的内容
        var inputDom = this.refs.inputnew;
        var itemText = inputDom.value.trim();
        // 获取传入的todolist数据
        var rows = this.props.toDo;
        if (itemText !== '') {
            var ItemData={};
            // 更新数据，并使用 onAdd 更新到 TodoList 组件的 state 中
            ItemData.itemText=itemText;
            ItemData.index=(rows.length>=0)?(rows.length):0;
            rows.push(ItemData);
            this.props.onAdd(rows);
        }
        inputDom.value = '';
    },
    handleSearch(e) {
        // 通过 refs 获取dom元素，然后获取输入的内容
        var inputDom = this.refs.inputnew;
        var itemText = inputDom.value.trim();
        // 获取传入的todolist数据
        var rows = this.props.toDo;
        var searchResult=[];
        if (itemText !== '') {
            // 更新数据，并使用 onAdd 更新到 TodoList 组件的 state 中
            rows.map(function (item, i) {
                if (item.itemText===itemText){
                    searchResult.push(item);
                }
            });
            this.props.onSearch(searchResult);
        }else {
            this.props.onAdd(rows);
        }
        inputDom.value = '';
    },
    render() {
        return (
            <span>
                <input type="text" ref="inputnew" id="todo-new" placeholder="请输入姓名" autoComplete="off" />
                <input type="button" onClick={this.handleAdd} value="添加"/>
                <input type="button" onClick={this.handleSearch} value="搜索"/>
            </span>
        );
    },
})