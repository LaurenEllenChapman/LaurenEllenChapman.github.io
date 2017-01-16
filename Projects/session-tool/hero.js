// Auto-sorts list by date 
$(document).ready(function() {
    contactList.sort('date', { order: "desc" });
});

// Triggers interacting menus
$("#select1").change(function() {     
    if(typeof $(this).data("options") === "undefined"){
        $(this).data("options",$("#select2 option").clone());
    } 
    var id = $(this).val();
    var options = $(this).data("options").filter("[class=" + id + "]");
    $("#select2").html(options);
});

$("#select1").trigger("change");


//Original List.js structure for searchable list
var options = {
  valueNames: ['id', 'bill', 'topic', 'headline', 'date', 'body']
};


// Init list
var contactList = new List("contacts", options);

var 
  idField = $("#id-field"),
  billField = $("#bill-field"),
  topicField = $("#topic-field"),
  headlineField = $("#headline-field"),
  dateField = $("#date-field"),
  bodyField = $("#body-field"),
  addBtn = $("#add-btn"),
  editBtn = $("#edit-btn"),
  removeBtns = $(".remove-item-btn").hide(),
  editBtns = $(".edit-item-btn").hide(),
  editField = $("#edit-field").hide(),
  hideBtn = $(".hide-btn")

// Sets callbacks to the buttons in the list
refreshCallbacks();

addBtn.click(function() {
  contactList.add({
    id: Math.floor(Math.random() * 110000),
    bill: billField.val(),
    topic: topicField.val(),
    headline: headlineField.val(),
    date: dateField.val(),
    body: bodyField.val()
  });
  clearFields();
  refreshCallbacks();
});

editBtn.click(function() {
  var item = contactList.get("id", idField.val())[0];
  item.values({
    id: idField.val(),
    bill: billField.val(),
    topic: topicField.val(),
    headline: headlineField.val(),
    date: dateField.val(),
    body: bodyField.val()
  });
  clearFields();
  editBtn.hide();
  addBtn.show();
});

function refreshCallbacks() {
  // Needed to add new buttons to jQuery-extended object
  removeBtns = $(removeBtns.selector);
  editBtns = $(editBtns.selector);

  removeBtns.click(function() {
    var itemId = $(this).closest('ul').find('.id').text();
    contactList.remove('id', itemId);
  });

  editBtns.click(function() {
    var itemId = $(this).closest('ul').find('.id').text();
    var itemValues = contactList.get('id', itemId)[0].values();
    idField.val(itemValues.id);
    billField.val(itemValues.bill);
    topicField.val(itemValues.topic);
    headlineField.val(itemValues.headline);
    dateField.val(itemValues.date);
    bodyField.val(itemValues.body);

    editBtn.show();
    addBtn.hide();
  });
}

function clearFields() {
  billField.val("");
  topicField.val("");
  headlineField.val("");
  dateField.val("");
  bodyField.val("");
}
// Password-protected "hidden" edit button
hideBtn.click(function() {
	var password;
		var pass1="ipbs";
		password=prompt("Enter Password To View Page"," ");
		if (password==pass1) {
		alert("Correct password, click OK to enter.") }
		else
		{
		return false;
		}
  editBtns.toggle();
  removeBtns.toggle();
  $("#edit-field").toggle();
  
});