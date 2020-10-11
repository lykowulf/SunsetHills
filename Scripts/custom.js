//how many buildings can see the sun
function sunsetFoundation() {
    //user inputs the numbers 
    let bldgHeight1 = Number(document.getElementById("txtSunsetIn1").value);
    let bldgHeight2 = Number(document.getElementById("txtSunsetIn2").value);
    let bldgHeight3 = Number(document.getElementById("txtSunsetIn3").value);
    let bldgHeight4 = Number(document.getElementById("txtSunsetIn4").value);
    let bldgHeight5 = Number(document.getElementById("txtSunsetIn5").value);



    //setting up an array from user input
    let bldgArray = [bldgHeight1, bldgHeight2, bldgHeight3, bldgHeight4, bldgHeight5];

    let newArray = [];
    let count = 1;
    let Sun = bldgArray[0];
    newArray.push(Sun);//pushes what the sun hits into a new array
    //Step 3: Traverse the aray from right to left and keep track of the buildings that can see the sunset

    for (let loop = 0; loop < bldgArray.length; loop++) {
        if (bldgArray[loop] > Sun) {
            count++;
            newArray.push(bldgArray[loop]);
            Sun = bldgArray[loop];



        }
    }
    //Step 4: Output to the user which buildings can see the sunset and how many buildings can see the sunset
    document.getElementById("pSunsetOut").innerHTML = `There are   ${count} buildings that can see the sun!: [${newArray.join(',')}]`
}