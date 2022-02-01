function calculate () {
    var totalCalories="";
    const age = document.getElementById('age');
    const gender = document.getElementById('gender');
    const weight = document.getElementById('weight');
    const height = document.getElementById('height');
    const activity = document.getElementById('act');
    const error = document.getElementById('error');  

    if (age.value === '' || weight.value === '' || height.value === '' ||age.value < 1) {
        error.textContent='Please make sure the values you entered are correct';
      } else if(gender.value == 'male' && activity.value =="1") {
        totalCalories = 1.2 * (66.5 + (13.75 * parseFloat(weight.value)) + (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value)));
        var a=totalCalories;
        localStorage.setItem("myValue", a);
        window.location.href = "index.html";
        location.href="calorieTrackScreen.html";
        return totalCalories;
      } else if(gender.value == 'male' && activity.value == "2") {
        totalCalories.value = 1.375 * (66.5 + (13.75 * parseFloat(weight.value)) + (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value)));
        location.href="calorieTrackScreen.html";
      } else if (gender.value == 'male' && activity.value == "3") {
        totalCalories.value = 1.55 * (66.5 + (13.75 * parseFloat(weight.value)) + (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value)));
        location.href="calorieTrackScreen.html";
      } else if(gender.value == 'male' && activity.value == "4") {
        totalCalories.value = 1.725 * (66.5 + (13.75 * parseFloat(weight.value)) + (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value)));
        location.href="calorieTrackScreen.html";
      } else if(gender.value == 'male' && activity.value == "5") {
        totalCalories.value = 1.9 * (66.5 + (13.75 * parseFloat(weight.value)) + (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value)))
        ;
        location.href="calorieTrackScreen.html";
      } else if(gender.value == 'female' && activity.value == "1") {
        totalCalories.value = 1.2 * (655 + (9.563 * parseFloat(weight.value)) + (1.850 * parseFloat(height.value)) - (4.676 * parseFloat(age.value)));
        location.href="calorieTrackScreen.html";
      } else if(gender.value == 'female' && activity.value == "2") {
        totalCalories.value = 1.375 * (655 + (9.563 * parseFloat(weight.value)) + (1.850 * parseFloat(height.value)) - (4.676 * parseFloat(age.value)));
        location.href="calorieTrackScreen.html";
      } else if(gender.value == 'female' && activity.value == "3") {
        totalCalories.value = 1.55 * (655 + (9.563 * parseFloat(weight.value)) + (1.850 * parseFloat(height.value)) - (4.676 * parseFloat(age.value)));
        location.href="calorieTrackScreen.html";
      } else if(gender.value == 'female' && activity.value == "4") {
        totalCalories.value = 1.725* (655 + (9.563 * parseFloat(weight.value)) + (1.850 * parseFloat(height.value)) - (4.676 * parseFloat(age.value)));
        location.href="calorieTrackScreen.html";
      } else {
        totalCalories.value = 1.9 * (655 + (9.563 * parseFloat(weight.value)) + (1.850 * parseFloat(height.value)) - (4.676 * parseFloat(age.value)));
        location.href="calorieTrackScreen.html";
      } 

}     

