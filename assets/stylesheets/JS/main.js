window.addEventListener("DOMContentLoaded", init);
var date1;
var name;
var company;
var contact;
var email;
var address;
var quant;
var desc;
var weight;
var length1;
var width;
var breadth;
var payment;

function init() {
  document.getElementById("page_loader").setAttribute('class', 'hidden');
  start();
}

function start() {
  document.getElementById("next1").addEventListener("click", p2c);
  document.getElementById("aa1").addEventListener("click", faq);
  document.getElementById("aa2").addEventListener("click", faq1);
  document.getElementById("submitbtn").addEventListener("click", feedback);
  document.getElementById("findcargo").addEventListener("click", cargo);
}

function p2c() {
  date1 = document.getElementById("sdate").value;
  name = document.getElementById("sname").value;
  var nam = /^[A-Za-z ]+$/;
  var num = /[0-9]/;
  var vmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  company = document.getElementById("scompany").value;
  contact = document.getElementById("sno").value;
  email = document.getElementById("semail").value;
  address = document.getElementById("saddr").value;
  var q = new Date();
  var m = q.getMonth() + 1;
  var d = q.getDate();
  var y = q.getFullYear();
  var date2 = new Date(y, m, d);
  var mydate = new Date(date1);

  if (date1 == "") {
    document.getElementById("sreq1").className = "show red";
  } else if (mydate <= date2) {
    document.getElementById("sreq1").className = "hide red";
    document.getElementById("sreq11").className = "show red";
  } else {
    document.getElementById("sreq1").className = "hide red";
    document.getElementById("sreq11").className = "hide red";
  }

  if (name == "") {
    document.getElementById("sreq2").className = "show red";
  } else if (!nam.test(name)) {
    document.getElementById("sreq21").className = "show red";
    document.getElementById("sreq2").className = "hide red";
  } else if (name.length <= 3) {
    document.getElementById("sreq211").className = "show red";
    document.getElementById("sreq2").className = "hide red";
    document.getElementById("sreq21").className = "hide red";
  } else {
    document.getElementById("sreq211").className = "hide red";
    document.getElementById("sreq2").className = "hide red";
    document.getElementById("sreq21").className = "hide red";
  }
  if (company == "") {
    document.getElementById("sreq3").className = "show red";
  } else if (!nam.test(company)) {
    document.getElementById("sreq31").className = "show red";
    document.getElementById("sreq3").className = "hide red";
  } else if (company.length <= 2) {
    document.getElementById("sreq311").className = "show red";
    document.getElementById("sreq3").className = "hide red";
    document.getElementById("sreq31").className = "hide red";
  } else {
    document.getElementById("sreq311").className = "hide red";
    document.getElementById("sreq3").className = "hide red";
    document.getElementById("sreq31").className = "hide red";
  }
  if (contact == "") {
    document.getElementById("sreq4").className = "show red";
  } else if (!num.test(contact)) {
    document.getElementById("sreq41").className = "show red";
    document.getElementById("sreq4").className = "hide red";
  } else if (contact.length != 10) {
    document.getElementById("sreq411").className = "show red";
    document.getElementById("sreq4").className = "hide red";
    document.getElementById("sreq41").className = "hide red";
  } else {
    document.getElementById("sreq411").className = "hide red";
    document.getElementById("sreq4").className = "hide red";
    document.getElementById("sreq41").className = "hide red";
  }
  if (email == "") {
    document.getElementById("sreq5").className = "show red";
  } else if (!vmail.test(email)) {
    document.getElementById("sreq51").className = "show red";
    document.getElementById("sreq5").className = "hide red";
  } else {
    document.getElementById("sreq5").className = "hide red";
    document.getElementById("sreq51").className = "hide red";
  }
  if (address == "") {
    document.getElementById("sreq55").className = "show red";
  } else if (address.length <= 10) {
    document.getElementById("sreq551").className = "show red";
    document.getElementById("sreq55").className = "hide red";
  } else {
    document.getElementById("1").className = "page-trigger";
    document.getElementById("2").className = "page-trigger active";
    document.getElementById("personal").className = "personal hide";
    document.getElementById("cargo").className = "cargo show";
    document.getElementById("next2").addEventListener("click", c2p);
  }
}

