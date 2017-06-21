<template>
    <div class="dashboard-editor-container">
        <div class=" clearfix">
            <pan-thumb style="float: left" :image="avatar"> 你的权限:
                <span class="pan-info-roles" v-for="item in roles">{{item}}</span>
            </pan-thumb>
            <div class="info-container">
                <span class="display_name">{{name}}</span>
                <div class="info-wrapper">
                    <div class="info-item">
                         <countTo class="info-item-num" :startVal='0' :endVal='statisticsData.count1' :duration='3400'></countTo>
                        <span class="info-item-text">xxx量</span>
                        <icon-svg icon-class="a" class="dashboard-editor-icon"/>
                    </div>
                    <div class="info-item">
                        <countTo class="info-item-num" :startVal='0' :endVal='statisticsData.count2' :duration='3600'></countTo>
                        <span class="info-item-text">xxx量</span>
                        <icon-svg icon-class="b" class="dashboard-editor-icon"/>
                    </div>
                    <div class="info-item">
                         <countTo class="info-item-num" ref='countTo3' :startVal='0' :endVal='statisticsData.count3' :duration='3800'></countTo>
                        <span class="info-item-text">xxx量</span>
                        <icon-svg icon-class="c" class="dashboard-editor-icon"/>
                    </div>
                </div>
            </div>
        </div>

        <div class="btn-group">
            <router-link class="pan-btn red-btn" to="/errorpage/404">404</router-link>
            <router-link class="pan-btn red-btn" to="/errorpage/401">401</router-link>
            <router-link class="pan-btn green-btn" to="/table/table">table</router-link>
        </div>

        <div class="clearfix main-dashboard-container">
            <div class="chart-container">
                <mmbers-chart :listData='statisticsData.week_data'></mmbers-chart>
            </div>
            <div class="recent-articles-container">
                <div class="recent-articles-title">最新文章</div>
                <div class="recent-articles-wrapper">
                    <template v-if="recentArticles.length!=0">
                        <div class="recent-articles-item" v-for="item in  recentArticles">
                            <span class="recent-articles-status">{{item.status | statusFilter}}</span>
                             <span class="recent-articles-content" :to="'/article/edit/'+item.id">
                                {{item.title}}
                            </span>
                            <span class="recent-articles-time">{{item.author}}</span>
                        </div>
                    </template>
                    <template v-else>
                        <div class="recent-articles-emptyTitle">没有文章</div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import PanThumb from 'components/PanThumb';
    import MonthKpi from './monthKpi';
    import MmbersChart from './membersChart';
    import { getList } from 'api/article';
    import countTo from 'vue-count-to';
    export default {
      name: 'dashboard-editor',
      components: { PanThumb, MonthKpi, MmbersChart, countTo },
      data() {
        return {
          chart: null,
          statisticsData: {
            count1: 1024,
            count2: 102400,
            count3: 28,
            count4: 1024,
            latest_article: [],
            
            week_data: [
                { count: 30, date: '201716' },
                { count: 26, date: '201715' },
                { count: 31, date: '201714' },
                { count: 28, date: '201713' },
                { count: 40, date: '201712' },
                { count: 41, date: '201711' },
                { count: 50, date: '201710' },
                { count: 42, date: '201709' },
                { count: 36, date: '201708' },
                { count: 32, date: '201707' },
                { count: 40, date: '201706' },
                { count: 41, date: '201705' }
            ]
          },
          list: []
        }
      },
      created() {
        this.fetchData();
      },
      computed: {
        ...mapGetters([
          'name',
          'avatar',
          'email',
          'uid',
          'introduction',
          'roles'
        ]),
        recentArticles() {
          return this.list.slice(0, 7)
        }
      },
      methods: {
        fetchData() {
          getList(this.listQuery).then(response => {
            this.list = response.data;
          })
        }
      },
      filters: {
        statusFilter(status) {
          const statusMap = {
            published: '已发布',
            draft: '草稿中',
            deleted: '已删除'
          };
          return statusMap[status];
        }
      }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .recent-articles-emptyTitle {
        font-size: 16px;
        color: #95A5A6;
        padding-top: 20px;
        text-align: center;
    }

    .dashboard-editor-container {
        padding: 30px 50px;
        .pan-info-roles {
            font-size: 12px;
            font-weight: 700;
            color: #333;
            display: block;
        }
        .info-container {
            position: relative;
            margin-left: 190px;
            height: 150px;
            line-height: 200px;
            .display_name {
                font-size: 24px;
                line-height: 24px;
                color: #212121;
                position: absolute;
                top: 25px;
            }
            .info-wrapper {
                line-height: 40px;
                position: absolute;
                bottom: 0px;
                .info-item {
                    cursor: pointer;
                    display: inline-block;
                    margin-right: 95px;
                    .info-item-num {
                        color: #212121;
                        font-size: 24px;
                        display: inline-block;
                        padding-right: 5px;
                    }
                    .info-item-text {
                        color: #727272;
                        font-size: 14px;
                        padding-right: 5px;
                        display: inline-block;
                    }
                }
            }
            .dashboard-editor-icon {
                width: 22px;
                height: 22px;
            }
        }

        .btn-group {
            margin: 30px 36px 30px 0;
        }
        .main-dashboard-container {
            width: 100%;
            position: relative;
            border: 1px solid #DEE1E2;
            padding: 0 10px;
        }
        .chart-container {
            float: left;
            position: relative;
            padding-right: 10px;
            width: 40%;
            border-right: 1px solid #DEE1E2;
        }
        .recent-articles-container {
            padding: 12px 12px 0px;
            float: left;
            width: 60%;
            position: relative;
            .recent-articles- {
                &title {
                    font-size: 16px;
                    color: #95A5A6;
                    letter-spacing: 1px;
                    padding-left: 15px;
                    padding-bottom: 10px;
                    border-bottom: 1px solid #DEE1E2;
                }
                &more {
                    color: #2C3E50;
                    font-size: 12px;
                    float: right;
                    margin-right: 25px;
                    line-height: 40px;
                    &:hover {
                        color: #3A71A8;
                    }
                }
                &wrapper {
                    padding: 0 20px 0 22px;
                    .recent-articles- {
                        &item {
                            cursor: pointer;
                            padding: 16px 100px 16px 16px;
                            border-bottom: 1px solid #DEE1E2;
                            position: relative;
                            &:before {
                                content: "";
                                height: 104%;
                                width: 0px;
                                background: #30B08F;
                                display: inline-block;
                                position: absolute;
                                opacity: 0;
                                left: 0px;
                                top: -2px;
                                transition: 0.3s ease all;
                            }
                            &:hover {
                                &:before {
                                    opacity: 1;
                                    width: 3px;
                                }
                            }
                        }
                        &status {
                            font-size: 12px;
                            display: inline-block;
                            color: #9B9B9B;
                            padding-right: 6px;
                        }
                        &content {
                            font-size: 13px;
                            color: #2C3E50;
                            &:hover {
                                color: #3A71A8;
                            }
                        }
                        &time {
                            position: absolute;
                            right: 16px;
                            top: 16px;
                            color: #9B9B9B;
                        }
                    }
                }
            }

        }
    }
</style>
