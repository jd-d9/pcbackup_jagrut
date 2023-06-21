<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resources')" :mode="storeResButtonMode">Stored Resources</base-button>
        <base-button @click="setSelectedTab('add-resources')" :mode="addResButtonMode">Add Resources</base-button>
    </base-card>
    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>
</template>

<script>
    import StoredResources from './StoredResources.vue'
    import AddResources from './AddResources.vue'
    export default {
        components: {
            StoredResources,
            AddResources
        },
        data() {
            return {
                selectedTab: 'stored-resources',
                storedResources: [
                    {
                        id: 'official-guide', 
                        title: 'Official Guide', 
                        description: 'The official vue.js documentation', 
                        link: 'https://vuejs.org'
                    },
                    {
                        id: 'google', 
                        title: 'Google', 
                        description: 'Learn more and more on using Google', 
                        link: 'https://google.com'
                    },
                ]
            }
        },
        provide() {     // To providing ------ and then inject resources in StoredResources.vue file, must check it.
            return {
                resources: this.storedResources,    // Here, provide resources to lower component.....child to child and child.
                addResource: this.addResource,
                deleteResource: this.removeResource
            }
        },
        computed: {
            storeResButtonMode() {
                return this.selectedTab === 'stored-resources' ? null : 'flat'
            },                                    // For toggle hover/active effect of button
            addResButtonMode() {
                return this.selectedTab === 'add-resources' ? null : 'flat'
            }
        },
        methods: {
            setSelectedTab(tab) {
                this.selectedTab = tab;
            },
            addResource(title, description, url) {
                const newResource = {
                    id: new Date().toISOString(),
                    title: title,
                    description: description,
                    link: url
                }
                this.storedResources.push(newResource);
                this.selectedTab = 'stored-resources';
            },
            removeResource(resId) {
                const resIndex = this.storedResources.findIndex(res => res.id === resId);
                this.storedResources.splice(resIndex,1);
            }
        }
    }
</script>