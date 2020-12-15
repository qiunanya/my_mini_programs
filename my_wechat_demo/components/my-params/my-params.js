// components/my-pramas/my-params.js
Component({
        /**
         * 组件的属性列表
         */
        properties: {
           // name:String,
            name:{
                type: String,
                value: '我是组件默认值',
                observer:function(newV,oldV) {
                    console.log(newV,oldV,'监听name新值和旧值')
                }
            },
            content:{
                type:Array,
                value:[{name:'默认1',id:'66666'}]
            }
        },
        /**
         * @description 接收父组件传来的样式, 注意class不能大写，大写不生效
         */
        externalClasses:['titleclass'],
        /**
         * 组件的初始数据
         */
        data: {

        },

        /**
         * 组件的方法列表
         */
        methods: {

        }
})
