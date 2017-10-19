<template>
    <header>
        <nav class="navbar fixed-top navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="#">Gess</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Main <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Activities</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contacts</a>
                    </li>
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

<script>
    export default {
        data() {
            return {
                name: 'header'
            }
        }
    }
</script>

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
            &.active {
                border-top: 3px solid #017101;
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