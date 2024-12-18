let students = [
        {
            name: "Alice",
            age: 20,
            marks: {
                math: 85,
                science: 90,
                english: 88
            }
        },
        {
            name: "Joy",
            age: 20,
            marks: {
                math: 82,
                science: 87,
                english: 95
            }
        },
        {
            name: "John",
            age: 20,
            marks: {
                math: 86,
                science: 89,
                english: 92
            }
        }
    ];

    // Add a new student object to the array
    students.push(
        {
            name: "David",
            age: 20,
            marks: {
                math: 80,
                science: 85,
                english: 92
            }
        }
    );

    // Calculate and display the average marks for each student
    students.forEach(student => {
        const marks = student.marks;
        const totalMarks = marks.math + marks.science + marks.english;
        const averageMarks = totalMarks / 3;
        student.averageMarks = averageMarks;
        console.log(`${student.name} - Average Marks: ${averageMarks.toFixed(2)}`);
    });

    // Find and print the student with the highest average marks
    let highestAvgStudent = students[0];

    students.forEach(student => {
        if (student.averageMarks > highestAvgStudent.averageMarks) {
                highestAvgStudent = student;
        }
    });

     console.log(`Student with highest average marks: ${highestAvgStudent.name} - Average Marks: ${highestAvgStudent.averageMarks.toFixed(2)}`);
