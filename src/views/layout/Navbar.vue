<template>
    <el-menu class="navbar" mode="horizontal" :default-active="activeIndex" :router="true">
        <span class="logo-container">Manage Backend</span>
        <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
        <el-menu-item index="/dashboard">首页</el-menu-item>
        <el-menu-item index="/table/table">表格</el-menu-item>
        <error-log class="errLog-container" :logsList="log"></error-log>
        <screenfull class='screenfull'></screenfull>
        <el-dropdown class="avatar-container" trigger="click">
            <div class="avatar-wrapper">
                <!--
                <img class="user-avatar" :src="avatar+'?imageView2/1/w/80/h/80'">
                -->
                <i class="el-icon-setting" />
            </div>
            <el-dropdown-menu class="user-dropdown" slot="dropdown">
                <router-link class='inlineBlock' to="/admin/profile">
                    <el-dropdown-item>
                        设置
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
        height: 50px;
        line-height: 50px;
        border-radius: 0px !important;
        .logo-container {
            line-height: 58px;
            height: 50px;
            float: left;
            width: 180px;
            padding: 0 10px; 
        }
        .hamburger-container {
            line-height: 58px;
            height: 50px;
            float: left;
            padding: 0 10px;
        }
        .errLog-container {
            display: inline-block;
            position: absolute;
            right: 90px;
        }
        .screenfull{
             position: absolute;
             right: 50px;
             top: 16px;
             color: red;
        }
        .avatar-container {
            height: 50px;
            display: inline-block;
            position: absolute;
            right: 30px;
            .avatar-wrapper {
                cursor: pointer;
                margin-top:5px;
                position: relative;
                .user-avatar {
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                }
                .el-icon-setting {
                    position: absolute;
                    right: -20px;
                    top: 10px;
                    font-size: 24px;
                }
            }
        }
    }
</style>



