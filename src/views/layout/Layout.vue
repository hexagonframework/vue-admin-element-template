<template>
    <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
        <navbar/>
        <div class="sidebar-wrapper">
            <div class="logo-container">Manage Backend</div>
            <sidebar class="sidebar-container" />
        </div>
        <div class="main-container">
            <app-main/>
        </div>
    </div>
</template>

<script>
    import { Navbar, Sidebar, AppMain } from 'views/layout';

    export default {
      name: 'layout',
      components: {
        Navbar,
        Sidebar,
        AppMain
      },
      computed: {
        sidebar() {
          return this.$store.state.app.sidebar;
        }
      }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "src/styles/mixin.scss";
    $fa-font-path: '~font-awesome/fonts/';
    @import '~font-awesome/scss/font-awesome';
    .app-wrapper {
        @include clearfix;
        position: relative;
        height: 100%;
        width: 100%;
        &.hideSidebar {
            .sidebar-wrapper {
                transform: translate(-140px, 0);
                .sidebar-container {
                    transform: translate(132px, 0);
                }
                &:hover {
                    transform: translate(0, 0);
                    .sidebar-container {
                        transform: translate(0, 0);
                    }
                }
            }
            .navbar {
                left: 40px;
            }
            .main-container{
                margin-left: 40px;
            }
        }
        .sidebar-wrapper {
            width: 180px;
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            z-index: 1001;
            overflow: hidden;
            transition: all .28s ease-out;
        }
        .logo-container {
            line-height: 58px;
            height: 50px;
            width: 180px;
            padding: 0 20px; 
            background-color: #eef1f6;
        }
        .sidebar-container {
            transition: all .28s ease-out;
            position: absolute;
            top: 50px;
            bottom: 0;
            left: 0;
            right: -17px;
            overflow-y: scroll;
        }
        .main-container {
            min-height: 100%;
            transition: all .28s ease-out;
            margin-left: 180px;
        }
    }
</style>
