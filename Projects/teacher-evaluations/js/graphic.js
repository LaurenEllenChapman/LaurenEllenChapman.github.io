//Edit 'key' and 'columns' to connect your spreadsheet

//enter google sheets key here
var key =
  "15cLwq1HgV0924WpZcDNN7CbUUcmvy1kpOqFZODQH6oI";

//"data" refers to the column name with no spaces and no capitals
//punctuation or numbers in your column name
//"title" is the column name you want to appear in the published table
var columns = [{
  "data": "District",
  "title": "School district"
}, {
  "data": "School",
  "title": "School"
}, {
  "data": "Ineffective",
  "title": "Ineffective"
}, {
  "data": "Improvement",
  "title": "Needs improvement"
}, {
  "data": "Effective",
  "title": "Effective"
}, {
  "data": "Highly",
  "title": "Highly effective"
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
        [2, "desc"]
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
