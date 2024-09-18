/**
 * APIError class
 */
export class APIError {
    /**
     * Error message
     */
    public message: string | null;

    /**
     * Response status code
     */
    public status: number;

    /**
     * Create a new instance of the APIError
     * @param message Error message
     * @param status Response status code
     */
    constructor(message: string | null, status: number) {
        this.message = message;
        this.status = status;
    }
}
