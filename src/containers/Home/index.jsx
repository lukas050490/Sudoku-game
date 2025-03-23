import { useState } from "react";
import { Container, ButtonContainer} from "./styles"
import { Table } from "../../components/Table";
import { getDeepCopy } from "../../utils/helpers";
import { compareSudoku, solver } from "../../utils/validators";
import { Button } from "../../components/Button";

const initial = [
    [-1, 5, -1, 9, -1, -1, -1, -1, 2],
    [8, -1, -1, -1, 4, -1, 3, -1, 7],
    [-1, -1, -1, 2, 8, -1, 1, 9, -1],
    [5, 3, 8, 6, -1, 7, 9, 4, -1],
    [-1, 2, -1, 3, -1, 1, -1, -1, -1],
    [1, -1, 9, 8, -1, 4, 6, 2, 3],
    [9, -1, 7, 4, -1, -1, -1, -1, -1],
    [-1, 4, 5, -1, -1, -1, 2, -1, 9],
    [-1, -1, -1, -1, 3, -1, -1, 7, -1],
]
function Home() {
    const [sudokuArr, setSudokuArr ] = useState(initial);
    
    const checkSudoku = () => {
        const sudoku = getDeepCopy(initial)
        solver(sudoku)
        let compare = compareSudoku(sudokuArr, sudoku)

        if(compare.isComplete) return alert('Parabéns! Você completou o Sudoku')
        if(compare.isSolveble) return alert('Continue tentando!')
        
        return alert('Sudoku não foi resolvido, tente novamente!')
    }

    const solveSudoku = () => {
        let sudoku = getDeepCopy(initial)
        solver(sudoku)
        setSudokuArr(sudoku)
    }

    const resetSudoku = () => {
        let sudoku = getDeepCopy(initial)
        setSudokuArr(sudoku)
    }


    return(
        <Container>
            <h1>Sudoku Game</h1>
            <Table
              sudokuArr={sudokuArr}
              setSudokuArr={setSudokuArr}
              initialArr={initial}
            />
            <ButtonContainer>
              <Button backcolor1="tomato" onClick={checkSudoku}>Checar</Button>
              <Button backcolor2="orange" onClick={solveSudoku}>Resolver</Button>
              <Button backcolor3="aqua" onClick={resetSudoku}>Resetar</Button>
            </ButtonContainer>
        </Container>
    )
}

export default Home;