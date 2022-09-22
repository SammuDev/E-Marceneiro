<template>
    <!-- <div id="navbar"> -->
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow">
            <div class="container">

                <a class="navbar-brand" href="/">
                    <img src="../assets/brand/logo.png" alt="e-marceneiro" width="48" height="48">
                    {{menuTitle}}</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav px-3">
                        <li class="nav-item">
                            <a class="nav-link" href="/homeview">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/orcview">Orçamentos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/clientview">Clientes</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/productview">Insumos</a>
                        </li>
                    </ul>

                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/">Sair</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/helpview">Ajuda</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    <!-- </div> -->
</template>

<script>



export default {

    props: {
        menuTitle: {}
    }
}
</script>

<style scoped>
.navbar.navbar-dark.bg-dark {
    background-color: #181848 !important;
}


</style>
    