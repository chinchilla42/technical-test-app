<template>
    <div>
        <h3>Liste de pages</h3>
        <ul>
            <Item v-for="item in items" :key="item.slug" :item="item" />
        </ul>
    </div>
</template>

<script>
import Item from '@/components/list/item'

export default {
    components: { Item },
    data () {
        return {
            items: [
                {
                    name: "Maliki",
                    slug: "maliki"
                },
                {
                    name: "Thinkerview",
                    slug: "thinkerview"
                },
                {
                    name: "Yatuu",
                    slug: "yatuu"
                },
                {
                    name: "François Theurel",
                    slug: "francois-theurel"
                },
            ]
        }
    }
}
</script>