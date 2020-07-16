'use strict'
'debugger'

/**
  * Task Manager v1
  * assigns a list of tasks to a list of students
  * it returns an array where each key is a student name
  * it returns an array where each key is an activity
  * it returns an array which sort randomly the activities
  * it prints the results
  * @param {string[]} students - an array of student names
  * @param {string[]} tasks - an array of tasks
  * @param {string[]} random - the random sorting of the tasks
  * @returns {Object} the student/task assignments
  * @example
  *
  * // arguments
  * const names = [
  *   'Abel',
  *   'Alexsandra'
  *   'Feruz',
  *   'Razvan',
  *   'Yildiray',
  * ];
  * const tasks = ['ex1', 'ex2', 'ex3', 'ex4', 'ex5', 'ex6', 'ex7', 'ex8',  'ex9', 'ex10'];
  *
  * // print value
  *     Student Abel needs to do activities: ex4 and ex7
  *     Student Alexsandra needs to do activities: ex2 and ex6
  *     Student Feruz needs to do activities: ex3 and ex5
  *     Student Razvan needs to do activities: ex1 and ex9 
  *     Student Yildiray needs to do activities: ex10 and ex8 
  * 
  */

document.getElementById('start').addEventListener('click', function () {

const nameAmount = prompt('How many students?');

    if (!nameAmount) { return; }

    const nameNumber = Number(nameAmount);
    if (isNaN(nameNumber)) {
    alert(`${nameAmount} is not a valid number`);
    return;
    }

    const names = [];
        for (let i = 0; i < nameNumber; i++) {
            names.push(prompt('Student name ' + (i + 1)));
        };

    console.log(names);

const taskAmount = prompt('How many activities?');

    if (!taskAmount) { return; }

    const taskNumber = Number(taskAmount);
    if (isNaN(taskNumber)) {
    alert(`${taskAmount} is not a valid number`);
    return;
    }
    
    if (taskNumber % nameNumber !== 0) {
        alert(`Sorry, activities needs to be divisible by students.\nTry it again`);
        return; 
    }

    let tasks = []
        for (let j = 0; j < taskNumber; j++) {
            tasks.push(prompt('Task N. ' + (j+ 1)));
        };

    console.log(tasks);

        let l = tasks.length;
        let k = 0;
        const ranNums = [];
        while (l--) {
            k = Math.floor(Math.random() * (l+1));
                ranNums.push(tasks[k]);
                tasks.splice(k,1);
            }
    
        console.log(ranNums);

    let print = `<h2>Your result is: </h2>`;
    for (let i = 0; i < names.length; i++) {   
        print += `<p>Student ${names[i]} needs to do activities: ${ranNums[i * 2]} and ${ranNums[(i * 2) + 1]}</p>`;
        //print += 'Student ' + (names[i]) + ' needs to do activities: ' + (ranNums[i * 2]) + ' and ' + (ranNums[(i * 2) + 1]) + '<br>';
        document.getElementById('solution').innerHTML= print; 
    };

});