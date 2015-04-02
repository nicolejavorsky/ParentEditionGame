var sceneData = [
    { question: "Choose your gender", choices: [
        { answer: "I'm a Woman", next: 2 },
        { answer: "I'm a Man", next: 3}]
    }, //1
    { question: "It's your day off! You have five hours until you have to pick your kids up from school. You get out of bed and you realize that your daughter has been playing dress up with your clothes and now they're all over the floor. What do you do?", choices: [
        { answer: "Pick them up, fold them, and put them away.", next: 4},
        { answer: "You'll get to it later. Leave it there for now.", next: 5},
        ]
    }, //2
    { question: "It's your day off! You have five hours until you have to pick your kids up from school. You get out of bed and you realize that your kids have emptied your laundry basket onto the floor. What do you do?", choices: [
        { answer: "Pick them up and put them back in the laundry basket.", next: 6},
        { answer: "You'll get to it later. Leave it there for now.", next: 7},
        ]
    }, //3
    { question: "That took you exactly 16 minutes. You have have 4 hours and 44 minutes left on your day off. You are super hungry from picking up all those clothes. Time for breakfast. You walk into the kitchen and see that the sink is full of dirty dishes. What do you do?", choices: [
        { answer: "Do the dishes before you eat breakfast.", next: 8},
        { answer: "Eat breakfat and do the dishes later.", next: 9},
        ]
    }, //4
    { question: "Time for breakfast. You walk into the kitchen and see that the sink is full of dirty dishes. What do you do?", choices: [
        { answer: "Do the dishes before you eat breakfast.", next: 10},
        { answer: "Eat breakfat and do the dishes later.", next: 11},
        ]
    }, //5
    { question: "That took you exactly 4 minutes. You have have 4 hours and 56 minutes left on your day off. You are super hungry from picking up all those clothes. Time for breakfast. You walk into the kitchen and see that the sink is full of dirty dishes. What do you do?", choices: [
        { answer: "Do the dishes before you eat breakfast.", next: 12},
        { answer: "Eat breakfat and do the dishes later.", next: 13},
        ]
    }, //6
    { question: "Time for breakfast. You walk into the kitchen and see that the sink is full of dirty dishes. What do you do?", choices: [
        { answer: "Do the dishes before you eat breakfast.", next: 14},
        { answer: "Eat breakfat and do the dishes later.", next: 15},
        ]
    }, //7
    { question: "That took you exactly 11 minutes. Then, you eat breakfast. Now you have 4 hours and 13 minutes left on your day off.", choices: [
        { answer: "8 part 1", next: 11 },
        { answer: "8 part 2", next: 11},
        { answer: "8 part 3", next: 11},
        { answer: "8 part 4", next: 10}
        ]
    }, //8
    { question: "ninth question. What do you do", choices: [
        { answer: "9 part 1", next: 10 },
        { answer: "9 part 2", next: 11},
        { answer: "9 part 3", next: 11},
        { answer: "9 part 4", next: 11}
        ]
    }, //9
    { question: "you win", choices: [
        { answer: "try again", next: 1 }
        ]
    }, //10 WIN
    { question: "dead", choices: [
        { answer: "try again", next: 1 }
        ]
    } //11 DEAD
];

var ScenesModel = function(scenes) {
    var self = this;
    self.scenes = ko.observableArray(scenes);

    self.activequestion = ko.observable(scenes[0].question)
    self.activechoices = ko.observableArray(scenes[0].choices)

    self.nextScene = function(choice) {
        self.activequestion(scenes[choice.next - 1].question);
        self.activechoices(scenes[choice.next - 1].choices);
    }
};

ko.applyBindings(new ScenesModel(sceneData));

/*
        score
        pictures

*/