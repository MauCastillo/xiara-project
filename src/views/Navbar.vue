<template>
<div id="page-wrapper">
    <!-- Header -->
    <section id="header">
        <!-- Logo -->
        <h1>
            <a href="index.html">Xiara Blog</a>
        </h1>

        <!-- Nav -->
        <nav id="nav">
            <ul>
                <li class="current">
                    <router-link to="/home">Inicio</router-link>
                </li>
                <li>
                    <router-link to="/projects">Proyectos</router-link>
                    <ul>
                        <li>
                            <a href="#">Lorem ipsum dolor</a>
                        </li>
                        <li>
                            <a href="#">Magna phasellus</a>
                        </li>
                        <li>
                            <a href="#">Etiam dolore nisl</a>
                        </li>
                        <li>
                            <a href="#">Veroeros feugiat</a>
                        </li>
                    </ul>
                </li>
                <li>
                     <router-link to="/blog">Articulos</router-link>
                </li>
                <li>
                     <router-link to="/article">About Me</router-link>
                </li>
            </ul>
        </nav>
    </section>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
</div>
</template>
