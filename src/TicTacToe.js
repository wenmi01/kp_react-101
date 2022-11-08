import { useState, createContext, useContext } from "react";

const PlayerContext = createContext();
const JContext = createContext();

function TicTacToe(){

    const [player, setPlayer] = useState("O");

    const togglePlayer = () =>{
        setPlayer(player == "O" ? "X" : "O");
    }

    return(
        <div>
            <PlayerContext.Provider value={{player, togglePlayer}}>
                <div>
                    <TicBox/>
                    <TicBox/>
                    <TicBox/>
                </div>
                <div>
                    <TicBox/>
                    <TicBox/>
                    <TicBox/>
                </div>
                <div>
                    <TicBox/>
                    <TicBox/>
                    <TicBox/>
                </div>
            </PlayerContext.Provider>
        </div>
    )
}

function TicBox(){

    const {player, togglePlayer} = useContext(PlayerContext);

    const [playerChar, setPlayerChar] = useState();
    const [hasMoved, setHasMoved] = useState('');

    const onClickHandler = (event) => {
        setPlayerChar(player);
        setHasMoved("hasMove");
        togglePlayer();
    }

    return (
        <div className={"square " + hasMoved } onClick={onClickHandler}>
            {playerChar}
        </div>
    )
}

export default TicTacToe;