import type { Post } from "@/models/post";
import type { AxiosInstance, AxiosRequestConfig } from "axios";
import axios from "axios";

export abstract class ApiNetwork {

    public async getPosts(): Promise<Post[]> {
        return [];
    }

    public async getPost(id: number): Promise<Post | null> {
        return null;
    }
}

export default ApiNetwork;

