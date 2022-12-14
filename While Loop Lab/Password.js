function password(input){
    let index = 0;
    let name = input[index];
    index++;
    let realPassword = input[index];
    index++;

    while(true){
        let password = input[index];
        if(realPassword === password){
            console.log(`Welcome ${name}!`);
            break;
        }else{
            index++;
            continue;

        }

    }

}
password(["Nakov","1234","Pass","1324","1234"]);
password(["Gosho","secret","secret"]);



function password(input) {
    let username = input[0];
    let password = input[1];
    let data = input[2];
    let index = 3;
    while (data !== password) {
      data = input[index];
      index++;
    }
    console.log(`Welcome ${username}!`);
  }
  password(["Nakov","1234","Pass","1324","1234"]);
  password(["Gosho","secret","secret"]);

  

