<template>
    <form v-on:submit="addPage">
        <h3>Ajouter une page</h3>
        <div>
            <label>Nom :</label>
            <input
                class="mb-16"
                id="name"
                v-model="fields.name"
                type="text"
                required
            />
        </div>
        <div>
            <label>Slug :</label>
            <input
                class="mb-16"
                id="slug"
                v-model="fields.slug"
                type="text"
                required
            />
        </div>
        <button class="btn btn-primary" type="submit">Ajouter</button>
    </form>
</template>

<script>
export default {
    data () {
        return {
            fields: {
                name: null,
                slug: null
            }
        }
    },
    methods: {
        addPage(e)
        {
            e.preventDefault()
            this.$store.dispatch('addNewItem', {
                data: {
                    pageName: this.fields.name,
                    slug: this.fields.slug
                }
            });
            event.target.reset();
            console.log(this.fields.name);
            console.log(this.fields.slug);
        }
    }
}
</script>