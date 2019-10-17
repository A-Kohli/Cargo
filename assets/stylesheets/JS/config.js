class Order {
    constructor(id, date, name, company, contact, email, address, quantity, description, weight, length, width, breadth, modepay,status) {
        this.id = id;
        this.date = date;
        this.name = name;
        this.company = company;
        this.contact = contact;
        this.email = email;
        this.address = address;
        this.quantity = quantity;
        this.description = description;
        this.weight = weight;
        this.length = length;
        this.width = width;
        this.breadth = breadth;
        this.modepay = modepay;
        this.status = status;
    }
}

class Feedback {
    constructor(id, feedback) {
        this.id = id;
        this.feedback = feedback;
    }
}

const dbOperations = {
    orders: [],
    feedbacks: [],
    addOrder(Object) {
        firebase.database().ref('Orders/' + Object.id).set(Object);
        console.log("added");
    },
    getOrder() {
        var pr = new Promise((resolve, reject) => {
            var id = firebase.database().ref('Orders/');
            id.on('value', (snapshot) => {
                var obj = snapshot.val();
                if (obj == null) {
                    dbOperations.orders.length = 0;
                } else {
                    dbOperations.orders = Object.keys(obj);
                }
                resolve(dbOperations.orders.length);
            })
        })
        return pr;
    },
    searchOrder(useri) {
        var pr = new Promise((resolve, reject) => {
            var userid = firebase.database().ref('Orders/' + useri);
            userid.on('value', (snapShot) => {
                var obj = snapShot.val();
                resolve(obj);
            })
        })
        return pr;
    },
    getFeedback() {
        var pr = new Promise((resolve, reject) => {
            var id = firebase.database().ref('Feedbacks/');
            id.on('value', (snapshot) => {
                var obj = snapshot.val();
                if (obj == null) {
                    dbOperations.feedbacks.length = 0;
                } else {
                    dbOperations.feedbacks = Object.keys(obj);
                }
                resolve(dbOperations.feedbacks.length);
            })
        })
        return pr;
    },
    addFeedback(Object) {
        firebase.database().ref('Feedbacks/' + Object.id).set(Object);
        console.log("added");
    }
}