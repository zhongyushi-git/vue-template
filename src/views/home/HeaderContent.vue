<template>
    <div>
        <Header>
            <div class="content">
                <div class="title">vue+iview后台管理系统</div>
                <div class="username">
                    <Dropdown>
                        <a href="javascript:void(0)">
                            {{loginUser.name}}
                            <Icon type="ios-arrow-down"></Icon>
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem @click.native="updatePwd">修改密码</DropdownItem>
                            <DropdownItem @click.native="logout">退出系统</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
        </Header>
    </div>
</template>

<script>

    export default {
        name: '',
        props: {
            loginUser: {
                type: Object,
                default() {
                    return {
                        name: '系统管理员'
                    }
                }
            }
        },
        methods: {
            updatePwd() {
                this.$emit('updatePassword')
            },
            logout() {
                this.$emit('logout')
            }
        },
    }
</script>

<style scoped>
    .content {
        color: #fff;
    }

    .title {
        float: left;
        font-size: 25px;
        font-weight: bold;
    }

    .username {
        float: right;
    }

    .username a {
        color: #fff;
    }
</style>