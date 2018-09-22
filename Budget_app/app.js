// Budget Controller
var budgetController = (function() {
    
})();

// UI Controller
var UIController = (function() {
    
})();

// Global App Controller
var controller = (function(budgetCtrl, UICtrl) {
    var ctrlAddItem = function() {
        // get the field input data
        // add the itme to the budget controller
        // add the item to the UI
        // calculate the budget
        // display the budget on the UI  
        console.log('It works');
    }
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });
})(budgetController, UIController);