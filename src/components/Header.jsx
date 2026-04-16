function Header({ alternarTema }) {
return (
    <header>
    <h1 id="nome-rosiane">Rosiane Sales</h1>

    <nav>
        <ul>
        <li><a href="#sobre">Sobre Mim</a></li>
        <li><a href="#projetos">Projetos</a></li>
        <li><a href="#contato">Contato</a></li>
        <button onClick={alternarTema}>🌙</button>
        </ul>
    </nav>
    </header>
)
}

export default Header