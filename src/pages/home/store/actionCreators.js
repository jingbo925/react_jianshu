import axios from 'axios'
import * as constants from './constants'
import {fromJS} from 'immutable'
const changeHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
})

const addMoreList = (result) => ({
  type: constants.CHANGE_ARTICLE_LIST,
  articleList: fromJS(result)
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then(
      (res) => {
        const data = res.data.data;
        dispatch(changeHomeData(data))
      }
    )
  }
}

export const getMoreList = () => {
  return (dispatch) => {
    axios.get('/api/homeList.json').then(
      (res) => {
        const data = res.data.data;
        dispatch(addMoreList(data))
      }
    )
  }
}