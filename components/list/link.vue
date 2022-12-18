<template>
    <li>
        <a :href="`https://tipeee.com/${slug}`" target="_blank">{{ pageName }}</a>
    </li>
</template>

<script>
export default {
    props : {
        pageName: {
            required: true
        },
        slug: {
            required: true
        }
    }
 }
</script>
