/**
 * Created by cqian on 2017/11/13.
 */
/**
 * Created by Administrator on 2017/11/13.
 */
// import React from 'react';
'use strict';

var A = require('./1');

var UserList1 = React.createClass({
    displayName: 'UserList1',

    render: function render() {
        return React.createElement(A, null);
    }
});
ReactDOM.render(React.createElement(UserList1, null), document.getElementById('container'));