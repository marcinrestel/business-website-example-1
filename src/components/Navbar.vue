<template>
    <b-navbar toggleable="sm" type="light" variant="light" fixed="top">
        <div class="container">
            <b-navbar-brand router-link to="/index">Fake Company</b-navbar-brand>
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav class="ml-auto">
                    <b-nav-item router-link to="/index">Product</b-nav-item>
                    <b-nav-item router-link to="/about">Company</b-nav-item>
                    <b-nav-item router-link to="/contact">Contact</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </div>

    </b-navbar>
</template>

<script>
export default {
  name: "navbar"
};
</script>

<style scoped lang="scss">
    @import '../const.scss';

    .nav-link.active::after{
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        background-color: $primary-color;
    }
    .nav-link::after {
        content: '';
        display: block;
        width: 0;
        height: 2px;
        background-color: $primary-color;
        transition: width .3s;
    }
    .nav-link:hover::after {
        width: 100%;
        transition: width .3s;
    }
</style>


