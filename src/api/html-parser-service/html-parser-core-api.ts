import CoreApi from "../core-api.ts";
import axios, {AxiosInstance} from "axios";

export class HtmlParserCoreApi extends CoreApi {

    protected static client: AxiosInstance;

    protected constructor() {
        super();
        const baseUrl = "http://localhost:8080";

        HtmlParserCoreApi.client = axios.create({
            baseURL: baseUrl,
            headers: {
                "Content-Type": "application/json",
            },
            transformResponse: [
                function (data) {
                    const parsedData = JSON.parse(data);
                    return { payload: parsedData };
                },
            ]
        });
    }

    public override async get(endpoint: string, params = {}): Promise<any> {
        try {
            return await HtmlParserCoreApi.client.get(endpoint, { params });
        } catch (error) {
            console.error(`GET request to ${endpoint} failed:`, error);
            throw error;
        }
    }

    public override async post(endpoint: string, data: any): Promise<any> {
        try {
            return await HtmlParserCoreApi.client.post(endpoint, data);
        } catch (error) {
            console.error(`POST request to ${endpoint} failed:`, error);
            throw error;
        }
    }
}