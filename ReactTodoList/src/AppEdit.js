import React from 'react'

export default React.createClass({
  getInitialState: function () {
    return {
      allList: window.localStorage.getItem("data").split(','),
    };
  },
  back(e){
    if (this.refs.editText.value==""||this.refs.editText.value.trim()==""){
      alert("不能为空");
      return;
    }
    this.state.allList[this.props.params.id]=this.refs.editText.value;
    var localStorage=window.localStorage;
    localStorage.setItem("data",this.state.allList);
    window.history.back();
  },
  render() {
    return (
        <span>
          <input ref="editText" type="text" defaultValue={this.state.allList[this.props.params.id]}></input>
          <input type="button" value="确定" onClick={this.back}/>
        </span>
    )
  }
})
