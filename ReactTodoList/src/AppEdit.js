import React from 'react'
import style from './AppTitleSearch.css';

export default React.createClass({
    getInitialState: function () {
        return {
            allList: JSON.parse(sessionStorage.getItem("data")),
        };
    },
    back(e){
        if (this.refs.editText.value.trim() == "") {
            alert("姓名不能为空");
            return;
        }
        var itemData = this.state.allList[this.props.params.id];
        itemData.itemText = this.refs.editText.value;
        var inputViewAddSex = this.refs.inputViewAddSex;
        if (inputViewAddSex.selectedIndex == 0) {
            itemData.sex = "男";
        } else {
            itemData.sex = "女";
        }
        window.sessionStorage.setItem("data", JSON.stringify(this.state.allList))//将this.state.allList转变为字符串存储
        window.history.back();
    },
    render() {
        return (
            <div className={style.container_item}>
              <input className={style.input_add} ref="editText" type="text" defaultValue={this.state.allList[this.props.params.id].itemText}></input>
              <select className={style.select} ref="inputViewAddSex">
                  <option value="男" selected={this.state.allList[this.props.params.id].sex=='男'}>男</option>
                  <option value="女" selected={this.state.allList[this.props.params.id].sex=='女'}>女</option>
              </select>
              <input className={style.button_right} type="button" value="确定" onClick={this.back}/>
        </div>
        )
    }
})
