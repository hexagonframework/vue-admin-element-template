<template>
    <el-menu class="navbar" mode="horizontal" :default-active="activeIndex" :router="true">
        <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
        <el-menu-item index="/dashboard">首页</el-menu-item>
        <el-menu-item index="/table/table">表格</el-menu-item>
        <error-log class="errLog-container" :logsList="log"></error-log>
        <screenfull class='screenfull'></screenfull>
        <el-dropdown class="avatar-container" trigger="click">
            <div class="avatar-wrapper">
                <img class="user-avatar" v-if="avatar" :src="avatar+'?imageView2/1/w/80/h/80'">
                <img class="user-avatar" v-if="!avatar" src="~assets/defaultavatar.jpg">
                <div class="user-panel">个人面板</div>
            </div>
            <el-dropdown-menu class="user-dropdown" slot="dropdown">
                <router-link class='inlineBlock' to="/admin/profile">
                    <el-dropdown-item>
                        个人设置
                    </el-dropdown-item>
                </router-link>
                <router-link class='inlineBlock' to="/admin/security">
                    <el-dropdown-item>
                        安全设置
                    </el-dropdown-item>
                </router-link>
                <el-dropdown-item divided><span @click="logout" style="display:block;">退出登录</span></el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </el-menu>
</template>

<script>
    import { mapGetters } from 'vuex';
    
    import Hamburger from 'components/Hamburger';
    import Screenfull from 'components/Screenfull';
    import ErrorLog from 'components/ErrLog';
    import errLogStore from 'store/errLog';

    export default {
      components: {
        Hamburger,
        ErrorLog,
        Screenfull
      },
      data() {
        return {
          activeIndex: '/dashboard',
          log: errLogStore.state.errLog
        }
      },
      computed: {
        ...mapGetters([
          'sidebar',
          'name',
          'avatar'
        ])
      },
      methods: {
        toggleSideBar() {
          this.$store.dispatch('ToggleSideBar')
        },
        logout() {
          this.$store.dispatch('LogOut').then(() => {
            location.reload();// 为了重新实例化vue-router对象 避免bug
          });
        }
      }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .navbar {
        top: 0;
        height: 50px;
        left: 180px;
        right: 0;
        line-height: 50px;
        position: fixed;
        z-index: 2;
        border-radius: 0px !important;
        .hamburger-container {
            line-height: 58px;
            height: 50px;
            float: left;
            padding: 0 10px;
        }
        .errLog-container {
            display: inline-block;
            position: absolute;
            right: 180px;
        }
        .screenfull{
             position: absolute;
             right: 140px;
             top: 16px;
             color: red;
        }
        .avatar-container {
            height: 50px;
            display: inline-block;
            position: absolute;
            right: 20px;
            .avatar-wrapper {
                cursor: pointer;
                margin-top:5px;
                position: relative;
                .user-avatar {
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                }
                .user-panel {
                    font-size: 15px;
                    line-height: 40px;
                    float: right;
                    padding-left: 5px;
                    cursor: pointer;
                    vertical-align: -0.15em;
                }
            }
        }
    }
</style>



