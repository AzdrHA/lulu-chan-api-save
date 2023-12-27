export default class ApiException extends Error {
    constructor(message) {
        super(message);
    }
}