import { GET_POSTS, CURRENT_POST, FILTER_POSTS } from '../../types/index';

export default (state, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        case CURRENT_POST:
            return {
                ...state,
                post: state.posts.filter(post => post.id === action.payload)
            }
        case FILTER_POSTS:
            return {
                ...state,
                posts : action.payload
            }

        default:
            return state
    }
} 