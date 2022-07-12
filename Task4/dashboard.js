var data = [
    {
        img: "pictures/imageMask-1.svg",
        topic: "Acceleration",
        subject: "Physics",
        grade: "Grade 7",
        grade_update: "+2",
        units: 4,
        lessons: 18,
        topics: 24,
        "class": "Mr. Frank's class B",
        students: 50,
        "start-date": "21-Jan-2020",
        "end-date": "21-Aug-2020"
    },
    {
        img: "pictures/imageMask-1.png",
        topic: "Acceleration",
        subject: "Physics",
        grade: "Grade 7",
        grade_update: "+2",
        units: 4,
        lessons: 18,
        topics: 24,
        "class": "Mr. Frank's class B",
        students: 50,
        "start-date": "21-Jan-2020",
        "end-date": "21-Aug-2020"
    },
    {
        img: "pictures/imageMask-3.png",
        topic: "Acceleration",
        subject: "Physics",
        grade: "Grade 7",
        grade_update: "+2",
        units: 4,
        lessons: 18,
        topics: 24,
        "class": "Mr. Frank's class B",
        students: 50,
        "start-date": "21-Jan-2020",
        "end-date": "21-Aug-2020"
    },
    {
        img: "pictures/imageMask-2.png",
        topic: "Acceleration",
        subject: "Physics",
        grade: "Grade 7",
        grade_update: "+2",
        units: 4,
        lessons: 18,
        topics: 24,
        "class": "Mr. Frank's class B",
        students: 50,
        "start-date": "21-Jan-2020",
        "end-date": "21-Aug-2020"
    },
];
var item = document.getElementsByClassName("grid-container");
function setData() {
    for (var i = (data.length - 1); i >= 0; i--) {
        var template = "<div class=\"template1\">\n    <div class=\"flex-row\">\n    <div class=\"flex-row template-margin\">\n          <img class=\"img\" src=".concat(data[i].img, " alt=\"course image\"/>\n        </div>\n        <div style=\"width: 100%; margin-left: 50px; margin-top: 20px\">\n          <div class=\"flex-row\">\n            <p class=\"font-16 p-size\">Acceleration</p>\n            <img class=\"favourite\" src=\"pictures/favourite.svg\"  alt=\"favourite icon\" tabindex=\"0\"/>\n          </div>\n    \n          <div class=\"flex-row font-12 row2\">\n            <p>Physics</p>\n            <hr id=\"small_separator\" />\n            <p>Grade 7&nbsp;</p>\n            <p style=\"color: green\">+2</p>\n          </div>\n    \n          <div class=\"flex-row font-12 units\">\n            <p><span>4</span>&nbsp;Units&nbsp;&nbsp;</p>\n            <p><span>18</span>&nbsp;Lessons&nbsp;&nbsp;</p>\n            <p><span>24</span>&nbsp;Topics&nbsp;&nbsp;</p>\n          </div>\n    \n          <div class=\"select-div\">\n            <select class=\"font-16\" title=\"select a class\">\n              <option value=\"class\">Mr. Frank's class B</option>\n              <option value=\"class\">Mr. Frank's class B</option>\n              <option value=\"class\">Mr. Frank's class B</option>\n            </select>\n          </div>\n    \n          <div class=\"flex-row font-12 dates\">\n            <p>50 Students</p>\n            <hr id=\"small_separator\" />\n            <p>21-Jan-2020</p>\n            <p>&nbsp;-&nbsp;</p>\n            <p>21-Aug-2020</p>\n          </div>\n        </div>\n      </div>\n      <hr\n        style=\"\n          height: 1px;\n          border-width: 0;\n        //   color: rgb(0, 0, 0);\n          background-color: rgb(233, 233, 233);\n          margin-top: 16px;\n        //   opacity: 0.12;\n        margin-left:24px;\n          z-index=-1;\n        \"\n      />\n    \n      <div class=\"template-end-symbols\">\n        <img src=\"pictures/preview.svg\" tabindex=\"0\" alt=\"eye icon\"/>\n        <img src=\"pictures/manage course.svg\" tabindex=\"0\" alt=\"manage courses icon\"/>\n        <img src=\"pictures/grade submissions.svg\" tabindex=\"0\" alt=\"grade submission icon\"/>\n        <img src=\"pictures/reports.svg\" tabindex=\"0\" alt=\"report icon\"/>\n      </div>\n    </div>");
        var a = document.getElementById('grid-container');
        if (a !== null) {
            a.insertAdjacentHTML('afterbegin', template);
        }
    }
}
setData();
// *************************************************************ham-hover
var menu_icon = document.getElementById('ham-menu-icon');
var menu_dropdown = document.getElementById('ham-menu-div');
if (menu_icon !== null && menu_dropdown !== null) {
    menu_icon.addEventListener('mouseover', function handleMouseOver() {
        menu_dropdown.style.display = 'block';
    });
    menu_icon.addEventListener('mouseout', function handleMouseOut() {
        menu_dropdown.style.display = 'none';
    });
    menu_dropdown.addEventListener('mouseover', function handleMouseOver() {
        menu_dropdown.style.display = 'block';
    });
    menu_dropdown.addEventListener('mouseout', function handleMouseOut() {
        menu_dropdown.style.display = 'none';
    });
}
// *************************************************************notifications-hover
var el = document.getElementById('notifications-icon');
var hiddenDiv = document.getElementById('notifications-div');
if (hiddenDiv !== null && el !== null) {
    el.addEventListener('mouseover', function handleMouseOver() {
        hiddenDiv.style.display = 'block';
    });
    el.addEventListener('mouseout', function handleMouseOut() {
        hiddenDiv.style.display = 'none';
    });
    hiddenDiv.addEventListener('mouseover', function handleMouseOver() {
        hiddenDiv.style.display = 'block';
    });
    hiddenDiv.addEventListener('mouseout', function handleMouseOut() {
        hiddenDiv.style.display = 'none';
    });
}
// *************************************************announcement-hover
var el2 = document.getElementById('announcement-icon');
var hiddenDiv2 = document.getElementById('announcment-div');
if (el2 !== null && hiddenDiv2 !== null) {
    el2.addEventListener('mouseover', function handleMouseOver() {
        hiddenDiv2.style.display = 'block';
    });
    el2.addEventListener('mouseout', function handleMouseOut() {
        hiddenDiv2.style.display = 'none';
    });
    hiddenDiv2.addEventListener('mouseover', function handleMouseOver() {
        hiddenDiv2.style.display = 'block';
    });
    hiddenDiv2.addEventListener('mouseout', function handleMouseOut() {
        hiddenDiv2.style.display = 'none';
    });
}
