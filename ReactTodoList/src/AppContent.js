/**
 * Created by cqian on 2017/11/14.
 */
import React from 'react';
import { Link } from 'react-router'
export default React.createClass({
    handleDel(e) {
        var delIndex = e.target.getAttribute('data-key');
        // 更新数据，并使用 onDel 更新到 TodoList 的 state 中，以便 React自动render
        this.props.toDo.splice(delIndex, 1);
        this.props.onDel(this.props.toDo);
    },
    render() {
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
                                    <Link to={"/edit"+i} style={{marginLeft:'10px'}}>编辑</Link>
                                    <button className="destroy" style={{marginLeft:'10px'}} onClick={this.handleDel} data-key={i}>delete</button>
                                </li>
                            )
                    },this )
                }
            </ul>
        );
    },
    componentWillUnmount(){
        //存储数据
        var localStorage=window.localStorage;
        localStorage.setItem("data",this.props.toDo);
    }
})
