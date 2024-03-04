function saveText() {
    var text = document.getElementById('inputText').value;

    var lines = text.split('\n');

    var currentQuestion = '';
    var currentOptions = [];
    var currentAnswer = '';


    for (var i = 0; i < lines.length; i++) {
        if (lines[i].includes('?')) {
            currentQuestion = lines[i];
        }
        else if (lines[i].includes('*')) {
            currentAnswer = lines[i];
        }
        else if (lines[i] !== '\n') {
            currentOptions.push(lines[i]);
        }
      
            var questionObject = {
                question: currentQuestion,
                options: currentOptions,
                answer: currentAnswer
            };
           
     
    }

    console.log(questionObject);
}
