var app = new Vue({
    el: '#app',
    data: {
        // 富文本编辑器
        editorModel: {
            content: "<div>我是初始化数据</div>"
        },

    },
    computed: {
    },
    methods: {
        modelChangeEvent: function (model, code) {
            model.content = code;
        },
        // setDate: function () {
        //     var that = this;
        //     console.log(this);
        //     this.editorModel.content = "<div>我异步获取的数据</div>";
        //     //异步获取数据
        //     setTimeout(function () {
        //         that.editorModel.content = "<div>我异步获取的数据</div>";
        //     }, 100);
        // }
    },
    mounted: function () {

    }
});