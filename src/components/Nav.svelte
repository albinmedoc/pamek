<script>
    import HamburgerButton from './HamburgerButton.svelte';
	export let segment;
	
    let active = false;

    function hide(){
        active = false;
    }
    
    $:  hide(segment);
</script>

<style>
    header {
        background-color: #333333;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        height: 150px;
    }

    .logo {
        width: 300px;
    }

    nav {
        /* 100% - logo_size */
        width: calc(100% - 300px);
        z-index: 3;
    }

    nav > :global(button) {
        display: none;
    }

    nav > ul {
        margin: 0;
        padding: 0;
        height: 100%;
        list-style-type: none;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        text-align: center;
    }

    nav > ul > li > a {
		margin: 0 0 0 25px;
        text-decoration: none;
        font-size: 30px;
        color: #E3E3E3;
    }

    [aria-current] {
        position: relative;
        display: inline-block;
    }

    [aria-current]::after {
        position: absolute;
        content: '';
        width: 100%;
		height: 2px;
		border-radius: 1px;
        background-color: #E3E3E3;
        display: block;
        bottom: -1px;
    }

    @media (max-width: 1170px) {
        nav {
            position: absolute;
            width: 100vw;
            top: 150px;
            left: 0;
        }

        nav > :global(button) {
            display: block;
            position: absolute;
            top: -100px;
            right: 100px;
        }

        nav > ul {
            display: none;
		}
		
        nav.is-active {
            height: calc(100vh - 150px);
		}
		
        nav.is-active > ul {
            display: block !important;
            background-color: #333333;
		}
		
		nav > ul > li {
			padding: 15px 0;
		}

        nav > ul > li > a {
            font-size: 35px;
        }
    }
    /* Move logo because padding changes on container class. */
    @media (max-width: 650px) {
        nav > :global(button) {
            right: 20px;
        }
    }

    @media (max-width: 430px) {
        .logo {
            width: 250px;
        }
    }

    @media (max-width: 350px) {
        .logo {
            width: 200px;
        }

        header {
            height: 100px;
        }

        nav {
            top: 100px;
        }

        nav.is-active {
            height: calc(100vh - 100px);
		}

        nav > :global(button) {
            top: -75px;
        }
    }
</style>

<header class="container">
    <a href=".">
        <img
            class="logo"
            src="/images/logo.svg"
            alt="The Coffee Lounge"
            title="Startsida" />
    </a>
    <nav class="{active ? 'is-active' : ''}">
		<HamburgerButton bind:active={active} />
        <ul>
            <li>
                <a
                    rel="prefetch"
                    aria-current={segment === undefined ? 'page' : undefined}
                    href="/">
                    Hem
                </a>
            </li>
            <li>
                <a
                    rel="prefetch"
                    aria-current={segment === 'om-oss' ? 'page' : undefined}
                    href="/#om-oss">
                    Om oss
                </a>
            </li>
            <li>
                <a
                    rel="prefetch"
                    aria-current={segment === 'vara-tjanster' ? 'page' : undefined}
                    href="/#vara-tjanster">
                    Våra tjänster
                </a>
            </li>
            <li>
                <a
                    aria-current={segment === 'kontakt' ? 'page' : undefined}
                    href="kontakt">
                    Kontakt
                </a>
            </li>
        </ul>
    </nav>
</header>
