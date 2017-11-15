/**
 * Created by cqian on 2017/11/14.
 */
import React from 'react';

export default React.createClass({
    handleAdd(e) {
        // 通过 refs 获取dom元素，然后获取输入的内容
        var inputDom = this.refs.inputView;
        this.props.onAdd(inputDom.value.trim());
        inputDom.value = '';
    },
    handleSearch(e) {
        // 通过 refs 获取dom元素，然后获取输入的内容
        var inputDom = this.refs.inputView;
        var inputText = inputDom.value.trim();
        this.props.onSearch(inputText);
        inputDom.value = '';
    },
    render() {
        return (
            <span>
                <input type="text" ref="inputView" id="todo-new" placeholder="请输入姓名" autoComplete="off" />
                <input type="button" onClick={this.handleAdd} value="添加"/>
                <input type="button" onClick={this.handleSearch} value="搜索"/>
            </span>
        );
    },
})
