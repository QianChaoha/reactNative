/**
 * Created by cqian on 2017/11/14.
 */
import React from 'react';
import style from './AppTitleSearch.css';
export default React.createClass({
    handleAdd(e) {
        // 通过 refs 获取dom元素，然后获取输入的内容
        var inputDom = this.refs.inputViewAddName;
        var inputViewAddSex = this.refs.inputViewAddSex;
        this.props.onAdd(inputDom.value.trim(),inputViewAddSex.selectedIndex);
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
            <div className={style.container}>
                <div className={style.container_item}>
                    <input className={style.input_search} type="text" ref="inputView" id="todo-new" placeholder="请输入姓名" autoComplete="off"/>
                    <input className={style.button_right} type="button" onClick={this.handleSearch} value="搜索"/>
                </div>
                <div className={style.container_item}>
                    <input className={style.input_add} type="text" ref="inputViewAddName" id="todo-new" placeholder="请输入姓名" autoComplete="off"/>
                    <select ref="inputViewAddSex" className={style.select}>
                        <option value="男">男</option>
                        <option value="女">女</option>
                    </select>
                    <input className={style.button_right} type="button" onClick={this.handleAdd} value="添加"/>
                </div>
                
            </div>

        );
    },
})
