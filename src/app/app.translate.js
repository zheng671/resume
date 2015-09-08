(function() {

var app = angular.module('resume');

    // Configuring $translateProvider
    app.config(['$translateProvider', function ($translateProvider) {
        
        // Simply register translation table as object hash
        $translateProvider.translations('ch_CH', {
            'EMAIL_ADDRESS': 'zheng.671@osu.edu',
            'PHONE_NUMBER': '+86 13591169983',
            'WHERETOEAT_TITLE': 'Where To Eat安卓手机应用',
            'IOSCAL_TITILE': 'iOS计算器应用',
            'DIGICLIP_TITILE': 'Digiclip新网站开发',
            'TCETRA_DETAIL': '\
            <ul>\
                <li>参与VidaPay网站重构，作为小组领队，主要负责网站主体构建以及后台数据处理，日均订单过万，并且降低平均4s网站加载时间以及90%服务器过载</li>\
                <li>带领团队完成VidaExpress以及Vidapay Vendor Filfillment的网站搭建，主要负责网站架构以及数据交互，通过AngularJS以及ASP.NET WEB API2来实现单网页程序，使得网页平均加载速度在1s之内</li>\
                <li>独立完成四项公司账务系统模块，以及收据系统，平均每月处理百万订单</li>\
            </ul>',
            'CORPS_DETAIL': '\
            <ul>\
                <li>与公司创办者一起设计网站流程以及数据库设计</li>\
                <li>独立完成网站设计，构建以及维护，通过ASP.NET MVC以及Knockout实现网上支付以及后台CMS系统</li>\
            </ul>',
            'AMAZON_DETAIL': '\
            <ul>\
                <li>参与开发、更新以及测试新库存计划系统的权限模块</li>\
                <li>参与开发以及测试供应链系统</li>\
            </ul>',
            'OSU_DETAIL': '\
            <ul>\
                <li>为超过150名学生答疑解惑，以及参与设计课程的评分系统标准</li>\
            </ul>'
        });
    
        $translateProvider.translations('en_EN', {
            'EMAIL_ADDRESS': 'jianan.zheng.15@gmail.com',
            'PHONE_NUMBER': '+1 (614) 886-2919',
            '前端工程师': 'Front End Developer',
            '郑嘉南': 'Jianan Zheng',
            '高级前端工程师': 'Senior Front End Developer',
            '网站架构师': 'Senior Front End Developer',
            '实习软件工程师': 'Software Development Engineer Intern',
            '助教': 'Grader',
            '实习培训部助理': 'Training Coordinator Assistant Intern',
            '人力资源': 'Human Resource',
            '供应链系统': 'Supply Chain System',
            '计算机科学系' : 'Department of Computer Science',
            '计算机科学本科': 'B.S. Computer & Information Science',
            '链接': 'link',
            '饿了么主页重构': 'ele.me Home Page Refactoring',
            '技能': 'Skill',
            '工作经验': 'Working Experience',
            '教育': 'Education',
            '项目': 'Project',
            'WHERETOEAT_TITLE': 'Where To Eat Android application',
            'IOSCAL_TITILE': 'iOS Calculator',
            'DIGICLIP_TITILE': 'Digiclip new website development',
            'TCETRA_DETAIL': '\
            <ul>\
                <li>Reconstructed public website to enhance market presence by improving performance by more than 70 percent loading time and decreasing 90 percent server overload time in ASP.NET MVC</li>\
                <li>Lead two internal IT teams totaling five engineers to execute issue resolutions during Agile software development </li>\
                <li>Built an invoice reporting tool by using C#,.NET framework and Telerik that sends 2000+ invoices as PDF per day, reducing more than three hour processing time</li>\
                <li>Built a billing system that creates, processes and reports more than 100k orders per month </li>\
                <li>Developed a web service to support two existing cross platform mobile applications through WCF</li>\
            </ul>',
            'CORPS_DETAIL': '\
            <ul>\
                <li>Coordinated with leader team to construct Operation Business Model and Business Flow</li>\
                <li>Developed, designed, implemented and maintained official website and content management system by using ASP.NET MVC and Knockout JS</li>\
                <li>esigned and deployed database architecture for corporate IT systems</li>\
            </ul>',
            'AMAZON_DETAIL': '\
            <ul>\
                <li>Developed, tested and deployed a supply chain website</li>\
                <li>Cooperated with personnel from various levels to update permission service for inventory planning tools </li>\
            </ul>',
            'OSU_DETAIL': '\
            <ul>\
                <li>Provided academic support to over 150 students through conducting regular office hours and ad hoc voluntary session with students requiring additional assistance.</li>\
            </ul>'
        });
            
    	$translateProvider.use('ch_CH');
    }]);
})();
