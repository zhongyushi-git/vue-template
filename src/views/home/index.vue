<template>
    <div>
        <Layout>
           <header-content @updatePassword="updatePassword" @logout="logout" :loginUser="loginUser"/>
            <Layout>
                <Sider class="menu-sider" hide-trigger>
                    <menu-nav :menus="menuList" :activeName="activeName" :openName="openName" />
                </Sider>
                <Layout >
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                        <router-view />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>

<script>
    import menuNav from 'components/menuNav'
    import HeaderContent from './HeaderContent'

    export default {
        name: 'Home',
        components: {
            menuNav,
            HeaderContent
        },
        computed: {},
        created() { },
        data() {
            return {
                menuList: [
                    {
                        id: 1,
                        name: '用户管理',
                        icon:'md-person',
                        children: [
                            {
                                id: 2,
                                name: '用户信息1',
                                route: '/home/user/info1'
                            },
                            {
                                id: 3,
                                name: '用户信息2',
                                route: '/home/user/info2'
                            },
                            {
                                id: 4,
                                name: '用户信息3',
                                route: '/home/user/info3'
                            }
                        ]
                    },
                    {
                        id: 5,
                        name: '系统管理',
                        icon:'md-settings',
                        children: [
                            {
                                id: 6,
                                name: '日志查询',
                                route: '/home/system/info1'
                            },
                            {
                                id: 7,
                                name: '系统配置',
                                route: '/home/system/info2'
                            },

                        ]
                    },
                ],
                activeName: 3,
                openName: [1],
                loginUser:{name:'张三'}
            }
        },
        methods: {
            //修改密码
            updatePassword(){
                console.log("修改")
            },
            //退出登录
            logout(){
                console.log("退出")
            }
        },
    }
</script>

<style scoped>
.menu-sider{
    background:#fff;
    height: calc(100vh - 10vh);
    overflow-x: hidden;
    overflow-y: scroll;
}
.menu-sider::-webkit-scrollbar {
    display: none;
}
</style>
