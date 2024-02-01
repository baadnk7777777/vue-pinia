import type { Post } from "../../../../models/post";
import { postRepositories } from "../post_repo";

export class postRepositoriesImpl implements postRepositories {

    private static instance: postRepositoriesImpl | null = null;

    private constructor() {}

    public static getInstance(): postRepositoriesImpl {
        if(!postRepositoriesImpl.instance) {
            postRepositoriesImpl.instance = new postRepositoriesImpl();
        }
        return postRepositoriesImpl.instance;
    }

async getPosts (): Promise<Post[]> {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts: Post[] = await response.json();
        return posts;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}
async getPost(id: number): Promise<Post> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const payload:Post = await response.json();
    console.log("payload");
    console.log(payload);
    return payload;
}

}

export default postRepositoriesImpl;