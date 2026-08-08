window.onload = function () {

    console.log("Smart College Website Loaded Successfully!");

};


// COURSE INFORMATION

function showCourse(course) {

    let title = "";
    let description = "";
    let duration = "";
    let subjects = "";
    let career = "";


    // COMPUTER SCIENCE

    if (course === "cse") {

        title = "Computer Science & Engineering";

        description =
        "Computer Science focuses on programming, software development, artificial intelligence and modern computer technologies.";

        duration = "4 Years";

        subjects =
        "Python, Java, Data Structures, DBMS, Web Development, Artificial Intelligence";

        career =
        "Software Developer, Web Developer, Data Analyst, AI Engineer";

    }


    // ELECTRONICS

    else if (course === "ece") {

        title = "Electronics & Communication Engineering";

        description =
        "Electronics focuses on electronic circuits, communication systems and embedded technologies.";

        duration = "4 Years";

        subjects =
        "Digital Electronics, Analog Electronics, Embedded Systems, Communication Systems";

        career =
        "Embedded Engineer, Electronics Engineer, Communication Engineer";

    }


    // MECHANICAL

    else if (course === "mech") {

        title = "Mechanical Engineering";

        description =
        "Mechanical Engineering focuses on design, manufacturing, machines and automation.";

        duration = "4 Years";

        subjects =
        "Thermodynamics, Machine Design, Manufacturing, CAD, Automation";

        career =
        "Mechanical Engineer, Design Engineer, Manufacturing Engineer";

    }


    // SHOW INFORMATION

    document.getElementById("courseTitle").innerText = title;

    document.getElementById("courseDescription").innerText = description;

    document.getElementById("courseDuration").innerText = duration;

    document.getElementById("courseSubjects").innerText = subjects;

    document.getElementById("courseCareer").innerText = career;

    document.getElementById("courseModal").style.display = "block";

}


// CLOSE POPUP

function closeCourse() {

    document.getElementById("courseModal").style.display = "none";

}
