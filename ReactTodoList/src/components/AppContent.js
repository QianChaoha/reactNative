/**
 * Created by cqian on 2017/11/14.
 */
import React from 'react';
// ListTodo 组件用于展示列表，并可以删除某一项内容，它有 noDel todo 两个属性，上文已经提到过
// 它的基本逻辑是：遍历 todo 的内容，生成数据列表和删除按钮
// 对某一项执行删除时，想将 todo 中的数据删除，
// 然后通过 onDel 事件调用 TodoList 的 handleChange 来更新state，然后react自动render
export default class AppContent extends React.Component {
    constructor(props) {
        super(props);
    }
    handleDel(e) {
        var delIndex = e.target.getAttribute('data-key');
        // 更新数据，并使用 onDel 更新到 TodoList 的 state 中，以便 React自动render
        this.props.toDo.splice(delIndex, 1);
        this.props.onDel(this.props.toDo);
    }
    render() {
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
        var reaultData=[];
        if(this.props.isSearch){
            reaultData=this.props.searchResult;
        }else{
            reaultData=this.props.toDo;
        }
        return (
            <ul id="todo-list">
                {
                    // {/* 遍历数据 */}
                    reaultData.map(function (item, i) {
                        return (
                            <li key={i}>
                                <label>{item}</label>
                                <button className="destroy" onClick={this.handleDel.bind(this)} data-key={i}>delete</button>
                            </li>
                        );
                    }.bind(this)) // {/* 绑定函数的执行this - 以便 this.handleDel */}
                }
            </ul>
        );
    }
}


module.exports = {AppContent};