import { useState, useRef, useMemo, useCallback } from 'react'
import BotaoIncrementar from '../../components/BotaoIncrementar/botaoIncrementar'

function Exercicios () {
    // EXEMPLO COM USEREF
    const paragraphRef = useRef(null);
    const adicionarTexto = () => {
        if (paragraphRef.current) {
            paragraphRef.current.innerText += ' Texto adicionado ';
        }
    };

    // EXEMPLO COM USEMEMO
    const [numero, setNumero] = useState(0);
    const calcularParOuImpar = (num) => {
        console.log("Calulando...");
        return num % 2 === 0 ?  'Par' : 'Impar';
    }
    const tipoNumero = useMemo(() => calcularParOuImpar(numero), [numero]);

    // EXEMPLO COM USECALLBACK
    const [count , setCount] = useState(0);
    const incrementar = useCallback(() => {
        setCount(count + 1);
    }, [count])

    return (
        <>
            <h1>Exemplo de useRef</h1>
            <p ref={paragraphRef}>Este é um parágrafo.</p>
            <button onClick={adicionarTexto}>Adicionar texto</button>
            <h1>Exemplo de useMemo</h1>
            <p>{numero} é um número {tipoNumero}</p>
            <button onClick={() => setNumero(numero + 1)}>Incrementar</button>
            <h1>Exemplo de useCallback</h1>
            <p>Contagem: {count}</p>
            <BotaoIncrementar incrementar={incrementar} />
        </>
    )
}

export default Exercicios