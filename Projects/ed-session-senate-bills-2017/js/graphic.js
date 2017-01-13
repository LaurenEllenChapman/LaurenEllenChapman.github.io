//Edit 'key' and 'columns' to connect your spreadsheet

//enter google sheets key here
var key =
  "1R8Blchikk7GpEMcjbGsNLmGxnFK_eCbaeVjaf7SfThY";
 

  
//"data" refers to the column name with no spaces and no capitals
//punctuation or numbers in your column name
//"title" is the column name you want to appear in the published table
var columns = [{
  "data": "Name",
  "title": "Name"
}, {
  "data": "Slug",
  "title": "Title"
}, {
  "data": "Description",
  "title": "Description"
}, {
  "data": "Status",
  "title": "Status"
}];
 

$(document).ready(function() {

  function initializeTabletopObject() {
    Tabletop.init({
      key: key,
      callback: function(data, tabletop) {
        writeTable(data); //call up datatables function
      },
      simpleSheet: true,
      debug: false
    });
  }

  initializeTabletopObject();

  function writeTable(data) {
    //select main div and put a table there
    //use bootstrap css to customize table style: http://getbootstrap.com/css/#tables
    $('#graphic').html(
      '<table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-condensed table-responsive" id="mySelection"></table>'
    );

    //initialize the DataTable object and put settings in
    $("#mySelection").DataTable({
      "autoWidth": false,
      "data": data,
      "columns": columns,
      "order": [
        [0, "asc"]
      ], //order on second column
      "pagingType": "simple" //no page numbers
        //uncomment these options to simplify your table
        //"paging": false,
        //"searching": false,
        //"info": false
    });
  }
});
//end of writeTable
