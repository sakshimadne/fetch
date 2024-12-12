import axios from 'axios'
import { FETCH_POSTS_FAILURE, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS } from './actionTypes'


export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(FETCH_POSTS_REQUEST())
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      )
      dispatch(FETCH_POSTS_SUCCESS(response.data))
    } catch (error) {
      dispatch(FETCH_POSTS_FAILURE('Failed to load posts. Please try again.'))
    }
  }
}
