export abstract class CustomError extends Error {
    abstract statusCode: number;
    public code: string;

    protected constructor(code: string, message?: string) {
        super(message ?? "");

        this.code = code;
        Object.setPrototypeOf(this, CustomError.prototype);
    }

    serializeError() {
        return {
            success: false,
            error: {
                code: this.code,
                message: this.message || undefined
            }
        };
    }
}