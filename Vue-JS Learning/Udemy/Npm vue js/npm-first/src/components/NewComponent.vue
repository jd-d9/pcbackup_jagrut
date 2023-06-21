<template>
    <li>
        <h2>{{ name }}</h2>  <!-- mention props value here -->
        <button @click="showDetails">{{toggleVar ? 'Hide' : 'Show'}} Details</button>
        <button @click="deleteFriend(id)">Delete</button>
        <ul v-if="toggleVar">
          <li><strong>Phone:</strong> {{ phoneNumber }}</li>
          <li><strong>Mail:</strong> {{ mailId }}</li>
        </ul>
      </li>
</template>
<script>
    export default {
        // props: [     // props property only take array. and value will be return in camelCash and mention this values in the template tag in mustache.
        //     'ind',
        //     'name',
        //     'phoneNumber',
        //     'mailId'
        // ],
        props: {         // We can write props in object and validating it as shown below..........
            id: {
                type: String
            },
            name: {
                type: String,        // type are --- String,Number,Boolean,Array,Object,Date,Function,Symbol
                required: true
            },
            phoneNumber: {
                type: String,
                required: true
            },
            mailId: {
                type: String,
                required: false,
                // default: we can give default value or function here.
            }
        },
        data() {
            return {
                toggleVar: false,
                friends:[
                    {
                    name: 'Paul Walker',
                    phone: '0123 4567 89',
                    email: 'paul@yahoo'
                    },
                    {
                    name: 'Win Diesel',
                    phone: '0987 6541 23',
                    email: 'wind@yahoo'
                    },
                    {
                    name: 'Lettie Jones',
                    phone: '0485 651 61',
                    email: 'lettie@yahoo'
                    }
                ]
            }
            // phoneVariable = this.phoneNumber         // to use props value outside, create a variable like this.
        },
        methods: {
            showDetails() {
                this.toggleVar = !this.toggleVar;
            },
            deleteFriend(id) {
                this.$emit('delete', id)
            }
        },
    }

</script>