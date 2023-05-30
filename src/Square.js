import './Square.scss'
export const Square = ({value,onSquareClick})=>{
    
    return(
        <div className="square">
            <button className="button" onClick={onSquareClick}>{value}</button>
        </div>
    )
}