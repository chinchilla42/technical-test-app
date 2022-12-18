<template>
    <div class="layout-maxed">
        <h2 class="mt-24 mb-36">Test technique Tipeee</h2>
        <p> Nombre de pages : {{ numberOfPages }} </p>
        <section class="grid sm:grid-cols-2 gap-16">
            <AddItem />
            <List />
        </section>
    </div>
</template>

<script>
import AddItem from '@/components/list/addItem'
import List from '@/components/list/list'
import { mapState } from 'vuex'

export default {
    name: 'IndexPage',
    components: { AddItem, List },
    computed: {
        ...mapState (["numberOfPages"])
    }

}
</script>
