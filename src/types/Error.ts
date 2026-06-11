export interface ErrorResponse {
    error: {
        name: string;
        message: string;
        details?: string[];
    };
}