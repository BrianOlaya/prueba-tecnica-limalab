import React, { useReducer } from 'react';
import postContext from './postContext';
import postReducer from './postReducer';
import { GET_POSTS, CURRENT_POST, FILTER_POSTS} from '../../types/index';
import clientAxios from '../../config/axios';


const PostState = props => {

    //DEFINIENDO EL STATE INICIAL
    const initialState = {
        posts: [],
        postFilters:[]
    }

    // DISPATCH PARA EJECUTAR ACCIONES
    const [state, dispatch] = useReducer(postReducer, initialState)


    // OBTENER LOS POSTS
    const getPosts = async () => {
        try {
            const headers = {
                'app-id': '5f467e0abfcd4500022da2d9'
            }
            const result = await clientAxios.get('/post', { headers });
            dispatch({
                type: GET_POSTS,
                payload: result.data.data
            })
        } catch (error) {
            console.log(error)
        }
    }

    //SELECCIONA EL POST AL QUE SE LE DA CLICK
    const currentPost = postId => {
        dispatch({
            type: CURRENT_POST,
            payload: postId
        })
    }

    //FILTRANDO LOS POSTS 
    const  filterPosts = async tags=>{
        try {
            const headers = {
                'app-id': '5f467e0abfcd4500022da2d9'
            };
            const result = await clientAxios.get('/post', { headers }, tags);
            dispatch({
                type: FILTER_POSTS,
                payload: result.data.data
            })
            
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <postContext.Provider
            value={{
                posts: state.posts,
                postFilters:state.postFilters,
                getPosts,
                currentPost,
                filterPosts
            }}
        >{props.children}
        </postContext.Provider>

    );
}

export default PostState;
