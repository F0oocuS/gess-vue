<template>
    <section class="contacts">
        <app-block-title :blockTitle="title"></app-block-title>

        <form>
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" name="name" class="form-control" placeholder="Name">
                        </div>

                        <div class="form-group">
                            <input type="text" name="company" class="form-control" placeholder="Company">
                        </div>

                        <div class="form-group">
                            <input type="text" name="email" class="form-control" placeholder="email">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <textarea name="feedback" placeholder="Type the message here"></textarea>
                        </div>
                    </div>
                    <button class="form-submit-btn" type="submit">Send</button>
                </div>
            </div>
        </form>
    </section>
</template>

<script>
    import BlockTitle from '../../general/BlockTitle.vue';

    export default {
        data() {
            return {
                title: 'Contacts us'
            }
        },
        components: {
            appBlockTitle: BlockTitle
        }
    }
</script>

<style lang="scss">
    .form-group {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
        input, textarea {
            padding: 10px 20px;
            background-color: #f6f6f6;
            border: 1px solid #dcddde;
            border-radius: 0;
            font-weight: 100;
            line-height: 1.63;
            color: #414042;
        }
        textarea {
            width: 100%;
            height: 184px;
            resize: none;
        }
    }
    .form-submit-btn {
        width: 150px;
        margin: 30px auto;
        padding: 5px 14px 5px 0;
        position: relative;
        background: transparent;
        border: 2px solid #bcc900;
        border-radius: 0;
        font-size: 16px;
        line-height: 1.82;
        text-transform: uppercase;
        transition: .4s;
        &:hover, &:active, &:focus {
            color: #fff;
            text-decoration: none;
        }
        &:hover {
            background-color: #bcc900;
            &:after {
                border-color: rgba(1, 113, 1, .75);
            }
        }
        &:after {
            content: '';
            display: block;
            width: 14px;
            height: 14px;
            position: absolute;
            top: calc(50% - 7px);
            right: 15px;
            border-right: 1px solid #bcc900;
            border-top: 1px solid #bcc900;
            transform: rotate(45deg);

        }
    }
</style>