function c2p() {
  quant = document.getElementById("squantity").value;
  desc = document.getElementById("sdes").value;
  weight = document.getElementById("swei").value;
  length1 = document.getElementById("slen").value;
  width = document.getElementById("swid").value;
  breadth = document.getElementById("sbrea").value;

  if (quant == "") {
    document.getElementById("sreq6").className = "show red";
  } else {
    document.getElementById("sreq6").className = "hide red";
  }
  if (desc == "") {
    document.getElementById("sreq7").className = "show red";
  } else {
    document.getElementById("sreq7").className = "hide red";
  }
  if (weight == "") {
    document.getElementById("sreq8").className = "show red";
  } else {
    document.getElementById("sreq8").className = "hide red";
  }
  if (length1 == "") {
    document.getElementById("sreq9").className = "show red";
  } else {
    document.getElementById("sreq9").className = "hide red";
  }
  if (breadth == "") {
    document.getElementById("sreq111").className = "show red";
  } else {
    document.getElementById("sreq111").className = "hide red";
  }
  if (width == "") {
    document.getElementById("sreq10").className = "show red";
  } else {
    document.getElementById("2").className = "page-trigger";
    document.getElementById("3").className = "page-trigger active";
    document.getElementById("cargo").className = "cargo hide";
    document.getElementById("payment").className = "payment show";
    document.getElementById("next3").addEventListener("click", final);
  }
}

function final() {
  var payment = document.getElementById("pay").value;

  if (payment == "") {
    document.getElementById("sreq12").className = "show1 red";
  } else {
    var orderId;
    var pr = dbOperations.getOrder();
    status = "Request for Order Booking sent";
    pr.then(data => {
      if (data == 0) {
        orderId = "10010923";
        localStorage.order = "10010923";
        console.log(orderId);
      } else {
        var value = dbOperations.orders[data - 1];
        orderId = parseInt(value) + 1;
        localStorage.order = orderId.toString();
      }
      document.getElementById("payment").className = "payment hide";
      document.getElementById("final").className = "final show";
      document.getElementById("regid").innerHTML = orderId;
      var obj = new Order(orderId, date1, name, company, contact, email, address, quant, desc, weight, length1, width, breadth, payment,status);
      dbOperations.addOrder(obj);
    }).catch(err => {
      console.log("error" + err);
    });
  }
}

function faq() {
  document.getElementById("faq1").className = "contsec hide";
  document.getElementById("faq2").className = "contsec show1";
}

function faq1() {
  document.getElementById("faq2").className = "contsec hide";
  document.getElementById("faq1").className = "contsec show1";
}

function feedback() {
  var feed = document.getElementById("crem").value;
  if (feed == "") {
    document.getElementById("feedreq").className = "show1 red";
  } else {
    document.getElementById("feedreq").className = "hide red";
    document.getElementById("contact1").className = "contact-form hide";
    document.getElementById("contact2").className = "contact-form1 show1";
    var feedId;
    var pr = dbOperations.getFeedback();
    pr.then(data => {
      if (data == 0) {
        feedId = "1";
        localStorage.feed = "1";
      } else {
        var value = dbOperations.feedbacks[data - 1];
        feedId = parseInt(value) + 1;
        localStorage.feed = feedId.toString();
      }
      var obj1 = new Feedback(feedId, feed);
      dbOperations.addFeedback(obj1);
    }).catch(err => {
      console.log("error" + err);
    });
  }
}

function cargo() {
  var billno = document.getElementById("cargo-id").value;
  if (billno == "") {
    document.getElementById("req").className = "show1 red";
  } else {
    document.getElementById("req").className = "hide red";
    var pr = dbOperations.searchOrder(billno);
    pr.then(data => {
      document.getElementById("tr").className = "track show1";
      document.getElementById("nae").innerHTML = data.name;
      document.getElementById("cnae").innerHTML = data.company;
      document.getElementById("contae").innerHTML = data.contact;
      document.getElementById("ddae").innerHTML = data.date;
      var q = new Date();
      var m = q.getMonth() + 1;
      var d = q.getDate();
      var y = q.getFullYear();
      document.getElementById("dateae").innerHTML = d+"/"+m+"/"+y;
      document.getElementById("statusae").innerHTML = data.status;
    }).catch(err => {
      console.log("error" + err);
    })
  }
}

