type Props = {
    text: string;
    clickFn: () => void;
}

export const Botao = ( { text, clickFn }: Props ) =>{
    const handleClick = () =>{
        alert('Clicou!')
    }
    return(
        <button onClick={clickFn}>
           {text}
        </button>
    )
}