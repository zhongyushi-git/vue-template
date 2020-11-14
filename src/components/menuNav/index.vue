<template>
    <div>
        <Menu :active-name="activeName" theme="light" width="auto" :open-names="openName">
            <Submenu v-for="(item,index) in menus" :name="item.id" :key="index">
                <template slot="title">
                    <Icon :type="item.icon"></Icon>
                    {{item.name}}
                </template>
                <MenuItem v-for="(child,key) in item.children" :name="child.id" :key="key" :to="child.route">
                {{child.name}}</MenuItem>
            </Submenu>
        </Menu>
    </div>
</template>

<script>

    export default {
        name: 'menuNav',
        props: {
            menus: {
                type: Array,
                default() {
                    return []
                }
            },
            activeName: {
                type: Number,
                default() {
                    return 1
                }
            },
            openName: {
                type: Array,
                default() {
                    return []
                }
            }
        },
    }
</script>

<style scoped>

</style>