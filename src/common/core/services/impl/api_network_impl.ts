import type { AxiosInstance, AxiosRequestConfig } from "axios";
import type ApiNetwork from "../api_network";
import axios from "axios";
import type { Post } from "@/models/post";

export class ApiNetworkImpl implements ApiNetwork {
    private  static instance: ApiNetworkImpl | null = null;
    private  axiosInstance: AxiosInstance;
    
    private constructor() {
        this.axiosInstance = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com'
    });
    }
async getPost(id: number): Promise<Post | null> {
    try {
        const [error, data] = await this.axiosCall<Post>({ method: "get", url: `/posts/${id}` });

        if(error) {
            return null;
        }
        return data as Post;
    } catch (error) {
        console.error('Unexpected error fetching post:', error);

        return null;
    }
}

    public static getInstance(): ApiNetworkImpl {
        if(!ApiNetworkImpl.instance) {
            ApiNetworkImpl.instance = new ApiNetworkImpl();
        }
        return ApiNetworkImpl.instance;
    }

     // T คือ generic type ที่จะถูกใช้เพื่อระบุประเภทข้อมูลที่จะถูก return จากการเรียก Axios.
    // ตัวแปรยื่นหยุ่น ถ้าเราไม่รู้ผลลัพท์ของ type คือประเภทไหน การใช้ Genneric type ถือเป็นทางเลือกที่ดี.
async axiosCall<T>(config: AxiosRequestConfig){
    try {
        const {data} = await this.axiosInstance.request<T>(config);
        return [null, data];
    } catch (error) {
        return [error];
    }
}

async getPosts(): Promise<Post[]> {
    try {
        const [error, data] = await  this.axiosCall<Post>({method: "get", url:"/posts"});
        if(error) {
            return [];
        }
        return data as Post[];
    } catch (error) {
        console.error('Unexpected error fetching posts:', error);
        return [];
    }
}


    
}

 export default ApiNetworkImpl;