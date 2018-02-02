// 라이브러리
import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'vue-router'


// 화면 컨테이너
import Home from '@/components/containers/Home'
import Notice from '@/components/containers/Notice'
import MainContainer from '@/components/MainContainer'
import SideBarContainer from '@/components/containers/SideBarContainer'
import LectureCreateContainer from '@/components/containers/LectureCreateContainer'
import Login from '@/components/containers/Login'

//  화면 모듈
import AplectureApplication from '@/components/containers/AplectureApplication'
import * as Intro from '@/components/containers/intro'
import * as Apl from '@/components/containers/apl_lecture'
import * as Lecture from '@/components/containers/lecture'
import * as NewLecture from '@/components/containers/newLecture'
import * as Template from '@/components/containers/template'
import * as Company from '@/components/containers/company'


// 미들웨어
Vue.use(VueRouter)
Vue.prototype.$http = axios;




const router = new VueRouter({
    mode: 'history',
    routes: [

        {// 메인
            path: '/',
            component: Home
        },
        {// 로그인
            path: '/login',
            name: 'login',
            component: Login
        },


        {// 서비스소개
            path: '/service',
            component: Intro.ServiceIntro
        },

        {// 이용안내
            path: '/guide',
            component: Intro.Guide
        },

        {// APL수강신청
            path: '/apl/application',
            component: AplectureApplication,
            beforeEnter:(to,from,next)=>{
                console.log(1);
                alert(1)
            }
        },


        {// 공지사항
            path: '/notices',
            component: Notice,
            meta: {
                requiresAuth    : true,
                adminAuth       : true,
                residentAuth    : false
            }
        },



        {// APL강의
            path: '/aplectures',
            component: Apl.AplectureContainer,
            children: [
                {// APL강의목록
                    path: '',
                    component: Apl.AplectureList
                },
                {// APL상세보기
                    path: 'detail',
                    component: Apl.AplectureDetail
                },
                {// APL상세보기
                    path: 'application',
                    component: Apl.AplectureApplication
                }
            ]//children

        },



        {// 강의
            path: '/lectures',
            component: SideBarContainer,
            children: [

                {// 강의목록
                    path: '',
                    component : Lecture.LectureProcess
                },
                {// 진행중 강의 ttttt
                    path: 'processes',
                    name:'lectures_processes',
                    component : Lecture.LectureProcess
                },
                {// 상세보기
                    path : 'detail/:id',
                    component:Lecture.LectureWait
                },
                {// 승인대기 강의
                    path: 'wait',
                    name:'lectures_wait',
                    component : Lecture.LectureWait
                },
                {// 개설대기 강의
                    path: 'cwait',
                    name:'lectures_cwait',
                    component : Lecture.LectureCWait
                },
                {// 강의상세보기
                    path: 'temp',
                    name:'lectures_temp',
                    component : Lecture.LectureEdit
                },
                {// 강의상세보기
                    path: 'detail',
                    name:'lectures_detail',
                    component : Lecture.LectureDetail
                },
                {// 강의등록 테스트
                    path: 'insert',
                    component : Lecture.LectureInsert
                }

            ]
        },



        { // 강의템플릿관리
            path: '/templates',
            component: SideBarContainer,
            children: [
                {// 강의목록
                    path: '',
                    component : Template.TemplateList
                }
            ]
        },



        { // 기업관리
            path: '/companies',
            component: SideBarContainer,
            children: [

                {// 강의목록
                    path: '',
                    component : Company.CompanyList
                },
                {// 강의목록
                    path: 'detail/:cid',
                    component : Company.CompanyDetail
                },
                {// 강의목록
                    path: 'new',
                    component : Company.CompanyNew
                },
                {// 강의목록
                    path: 'analysis/:aid',
                    component : Company.CompanyAnalysis
                }

            ]//children
        },



        {//신규강의 등록
            path: '/lectures/new',
            component: LectureCreateContainer,
            children: [

                {// 강의개요
                    path: 'summary',
                    component: NewLecture.NewSummary
                },
                {// 강의기간설정
                    path: 'aplterm',
                    component: NewLecture.NewAplterm
                },
                {// 시간표설정
                    path: 'timetable',
                    component: NewLecture.NewTimetable
                },
                {// KPI설정
                    path: 'kpi',
                    component: NewLecture.NewKpi
                },
                {// 수강생설정
                    path: 'students',
                    component: NewLecture.NewStudent
                },
                {// 팀빌딩
                    path: 'team',
                    component: NewLecture.NewTeam
                },
                {// 설문
                    path: 'survey',
                    component: NewLecture.NewSurvey
                },
                {// 완료/결제
                    path: 'complete',
                    component: NewLecture.NewComplete
                }

            ]
        }
    ]
})//routes




