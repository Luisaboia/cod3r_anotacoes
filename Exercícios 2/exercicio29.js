function receiveBetterStudent(grades){
    let average = 0;
    let betterStudent = {};
    for(let student in grades){
        for(let grade of grades[student]){
            average += grade;
        }
        average = average / grades[student].length;
        if(!betterStudent.media || average > betterStudent.media){
            betterStudent.nome = student;
            betterStudent.media = average;
        }
        average = 0;
    }
    return betterStudent;
}

console.log(receiveBetterStudent({Joao: [8, 7.6, 8.9, 6], // média 7.625
Mariana: [9, 6.6, 7.9, 8], // média 7.875
Carla: [7, 7, 8, 9] // média 7.75
}))