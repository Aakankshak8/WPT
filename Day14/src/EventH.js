function Event(){
    let handlefunction = (event)=>{
        alert("Hey...Thanks for clicked me!")
    }
    return(
        <>
        <button onClick={handlefunction}>Click me!</button>
        </>
    )
};
export default Event;