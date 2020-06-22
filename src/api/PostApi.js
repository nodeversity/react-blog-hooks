import Axios from '../api';

class PostApi {
    /**
        Handles all the API CRUD calls to http://jsonplaceholder.typicode.com/posts
        for Blog Posts to use within the app

        Note: JSONPlaceholder *does not persist* UPDATE, PATCH and DELETE requests; it only simulates them.
    */

    static getAllPost(){
        return Axios.get(`posts&_limit=25`);
    }
    
    static getPost(post_id){
        return Axios.get(`posts/${post_id}`);
    }

    static updatePost(post_id, updated_post){
        return Axios.put(`posts/${post_id}`, updated_post);
    }

    deletePost(post_id){
        return Axios.delete(`posts/${post_id}`);
    }

}

export default PostApi;