// router.beforeEach((to, from, next)=>{
//     if (to.meta.requiresAuth) {
//         // const AuthUser = JSON.parse
//         const authUsr;
//     }
// })



export default router










/* 라우터 원본 */

// 라우터
// export default new VueRouter({
//     routes: [
//
//         {// 메인
//             path: '/',
//             component: Home
//         },
//         {// 로그인
//             path: '/login',
//             name: 'login',
//             component: Login
//         },
//
//
//         {// 서비스소개
//             path: '/service',
//             component: Intro.ServiceIntro
//         },
//
//         {// 이용안내
//             path: '/guide',
//             component: Intro.Guide
//         },
//
//         {// APL수강신청
//             path: '/apl/application',
//             component: AplectureApplication,
//             meta:{
//                 Auth:true
//             },
//             beforeEnter: (to, from, next)=>{
//                 console.log(to);
//                 console.log(from);
//             }
//         },
//
//
//         {// 공지사항
//             path: '/notices',
//             component: Notice
//         },
//
//
//
//         {// APL강의
//             path: '/aplectures',
//             component: Apl.AplectureContainer,
//             children: [
//                 {// APL강의목록
//                     path: '',
//                     component: Apl.AplectureList
//                 },
//                 {// APL상세보기
//                     path: 'detail',
//                     component: Apl.AplectureDetail
//                 },
//                 {// APL상세보기
//                     path: 'application',
//                     component: Apl.AplectureApplication
//                 }
//             ]//children
//
//         },
//
//
//
//         {// 강의
//             path: '/lectures',
//             component: SideBarContainer,
//             children: [
//
//                 {// 강의목록
//                     path: '',
//                     component : Lecture.LectureProcess
//                 },
//                 {// 진행중 강의 ttttt
//                     path: 'processes',
//                     name:'lectures_processes',
//                     component : Lecture.LectureProcess
//                 },
//                 {// 상세보기
//                     path : 'detail/:id',
//                     component:Lecture.LectureWait
//                 },
//                 {// 승인대기 강의
//                     path: 'wait',
//                     name:'lectures_wait',
//                     component : Lecture.LectureWait
//                 },
//                 {// 개설대기 강의
//                     path: 'cwait',
//                     name:'lectures_cwait',
//                     component : Lecture.LectureCWait
//                 },
//                 {// 강의상세보기
//                     path: 'temp',
//                     name:'lectures_temp',
//                     component : Lecture.LectureEdit
//                 },
//                 {// 강의상세보기
//                     path: 'detail',
//                     name:'lectures_detail',
//                     component : Lecture.LectureDetail
//                 },
//                 {// 강의등록 테스트
//                     path: 'insert',
//                     component : Lecture.LectureInsert
//                 }
//
//             ]
//         },
//
//
//
//         { // 강의템플릿관리
//             path: '/templates',
//             component: SideBarContainer,
//             children: [
//                 {// 강의목록
//                     path: '',
//                     component : Template.TemplateList
//                 }
//             ]
//         },
//
//
//
//         { // 기업관리
//             path: '/companies',
//             component: SideBarContainer,
//             children: [
//
//                 {// 강의목록
//                     path: '',
//                     component : Company.CompanyList
//                 },
//                 {// 강의목록
//                     path: 'detail/:cid',
//                     component : Company.CompanyDetail
//                 },
//                 {// 강의목록
//                     path: 'new',
//                     component : Company.CompanyNew
//                 },
//                 {// 강의목록
//                     path: 'analysis/:aid',
//                     component : Company.CompanyAnalysis
//                 }
//
//             ]//children
//         },
//
//
//
//         {//신규강의 등록
//             path: '/lectures/new',
//             component: LectureCreateContainer,
//             children: [
//
//                 {// 강의개요
//                     path: 'summary',
//                     component: NewLecture.NewSummary
//                 },
//                 {// 강의기간설정
//                     path: 'aplterm',
//                     component: NewLecture.NewAplterm
//                 },
//                 {// 시간표설정
//                     path: 'timetable',
//                     component: NewLecture.NewTimetable
//                 },
//                 {// KPI설정
//                     path: 'kpi',
//                     component: NewLecture.NewKpi
//                 },
//                 {// 수강생설정
//                     path: 'student',
//                     component: NewLecture.NewStudent
//                 },
//                 {// 팀빌딩
//                     path: 'team',
//                     component: NewLecture.NewTeam
//                 },
//                 {// 설문
//                     path: 'survey',
//                     component: NewLecture.NewSurvey
//                 },
//                 {// 완료/결제
//                     path: 'complete',
//                     component: NewLecture.NewComplete
//                 }
//
//             ]
//         }
//
//
//
//
//
//     ]//routes
// })
