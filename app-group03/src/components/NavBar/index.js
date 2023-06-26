export default function NavBar() {
    return (
        <header>
            <div className="topo">
                <div className="logo">
                    <i>Logo</i>
                    Digital Store
                </div>
                <div className="search">
                    <input placeholder="Pesquisar produto..."/>
                    <button className="icon-button">
                        <i>Procurar</i>
                    </button>
                </div>
                <div className="topo-direito">
                    <a href="">Cadastra-se</a>
                    <button className="btn-primary">Entrar</button>
                    <button className="icon-button"><i>Carrinho de compras</i></button>
                </div>
            </div>
        </header>
        
    )
}