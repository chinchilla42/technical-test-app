<template>
    <div>
        <h3>Liste de pages</h3>
        <ul>
            <!-- <Link v-for="item in listOfItems" :key="item.slug"/> -->
            <Link v-for="item in listOfItems" :pageName="item.pageName" :slug="item.slug" :key="item.slug"/>
        </ul>
    </div>
</template>

<script>
import Link from '@/components/list/link'
import { mapState } from 'vuex'

export default {
    components: { Link },
    computed : {
        ...mapState({
            listOfItems: "listOfItems"
        })
    },
    data () {
        return {
        }
    }
}
</script>