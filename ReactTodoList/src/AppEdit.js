import React from 'react'

export default React.createClass({
  getInitialState: function () {
    // var a=window.sessionStorage.getItem("data").split(',')[this.props.params.id];
    // tempList = JSON.parse(sessionStorage.getItem("data")).split(',');
    return {
      allList: JSON.parse(sessionStorage.getItem("data")),
    };
  },
  back(e){
    if (this.refs.editText.value==""||this.refs.editText.value.trim()==""){
      alert("不能为空");
      return;
    }
    this.state.allList[this.props.params.id].itemText=this.refs.editText.value;
    window.sessionStorage.setItem("data",JSON.stringify(this.state.allList))//将this.state.allList转变为字符串存储
    window.history.back();
  },
  render() {
    return (
        <span>
          <input ref="editText" type="text" defaultValue={this.state.allList[this.props.params.id].itemText}></input>
          <input type="button" value="确定" onClick={this.back}/>
        </span>
    )
  }
})
