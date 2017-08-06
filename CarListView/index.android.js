/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableOpacity,
    Image
} from 'react-native';
var carData = require('./Car.json');
var CarListView=React.createClass ({
    getInitialState() {
        var getSelectionData = (dataBlob, selectionID)=> {
            return dataBlob[selectionID];
        };
        var getRowData = (dataBlob, selectionID, rowId)=> {
            return dataBlob[selectionID + ":" + rowId];
        };
        return {
            dataSource: new ListView.DataSource({
                getSectionData: getSelectionData,
                getRowData: getRowData,
                rowHasChanged: (row1, row2)=>row1 !== row2,
                sectionHeaderHasChanged: (s1, s2)=>s1 !== s2,
            })
        }
    },

    componentDidMount() {
        this.loadDataFromJson();
    },

    loadDataFromJson() {
        var jsonData = carData.data;
        var dataBlob={},
          selectionID=[],
          rowId=[],
          cars=[];
        for (var i=0;i<jsonData.length;i++){
            //设置组号
            selectionID.push(i);
            //将组中内容放到dataBlob中
            dataBlob[i]=jsonData[i].title;
            //取出所有车
             cars=jsonData[i].cars;
            rowId[i]=[];
            //遍历所有车数组
            for (var j=0;j<cars.length;j++){
                rowId[i].push(j);
                //把每一行内容放入dataBlob对象中
                dataBlob[i+':'+j]=cars[j];
            }
        }
        //更新状态
        this.setState({
             dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob, selectionID, rowId)
        });
    },

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}//数据源
                renderRow={this.renderRow}
                renderSectionHeader={this.renderSectionHeader}
               
            ></ListView>
        );
    },
    renderRow(rowData, sectionID, rowID, highlightRow){
        return (
            <TouchableOpacity
                activeOpacity={0.5}
            >
                <View style={styles.container}>
                    <Image
                        source={require('./images/m_2_100.png')}
                        style={{
                            width: 80,
                            height:80,
                            marginTop:10
                        }}
                    ></Image>

                    <Text
                        style={{
                            fontSize:20,
                        }}
                    >{rowData.name}</Text>
                </View>
            </TouchableOpacity>
        )
    },
    renderSectionHeader(sectionData, sectionID){
        return (
                    <Text
                        style={{
                            fontSize:20,
                            marginLeft:10,

                        }}
                    >{sectionData}</Text>
        )
    },
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flexDirection:'row'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('CarListView', () => CarListView);
