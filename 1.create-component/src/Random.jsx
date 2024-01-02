function Random(){
    let number = Math.random()*10;

    return <h2 style={{backgroundColor:"red"}}>Your random number is {Math.floor(number)}</h2>
}

export default Random;