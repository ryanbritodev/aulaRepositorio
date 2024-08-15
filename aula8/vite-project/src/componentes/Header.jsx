// ffc
// Não precisamos usar DIV, podemos usar Fragment
function Header() {

    const estadio = "Neo Quimíca Arena"
    // Tudo dentro de chaves, é interpretado como JavaScript

    return (
        <>
            <h1>🦅 Corinthians 🦅</h1>
            <p>Local: {estadio}</p>
        </>
    );
}

export default Header;