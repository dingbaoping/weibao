import Vue from 'vue'
import Router from 'vue-router'
import ckglmain from '@/components/ckgl/ckglmain'
import ckth from '@/components/ckgl/ckth'
Vue.use(Router)
    //这是路由的配置文件
export default new Router({
    // mode:"history",
    routes: [{
            path: '/',
            name: 'index',
            component: function(resolve) {
                require(['@/components/index'], resolve)
            }
        }, {
            path: '/main',
            name: 'main',
            component: function(resolve) {
                require(['@/components/main'], resolve)
            }
        },
        {
            path: '/rkgl',
            name: 'rkgl',
            component: function(resolve) {
                require(['@/components/rkgl'], resolve)
            }
        },
        {
            path: '/rksh',
            name: 'rksh',
            component: function(resolve) {
                require(['@/components/rksh'], resolve)
            }
        },
        {
            path: '/rkhzbb',
            name: 'rkhzbb',
            component: function(resolve) {
                require(['@/components/rkgl/rkhzbb'], resolve)
            }
        },
        // {
        // 	path: '/rkddzhqkb',
        // 	name: 'rkddzhqkb',
        // 	component: function(resolve) {
        // 		require(['@/components/rkgl/rkddzhqkb'], resolve)
        // }
        // },
        {
            path: '/ddsp',
            name: 'ddsp',
            component: function(resolve) {
                require(['@/components/ddsp'], resolve)
            }
        },
        {
            path: '/rkthjhjhd',
            name: 'rkthjhjhd',
            component: function(resolve) {
                require(['@/components/rkthjhjhd'], resolve)
            }
        },
        {
            path: '/pdajhjhdadd', //入库退回拣货作业单
            name: 'pdajhjhdadd',
            component: function(resolve) {
                require(['@/components/rkgl/rkpda/pdajhjhdadd'], resolve)
            }
        },
        {
            path: '/rkthjhzyd',
            name: 'rkthjhzyd',
            component: function(resolve) {
                require(['@/components/rkthjhzyd'], resolve)
            }
        },
        {
            path: '/jbshrkzyd',
            name: 'jbshrkzyd',
            component: function(resolve) {
                require(['@/components/jbshrkzyd'], resolve)
            }
        },
{
		path: '/pdack',  // pda收货计划单查看
		name: 'pdack',
		component: function(resolve) {
			require(['@/components/rkgl/rkpda/pdack'], resolve)
		}
	},
	{
		path: '/pdashzyck',  // pda收货作业单查看
		name: 'pdashzyck',
		component: function(resolve) {
			require(['@/components/rkgl/rkpda/pdashzyck'], resolve)
		}
	},
	{
		path: '/pdajhzyck',  // pda拣货作业单查看
		name: 'pdajhzyck',
		component: function(resolve) {
			require(['@/components/rkgl/rkpda/pdajhzyck'], resolve)
		}
	},
	{
		path: '/pdasjzyck',  // pda上架作业单查看
		name: 'pdasjzyck',
		component: function(resolve) {
			require(['@/components/rkgl/rkpda/pdasjzyck'], resolve)
		}
	},
	{
		path: '/pdabzzyck',  // pda播种作业查看
		name: 'pdabzzyck',
		component: function(resolve) {
			require(['@/components/ckgl/ckpda/pdabzzyck'], resolve)
		}
	},
	{
		path: '/pdafhjhck',  // pda复核计划单查看
		name: 'pdafhjhck',
		component: function(resolve) {
			require(['@/components/ckgl/ckpda/pdafhjhck'], resolve)
		}
	},
	{
		path: '/pdafhzyck',  // pda复核作业查看
		name: 'pdafhzyck',
		component: function(resolve) {
			require(['@/components/ckgl/ckpda/pdafhzyck'], resolve)
		}
	},
	{
		path: '/pdaecfjjhck',  // pda二次分拣计划查看
		name: 'pdaecfjjhck',
		component: function(resolve) {
			require(['@/components/ckgl/ckpda/pdaecfjjhck'], resolve)
		}
	},
	{
		path: '/pdaecfjzyck',  // pda二次分拣作业查看
		name: 'pdaecfjzyck',
		component: function(resolve) {
			require(['@/components/ckgl/ckpda/pdaecfjzyck'], resolve)
		}
	},
	{
		path: '/rkshjhd', // 入库PDA收货计划单列表
		name: 'rkshjhd',
		component: function(resolve) {
			require(['@/components/rkgl/shjhd'], resolve)
	}
	},
	{
		path: '/ckshjhd', // 出库PDA收货计划单列表
		name: 'ckshjhd',
		component: function(resolve) {
			require(['@/components/ckgl/shjhd'], resolve)
	}
	},
        {
            path: '/rkthshjhd', // 入库退回收货计划单
            name: 'rkthshjhd',
            component: function(resolve) {
                require(['@/components/rkgl/rkthshjhd'], resolve)
            }
        },

        {
            path: '/test', // 入库退回收货计划单
            name: 'test',
            component: function(resolve) {
                require(['@/components/rkgl/test'], resolve)
            }
        },

        {
            path: '/cklhjh', // 入库退回收货计划单
            name: 'cklhjh',
            component: function(resolve) {
                require(['@/components/ckgl/cklhjh'], resolve)
            }
        },
        {
            path: '/ckrgjh', // 入库退回收货计划单
            name: 'ckrgjh',
            component: function(resolve) {
                require(['@/components/ckgl/ckrgjh'], resolve)
            }
        },
        {
            path: '/ckthshjhd', // 出库退回收货计划单
            name: 'ckthshjhd',
            component: function(resolve) {
                require(['@/components/ckgl/ckthshjhd'], resolve)
            }
        },
        {
            path: '/sjzyd',
            name: 'sjzyd',
            component: function(resolve) {
                require(['@/components/sjzyd'], resolve)
            }
        },
        {
            path: '/skzy',
            name: 'skzy',
            component: function(resolve) {
                require(['@/components/skzy'], resolve)
            }
        },
        {
            path: '/djtsztc',
            name: 'djtsztc',
            component: function(resolve) {
                require(['@/components/djtsztc'], resolve)
            }
        },
        {
            path: '/gystc',
            name: 'gystc',
            component: function(resolve) {
                require(['@/components/gystc'], resolve)
            }
        },
        {
            path: '/gys',
            name: 'gys',
            component: function(resolve) {
                require(['@/components/gys'], resolve)
            }
        },
        {
            path: '/hzftc',
            name: 'hzftc',
            component: function(resolve) {
                require(['@/components/hzftc'], resolve)
            }
        },
        {
            path: '/spzl',
            name: 'spzl',
            component: function(resolve) {
                require(['@/components/spzl'], resolve)
            }
        },
        {
            path: '/alert1',
            name: 'alert1',
            component: function(resolve) {
                require(['@/components/alert1'], resolve)
            }
        },
        {
            path: '/alert2',
            name: 'alert2',
            component: function(resolve) {
                require(['@/components/alert2'], resolve)
            }
        },

        {
            path: '/dztc',
            name: 'dztc',
            component: function(resolve) {
                require(['@/components/dztc'], resolve)
            }
        },
        {
            path: '/ckjhjhd',
            name: 'ckjhjhd',
            component: function(resolve) {
                require(['@/components/ckgl/ckjhjhd'], resolve)
            }
        },
        {
            path: '/rkddlb',
            name: 'rkddlb',
            component: function(resolve) {
                require(['@/components/rkddlb'], resolve)
            }
        },
        {
            path: '/rkdlb',
            name: 'rkdlb',
            component: function(resolve) {
                require(['@/components/rkdlb'], resolve)
            }
        },
        {
            path: '/rkd',
            name: 'rkd',
            component: function(resolve) {
                require(['@/components/rkd'], resolve)
            }
        },
        {
            path: '/rktc',
            name: 'rktc',
            component: function(resolve) {
                require(['@/components/rktc'], resolve)
            }
        },

        {
            path: '/rkglmain',
            name: 'rkglmain',
            component: function(resolve) {
                require(['@/components/rkgl/rkglmain'], resolve)
            }
        }, {
            path: '/ckglmain',
            name: 'ckglmain',
            component: ckglmain
        }, {
            path: '/ckth',
            name: 'ckth',
            component: function(resolve) {
                require(['@/components/ckgl/ckth'], resolve)
            }
        },
        {
            path: '/bzzyd',
            name: 'bzzyd',
            component: function(resolve) {
                require(['@/components/ckgl/bzzyd'], resolve)
            }
        },

        {
            path: '/ckdd',
            name: 'ckdd',
            component: function(resolve) {
                require(['@/components/ckgl/ckdd'], resolve)
            }
        },
        {
            path: '/ckddlb',
            name: 'ckddlb',
            component: function(resolve) {
                require(['@/components/ckgl/ckddlb'], resolve)
            }
        },
        {
            path: '/ckddxg', //出库订单修改
            name: 'ckddxg',
            component: function(resolve) {
                require(['@/components/ckddxg'], resolve)
            }
        },
        {
            path: '/ckddck', //出库订单查看
            name: 'ckddck',
            component: function(resolve) {
                require(['@/components/ckddck'], resolve)
            }
        },
        {
            path: '/ckdxg', //出库单修改
            name: 'ckdxg',
            component: function(resolve) {
                require(['@/components/ckdxg'], resolve)
            }
        },
        {
            path: '/ckdck', //出库单查看
            name: 'ckdck',
            component: function(resolve) {
                require(['@/components/ckdck'], resolve)
            }
        },
        {
            path: '/ckddsp',
            name: 'ckddsp',
            component: function(resolve) {
                require(['@/components/ckgl/ckddsp'], resolve)
            }
        },
        {
            path: '/ckddzhbb',
            name: 'ckddzhbb',
            component: function(resolve) {
                require(['@/components/ckgl/ckddzhbb'], resolve)
            }
        },
        {
            path: '/ckdhzbb',
            name: 'ckdhzbb',
            component: function(resolve) {
                require(['@/components/ckgl/ckdhzbb'], resolve)
            }
        },
        {
            path: '/ckddzxqkb',
            name: 'ckddzxqkb',
            component: function(resolve) {
                require(['@/components/ckgl/ckddzxqkb'], resolve)
            }
        },
        {
            path: '/ckddzzfwqkb', //出库订单增值服务情况表
            name: 'ckddzzfwqkb',
            component: function(resolve) {
                require(['@/components/ckgl/ckddzzfwqkb'], resolve)
            }
        },
        {
            path: '/ckdzzfwqkb', //出库增值服务情况表
            name: 'ckdzzfwqkb',
            component: function(resolve) {
                require(['@/components/ckgl/ckdzzfwqkb'], resolve)
            }
        },
        {
            path: '/rkddzxqkb',
            name: 'rkddzxqkb',
            component: function(resolve) {
                require(['@/components/rkgl/rkddzxqkb'], resolve)
            }
        },
        {
            path: '/ckdlb',
            name: 'ckdlb',
            component: function(resolve) {
                require(['@/components/ckgl/ckdlb'], resolve)
            }
        },
        {
            path: '/rkddxg',
            name: 'rkddxg',
            component: function(resolve) {
                require(['@/components/rkddxg'], resolve)
            }
        },
        {
            path: '/rkddck',
            name: 'rkddck',
            component: function(resolve) {
                require(['@/components/rkddck'], resolve)
            }
        },
        {
            path: '/ckecfjzyd',
            name: 'ckecfjzyd',
            component: function(resolve) {
                require(['@/components/ckgl/ckecfjzyd'], resolve)
            }
        },
        {
            path: '/ckfhzyd',
            name: 'ckfhzyd',
            component: function(resolve) {
                require(['@/components/ckgl/ckfhzyd'], resolve)
            }
        },
        {
            path: '/ckqb',
            name: 'ckqb',
            component: function(resolve) {
                require(['@/components/ckgl/ckqb'], resolve)
            }
        },
        {
            path: '/cksh',
            name: 'cksh',
            component: function(resolve) {
                require(['@/components/ckgl/cksh'], resolve)
            }
        },
        {
            path: '/ckth',
            name: 'ckth',
            component: function(resolve) {
                require(['@/components/ckgl/ckth'], resolve)
            }
        },
        {
            path: '/ckyddlb',
            name: 'ckyddlb',
            component: function(resolve) {
                require(['@/components/ckgl/ckyddlb'], resolve)
            }
        },
        {
            path: '/ecfjjhd',
            name: 'ecfjjhd',
            component: function(resolve) {
                require(['@/components/ckgl/ecfjjhd'], resolve)
            }
        },
        {
            path: '/ckfhjhd',
            name: 'ckfhjhd',
            component: function(resolve) {
                require(['@/components/ckgl/fhjhd'], resolve)
            }
        },
        {
            path: '/ckfhzyd',
            name: 'ckfhzyd',
            component: function(resolve) {
                require(['@/components/ckgl/fhzyd'], resolve)
            }
        },
        {
            path: '/ckjhjhd',
            name: 'ckjhjhd',
            component: function(resolve) {
                require(['@/components/ckgl/jhjhd'], resolve)
            }
        },
        {
            path: '/kehu',
            name: 'kehu',
            component: function(resolve) {
                require(['@/components/ckgl/kehu'], resolve)
            }
        },
        {
            path: '/ckshzyd',
            name: 'ckshzyd',
            component: function(resolve) {
                require(['@/components/ckgl/ckshzyd'], resolve)
            }
        },
        {
            path: '/ckshjhd',
            name: 'ckshjhd',
            component: function(resolve) {
                require(['@/components/ckgl/shjhd'], resolve)
            }
        }, {
            path: '/bbzxmain',
            name: 'bbzxmain',
            component: function(resolve) {
                require(['@/components/bbzx/bbzxmain'], resolve)
            }
        }, {
            path: '/fymxbb',
            name: 'fymxbb',
            component: function(resolve) {
                require(['@/components/bbzx/fymxbb'], resolve)
            }
        }, {
            path: '/thqr',
            name: 'thqr',
            component: function(resolve) {
                require(['@/components/ckgl/thqr'], resolve)
            }
        }, {
            path: '/ysqr',
            name: 'ysqr',
            component: function(resolve) {
                require(['@/components/ckgl/ysqr'], resolve)
            }
        }, {
            path: '/ysqr',
            name: 'ysqr',
            component: function(resolve) {
                require(['@/components/ckgl/ysqr'], resolve)
            }
        },
        {
            path: '/ckddzhbb',
            name: 'ckddzhbb',
            component: function(resolve) {
                require(['@/components/ckgl/ckddzhbb'], resolve)
            }
        },
        {
            path: '/ckd',
            name: 'ckd',
            component: function(resolve) {
                require(['@/components/ckgl/ckd'], resolve)
            }
        },
        {
            path: '/ckddpsyc',
            name: 'ckddpsyc',
            component: function(resolve) {
                require(['@/components/ckgl/ckddpsyc'], resolve)
            }
        },

        {
            path: '/ckshjhd',
            name: 'ckshjhd',
            component: function(resolve) {
                require(['@/components/ckgl/shjhd'], resolve)
            }
        },
        {
            path: '/rkshzyd',
            name: 'rkshzyd',
            component: function(resolve) { //入库收货作业单
                require(['@/components/rkgl/rkshzyd'], resolve)
            }
        },
        {
            path: '/sjzyd',
            name: 'sjzyd',
            component: function(resolve) {
                require(['@/components/ckgl/sjzyd'], resolve)
            }
        },
        {
            path: '/ckjhjhd',
            name: 'ckjhjhd',
            component: function(resolve) {
                require(['@/components/ckgl/jhjhd'], resolve)
            }
        },
        {
            path: '/ckjhzyd',
            name: 'ckjhzyd',
            component: function(resolve) {
                require(['@/components/ckgl/jhzyd'], resolve)
            }
        },
        {
            path: '/rkdd',
            name: 'rkdd',
            component: function(resolve) {
                require(['@/components/rkgl'], resolve)
            }
        },
        //	报表中心
        {
            path: '/rkddzhcx',
            name: 'rkddzhcx',
            component: function(resolve) {
                require(['@/components/bbzx/Storage_class/rkddzhcx'], resolve)
            }
        },
        {
            path: '/yspsfbb',
            name: 'yspsfbb',
            component: function(resolve) {
                require(['@/components/bbzx/Storage_class/yspsfbb'], resolve)
            }
        },
        {
            path: '/rkzhcx',
            name: 'rkzhcx',
            component: function(resolve) {
                require(['@/components/bbzx/Storage_class/rkzhcx'], resolve)
            }
        },

        {
            path: '/rkddzhbb',
            name: 'rkddzhbb',
            component: function(resolve) {
                require(['@/components/rkgl/rkddzhbb'], resolve)
            }
        },
        {
            path: '/shzybb', // 收货作业报表
            name: 'shzybb',
            component: function(resolve) {
                require(['@/components/bbzx/shzybb'], resolve)
            }
        },
        {
            path: '/sjzybb', //  上架作业报表
            name: 'sjzybb',
            component: function(resolve) {
                require(['@/components/bbzx/sjzybb'], resolve)
            }
        },
        {
            path: '/jhzybb', //拣出作业报表
            name: 'jhzybb',
            component: function(resolve) {
                require(['@/components/bbzx/jhzybb'], resolve)
            }
        },
        {
            path: '/fjzybb', //分拣作业报表
            name: 'fjzybb',
            component: function(resolve) {
                require(['@/components/bbzx/fjzybb'], resolve)
            }
        },
        {
            path: '/ycyczybb', //移仓移出作业报表
            name: 'ycyczybb',
            component: function(resolve) {
                require(['@/components/bbzx/ycyczybb'], resolve)
            }
        },
        {
            path: '/ycyrzybb', //移仓移入作业报表
            name: 'ycycrybb',
            component: function(resolve) {
                require(['@/components/bbzx/ycyrzybb'], resolve)
            }
        },
        {
            path: '/pdzybb', //盘点作业报表
            name: 'pdzybb',
            component: function(resolve) {
                require(['@/components/bbzx/pdzybb'], resolve)
            }
        },
        {
            path: '/bzzybb', //播种作业报表
            name: 'bzzybb',
            component: function(resolve) {
                require(['@/components/bbzx/bzzybb'], resolve)
            }
        },
        {
            path: '/fhzybb', //复核作业报表
            name: 'fhzybb',
            component: function(resolve) {
                require(['@/components/bbzx/fhzybb'], resolve)
            }
        },
        {
            path: '/jbckfhzybb', //简版出库复核作业报表
            name: 'jbckfhzybb',
            component: function(resolve) {
                require(['@/components/bbzx/jbckfhzybb'], resolve)
            }
        },
        {
            path: '/pzspfhzybb', //配载商品复核作业报表
            name: 'pzspfhzybb',
            component: function(resolve) {
                require(['@/components/bbzx/pzspfhzybb'], resolve)
            }
        },



        {
            path: '/pdcybb', // 盘点差异报表
            name: 'pdcybb',
            component: function(resolve) {
                require(['@/components/bbzx/pdcybb'], resolve)
            }
        },
        {
            path: '/atsfcbb', // 按天收发存报表
            name: 'atsfcbb',
            component: function(resolve) {
                require(['@/components/bbzx/atsfcbb'], resolve)
            }
        },
        {
            path: '/jcccfybb', // 结存仓储费明细报表
            name: 'jcccfybb',
            component: function(resolve) {
                require(['@/components/bbzx/jcccfybb'], resolve)
            }
        },
        {
            path: '/ckddkylbb', // 出库订单可用量报表
            name: 'ckddkylbb',
            component: function(resolve) {
                require(['@/components/bbzx/ckddkylbb'], resolve)
            }
        },
        {
            path: '/sdkczhcx', // 锁定库存综合查询
            name: 'sdkczhcx',
            component: function(resolve) {
                require(['@/components/bbzx/sdkczhcx'], resolve)
            }
        },
        {
            path: '/hqzyzhcx', // 货权转移综合查询
            name: 'hqzyzhcx',
            component: function(resolve) {
                require(['@/components/bbzx/hqzyzhcx'], resolve)
            }
        },
        {
            path: '/jhfxbb', // 捡货分析报表
            name: 'jhfxbb',
            component: function(resolve) {
                require(['@/components/bbzx/jhfxbb'], resolve)
            }
        },
        {
            path: '/yfpsfbb', // 应付配送费报表
            name: 'yfpsfbb',
            component: function(resolve) {
                require(['@/components/bbzx/Storage_class/yfpsfbb'], resolve)
            }
        },
        {
            path: '/ckryzyfybb', // 仓库人员作业费用报表
            name: 'ckryzyfybb',
            component: function(resolve) {
                require(['@/components/bbzx/Storage_class/ckryzyfybb'], resolve)
            }
        },
        {
            path: '/syzhcx', // 损溢综合查询
            name: 'syzhcx',
            component: function(resolve) {
                require(['@/components/bbzx/Storage_class/syzhcx'], resolve)
            }
        },
        {
            path: '/yczhcx', // 移仓综合查询
            name: 'yczhcx',
            component: function(resolve) {
                require(['@/components/bbzx/Storage_class/yczhcx'], resolve)
            }
        },
        {
            path: '/sdkcbb', // 锁定仓库报表
            name: 'sdkcbb',
            component: function(resolve) {
                require(['@/components/bbzx/Storage_class/sdkcbb'], resolve)
            }
        },
        {
            path: '/cwbb', // 仓位报表
            name: 'cwbb',
            component: function(resolve) {
                require(['@/components/bbzx/Storage_class/cwbb'], resolve)
            }
        },
        {
            path: '/kcdqcccbb', // 库存短缺超储查询
            name: 'kcdqcccbb',
            component: function(resolve) {
                require(['@/components/bbzx/Storage_class/kcdqcccbb'], resolve)
            }
        },
        {
            path: '/kccx', // 库存查询
            name: 'kccx',
            component: function(resolve) {
                require(['@/components/bbzx/Storage_class/kccx'], resolve)
            }
        },
        {
            path: '/ypzhbb', // 预配综合报表
            name: 'ypzhbb',
            component: function(resolve) {
                require(['@/components/bbzx/Storage_class/ypzhbb'], resolve)
            }
        },
        {
            path: '/pszhbb', // 配送综合报表
            name: 'pszhbb',
            component: function(resolve) {
                require(['@/components/bbzx/Storage_class/pszhbb'], resolve)
            }
        },
        {
            path: '/spsfhzb', // 商品收发汇总表
            name: 'spsfhzb',
            component: function(resolve) {
                require(['@/components/bbzx/Storage_class/spsfhzb'], resolve)
            }
        },
        {
            path: '/ckzhcx', // 出库综合查询
            name: 'ckzhcx',
            component: function(resolve) {
                require(['@/components/bbzx/ckzhcx'], resolve)
            }
        },
        {
            path: '/ckddzhcx', // 出库订单综合查询
            name: 'ckddzhcx',
            component: function(resolve) {
                require(['@/components/bbzx/Storage_class/ckddzhcx'], resolve)
            }
        },
        {
            path: '/psmlbb', // 配送毛利报表
            name: 'psmlbb',
            component: function(resolve) {
                require(['@/components/bbzx/psmlbb'], resolve)
            }
        },
        {
            path: '/spkcbb', // 商品库存周转率报表
            name: 'spkcbb',
            component: function(resolve) {
                require(['@/components/bbzx/spkcbb'], resolve)
            }
        },
        {
            path: '/hzfyszk', // 合作方应收帐款
            name: 'hzfyszk',
            component: function(resolve) {
                require(['@/components/bbzx/hzfyszk'], resolve)
            }
        },
        {
            path: '/cygsyfzk', // 承运公司应付帐款
            name: 'cygsyfzk',
            component: function(resolve) {
                require(['@/components/bbzx/cygsyfzk'], resolve)
            }
        },
        {
            path: '/ysfphxzhbb', // 应收发票核销综合报表
            name: 'ysfphxzhbb',
            component: function(resolve) {
                require(['@/components/bbzx/ysfphxzhbb'], resolve)
            }
        },
        {
            path: '/yffphxzhbb', // 应付发票核销综合报表
            name: 'yffphxzhbb',
            component: function(resolve) {
                require(['@/components/bbzx/yffphxzhbb'], resolve)
            }
        },
        {
            path: '/kcscrqfbqkb', //  库存生产日期分布情况表
            name: 'kcscrqfblb',
            component: function(resolve) {
                require(['@/components/bbzx/kcscrqfblb'], resolve)
            }
        },
        {
            path: '/pjkcbb', //  平均库存报表
            name: 'pjkcbb',
            component: function(resolve) {
                require(['@/components/bbzx/pjkcbb'], resolve)
            }
        },
        {
            path: '/psckzxzz', //  配送出库执行追踪
            name: 'psckzxzz',
            component: function(resolve) {
                require(['@/components/bbzx/psckzxzz'], resolve)
            }
        },
        {
            path: '/xspctjbb', //  销售统计报表
            name: 'xspctjbb',
            component: function(resolve) {
                require(['@/components/bbzx/xspctjbb'], resolve)
            }
        },
        {
            path: '/yszkhzb', //  应收帐款汇总表
            name: 'yszkhzb',
            component: function(resolve) {
                require(['@/components/bbzx/yszkhzb'], resolve)
            }
        },
        {
            path: '/yfzkhzb', //  应付款综合报表
            name: 'yfzkhzb',
            component: function(resolve) {
                require(['@/components/bbzx/yfzkhzb'], resolve)
            }
        },
        {
            path: '/jxchzb', //  进销存汇总表
            name: 'jxchzb',
            component: function(resolve) {
                require(['@/components/bbzx/jxchzb'], resolve)
            }
        },
        
        
        
        
        
        
        
        
        
//      仓储部分表格跳转
        {
            path: '/ycd', //  1,移仓单-新增
            name: 'ycd',
            component: function(resolve) {
                require(['@/components/cczy/ycdxsb/ycd'], resolve)
            }
        },
        {
            path: '/ycsp', // 2.移仓审批
            name: 'ycsp',
            component: function(resolve) {
                require(['@/components/cczy/splbjh/ycsp'], resolve)
            }
        },
        {
            path: '/tbfq', // 3.调拨发起
            name: 'tbfq',
            component: function(resolve) {
                require(['@/components/cczy/dbdxsb/tbfq'], resolve)
            }
        },
        {
            path: '/tbsp', // 4.调拨审批
            name: 'tbsp',
            component: function(resolve) {
                require(['@/components/cczy/splbjh/tbsp'], resolve)
            }
        },
        {
            path: '/tbcksp', // 5.调拨出库审批
            name: 'tbcksp',
            component: function(resolve) {
                require(['@/components/cczy/splbjh/tbcksp'], resolve)
            }
        },
        {
            path: '/tbrk', // 6.调拨入库
            name: 'tbrk',
            component: function(resolve) {
                require(['@/components/cczy/dbrkxsb/tbrk'], resolve)
            }
        },
        {
            path: '/tbrksp', // 7.调拨入库审批
            name: 'tbrksp',
            component: function(resolve) {
                require(['@/components/cczy/splbjh/tbrksp'], resolve)
            }
        },
        {
            path: '/bssy', // 8.报损升溢
            name: 'bssy',
            component: function(resolve) {
                require(['@/components/cczy/sydxsb/bssy'], resolve)
            }
        },
        {
            path: '/bsd', // 9.报损单
            name: 'bsd',
            component: function(resolve) {
                require(['@/components/cczy/sydxsb/bsd'], resolve)
            }
        },
        {
            path: '/syd', // 10.升溢单
            name: 'syd',
            component: function(resolve) {
                require(['@/components/cczy/sydxsb/syd'], resolve)
            }
        },
        {
            path: '/sycs', // 11.损溢初审
            name: 'sycs',
            component: function(resolve) {
                require(['@/components/cczy/splbjh/sycs'], resolve)
            }
        },
        {
            path: '/cwsp', // 12.财务审批
            name: 'cwsp',
            component: function(resolve) {
                require(['@/components/cczy/splbjh/cwsp'], resolve)
            }
        },
        {
            path: '/zzcx', // 13.组装拆卸
            name: 'zzcx',
            component: function(resolve) {
                require(['@/components/cczy/zzcxxsb/zzcx'], resolve)
            }
        },
        {
            path: '/zzd', // 14.组装单
            name: 'zzd',
            component: function(resolve) {
                require(['@/components/cczy/zzcxxsb/zzd'], resolve)
            }
        },
        {
            path: '/cxd', // 15.拆卸单
            name: 'cxd',
            component: function(resolve) {
                require(['@/components/cczy/zzcxxsb/cxd'], resolve)
            }
        },
        {
            path: '/pdlh', // 16.盘点理货
            name: 'pdlh',
            component: function(resolve) {
                require(['@/components/cczy/pdlh'], resolve)
            }
        },
        {
            path: '/pd', // 17.盘点
            name: 'pd',
            component: function(resolve) {
                require(['@/components/cczy/pd'], resolve)
            }
        },
        {
            path: '/kcsd', // 18.库存锁定
            name: 'kcsd',
            component: function(resolve) {
                require(['@/components/cczy/kcsd'], resolve)
            }
        },
        {
            path: '/sp', // 19.商品
            name: 'sp',
            component: function(resolve) {
                require(['@/components/cczy/base_info/sp'], resolve)
            }
        },
        {
            path: '/sptjtc', // 19.商品添加（暂时）
            name: 'sptjtc',
            component: function(resolve) {
                require(['@/components/cczy/base_info/sptjtc'], resolve)
            }
        },
        {
            path: '/bomd', // 20.BOM单列表
            name: 'bomd',
            component: function(resolve) {
                require(['@/components/cczy/base_info/bomd'], resolve)
            }
        },
        {
            path: '/bomdxz', // 20.BOM单 新增
            name: 'bomdxz',
            component: function(resolve) {
                require(['@/components/cczy/base_info/bomdxz'], resolve)
            }
        },
        {
            path: '/ycdlb', // 21.移仓单列表
            name: 'ycdlb',
            component: function(resolve) {
                require(['@/components/cczy/ycdxsb/ycdlb'], resolve)
            }
        },
        {
            path: '/tbddlb', // 22.调拨订单列表
            name: 'tbddlb',
            component: function(resolve) {
                require(['@/components/cczy/dbddxsb/tbddlb'], resolve)
            }
        },
        {
            path: '/tbrkdlb', // 23.调拨入库单列表
            name: 'tbrkdlb',
            component: function(resolve) {
                require(['@/components/cczy/dbrkxsb/tbrkdlb'], resolve)
            }
        },
        {
            path: '/tbckdlb', // 24.调拨出库单列表
            name: 'tbckdlb',
            component: function(resolve) {
                require(['@/components/cczy/dbckxsb/tbckdlb'], resolve)
            }
        },
        {
            path: '/sydssb', // 25.损溢单序时簿
            name: 'sydssb',
            component: function(resolve) {
                require(['@/components/cczy/sydxsb/sydssb'], resolve)
            }
        },
        {
            path: '/zzcxxsb', // 26.组装拆卸序时簿
            name: 'zzcxxsb',
            component: function(resolve) {
                require(['@/components/cczy/zzcxxsb/zzcxxsb'], resolve)
            }
        },
        {
            path: '/pdaycdc', // 27.PDA移仓调出作业单列表
            name: 'pdaycdc',
            component: function(resolve) {
                require(['@/components/cczy/pda/pdaycdczyd/pdaycdc'], resolve)
            }
        },
        {
            path: '/pdaycdr', // 28.PDA移仓调入作业单列表
            name: 'pdaycdr',
            component: function(resolve) {
                require(['@/components/cczy/pda/pdaycdrzyd/pdaycdr'], resolve)
            }
        },
        {
            path: '/pdaycdczyd', // 28.PDA移仓调入作业单列表
            name: 'pdaycdczyd',
            component: function(resolve) {
                require(['@/components/cczy/pda/pdaycdczyd/pdaycdczyd'], resolve)
            }
        },
        {
            path: '/pdapdzy', // 29.PDA盘点作业单列表
            name: 'pdapdzy',
            component: function(resolve) {
                require(['@/components/cczy/pdapdzy'], resolve)
            }
        },
        {
            path: '/pdapdlhjh', // 30.PDA盘点理货计划单列表
            name: 'pdapdlhjh',
            component: function(resolve) {
                require(['@/components/cczy/pdapdlhjh'], resolve)
            }
        },
        {
            path: '/pdjhdmx', // 30.PDA盘点理货计划单列表的查看页面
            name: 'pdjhdmx',
            component: function(resolve) {
                require(['@/components/cczy/pdjhdmx'], resolve)
            }
        },
        {
            path: '/pdapdlhzy', // 31.PDA盘点理货作业单列表
            name: 'pdapdlhzy',
            component: function(resolve) {
                require(['@/components/cczy/pdapdlhzy'], resolve)
            }
        },
        {
            path: '/pdapdjhzyd', // 31.PDA盘点理货作业单列表查看弹窗页面
            name: 'pdapdjhzyd',
            component: function(resolve) {
                require(['@/components/cczy/pdapdjhzyd'], resolve)
            }
        },
        {
            path: '/spgz', // 32.商品跟踪
            name: 'spgz',
            component: function(resolve) {
                require(['@/components/cczy/spgz'], resolve)
            }
        },
        {
            path: '/dbddzxqkb', // 33.调拨订单执行情况表
            name: 'dbddzxqkb',
            component: function(resolve) {
                require(['@/components/cczy/dbddzxqkb'], resolve)
            }
        },
        {
            path: '/cczymain', //  仓储作业首页
            name: 'cczymain',
            component: function(resolve) {
                require(['@/components/cczy/cczymain'], resolve)
            }
        },
        
        {
            path: '/ycdxg', //移仓单修改
            name: 'ycdxg',
            component: function(resolve) {
                require(['@/components/cczy/ycdxsb/ycdxg'], resolve)
            }
        },
        {
            path: '/ycdck', //移仓单查看
            name: 'ycdck',
            component: function(resolve) {
                require(['@/components/cczy/ycdxsb/ycdck'], resolve)
            }
        },
        {
            path: '/dbddxg', //调拨订单修改
            name: 'dbddxg',
            component: function(resolve) {
                require(['@/components/cczy/dbddxsb/dbddxg'], resolve)
            }
        },
        {
            path: '/dbddck', //调拨订单查看
            name: 'dbddck',
            component: function(resolve) {
                require(['@/components/cczy/dbddxsb/dbddck'], resolve)
            }
        },
        {
            path: '/dbddxz', //调拨订单新增
            name: 'dbddxz',
            component: function(resolve) {
                require(['@/components/cczy/dbddxsb/dbddxz'], resolve)
            }
        },
        {
            path: '/dbckdxg', //调拨出库单修改
            name: 'dbckdxg',
            component: function(resolve) {
                require(['@/components/cczy/dbckxsb/dbckdxg'], resolve)
            }
        },
        {
            path: '/dbckdck', //调拨出库单查看
            name: 'dbckdck',
            component: function(resolve) {
                require(['@/components/cczy/dbckxsb/dbckdck'], resolve)
            }
        },
        {
            path: '/dbrkdxg', //调拨入库单修改
            name: 'dbrkdxg',
            component: function(resolve) {
                require(['@/components/cczy/dbrkxsb/dbrkdxg'], resolve)
            }
        },
        {
            path: '/dbrkdck', //调拨入库单查看
            name: 'dbrkdck',
            component: function(resolve) {
                require(['@/components/cczy/dbrkxsb/dbrkdck'], resolve)
            }
        },
        {
            path: '/dbrkdxz', //调拨入库单新增
            name: 'dbrkdck',
            component: function(resolve) {
                require(['@/components/cczy/dbrkxsb/dbrkdxz'], resolve)
            }
        },
        {
            path: '/sydxg', //损益单修改
            name: 'sydxg',
            component: function(resolve) {
                require(['@/components/cczy/sydxsb/sydxg'], resolve)
            }
        },
        {
            path: '/sydck', //损益单查看
            name: 'sydck',
            component: function(resolve) {
                require(['@/components/cczy/sydxsb/sydck'], resolve)
            }
        },
        {
            path: '/zzcxxz', //组装拆卸新增
            name: 'zzcxxz',
            component: function(resolve) {
                require(['@/components/cczy/zzcxxsb/zzcxxz'], resolve)
            }
        },
        {
            path: '/zzcxxg', //组装拆卸修改
            name: 'zzcxxg',
            component: function(resolve) {
                require(['@/components/cczy/zzcxxsb/zzcxxg'], resolve)
            }
        },
        {
            path: '/zzcxck', //组装拆卸查看
            name: 'zzcxck',
            component: function(resolve) {
                require(['@/components/cczy/zzcxxsb/zzcxck'], resolve)
            }
        },
        {
            path: '/syddr', //组装拆卸查看
            name: 'syddr',
            component: function(resolve) {
                require(['@/components/cczy/Functional area/syddr'], resolve)
            }
        },
		
		
		
		
		{
            path: '/cksjzyd', //  PDA 上架作业单列表
            name: 'cksjzyd',
            component: function(resolve) {
                require(['@/components/ckgl/sjzyd'], resolve)
            }
        },
        {
            path: '/pdafhzyd', //  出库管理 PDA 复核作业单列表
            name: 'pdafhzyd',
            component: function(resolve) {
                require(['@/components/ckgl/pdafhzyd'], resolve)
            }
        },
        {
            path: '/bfkccx', //  备份库存查询
            name: 'bfkccx',
            component: function(resolve) {
                require(['@/components/bbzx/Storage_class/bfkccx'], resolve)
            }
        },
        {
            path: '/ddkykcbb', //  订单可用库存报表
            name: 'ddkykcbb',
            component: function(resolve) {
                require(['@/components/bbzx/Storage_class/ddkykcbb'], resolve)
            }
        },
        {
            path: '/azqjsccfbb', //  按周期计算仓存费报表
            name: 'azqjsccfbb',
            component: function(resolve) {
                require(['@/components/bbzx/Storage_class/azqjsccfbb'], resolve)
            }
        },
        {
            path: '/yfzkzhbb', //  应付款综合报表
            name: 'yfzkzhbb',
            component: function(resolve) {
                require(['@/components/bbzx/yfzkzhbb'], resolve)
            }
        },
        {
            path: '/dztc', //
            name: 'dztc',
            component: function(resolve) {
                require(['@/components/dztc'], resolve)
            }
        },
        {
            path: '/rkdxg', //
            name: 'rkdxg',
            component: function(resolve) {
                require(['@/components/rkdxg'], resolve)
            }
        },
        {
            path: '/rkdck', //
            name: 'rkdck',
            component: function(resolve) {
                require(['@/components/rkdck'], resolve)
            }
        },
        {
            path: '/rkdzhbb', //
            name: 'rkdzhbb',
            component: function(resolve) {
                require(['@/components/rkgl/rkdzhbb'], resolve)
            }
        },
        {
            path: '/rkdddr', //
            name: 'rkdddr',
            component: function(resolve) {
                require(['@/components/rkgl/rkdddr'], resolve)
            }
        },
        {
            path: '/demo', //
            name: 'demo',
            component: function(resolve) {
                require(['@/components/demo/table'], resolve)
            }
        },
        {
            path: '/ckpdajhjhd', //出库的pda拣货计划单
            name: 'ckpdajhjhd',
            component: function(resolve) {
                require(['@/components/ckgl/pdajhjhd'], resolve)
            }
        },
        {
            path: '/pdajhjhdck', //出库的pda拣货计划单
            name: 'pdajhjhdck',
            component: function(resolve) {
                require(['@/components/ckgl/pdajhjhdck'], resolve)
            }
        },
        {
            path: '/pdajhjhdxg', //出库的pda拣货计划单
            name: 'pdajhjhdxg',
            component: function(resolve) {
                require(['@/components/ckgl/pdajhjhdxg'], resolve)
            }
        },
        
        
        //仓储结束
        //	基本档案部分
		{
			path: '/jbda_hzf', //合作方
			name: 'jbda_hzf',
			component: function(resolve) {
				require(['@/components/Basic_file/Partner/jbda_hzf'], resolve)
			}
		},
		{
			path: '/basic_supplier', //供应商
			name: 'basic_supplier',
			component: function(resolve) {
				require(['@/components/Basic_file/Supplier_import/basic_supplier'], resolve)
			}
		},
		{
			path: '/basic_warehouse', //供应商
			name: 'basic_warehouse',
			component: function(resolve) {
				require(['@/components/Basic_file/Warehouse_architecture/basic_warehouse'], resolve)
			}
		},
		{
			path: '/Company_employees', //供应商
			name: 'Company_employees',
			component: function(resolve) {
				require(['@/components/Basic_file/Company_employees/Company_employees'], resolve)
			}
		},

































    ]
})