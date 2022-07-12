var template_data = [
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
        start_date: "21-Jan-2020",
        end_date: "21-Aug-2020"
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
        start_date: "21-Jan-2020",
        end_date: "21-Aug-2020"
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
        start_date: "21-Jan-2020",
        end_date: "21-Aug-2020"
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
        start_date: "21-Jan-2020",
        end_date: "21-Aug-2020"
    },
];
var notification_data = [
    {
        topic: "License for introduction to Algebra has been assinged to your School",
        course: "",
        time_date: "15-sep-2018 at 07:21 pm",
        visited: false
    },
    {
        topic: "Lesson 3 Practice Worksheet overdue for Amy Santiago",
        course: "Advanced Mathematics",
        time_date: "15-sep-2018 at 05:21 pm",
        visited: true
    },
    {
        topic: "23 new students created",
        course: "",
        time_date: "14-sep-2018 at 01:21 pm",
        visited: false
    },
    {
        topic: "15 submissions ready for evaluation",
        course: "Basics of Algebra",
        time_date: "15-sep-2018 at 07:21 pm",
        visited: false
    },
    {
        topic: "License for basic concepts in Geometry has been assinged to your School",
        course: "",
        time_date: "15-sep-2018 at 07:21 pm",
        visited: false
    },
    {
        topic: "Lesson 3 Practice Worksheet overdue for Amy Santiago",
        course: "Advanced Mathematics",
        time_date: "15-sep-2018 at 05:21 pm",
        visited: true
    },
];
var announcement_data = [
    {
        professor: "Wilson Kumar",
        topic: "No classes will be held on 21st Nov",
        course: "",
        files: "2 files attached",
        time_date: "15-sep-2018 at 07:21 pm",
        visited: true
    },
    {
        professor: "Samson white",
        topic: "Guest lacture on Geometry on 20th September",
        course: "",
        files: "2 files attached",
        time_date: "15-sep-2018 at 07:21 pm",
        visited: false
    },
    {
        professor: "Wilson Kumar",
        topic: "Additional course material available on request",
        course: "Mathematics 101",
        files: "",
        time_date: "15-sep-2018 at 07:21 pm",
        visited: true
    },
    {
        professor: "Wilson Kumar",
        topic: "No classes will be held on 25th Dec",
        course: "",
        files: "",
        time_date: "15-sep-2018 at 07:21 pm",
        visited: false
    },
    {
        professor: "Wilson Kumar",
        topic: "Additional course materials available on request",
        course: "Mathematics 101",
        files: "",
        time_date: "15-sep-2018 at 07:21 pm",
        visited: false
    }
];
function setTemplateData() {
    for (var i = template_data.length - 1; i >= 0; i--) {
        var template = "<div class=\"template1\">\n    <div class=\"flex-row\">\n    <div class=\"flex-row template-margin\">\n          <img class=\"img\" src=".concat(template_data[i].img, " alt=\"course image\"/>\n        </div>\n        <div style=\"width: 100%; margin-left: 50px; margin-top: 20px\">\n          <div class=\"flex-row\">\n            <p class=\"font-16 p-size\">Acceleration</p>\n            <img class=\"favourite\" src=\"pictures/favourite.svg\"  alt=\"favourite icon\" tabindex=\"0\"/>\n          </div>\n    \n          <div class=\"flex-row font-12 row2\">\n            <p>Physics</p>\n            <hr id=\"small_separator\" />\n            <p>Grade 7&nbsp;</p>\n            <p style=\"color: green\">+2</p>\n          </div>\n    \n          <div class=\"flex-row font-12 units\">\n            <p><span>4</span>&nbsp;Units&nbsp;&nbsp;</p>\n            <p><span>18</span>&nbsp;Lessons&nbsp;&nbsp;</p>\n            <p><span>24</span>&nbsp;Topics&nbsp;&nbsp;</p>\n          </div>\n    \n          <div class=\"select-div\">\n            <select class=\"font-16\" title=\"select a class\">\n              <option value=\"class\">Mr. Frank's class B</option>\n              <option value=\"class\">Mr. Frank's class B</option>\n              <option value=\"class\">Mr. Frank's class B</option>\n            </select>\n          </div>\n    \n          <div class=\"flex-row font-12 dates\">\n            <p>50 Students</p>\n            <hr id=\"small_separator\" />\n            <p>21-Jan-2020</p>\n            <p>&nbsp;-&nbsp;</p>\n            <p>21-Aug-2020</p>\n          </div>\n        </div>\n      </div>\n\n      <hr\n      class=\"big-separator\"\n      />\n    \n      <div class=\"template-end-symbols\">\n        <img src=\"pictures/preview.svg\" tabindex=\"0\" alt=\"eye icon\"/>\n        <img src=\"pictures/manage course.svg\" tabindex=\"0\" alt=\"manage courses icon\"/>\n        <img src=\"pictures/grade submissions.svg\" tabindex=\"0\" alt=\"grade submission icon\"/>\n        <img src=\"pictures/reports.svg\" tabindex=\"0\" alt=\"report icon\"/>\n      </div>\n    </div>");
        var a = document.getElementById("grid-container");
        if (a !== null) {
            a.insertAdjacentHTML("afterbegin", template);
        }
    }
}
function setNotificationData() {
    for (var i = notification_data.length - 1; i >= 0; i--) {
        //check and apply data to html
        var back = "back";
        var src = "minus-button.png";
        var style = "";
        if (notification_data[i].visited === true) {
            back = "";
            src = "accept.png";
        }
        if (notification_data[i].course === "") {
            style = "display: none;";
        }
        var notification = " \n    <li class=\"".concat(back, "\">\n      <div class=\"notification-1\">\n        <p>").concat(notification_data[i].topic, "</p>\n        <img src=\"./pictures/").concat(src, "\">\n      </div>\n      <p class=\"notification-2\" style=\"").concat(style, "\">Course:&nbsp;").concat(notification_data[i].course, "</p>\n      <div class=\"notification-3\">\n        <p >").concat(notification_data[i].time_date, "</p>\n      </div>\n    </li>");
        var a = document.getElementById("notification-ul");
        if (a !== null) {
            a.insertAdjacentHTML("afterbegin", notification);
        }
    }
}
function setAnnouncementData() {
    for (var i = announcement_data.length - 1; i >= 0; i--) {
        //check and apply data to html
        var back = "back";
        var src = "minus-button.png";
        var style_course = "";
        var style_file = "";
        if (announcement_data[i].visited === true) {
            back = "";
            src = "accept.png";
        }
        if (announcement_data[i].course === "") {
            style_course = "display: none;";
        }
        if (announcement_data[i].files === "") {
            style_file = "display: none;";
        }
        var notification = " \n    <li class=\"".concat(back, "\">\n    <div class=\"announcment-1\">\n      <p><span>PA:</span>").concat(announcement_data[i].professor, "</p>\n      <img src=\"./pictures/").concat(src, "\">\n    </div>\n    <p class=\"announcment-2\">").concat(announcement_data[i].topic, "</p>\n    <p class=\"announcment-4\" style=\"").concat(style_course, "\">Course:&nbsp;").concat(announcement_data[i].course, "</p>\n    <div class=\"announcment-3\">\n      <p style=\"").concat(style_file, "\">").concat(announcement_data[i].files, "</p>\n      <p style=\"margin-left: auto;\">15-sep-2018 at 07:21 pm</p>\n    </div>\n  </li>");
        var a = document.getElementById("announcement_id");
        if (a !== null) {
            a.insertAdjacentHTML("afterbegin", notification);
        }
    }
}
setTemplateData();
setNotificationData();
setAnnouncementData();
// *****************************************ham-hover****************************************
var menu_icon = document.getElementById("ham-menu-icon");
var menu_dropdown = document.getElementById("ham-menu-div");
if (menu_icon !== null && menu_dropdown !== null) {
    menu_icon.addEventListener("mouseover", function handleMouseOver() {
        menu_dropdown.style.display = "block";
    });
    menu_icon.addEventListener("mouseout", function handleMouseOut() {
        menu_dropdown.style.display = "none";
    });
    menu_dropdown.addEventListener("mouseover", function handleMouseOver() {
        menu_dropdown.style.display = "block";
    });
    menu_dropdown.addEventListener("mouseout", function handleMouseOut() {
        menu_dropdown.style.display = "none";
    });
}
// ***********************************notifications-hover******************
var el = document.getElementById("notifications-icon");
var hiddenDiv = document.getElementById("notifications-div");
if (hiddenDiv !== null && el !== null) {
    el.addEventListener("mouseover", function handleMouseOver() {
        hiddenDiv.style.display = "block";
    });
    el.addEventListener("mouseout", function handleMouseOut() {
        hiddenDiv.style.display = "none";
    });
    hiddenDiv.addEventListener("mouseover", function handleMouseOver() {
        hiddenDiv.style.display = "block";
    });
    hiddenDiv.addEventListener("mouseout", function handleMouseOut() {
        hiddenDiv.style.display = "none";
    });
    //on focus show options
    //  el.addEventListener("focus", (event) => {
    //       hiddenDiv.style.display = "block";
    //       el.addEventListener("keypress", (event) => {
    //         if(event.key === "Enter"){
    //           console.log("success")
    //         }
    //         console.log('test')
    //       });
    //  });
    //  el.addEventListener("keypress", (event) => {
    //   // if(event.key === "Enter"){
    //   //   console.log("success1")
    //   // }
    //   console.log(event)
    // });
    //  el.addEventListener("blur", (event) => {
    //       hiddenDiv.style.display = "none";
    //  });
}
// *************************************announcement-hover***********************
var el2 = document.getElementById("announcement-icon");
var hiddenDiv2 = document.getElementById("announcment-div");
if (el2 !== null && hiddenDiv2 !== null) {
    el2.addEventListener("mouseover", function handleMouseOver() {
        hiddenDiv2.style.display = "block";
    });
    el2.addEventListener("mouseout", function handleMouseOut() {
        hiddenDiv2.style.display = "none";
    });
    hiddenDiv2.addEventListener("mouseover", function handleMouseOver() {
        hiddenDiv2.style.display = "block";
    });
    hiddenDiv2.addEventListener("mouseout", function handleMouseOut() {
        hiddenDiv2.style.display = "none";
    });
}
