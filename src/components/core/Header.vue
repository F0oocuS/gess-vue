<template>
    <header>
        <nav class="navbar fixed-top navbar-expand-lg navbar-light">
            <router-link to="/" class="navbar-brand"><img src="../../assets/logoBig.png" alt=""></router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto ml-auto">
                    <router-link tag="li" to="/" class="nav-item" exact>
                        <a class="nav-link">Main <span class="sr-only">(current)</span></a>
                    </router-link><!--
                    <li class="nav-item">
                        <a class="nav-link" href="#activities">Activities</a>
                    </li>-->
                    <router-link tag="li" to="/about" class="nav-item">
                        <a class="nav-link">About us</a>
                    </router-link>
                    <router-link tag="li" to="/news" class="nav-item">
                        <a class="nav-link">News</a>
                    </router-link>
                    <router-link tag="li" to="/contacts" class="nav-item">
                        <a class="nav-link">Contacts</a>
                    </router-link>
                </ul>
                <div class="dop-info">
                    <ul class="phone-list">
                        <li class="phone-list__item">+38 044 585 83 46</li>
                        <li class="phone-list__item">+38 044 585 83 47</li>
                    </ul>
                    <ul class="language-list">
                        <li class="language-list__item"><a href="#">Eng</a></li>
                        <li class="language-list__item"><a href="#">Ukr</a></li>
                        <li class="language-list__item"><a href="#">Rus</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss">
    .navbar {
        padding-top: 0;
        padding-bottom: 0;
        border-bottom: 4px solid #bcc900;
        background-color: #fff;
        @media(max-width: 991px) {
            border-bottom: 0;
            background-color: rgba(255, 255, 255, .96);
        }
    }

    .navbar-brand {
        img {
            max-height: 40px;
        }
    }

    .navbar-toggler {
        margin-top: 7px;
        margin-bottom: 7px;
    }

    .navbar-collapse {
        @media(max-width: 991px) {
            border-bottom: 3px solid #017101;
        }
    }

    .navbar-nav {
        .nav-item {
            text-transform: uppercase;
            font-size: 14px;
            border-top: 3px solid transparent;
            &.active {
                border-top-color: #017101;
                .nav-link {
                    color: #017101;
                }
                @media(max-width: 991px) {
                    border: none;
                }
            }
            .nav-link {
                padding: 15px 20px;
                color: #000;
                &:hover, &:focus, &:active {
                    color: #017101;
                }
            }
            @media(max-width: 991px) {
                text-align: center;

            }
        }
    }

    .dop-info {
        display: flex;
        align-items: center;
        justify-content: center;
        .phone-list, .language-list {
            margin: 0;
            list-style: none;
            line-height: 1.42;
        }
        .phone-list {
            font-size: 14px;
        }
        .language-list {
            font-size: 10px;
            text-transform: uppercase;
            .language-list__item {
                a {
                    color: #000;
                    &:hover, &:focus, &:active {
                        text-decoration: none;
                        color: inherit;
                    }
                }
            }
        }
    }
</style>