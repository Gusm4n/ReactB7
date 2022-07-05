type Props = {
    title?: string;
}


const Header = ( { title }: Props ) => {
    return (
        <header>
            <h1>{ title }</h1>
            <hr />
        </header>
    )
}

export default Header;