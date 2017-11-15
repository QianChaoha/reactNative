/**
 * Created by cqian on 2017/11/14.
 */
import React from 'react';
import {Link} from 'react-router'
import style from './AppContent.css';
export default React.createClass({
    handleDel(e) {
        var delIndex = e.target.getAttribute('data-key');
        this.props.onDel(delIndex);
    },
    render() {
        var reaultData = [];
        if (this.props.isSearch) {
            reaultData = this.props.searchData;
        } else {
            reaultData = this.props.toDo;
        }
        return (
            <table >
                <thead>
                <tr >
                    <td >姓名</td>
                    <td >性别</td>
                    <td>操作</td>
                </tr>
                </thead>
                <tbody>
                {reaultData.map(function (item, i) {
                    return (
                        <tr key={i}>
                            <td><span>{item.itemText}</span></td>
                            <td ><span>{item.sex}</span></td>
                            <td >
                                <a href="#" onClick={this.handleDel} data-key={item.index}>删除</a>
                                <Link to={"/edit"+item.index} style={{marginLeft:'10px'}}>修改</Link>
                            </td>
                        </tr>
                    )
                }, this)}
                </tbody>
            </table>
        );
    }

})
