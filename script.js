const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;

// nextBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     formStepsNum++;
//     updateFormSteps();
//     updateProgressbar();
//   });
// });
function nextStep() {
  formStepsNum++;
    updateFormSteps();
    updateProgressbar();
}

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
};


// $(document).ready(function(){

//   $('.checkoption').click(function() {
//      $('.checkoption').not(this).prop('checked', false);
//   });

// });
// $(document).ready(function(){

//   $('.checkoption-2').click(function() {
//      $('.checkoption-2').not(this).prop('checked', false);
//   });

// });
let array1 = [$("#thing1"), $("#thing2"), $("#thing3"), $("#thing4"), $("#thing5"), $("#thing6")]
let array2 = [$("#thing7"), $("#thing8"), $("#thing9"), $("#thing10"), $("#thing11"), $("#thing12")]
let array3 = [$("#thing13"), $("#thing14"), $("#thing15"), $("#thing16"), $("#thing17"), $("#thing18")]

$(document).ready(function(){
  array1.forEach((item) => {
    $(item).click(function() {
      $('.checkoption').not(this).prop('checked', false);
      console.log(item)
   });
  })


});
$(document).ready(function(){

  array2.forEach((item) => {
    $(item).click(function() {
      $('.checkoption-2').not(this).prop('checked', false);
   });
  })


});
$(document).ready(function(){

  array3.forEach((item) => {
    $(item).click(function() {
      $('.checkoption-3').not(this).prop('checked', false);
   });
  })


});

$("#next-page-1").click(function() {
  let checkArray = array1.find(element => element.prop("checked") === true )
  console.log(checkArray)
  $("#checkoption").prop("checked")
  if (checkArray) {
    alert("checked");
    nextStep()
  } else {
    alert("You didn't check it!");
  }
})
