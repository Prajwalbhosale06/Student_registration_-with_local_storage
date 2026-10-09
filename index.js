
const form = document.getElementById("studentForm");

function validate(event) {
    event.preventDefault();

    
    const student = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        roll: document.getElementById("roll").value,
        phone: document.getElementById("phone").value,
        studentClass: document.getElementById("class").value,
        division: document.getElementById("division").value,

        english: Number(document.getElementById("english").value),
        maths: Number(document.getElementById("maths").value),
        science: Number(document.getElementById("science").value),
        computer: Number(document.getElementById("computer").value),
        history: Number(document.getElementById("history").value)
    };

   
    const marks = [
        student.english,
        student.maths,
        student.science,
        student.computer,
        student.history
    ];

    
    const markIds = [
        "english", "maths", "science", "computer", "history"
    ];

    if (markIds.some(id =>
        document.getElementById(id).value.trim() === ""
    )) {
        alert("Please enter marks for all subjects.");
        return;
    }

    
    if (marks.some(mark => mark < 0 || mark > 100)) {
        alert("Enter marks between 0 and 100.");
        return;
    }

    
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    const percentage = total / 5;

    console.log("Total Marks:", total);
    console.log("Percentage:", percentage + "%");

    
    localStorage.setItem("studentData", JSON.stringify(student));

    
    window.location.href = "res.html";
}

form.addEventListener("submit", validate);
