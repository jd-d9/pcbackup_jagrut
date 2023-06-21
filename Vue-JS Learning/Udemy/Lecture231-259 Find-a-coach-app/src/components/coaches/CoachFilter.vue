<template>
    <base-card>
        <h2>Find Your Coach</h2>
        <span class="filter-option">
            <input type="checkbox" id="frontend" checked @change="setFilter">
            <label for="frontend">Frontend</label>
        </span>
        <span class="filter-option">
            <input type="checkbox" id="backend" checked @change="setFilter">
            <label for="backend">Backend</label>
        </span>
        <span class="filter-option">
            <input type="checkbox" id="career" checked @change="setFilter">
            <label for="career">Career</label>
        </span>
    </base-card>
    <base-card>
        <div class="form-conrol">
            <label for="search">Search Coach</label>
            <input type="text" id="search" placeholder="search by name" v-model="search"  @input="setFilter">
        </div>
    </base-card>
</template>

<script>
    export default {
        emits: ['change-filter'],
        data() {
            return {
                filters: {
                    frontend: true,
                    backend: true,
                    career: true,
                    search: '',
                }
            }
        },
        methods: {
            setFilter(event) {
                const inputId = event.target.id;
                let isActive = null;
                if(inputId == 'frontend' || inputId == 'backend' || inputId == 'career') {
                    isActive = event.target.checked;
                }
                else {
                    this.filters.frontend = false;
                    this.filters.backend = false;
                    this.filters.career = false;
                    isActive = event.target.value;
                    if(!isActive) {
                        this.filters.frontend = true;
                        this.filters.backend = true;
                        this.filters.career = true;
                    }
                }
                const updatedFilters = {
                    ...this.filters,
                    [inputId]: isActive
                };
                this.filters = updatedFilters;
                this.$emit('change-filter', updatedFilters);
            }
        }
    }
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}

.form-conrol label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}
.form-conrol input{
  display: block;
  width: 100%;
  border: 1px solid #3d008d;
  font: inherit;
  padding: 7px 10px;
  border-radius: 5px;
}

.form-conrol input:focus {
  background-color: #f0e6fd;
  outline: none;
}
</style>