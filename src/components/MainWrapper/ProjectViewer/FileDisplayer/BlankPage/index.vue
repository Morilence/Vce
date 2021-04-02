<template>
    <div class="blank-page">
        <h2>Vce</h2>
    </div>
</template>

<script>
export default {
    name: "BlankPage"
};
</script>

<style lang="stylus" scoped>
@keyframes bgskim {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: -200% 0;
    }
}

.blank-page
    display: flex
    flex-direction: row
    justify-content: center
    align-items: center

    position absolute
    top 0
    left 0

    width 100%
    height 100%
    background-color rgb(240, 240, 240)

    opacity 0
    transition opacity 0.3s
    z-index -1

    &.show
        opacity 1
        z-index 10

    h2
        font-size: 150px;

        background-image: linear-gradient(-45deg, #fff, #f5f5f5 50%, #fff);
        background-clip: text;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        color: transparent;
        background-size: 200% 100%;

        animation-name bgskim
        animation-duration 2s
        animation-timing-function linear
        animation-iteration-count infinite
</style>
