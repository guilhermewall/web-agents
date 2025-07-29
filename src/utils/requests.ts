type RequestError = {
  error: number;
  message: string;
  statusCode: number;
};

export class RequestErrorResponse extends Error {
  statusCode: number;

  constructor(data: RequestError) {
    super(data.message);
    this.cause = data.error;
    this.statusCode = data.statusCode;
  }
}
