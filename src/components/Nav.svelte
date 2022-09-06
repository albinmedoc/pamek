<script>
    import HamburgerButton from './HamburgerButton.svelte';
    export let segment;

    let active = false;

    function hide() {
        active = false;
    }

    $: hide(segment);
</script>

<header class="container">
    <a href=".">
        <img
            class="logo"
            src="/images/logo_text.svg"
            alt="Pamek AB"
            title="Startsida"
        />
    </a>
    <nav class={active ? 'is-active' : ''}>
        <HamburgerButton bind:active />
        <ul>
            <li>
                <a
                    rel="prefetch"
                    aria-current={segment === undefined ? 'page' : undefined}
                    href="/"
                    on:click={hide}
                >
                    Hem
                </a>
            </li>
            <li>
                <a
                    rel="prefetch"
                    aria-current={segment === 'om-oss' ? 'page' : undefined}
                    href="/#om-oss"
                    on:click={hide}
                >
                    Om oss
                </a>
            </li>
            <li>
                <a
                    rel="prefetch"
                    aria-current={segment === 'vara-tjanster'
                        ? 'page'
                        : undefined}
                    href="/#vara-tjanster"
                    on:click={hide}
                >
                    Våra tjänster
                </a>
            </li>
            <li>
                <a
                    aria-current={segment === 'kontakt' ? 'page' : undefined}
                    href="kontakt"
                    on:click={hide}
                >
                    Kontakt
                </a>
            </li>
            <li>
                <a
                    aria-current={segment === 'partners' ? 'page' : undefined}
                    href="partners"
                    on:click={hide}
                >
                    Samarbetspartners
                </a>
            </li>
        </ul>
    </nav>
</header>

<style>
    header {
        background-image: url("/images/header_bg.svg");
        background-size: 100% 100%;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        height: 150px;
        border-bottom: 2px solid #000;
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

    /* nav > ul > li {
        display: none;
    }

    nav > ul > li:nth-child(-n + 4) {
        display: block;
    } */

    nav > ul > li > a {
        margin: 0 0 0 25px;
        text-decoration: none;
        font-size: 30px;
        color: #000;
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
        background-color: #000;
        display: block;
        bottom: -1px;
    }

    @media (max-width: 1350px) {
        nav {
            position: absolute;
            width: 100vw;
            top: 217px;
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
            background-color: #00afdf;
        }

        nav > ul > li {
            padding: 15px 0;
            display: block;
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
