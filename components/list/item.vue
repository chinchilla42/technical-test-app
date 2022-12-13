<template>
    <li>
        <a :href="`https://tipeee.com/${item.slug}`" target="_blank">{{ item.name }}</a>
    </li>
</template>

<script>
export default {
    props: ['item']
}
</script>
