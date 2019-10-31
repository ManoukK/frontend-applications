<template>
    <div>
        <!--code van Kim-->

        <article v-for="item in sieradenafrika" v-bind:key="item.cho.value"> 
         <h3>{{ item.title.value }}</h3>
        <p>{{ item.placeInAfrikaLabel.value }}</p>
        <img v-bind:src="item.img.value" alt="">
        </article>

  </div>
</template>

<script>
export default {
    props: {
        sieradenafrika: null
    },
    created(){
        const sieradenafrika = this.sieradenafrika;
        console.log(sieradenafrika);
    }
}

</script>

<style>

</style>