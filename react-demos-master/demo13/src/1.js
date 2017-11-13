/**
 * Created by cqian on 2017/11/13.
 */
/**
 * Created by Administrator on 2017/11/13.
 */
var UserList=React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
    },
    render () {
        return (
            <h1>{this.props.name}</h1>
        );
    }
});
module.exports = {UserList};