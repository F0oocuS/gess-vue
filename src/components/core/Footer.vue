<template>
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <div class="address">
                        <p class="address__item">49a, Volodymyrska str. Kyiv Ukraine 01001</p>
                        <p class="address__item">+38 044 585 83 46</p>
                        <a href="" class="address__item">info@gessukraine.com.ua</a>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="address">
                        <p class="address__item">6 Grosvenor Street Mayfair London W1K 4QW </p>
                        <p class="address__item">+44 203 356 4906</p>
                        <a href="" class="address__item">info@gessukraine.com.ua</a>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="address">
                        <p class="address__item">1555 SW 21st Ave Fort Lauderdale FL 33312 </p>
                        <p class="address__item">+44 203 356 4906</p>
                        <a href="" class="address__item">info@gessukraine.com.ua</a>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="address">
                        <p class="address__item">300 E Esplanade Dr Oxnard, CA 93036 </p>
                        <p class="address__item">+44 203 356 4906</p>
                        <a href="" class="address__item">info@gessukraine.com.ua</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="create-by">
            Developed by <a href="https://github.com/F0oocuS" target="_blank">Ihor Yaremko</a>
        </div>
    </footer>
</template>

<style lang="scss">
    .footer {
        margin-top: auto;
        border-top: 4px solid #bcc900;
        background: #017101;
        font-size: 14px;
    }
    .address {
        padding: 20px 0;
        height: 100%;
        color: #fff;
        text-align: center;
        &__item {
            margin: 0;
            color: inherit;
            &:hover, &:focus, &:active {
                color: inherit;
            }
        }
        @media(max-width: 991px) and (min-width: 768px) {
            font-size: 12px;
        }
    }
    .create-by {
        padding: 5px;
        text-align: center;
        color: #fff;
        font-weight: 300;
        background-color: #026202;
        a {
            color: inherit;
            &:hover, &:focus, &:active {
                color: inherit;
            }
        }
    }
</style>