
import {CREATE_POST_SUCCESS, FETCH_POST_SUCCESS} from "../actionTypes";
import axiosApi from "../../axiosApi";

const fetchProductsSuccess = posts => {
    return {type: FETCH_POST_SUCCESS, posts};
};

export const fetchPosts = () => {
    return dispatch => {
        return axiosApi.get("/posts").then(response => {
            dispatch(fetchProductsSuccess(response.data));
        });
    };
};

const createPostSuccess = () => {
    return {type: CREATE_POST_SUCCESS};
};

export const createPost = postData => {
    return dispatch => {
        return axiosApi.post("posts", postData).then(() => {
            dispatch(createPostSuccess());
        });
    };
};
