// Function to display a welcome message with the current date
const welcomeMessage = () => {
  const today = new Date().toDateString();
  document.getElementById(
    "welcomeMessage"
  ).textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

// Function to display a new workout routine
const displayWorkoutRoutine = () => {
  const workoutInput = document.querySelector("#workoutInput").value;
  const workoutList = document.querySelector("#workoutList");
  const newWorkout = document.createElement("li");
  newWorkout.textContent = workoutInput;
  workoutList.appendChild(newWorkout);
};

// Event listener for the workout submit button
document
  .querySelector("#submitWorkout")
  .addEventListener("click", displayWorkoutRoutine);

// Function to add a new goal to the goal list
const addNewGoal = () => {
  const goalInput = document.querySelector("#goalInput").value;
  const goalList = document.querySelector("#goalList");

  // Check if the goal already exists
  const existingGoals = goalList.querySelectorAll("li");
  let isDuplicate = false;
  existingGoals.forEach((goal) => {
    if (goal.textContent === goalInput) {
      isDuplicate = true;
    }
  });
  if (isDuplicate) {
    alert("Goal already exists!");
    return;
  }

  // Add the new goal to the list
  const newGoal = document.createElement("li");
  newGoal.textContent = goalInput;
  goalList.appendChild(newGoal);
};

// Event listener for the goal submit button
document.querySelector("#submitGoal").addEventListener("click", addNewGoal);

// Function to update water intake
let waterIntake = 0;
const updateWaterIntake = (change) => {
  waterIntake += change;
  document.querySelector(
    "#waterIntakeDisplay"
  ).textContent = `${waterIntake} glasses 💦`;
};

// Event listeners for increasing and decreasing water intake
document
  .querySelector("#increaseWater")
  .addEventListener("click", () => updateWaterIntake(1));
document
  .querySelector("#decreaseWater")
  .addEventListener("click", () => updateWaterIntake(-1));

// Function to update progress charts
const updateProgressCharts = () => {
  document.querySelector("#workoutProgress").textContent =
    "Updated workout progress...";
  document.querySelector("#calorieIntakeProgress").textContent =
    "Updated calorie intake progress...";
};

updateProgressCharts();

// Function to toggle between dark and light themes
const toggleTheme = () => {
  document.body.classList.toggle("dark-theme");
};

// Event listener for the theme toggle button
document.querySelector("#themeToggle").addEventListener("click", toggleTheme);

// Function to submit meal plan
const submitMealPlan = (event) => {
  event.preventDefault();
  alert("Meal plan submitted successfully! 🍴");
};

// Event listener for the meal plan form submit button
document
  .querySelector("#mealPlanForm")
  .addEventListener("submit", submitMealPlan);
