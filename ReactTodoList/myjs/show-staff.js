/**
 * Created by Administrator on 2017/11/13.
 */
// import React from 'react';
import TodoList from './add-staff';
class UserList extends React.Component {
    // constructor (props) {  }

    componentWillMount () {
        $.get("http://localhost:63343/rnProject/ReactTodoList/test.json ", function(result) {
            // if (this.isMounted()) {
            //     this.setState({
            //         username: lastGist.owner.login,
            //         lastGistUrl: lastGist.html_url
            //     });
            // }
        }.bind(this));
    }

    handleEdit (user) {
    }
    handleDel (user) {
    }

    render () {
        // const {userList} = this.state;
        return (
            <TodoList></TodoList>
           /* <HomeLayout title="userlist">
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                       /!* <th>用户名</th>
                        <th>性别</th>
                        <th>年龄</th>
                        <th>操作</th>*!/
                    </tr>
                    </thead>
                    /!*<tbody>
                    {
                        userList.map((user) => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.age}</td>
                                    <td>
                                        <a href="javascript:void(0)" onClick={() => this.handleEdit(user)}>编辑</a>
                                        &nbsp;
                                        <a href="javascript:void(0)" onClick={() => this.handleDel(user)}>删除</a>
                                    </td>
                                </tr>
                            );
                        })
                    }
                    </tbody>*!/
                </table>
            </HomeLayout>*/
        );
    }
}
ReactDOM.render(<UserList />, document.getElementById('container'));
