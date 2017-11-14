import React from 'react'

export default React.createClass({
  getInitialState: function () {
    return {
      allList: window.localStorage.getItem("data").split(','),
    };
  },
  back(e){
    this.state.allList[this.props.params.id]=e.target.value;
    var localStorage=window.localStorage;
    localStorage.setItem("data",this.state.allList);
    window.history.back();
  },
  render() {
    return (
        <span>
          <input type="text" defaultValue={this.state.allList[this.props.params.id]}></input>
          <input type="button" value="确定" onClick={this.back}/>
        </span>
    )
  }
})
