export default class Invoice {
    constructor(id, customer) {
        this.id = id;
        this.customer = customer;
    }

    getId() {
        return this.id;
    }
    getCustomer() {
        return this.customer;
    }
}