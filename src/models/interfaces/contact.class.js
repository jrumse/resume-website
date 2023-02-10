class ContactReceipt {

    // Constructor
    constructor(name = "", email = "", number = "", message = "", timestamp = "") {
        this.name = name;
        this.email = email;
        this.number = number;
        this.message = message;
        this.timestamp = timestamp;
    }

    // Values
    name;
    email;
    number;
    message;
    timestamp;

    // Get ContactReceipt
    getContactReceipt() {
        return {'name': this.name, 'email': this.email, 'number': this.number, 'message': this.message, 'timestamp': this.timestamp}
    }
}

export default ContactReceipt;