export class InvalidPageSize extends Error {
    constructor() {
        super('Invalid page size, unable to fetch users');
    }
}