import React, { Component } from 'react'
import {connect} from 'react-redux';
import {ListItem, ListInfo, LoadMore} from '../style'
import {actionCreators} from '../store'
 class List extends Component {
  render() {
    const {list, getMoreList} = this.props;
    return (

      <div>
        {list.map((item, index) => {
          return  (
            <ListItem key={index}>
              <img className='pic' src={item.get('imgUrl')}  alt='' />
              <ListInfo>
                <h3 className='title'>{item.get('title')}</h3>
                <p className='desc'>{item.get('desc')} </p>
              </ListInfo>
            </ListItem>
          )
        })}
        <LoadMore onClick={getMoreList}>加载更多</LoadMore>
      </div>
    )
  }
}

const mapState = (state) =>  ({
  list: state.getIn(['home', 'articleList'])
})

const mapDispatch = (dispatch) => ({
  getMoreList() {
    const action = actionCreators.getMoreList()
    dispatch(action)
  }
})
export default connect(mapState, mapDispatch)(List)