// Code Keypad Component Here

function handlePassword() {
    return console.log('Entering password...')
}

function Keypad (){
    return (
        <div>
            <input type="password" onChange={handlePassword}></input>
        </div>
    )
}

export default Keypad;