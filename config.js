// 导航页配置
// 添加新服务只需在这里增加条目即可
// 图标查找地址: https://fontawesome.com/search?m=free

const CONFIG = {
    // 默认模式: 'lan' (内网) 或 'wan' (外网)
    defaultMode: 'wan',

    // 页面标题
    title: "我的家庭云中心",

    // 导航分类及服务
    categories: [
        {
            name: "核心设施",
            items: [
                { 
                    name: "主路由器", 
                    icon: "fa-solid fa-wifi", 
                    lan: "http://192.168.2.1", 
                    wan: "",
                    desc: "网络出口网关"
                },
                {
                    name: "OpenWrt 旁路由",
                    icon: "fa-solid fa-wifi",
                    lan: "http://192.168.2.199",
                    wan: "",
                    desc: "家庭网络管理"
                },
                { 
                    name: "飞牛 NAS", 
                    icon: "fa-solid fa-database", 
                    lan: "http://192.168.2.198:5666", 
                    wan: "https://fnos.net/tech-ox",
                    desc: "数据存储中心"
                }
            ]
        },
        {
            name: "影音娱乐",
            items: [
                { 
                    name: "飞牛影视", 
                    icon: "fa-brands fa-youtube", 
                    lan: "http://192.168.2.198:5666/v", 
                    wan: "https://stun.tech-ox.com/v",
                    desc: "流媒体中心"
                },
                {
                    name: "MoviePilot", 
                    icon: "fa-brands fa-youtube", 
                    lan: "http://192.168.2.198:3000", 
                    wan: "https://mp.cscat.cn/",
                    desc: "Nas媒体管理工具"
                },
                { 
                    name: "Transmission", 
                    icon: "fa-solid fa-download", 
                    lan: "http://192.168.2.198:9091", 
                    wan: "https://tr.cscat.cn",
                    desc: "下载工具"
                },
                {
                    name: "Qbittorrent",
                    icon: "fa-solid fa-magnet",
                    lan: "http://192.168.2.198:8080",
                    wan: "https://qb.cscat.cn",
                    desc: "下载工具"
                }
            ]
        },
        {
            name: "工具服务",
            items: [
                { 
                    name: "Docker", 
                    icon: "fa-brands fa-docker", 
                    lan: "", 
                    wan: "https://docker.cscat.cn",
                    desc: "Portainer管理"
                }
            ]
        }
    ]
};
