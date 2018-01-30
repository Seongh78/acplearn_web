// 라이브러리
import Vue from 'vue'
import Router from 'vue-router'
import MainContainer from '@/components/MainContainer'


// 화면 컨테이너
import Home from '@/components/containers/Home'
import Notice from '@/components/containers/Notice'
import AplectureApplication from '@/components/containers/AplectureApplication'
import * as Intro from '@/components/containers/intro'
import * as Apl from '@/components/containers/apl_lecture'
import * as Lecture from '@/components/containers/lecture'
import * as NewLecture from '@/components/containers/newLecture'


// 미들웨어
Vue.use(Router)


// 라우터
export default new Router({
    routes: [

        {// 메인
            path: '/',
            component: Home
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
            component: AplectureApplication
        },


        {// 공지사항
            path: '/notices',
            component: Notice
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
            component: Lecture.LectureContainer,
            children: [

                {// 강의목록
                    path: '',
                    component : Lecture.LectureList
                },
                {// 강의상세보기
                    path: 'detail',
                    component : Lecture.LectureDetail
                },
                {// 강의등록 테스트
                    path: 'insert',
                    component : Lecture.LectureInsert
                }

            ]
        },


        {//신규강의 등록
            path: '/lectures/new',
            component: NewLecture.NewContainer,
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
                    path: 'student',
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





    ]//routes
})
