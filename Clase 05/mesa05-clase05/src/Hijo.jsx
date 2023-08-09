function Hijo({count, setCount}) {
    function restar1() {
        setCount(count - 1)
    }
    function sumar1() {
        setCount(count + 1)
    }
    function resetear() {
        setCount(0)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={restar1}>restar1</button>
            <button onClick={sumar1}>sumar 1</button>
            <button onClick={resetear}>resetear</button>
        </div>
    )
}
export default Hijo