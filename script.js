const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472]; 

//katas1
        let d1 = " ";
        for (let i = 1; i <= 20; i++) {
        d1 += " " + i;
        }
        let katas1 = document.getElementById("katas1");
        let result1 = document.createTextNode(d1);
        katas1.appendChild(result1)


    
//katas2
        let d2 = " ";
        for (let i = 0; i < 21; i += 2) {
            d2 += " " + i;
        }
        let katas2 = document.getElementById("katas2");
        let result2 = document.createTextNode(d2);
        katas2.appendChild(result2)
  


//katas3
        let d3 = " ";
        for (let i = 1; i < 20; i += 2) {
            d3 += " " + i;
        }
        let katas3 = document.getElementById("katas3");
        let result3 = document.createTextNode(d3);
        katas3.appendChild(result3)
   
        
        
//katas4
        let d4 = " ";
        for (let i = 5; i <= 100; i += 5) {
            d4 += " " + i;
        }
        let katas4 = document.getElementById("katas4");
        let result4 = document.createTextNode(d4);
        katas4.appendChild(result4)
    

        
//katas5
        let d5 = " ";
        for (let i = 1; i <= 10; i++) {
            d5 += " " + (i * i);
        }
        let katas5 = document.getElementById("katas5");
        let result5 = document.createTextNode(d5);
        katas5.appendChild(result5)
    

//katas6
        let d6 = " ";
        for (let i = 20; i > 0; i--) {
            d6 += " " + i;
        }
        let katas6 = document.getElementById("katas6");
        let result6 = document.createTextNode(d6);
        katas6.appendChild(result6);
    
    
//katas7
        let d7 = " ";
        for (let i = 20; i > 0; i -= 2) {
            d7 += " " + i;
        }
        let katas7 = document.getElementById("katas7");
        let result7 = document.createTextNode(d7);
        katas7.appendChild(result7);
    
    
//katas8
        let d8 = " ";
        for (let i = 19; i > 0; i -= 2) {
            d8 += " " + i;
        }
        let katas8 = document.getElementById("katas8");
        let result8 = document.createTextNode(d8);
        katas8.appendChild(result8);


//katas9
        let d9 = " ";
        for (let i = 100; i > 0; i -= 5) {
            d9 += " " + i;
        }
        let katas9 = document.getElementById("katas9")
        let result9 = document.createTextNode(d9);
        katas9.appendChild(result9);

//katas10
        let d10 = " ";
        for (let i = 10; i > 0; i--) {
            d10 += " " + (i * i);
        }
        let katas10 = document.getElementById("katas10")
        let result10 = document.createTextNode(d10);
        katas10.appendChild(result10);

//katas11
        let katas11 = document.getElementById("katas11");
        let newArray1 = document.createTextNode(sampleArray);
        katas11.appendChild(newArray1);

//katas12
        for (let i = 0; i < sampleArray.length; i++) { 
            if ((sampleArray[i] % 2) === 0) {
                d12 = " " + sampleArray[i];
                let katas12 = document.getElementById("katas12");
            let result12 = document.createTextNode(d12);
            katas12.appendChild(result12);
            }
        }

//katas13 This one needs to be addressed again
        for (let i = 0; i < sampleArray.length; i++) { 
            if ((sampleArray[i] % 2) === 1) {
                d13 = " " + sampleArray[i];
            let katas13 = document.getElementById("katas13");
            let result13 = document.createTextNode(d13)
            katas13.appendChild(result13);
}
        }

//katas14
        let newArray4 = " ";
        for (let i = 0; i < sampleArray.length; i++) {
            newArray4 += " " + (sampleArray[i] * sampleArray[i]);
        }
        let katas14 = document.getElementById("katas14");
        let result14 = document.createTextNode(newArray4);
        katas14.appendChild(result14);


//katas15
        let d15 = 0;
        for (let i = 0; i <= 20; i++) {
            d15 = d15 + i;
        }
        let katas15 = document.getElementById("katas15");
        let result15 = document.createTextNode(d15);
        katas15.appendChild(result15);

//katas16
        let d16 = 0
        for (let i = 0; i < sampleArray.length; i++) {
            d16 = d16 + sampleArray[i];
        }
        let katas16 = document.getElementById("katas16");
        let result16 = document.createTextNode(d16);
        katas16.appendChild(result16);

//katas17
        let smallest = sampleArray[0]
        for (let i = 0; i < sampleArray.length; i++) {
            if (sampleArray[i]<smallest){
                smallest = sampleArray[i];
            }
        }
        let katas17 = document.getElementById("katas17");
        let result17 = document.createTextNode(smallest);
        katas17.appendChild(result17);


//katas18
        let largest = sampleArray[0]
        for (let i = 0; i < sampleArray.length; i++) {
            if (sampleArray[i]>largest){
                largest = sampleArray[i];
            }
        }
        let katas18 = document.getElementById("katas18");
        let result18 = document.createTextNode(largest);
        katas18.appendChild(result18);


//katas19
        for (let i = 0; i < 20; i++) {
        let katas19 = document.getElementById('katas19');
        let block = document.createElement("div");
        document.createElement("div");
        block.style.backgroundColor = "gray";
        block.style.width = "100px";
        block.style.height = "20px";
        block.style.marginTop = "2px";
        katas19.appendChild(block);
}

//katas20
for (let i = 5; i <= 100; i += 5) {
    let katas20 = document.getElementById('katas20');
    let block = document.createElement("div");
    document.createElement("div");
    block.style.backgroundColor = "gray";
    block.style.width = 100 + i + "px";
    block.style.height = "20px";
    block.style.marginTop = "2px";
    katas20.appendChild(block);
}

//katas21
for (let i = 0; i < 20; i++) {
    let katas21 = document.getElementById('katas21');
    let block = document.createElement("div");
    document.createElement("div");
    block.style.backgroundColor = "gray";
    block.style.width = sampleArray[i] + "px";
    block.style.height = "20px";
    block.style.marginTop = "2px";
    katas21.appendChild(block);
}


//katas22
for (let i = 0; i < 20; i++) {
    let katas22 = document.getElementById('katas22');
    let block = document.createElement("div");
    document.createElement("div");
    block.style.backgroundColor = "gray";
    block.style.width = sampleArray[i] + "px";
    block.style.height = "20px";
    block.style.marginTop = "2px";
    katas22.appendChild(block);
    if(i % 2 == 0) {
        block.style.background = "red";
    }
}

//katas23
for (let i = 0; i < 20; i++) {
    let katas23 = document.getElementById('katas23');
    let block = document.createElement("div");
    document.createElement("div");
    block.style.backgroundColor = "gray";
    block.style.width = sampleArray[i] + "px";
    block.style.height = "20px";
    block.style.marginTop = "2px";
    katas23.appendChild(block);
    if ((sampleArray[i] % 2) === 0) {
        block.style.backgroundColor = "red"

    }
}