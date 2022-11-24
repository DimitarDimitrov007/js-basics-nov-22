function pipesInPool(input){
    let v = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let h = Number(input[3]);

    let p1Litres = p1 * h;
    let p2Litres = p2 * h;
    let poolVolumeAfter3Hours = p1Litres + p2Litres;
    let poolVolumePercent = (poolVolumeAfter3Hours * 100 ) / v;
    let p1Percent = (p1Litres * 100) / poolVolumeAfter3Hours;
    let p2Percent = (p2Litres * 100) / poolVolumeAfter3Hours;

    if(p1Litres + p2Litres <= v){
        console.log(`The pool is ${poolVolumePercent.toFixed(2)}% full. Pipe 1: ${p1Percent.toFixed(2)}%. Pipe 2: ${p2Percent.toFixed(2)}%.`);

    }else{
        let overflow = (p1Litres + p2Litres) - v;
        console.log(`For ${h} hours the pool overflows with ${overflow.toFixed(2)} liters.`);

    }
    
}
pipesInPool(["1000","100","120","3"]);
pipesInPool(["100","100","100","2.5"]);
