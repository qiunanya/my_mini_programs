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

    },
    /**
     * @description 监听properties和data的改变
     */
    observer: {
        name: function (newVal) {
            console.log(newVal);
        }
    },
    // -----------组件中监听生命周期函数-----------------
    // 1、监听页面的生命周期
    pageLifetimes: {
        show(){
            console.log('监听组件所在页面的显示出来时')
        },
        hide(){
            console.log('监听组件所在页面隐藏起来的')
        },
        resize(){
            console.log('监听页面尺寸的改变')
        }
    },
    
    // 2、监听组件本身的生命周期
    lifetimes:{
        created(){
            console.log('组件被创建出来')
        },
        attached () {
            console.log('组件被添加到页面');
        },
        ready(){
            console.log('组件被渲染出来')
        },
        moved(){
            console.log('组件被移动到另外一个节点')
        },
        detached(){
            console.log('组件被移除掉')
        }

    }
    
})
