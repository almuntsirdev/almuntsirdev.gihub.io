var dataJson = [
  {
    "img": "https://cdn-icons-png.flaticon.com/128/644/644667.png",
    "title": "Electronic Invoice",
    "Team leader and working on The backend, Deploying Oracle Database, Apex and ORDS in AWS by using EC2 Service and S3 for backup and Recovery, Data Modeling and Creating functions for automating Email.",
    "url": "https://apex.oracle.com/pls/apex/r/invoice_app/invoice-system/login?session=5920322759476"
  },
  {
    "img": "https://cdn-icons-png.flaticon.com/128/5806/5806364.png",
    "title": "Hospital Management System Architecture",
    "paragraph": "Creating Database Schema by Oracle Database Modeler Establishing relationships between different tables, such as foreign key relationships, and ensuring data integrity.",
    "url": "https://www.linkedin.com/pulse/hospital-management-system-project-oracle-sql-md-almuntsir/"
  }
];

var raw_html = "";
dataJson.forEach(function (item) {
  raw_html += `<div
    class="col-lg-5"
    style="min-height: fit-content; cursor: pointer;
    "
    >
    <div
      style="padding: 12px; height: 200px;"
      class="project-card progress mb-5 align-items-center">
      <div class="mt-3 ms-3 row">
    
        <h2 style="color: txt-color; font-size: medium"><b>${item.title}</b></h2>
        <p style="color: txt-color; font-size: small">
        ${item.paragraph}
        </p>
        <a
        rel="noopener"
        href="${item.url}"
        target="_blank"
        title="${item.title}">
        <button type="button" class="btn btn-secondary">
          View
        </button></a>
      </div>
    </div>
    </div>`;
})
document.getElementById('project-container').innerHTML = raw_html;
