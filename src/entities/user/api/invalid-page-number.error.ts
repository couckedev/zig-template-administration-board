export class InvalidPageNumber extends Error {
    constructor() {
        super('Invalid page number, unable to fetch users');
    }
}