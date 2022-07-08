const data = [
  {
    img: "pictures/imageMask-1.svg",
    topic: "Acceleration",
    subject: "Physics",
    grade: "Grade 7",
    "grade-update": "+2",
    units: 4,
    lessons: 18,
    topics: 24,
    class: "Mr. Frank's class B",
    students: 50,
    "start-date": "21-Jan-2020",
    "end-date": "21-Aug-2020",
  },
  {
    img: "pictures/imageMask-1.png",
    topic: "Acceleration",
    subject: "Physics",
    grade: "Grade 7",
    "grade-update": "+2",
    units: 4,
    lessons: 18,
    topics: 24,
    class: "Mr. Frank's class B",
    students: 50,
    "start-date": "21-Jan-2020",
    "end-date": "21-Aug-2020",
  },
  {
    img: "pictures/imageMask-3.png",
    topic: "Acceleration",
    subject: "Physics",
    grade: "Grade 7",
    "grade-update": "+2",
    units: 4,
    lessons: 18,
    topics: 24,
    class: "Mr. Frank's class B",
    students: 50,
    "start-date": "21-Jan-2020",
    "end-date": "21-Aug-2020",
  },
  {
    img: "pictures/imageMask-2.png",
    topic: "Acceleration",
    subject: "Physics",
    grade: "Grade 7",
    "grade-update": "+2",
    units: 4,
    lessons: 18,
    topics: 24,
    class: "Mr. Frank's class B",
    students: 50,
    "start-date": "21-Jan-2020",
    "end-date": "21-Aug-2020",
  },
];



var item = document.getElementsByClassName("grid-container");

function setData() {
  
  for (let i = (data.length-1); i >=0; i--) {
    const template = `<div class="template1">
    <div class="flex-row">
    <div class="flex-row template-margin">
          <img class="img" src=${data[i].img} alt="course image"/>
        </div>
        <div style="width: 100%; margin-left: 50px; margin-top: 20px">
          <div class="flex-row">
            <p class="font-16 p-size">Acceleration</p>
            <img class="favourite" src="pictures/favourite.svg"  alt="favourite icon" tabindex="0"/>
          </div>
    
          <div class="flex-row font-12 row2">
            <p>Physics</p>
            <hr id="hr1" />
            <p>Grade 7&nbsp;</p>
            <p style="color: green">+2</p>
          </div>
    
          <div class="flex-row font-12 units">
            <p><span>4</span>&nbsp;Units&nbsp;&nbsp;</p>
            <p><span>18</span>&nbsp;Lessons&nbsp;&nbsp;</p>
            <p><span>24</span>&nbsp;Topics&nbsp;&nbsp;</p>
          </div>
    
          <div class="select-div">
            <select class="font-16" title="select a class">
              <option value="class">Mr. Frank's class B</option>
              <option value="class">Mr. Frank's class B</option>
              <option value="class">Mr. Frank's class B</option>
            </select>
          </div>
    
          <div class="flex-row font-12 dates">
            <p>50 Students</p>
            <hr id="hr1" />
            <p>21-Jan-2020</p>
            <p>&nbsp;-&nbsp;</p>
            <p>21-Aug-2020</p>
          </div>
        </div>
      </div>
      <hr
        style="
          height: 1px;
          border-width: 0;
          color: rgb(0, 0, 0);
          background-color: gray;
          margin-top: 16px;
          opacity: 0.12;
        "
      />
    
      <div class="end-symbols">
        <img src="pictures/preview.svg" tabindex="0" alt="eye icon"/>
        <img src="pictures/manage course.svg" tabindex="0" alt="manage courses icon"/>
        <img src="pictures/grade submissions.svg" tabindex="0" alt="grade submission icon"/>
        <img src="pictures/reports.svg" tabindex="0" alt="report icon"/>
      </div>
    </div>`
    document.getElementById('grid-container').insertAdjacentHTML('afterbegin', template)
  }
// //   document.body.innerHTML = markup;
//   document.body.insertAdjacentHTML('afterbegin', markup);
// //   document.body.after
}

setData();
