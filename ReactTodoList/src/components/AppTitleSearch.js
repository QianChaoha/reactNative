/**
 * Created by cqian on 2017/11/14.
 */
import React from 'react';

export default class AppTitleSearch extends React.Component {
    constructor(props) {
        super(props);
    }
    handleAdd(e) {
        e.preventDefault();
        // 通过 refs 获取dom元素，然后获取输入的内容
        var inputDom = this.refs.inputnew.getDOMNode();
        var newthing = inputDom.value.trim();
        // 获取传入的todolist数据
        var rows = this.props.toDo;
        if (newthing !== '') {
            // 更新数据，并使用 onAdd 更新到 TodoList 组件的 state 中
            rows.push(newthing);
            this.props.onAdd(rows);
        }
        inputDom.value = '';
    }
    render() {
        return (
            // form submit 时，触发 handleAdd 事件
            <form onSubmit={this.handleAdd.bind(this)}>
                <input type="text" ref="inputnew" id="todo-new" placeholder="typing a newthing todo" autoComplete="off" />
            </form>
        );
    }
}


module.exports = {AppTitleSearch};