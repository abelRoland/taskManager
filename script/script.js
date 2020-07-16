'use strict'
'debugger'

/**
  * Task Manager v1
  * assigns a list of tasks to a list of students
  * it returns an array where each key is a student name
  * it returns an array where each key is an activity
  * it returns an array which sort randomly the activities
  * it prints the results
  * 
  * It manages just values that are divisible by each other.
  * It throws an error for values with rest.
  * It manages just values on the same proportion, double or triple of proportion, in both ways.
  * It throws an error with proportions bigger than the described above.
  * 
  * @param {string[]} students - an array of student names
  * @param {string[]} tasks - an array of tasks
  * @param {string[]} random - an array the random sorting of the tasks
  * @returns {Object} the student/task assignments, printed inside <p> tags.
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

    students();
 
});
    // Manages the input of the students
    const students = () => {
    
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
        
        //Console the result of the students    
        console.log('Students: ', names);
        //Send the result of the students for the task function
        tasksInput(names);
    }

    // Manages the input of tasks
    const tasksInput = (names) => {
        
        const taskAmount = prompt('How many activities?');

        if (!taskAmount) { return; }

        const taskNumber = Number(taskAmount);
        if (isNaN(taskNumber)) {
        alert(`${taskAmount} is not a valid number`);
        return;
        }

        const longer = (taskNumber >= names.length) ? taskNumber : names.length;
        const smaller = (taskNumber >= names.length) ? names.length : taskNumber;
        
        if (longer % smaller !== 0) {
            alert(`Sorry, activities and students needs to be divisible.\nTry it again`);
            return; 
        }

        let tasks = []
            for (let j = 0; j < taskNumber; j++) {
                tasks.push(prompt('Task N. ' + (j+ 1)));
            };

        // Console the tasks
        console.log('Tasks: ', tasks);
        // Send the students and the tasks for the shuffling function
        shuffling(names, tasks);  
    };

    // Manages the shuffling of tasks
    const shuffling = (names, tasks) => {
        let l = tasks.length;
        let k = 0;
        const randomTasks = [];
        while (l--) {
            k = Math.floor(Math.random() * (l+1));
                randomTasks.push(tasks[k]);
                tasks.splice(k,1);
            }
        // Console the shuffled tasks
        console.log('Shuffled Tasks: ', randomTasks);
        // Send the name and shuffle for printing function
        printing(names, randomTasks)
    };

    const printing = (names, random) => {
        let smaller = (random.length <= names.length) ? random.length : names.length;
        let print = `<h2>Your result is: </h2>`;
    
        for (let i = 0; i < smaller; i++) {
            if (random.length === names.length) {
                print += `<p>Student ${names[i]} needs to do activity: ${random[i]}</p>`;    
            }  else if (random.length > names.length) {
                if (random.length === (2 * names.length)) {
                    print += `<p>Student ${names[i]} needs to do activities: ${random[i * 2]} and ${random[(i * 2) + 1]}</p>`;
                } else if (random.length === (3 * names.length)) {
                    print += `<p>Student ${names[i]} needs to do activities: ${random[i * 2]}, ${random[(i * 2) + 1]} and ${random[(i * 2) + 2]}</p>`;
                } else {
                    alert('Error. Maximum 3 activities by student.')
                    return;
                }
            } else if (random.length < names.length) {
                if (names.length === (2 * random.length)) {
                    print += `<p>Students ${names[i * 2]} and ${names[(i * 2) + 1]} needs to do activity: ${random[i]}</p>`;
                }
                else if (names.length === (3 * random.length)) {
                    print += `<p>Students ${names[i * 2]},  ${names[(i * 2) + 1]} and ${names[(i * 2) + 2]} needs to do activity: ${random[i]}</p>`;
                } else {
                    alert('Error. Maximum 3 students per activity.')
                    return;
                }
            }
            
            document.getElementById('solution').innerHTML= print; 
        };
    };