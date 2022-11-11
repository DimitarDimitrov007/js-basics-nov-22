function repainting(input){
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let paintThinner = Number(input[2]);
    let workHours = Number(input[3]);
    let bags = 0.4;
    
     let totalMaterialCost = (nylon +2) * 1.5 + (paint +(paint * 0.1)) * 14.5 + paintThinner * 5 + bags;
     let workCost = (totalMaterialCost * 0.3) * workHours;
     let totalSum = totalMaterialCost + workCost;
     console.log(totalSum);


}
repainting(["10","11","4","8"]);
repainting(["5","10","10","1"]);
