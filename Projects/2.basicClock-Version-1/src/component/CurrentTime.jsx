let CurrentTime = () =>{
    let date = new Date();
    // let minute = date.getMinutes();
    // let hour = date.getHours();
    // let second = date.getSeconds();

    return <div>This is the Current date {date.toLocaleDateString()} and time {date.toLocaleTimeString()}</div>
}

export default CurrentTime;