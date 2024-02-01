import ApiNetworkImpl from "@/common/core/services/impl/api_network_impl";
import type { Post } from "../../../../models/post";
import { postRepositories } from "../post_repo";

export class postRepositoriesImpl implements postRepositories {

    private static instance: postRepositoriesImpl | null = null;
     apiNetwork = ApiNetworkImpl.getInstance();

    private constructor() {}

    public static getInstance(): postRepositoriesImpl {
        if(!postRepositoriesImpl.instance) {
            postRepositoriesImpl.instance = new postRepositoriesImpl();
        }
        return postRepositoriesImpl.instance;
    }

async getPosts (): Promise<Post[]> {
    try {
        const repose = await this.apiNetwork.getPosts();
        const posts: Post[] = repose;
        return posts;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}
async getPost(id: number): Promise<Post | null> {
    const response = await this.apiNetwork.getPost(id);
    
    if(response == null) {
        return null;
    }else {
        const payload:Post = response;
        console.log("payload");
        console.log(payload);
        return payload;
    }
    
}

}

export default postRepositoriesImpl;