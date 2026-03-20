var dataJson = [
    {
        "name": "Data Modeling",
        "width": "80%"
    }, {
        "name": "BPMN",
        "width": "85%"
    }, {
        "name": "Documentation",
        "width": "90%"
    },{
        "name": "Excel",
        "width": "70%"
    }, {
        "name": "SQL",
        "width": "75%"
    },
    {
        "name": "Power BI",
        "width": "70%"
    }
];

var raw_html = "";
var raw_progress = "";

dataJson.forEach(function(item){
    raw_progress += `<p class="txt-color">${item.name}</p>
    <div class="progress mb-5 p-0">
      <div class="filled-progress-bar" style="width: ${item.width}">${item.width}</div>
    </div>`
    createRow(raw_progress)
})

function createRow(data) {
    raw_html += "<div class=\"col-lg-6 col-sm-10 col-md-6\">".concat(data, "</div>");
    raw_progress = "";
}
document.getElementById('progress-data').innerHTML = raw_html;
