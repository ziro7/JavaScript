//Examination 1 in week 3 of Programming
//
//My program should solve the following problem at my workplace:
//As a Tester i create a bug, with some specific information, state and who it has been assigned to. The bug should be trackable in regards to who it is assigned
// it's state and so on.

//The program should have a create funktion, creating a bug with some information

var bug1 = {name:"Login fejl", type:"bug", state:"new",assignedTo:"Jens Udvikler", severity:"Critical" }

//the program should have an array where all new bugs are added.

var allBugs = [];
allBugs.push(bug1);

//Both tester and developer should have a function that return all of the bugs they are assigned to.

function bugsForUser(nameOfUser){
    for (i=0; i<allBugs.length;i++){
        if (allBugs[i].assignedTo === nameOfUser){
            console.log(allBugs[i].name);
        }
    }
}

//they can call it and get a list of the bugs they have assigned
bugsForUser("Jens Udvikler");

//Both should have an option to change state and assignedTo on a specific bug, by calling a funktion with information about bug name, new state and new assignedTo.

function assignedBug (name, state, assignedTo){
    for (i=0;i<allBugs.length;i++){
        if(allBugs[i].name === name){
            allBugs[i].assignedTo = assignedTo;
            allBugs[i].state = state;
            console.log ("The bug \"" + allBugs[i].name + "\" has it state changed to \"" + state + "\" and have been assigned to \"" + assignedTo +"\"");
        }
    }
}

assignedBug ("Login fejl", "resolved", "test testersen");



