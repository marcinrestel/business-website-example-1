<template>
    <div class="test">
        <h1>{{naglowek}}</h1>
        <input type="text" v-model="naglowek">
        <button v-on:click="changeVisibility()">change</button>
        <div v-if="show">widac!</div>
        <div v-else>nie widać!</div>
        <div v-for="(item, key) in items" v-bind:key="key">{{item.title}}</div>
        <div>
            <input type="text" v-on:keyup="onkey">
            <br>
            <br>
            {{fullName}}
        </div>
        <div>
            {{msg}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'test',
    props: {
        msg: {
            type: String, //Object, Function, Number etc.
            default: 'Foobar'
        } 
    },
    data() {
        return {
            naglowek: "test",
            show: false,
            user: {
                firstName: "John",
                lastName: "Doe" 
            },
            items: [
                { title: 'item 1' },
                { title: 'item 2' },
                { title: 'item 3' }
            ]
        }
    },
    methods: {
        changeVisibility: function() {
            this.show = !this.show;
        },
        onkey: function(e){
            console.log(e.target.value)
        }
    },
    computed: {
        fullName: function() {
            return this.user.firstName + this.user.lastName
        }
    }
}
</script>

<style scoped>

</style>


