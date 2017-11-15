/**
 * Created by cqian on 2017/11/14.
 */
import React from 'react';
import { Link } from 'react-router'
export default React.createClass({
    handleDel(e) {
        var delIndex = e.target.getAttribute('data-key');
        this.props.onDel(delIndex);
    },
    render() {
        var reaultData=[];
        if(this.props.isSearch){
            reaultData=this.props.searchData;
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
                                    <label>{item.itemText}</label>
                                    <Link to={"/edit"+item.index} style={{marginLeft:'10px'}}>编辑</Link>
                                    <button className="destroy" style={{marginLeft:'10px'}} onClick={this.handleDel} data-key={item.index}>delete</button>
                                </li>
                            )
                    },this )
                }
            </ul>
        );
    }
   
})
