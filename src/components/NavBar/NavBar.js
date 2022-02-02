import './NavBar.css'

const NavBar = () => {
    return (
        <div class="container">
        <div class="bar">
            <a class="brand" href="index.html">
                <h1 class="brand__name no-margin centrar-texto">i<span class="brand__bold">Market</span></h1>
            </a>

            <nav class="navegation">
                <a href="celulares.html" class="navegation__link">Celulares</a>
                <a href="notebooks.html" class="navegation__link">Notebooks</a>
                <a href="tablets.html" class="navegation__link">Tablets</a>
                <a href="accesorios.html" class="navegation__link">Accesorios</a>
            </nav>
        </div>
        </div>
    )
  }

export default NavBar;