var vm = new Vue({

	el: '#app',
	data: {
		isFlex: true,  // 是否开启 flex
		fixedItem:true,  // item 大小是否固定
		itemNum:5,  // item 个数
		widthOrMin:50,  // item 宽度
		heightOrMax:100,  // item 高度
		itemIds:[],  // item 属性

		dirSelect:'row',
		dirOptions:[
			{text:'flex-direction:row 主轴为水平方向，起点在左端',value:'row'},
			{text:'flex-direction:row-reverse 主轴为水平方向，起点在右端',value:'row-reverse'},
			{text:'flex-direction:column 主轴为垂直方向，起点在上沿',value:'column'},
			{text:'flex-direction:column-reverse 主轴为垂直方向，起点在下沿',value:'column-reverse'}
		],

		wrapSelect:'nowrap',
		wrapOptions:[
			{text:'flex-wrap: nowrap 不换行',value:'nowrap'},
			{text:'flex-wrap: wrap 换行，第一行在上方',value:'wrap'},
			{text:'flex-wrap: wrap-reverse 换行，第一行在下方',value:'wrap-reverse'}
		],

		justSelect:'flex-start',
		justOptions:[
			{text:'justify-content: flex-start 左对齐',value:'flex-start'},
			{text:'justify-content: flex-end 右对齐',value:'flex-end'},
			{text:'justify-content: center 居中',value:'center'},
			{text:'justify-content: space-between 两端对齐，项目之间的间隔都相等',value:'space-between'},
			{text:'justify-content: space-around 每个项目两侧的间隔相等',value:'space-around'}	
		],

		alignSelect:'stretch',
		alignOptions:[
			{text:'align-items: stretch 如果项目未设置高度或设为 auto，将占满整个容器的高度',value:'stretch'},
			{text:'align-items: flex-start 交叉轴的起点对齐',value:'flex-start'},
			{text:'align-items: flex-end 交叉轴的终点对齐',value:'flex-end'},
			{text:'align-items: center 交叉轴的中点对齐',value:'center'},
			{text:'align-items: baseline 项目的第一行文字的基线对齐',value:'baseline'}	
		],

		alcoSelect:'stretch',
		alcoOptions:[
			{text:'align-content: stretch 轴线占满整个交叉轴',value:'stretch'},
			{text:'align-content: flex-start 交叉轴的起点对齐',value:'flex-start'},
			{text:'align-content: flex-end 交叉轴的终点对齐',value:'flex-end'},
			{text:'align-content: center 交叉轴的中点对齐',value:'center'},
			{text:'align-content: space-between 与交叉轴两端对齐，轴线之间的间隔平均分布',value:'space-between'},
			{text:'align-content: space-around：每根轴线两侧的间隔都相等.', value:'space-around'}
		]
	},
	methods: {
		randItem(min, max){
			var min = min || this.widthOrMin;
			var max = max || this.heightOrMax;
			return parseInt(Math.random()*(max - min +1) + min);
		},
		boxStyleObject(){
			 return {
			 	 display: (this.isFlex ? 'flex' : ''),
				'flex-direction': this.dirSelect,
				'flex-wrap': this.wrapSelect,
				'justify-content': this.justSelect,
				'align-items': this.alignSelect,
				'align-content': this.alcoSelect
			 }
		},
		itemStyleObject(itemId){
			if(itemId){
				return {
					width: itemId.width + 'px',
					height: itemId.height + 'px',
					order: itemId.order,
					'flex-grow': itemId.grow,
					'flex-shrink': itemId.shrink,
					'flex-basis': parseInt(itemId.basis) + 'px',
					'align-self': itemId.self
				}
			}
			this.setItemId(this.itemNum);
		},
		setItemId(len){
			this.itemIds = [];
			for (var i = 0; i < len; i++)
			{	
				var item = {
					'order': i,
					'grow' : 0,
					'shrink': 1,
					'basis': 'auto',
					'self': 'auto',
					'width': this.widthOrMin,
					'height': this.heightOrMax
				}
				this.itemIds.push(item);
	   		}
		},
		changeItem(){
			this.itemIds.forEach((item, index, array)=>{
				this.itemIds[index].width = (this.fixedItem ?  this.widthOrMin : this.randItem());
				this.itemIds[index].height = (this.fixedItem ?  this.heightOrMax : this.randItem());
			}) ;
		}
	},
	created(){
		this.setItemId(this.itemNum);
	}
});