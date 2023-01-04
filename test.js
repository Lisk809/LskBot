var a={
	        name: 'platform',
	        type: 'select',
	        message: '登录协议',
	        initial: 0,
	        choices: [
			            {
					                    title: 'iPad（苹果平板，推荐，可多设备同时在线）',
					                    value: 5
					                },
			            {
					                    title: 'aPhone（安卓手机）',
					                    value: 1
					                },
			            {
					                    title: 'APad（安卓平板）',
					                    value: 2
					                },
			            {
					                    title: 'MacOS（苹果电脑）',
					                    value: 4
					                },
			            {
					                    title: 'aWatch（安卓手表）',
					                    value: 3
					                }
			        ]
	    }
var prompt=require("prompt")
prompt.get(a)
