import type { Post } from "../../../models/post";
export abstract class postRepositories {
    public async getPosts(): Promise<Post[] | []> {
        return [];
    };
    public async getPost(id: number): Promise<Post | null> {
        return null;
    };
}