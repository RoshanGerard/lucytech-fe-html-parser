export abstract class AbstractResponseDto<T> {

    status: string;
    data: T;

    protected constructor(status: string, data: T) {
        this.status = status;
        this.data = data;
    }
}
