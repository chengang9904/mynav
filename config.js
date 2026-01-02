// 导航页配置
// 添加新服务只需在这里增加条目即可
// 图标查找地址: https://fontawesome.com/search?m=free

const CONFIG = {
    // 默认模式: 'lan' (内网) 或 'wan' (外网)
    defaultMode: 'lan',

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
                    name: "OpenWrt 辅路由",
                    icon: "fa-solid fa-wifi",
                    lan: "http://192.168.2.11",
                    wan: "",
                    desc: "家庭网络管理"
                },
                { 
                    name: "PVE 管理", 
                    icon: "fa-solid fa-server", 
                    lan: "https://192.168.2.240:8006", 
                    wan: "https://pve.cscat.cn", // 如果没有外网地址，留空即可
                    desc: "虚拟化平台"
                },
                { 
                    name: "飞牛 NAS", 
                    icon: "fa-solid fa-database", 
                    lan: "http://192.168.2.3:5666", 
                    wan: "https://fnos.net/fncscat",
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
                    lan: "http://192.168.2.3:5666/v", 
                    wan: "https://fnjp.cscat.cn/v",
                    desc: "流媒体中心"
                },
                {
                    name: "MoviePilot", 
                    icon: "fa-brands fa-youtube", 
                    lan: "http://192.168.2.3:3000", 
                    wan: "https://mp.cscat.cn/",
                    desc: "Nas媒体管理工具"
                },
                { 
                    name: "Transmission", 
                    icon: "fa-solid fa-download", 
                    lan: "http://192.168.2.3:9091", 
                    wan: "https://tr.cscat.cn",
                    desc: "下载工具"
                },
                {
                    name: "Qbittorrent",
                    icon: "fa-solid fa-magnet",
                    lan: "http://192.168.2.3:49196",
                    wan: "https://qb.cscat.cn",
                    desc: "下载工具"
                }
            ]
        },
        {
            name: "智能家居",
            items: [
                { 
                    name: "Home Assistant", 
                    icon: "fa-solid fa-house-signal", 
                    lan: "http://192.168.1.4:8123", 
                    wan: "https://ha.example.com",
                    desc: "智能家居中枢"
                }
            ]
        },
        {
            name: "工具服务",
            items: [
                { 
                    name: "QingLong", 
                    icon: "fa-solid fa-dragon", 
                    lan: "http://192.168.1.5:5700", 
                    wan: "",
                    desc: "定时任务面板"
                },
                { 
                    name: "Docker", 
                    icon: "fa-brands fa-docker", 
                    lan: "http://192.168.1.3:9000", 
                    wan: "",
                    desc: "Portainer管理"
                }
            ]
        }
    ]
};
