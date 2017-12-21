<template>
	<div class="menu">
		<div class="menu-header">{{name}}</div>
		<div class="menu-body">
			<ul class="first-menu">
				<li class="first-menu-item" v-for="(items,index) in dataList" @click="clickShow(items,index,dataList)">
					<div class="first-menu-item-box">
						<span>
						{{items.city}}
						</span>
						<span class="icon" >
						</span>
					</div>
					<ul class="second-menu" v-if="items.show">
						<li class="second-menu-item" v-for="(item,zindex) in items.county" @click.stop="clickSecond(item,zindex,items.county)">
							<div>
							 	<span>
							 		{{item.name}}
							 	</span>
								<span class="icon"></span>
							</div>
							<ul  v-if="item.show" class="three-menu">
								<li v-for="(jtem,jindex) in item.dataChild" @click.stop="clickThird(jtem,jindex,item.dataChild)" v-bind:class="{'three-menu-active':jtem.show}">
									{{jtem.dataChildName}}
								</li>
							</ul>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				click: false,//函数点击标志位
				// showTag: [{showSecond: false,showThird: [false]},{showSecond: false,showThird: [false]}],
				showTag: [],
				// 组件头部名称,父组件传过来
				name: '公司结构',
				// 组件主体结构,父组件传过来
				dataList: [{    
					city: '成都',
					show: false,
					county : [
						{
							name: '县城1',
							show: false,
							dataChild: [{
								show: false,
								dataChildName: '乡村1',
								data: 'child-one'
							},{
								show: false,
								dataChildName: '乡村2',
								data: 'child-two'
							}]
						},
						{
							name: '县城2',
							show: false,
							dataChild: [{
								show: false,
								dataChildName: '乡村3',
								data: 'child-one'
							},{
								show: false,
								dataChildName: '乡村4',
								data: 'child-two'
							}]
						}
					]
				},
				{    
					city: '重庆',
					show: false,
					county : [
						{
							name: '县城3',
							show: false,
							dataChild: [{
								show: false,
								dataChildName: '乡村3',
								data: 'child-one'
							},{
								show: false,
								dataChildName: '乡村4',
								data: 'child-two'
							}]
						}
					]
				}
				]
			}
		},
		// props: {
		// 	name: {
		// 		type: String,
		// 	},
		// 	dataList: {
		// 		type: Array
		// 	}
		// },
		// showTag: [{showSecond: false,showThird: [false]},{showSecond: false,showThird: [false]}],
		methods: {
			//是否显示标志位数组
			// handleShow: function(){
			// 	for(let i=0;i<this.dataList.length;i++){
			// 		var showThird = [];
			// 		for(let j=0;j<this.dataList[i].county.length;j++){
			// 			// this.showTag[i].showThird.push(false)
			// 			showThird.push(false);
			// 			console.log(showThird,"ddd")
			// 		}
			// 		this.showTag.push({showSecond: false,showThird:showThird})
			// 	}
			// },
			//点击一级目录显示二级目录
			clickShow: function(items,index,obj){
				// this.showTag[index].showSecond = !this.showTag[index].showSecond
				// console.log(this.showTag[index].showSecond,"ll")
				for(let i=0;i<obj.length;i++){
					obj[i].show = false
					console.log(obj[i].county.length,"一级")
					for(let j=0;j<obj[i].county.length;j++){
						obj[i].county[j].show = false;
					}
				}
				items.show = !items.show;
			},
			//点击二级目录显示三级目录
			clickSecond: function(item,zindex,obj){
				for(let i=0;i<obj.length;i++){
					obj[i].show = false;
					console.log(obj[i].dataChild,'length')
					for(let j=0;j<obj[i].dataChild.length;j++){
						obj[i].dataChild[j].show = false;
					}
				}
				item.show = !item.show;
			},
			//三级目录的点击事件
			clickThird: function(jtem,jindex,obj){
				for(let i=0;i<obj.length;i++){
					obj[i].show = false;
				}
				jtem.show = !jtem.show;
			}
		},
		mounted(){
			// this.handleShow();
			// console.log(this.showTag,"jj")
		}
	}
</script>
<style type="text/css" lang="less" scoped>
	.menu{
		position: relative;
		.menu-header{
			width: 150px;
		    height: 30px;
		    background: #E35B5A;
		    line-height: 30px;
		    font-size: 16px;
		    color: #fff;
		}
		.menu-body{
			position: absolute;
			width: 150px;
			.first-menu{
				.first-menu-item{
				font-size: 16px;
				line-height: 20px;
				width: 100%;
				.first-menu-item-box{
					background: #4884b8;
				    color: #fff;
				    height: 20px;
				    cursor: pointer;
				}
					.icon{
						height: 0;
					    border-left: 8px solid #fff;
					    border-bottom: 8px solid transparent;
					    border-top: 8px solid transparent;
					    width: 0;
					    display: inline-block;
					    position: absolute;
    					right: 10px;
					}
					.icon-active{
						transform: rotate(90deg);
					}
					.second-menu{
						width: 150px;
					    background: #578ebe;
						.second-menu-item{
							font-size: 16px;
							line-height: 20px;
							width: 100%;
							.three-menu{
								width: 150px;
								background: red;
								.three-menu-active{
									background: gray;
									color: #fff;
								}
							}
						}
					}
					.display{
						display: none;
					}
				}
			}
			
		}
	}
</style>