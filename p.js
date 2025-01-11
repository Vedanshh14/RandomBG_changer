const random_color = function()  {
    let color = Math.floor(Math.random() * 16777216);
    let str = '#' + color.toString(16).padStart(6,'0');
    return str;
};

// const ans = random_color(); // Call the function using the variable name
// console.log(ans);

const color_chager = function(){
   
    document.getElementById("container").style.backgroundColor = random_color();
}
let intervalReference;

document.getElementById('startButton').addEventListener('click',function(){
    intervalReference=setInterval(color_chager,1500);

});

document.getElementById('stopButton').addEventListener('click',function(){
    clearInterval( intervalReference);

});




