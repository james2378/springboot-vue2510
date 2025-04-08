const base = {
    get() {
        return {
            url : "http://localhost:8080/gerenkebiao/",
            name: "gerenkebiao",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/gerenkebiao/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "个人课表管理"
        } 
    }
}
export default base
