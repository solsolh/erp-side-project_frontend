<template>
  <div id="wrap">
    <!-- mainWrap 시작 -->
    <div id="mainWrap" class="inner">
      <!-- leftSection 시작-->
<!--      <div id="leftSection">-->
<!--        <div class="logo">-->
<!--          <h1 class="logo-title"><a href="javascript:">DAY</a></h1>-->
<!--          <p class="logo-text">Schedule Management</p>-->
<!--        </div>-->
<!--        <div class="gnb"><ul class="nav">-->
<!--          <li><a href="./index.html">Calendar</a></li>-->
<!--          <li><a href="javascript:">Project2</a></li>-->
<!--        </ul></div>-->
<!--      </div>-->
      <!-- leftSection 끝 -->

      <!-- mainSection 시작-->
      <div id="mainSection">
        <!-- header -->
<!--        <div class="header">-->
<!--          <div class="header-wrap">-->
<!--            <h2 class="header-title">Calendar</h2>-->
<!--            <span class="d-day">D-365</span>-->
<!--            <div class="user">-->
<!--              <div class="profile">-->
<!--                                <span class="img-profile">-->
<!--                                    <img src="" alt="">-->
<!--                                </span>-->
<!--                <div class="btn-user">-->
<!--                  <button type="button" class="user-name">홍길동길동</button>-->
<!--                  <ul class="user-dropDown">-->
<!--                    <li><a href="javascript:">개인정보수정</a></li>-->
<!--                    <li><a href="javascript:">로그아웃</a></li>-->
<!--                  </ul>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
        <!-- mainCont -->
        <div class="main-cont">
          <div class="cal-box">
            <h3 class="main-title">My calender</h3>
            <div class="cal-cont">
              상세 캘린더 영역
              <button id="detail">클릭 시 일정 상세 노출</button>
              <button class="comment-btn"><i class="xi-comment-o"><span class="blind">코멘트</span></i></button>
              <button class="add-btn">+</button>

              <!-- detail-popup시작 -->
              <div class="detail-pop">
                <div class="detail-box">
                  <div class="detail-hd">
                    <p class="detail-title">일정상세</p>
                    <button type="button" class="detail-edit">수정</button>
                  </div>
                  <div class="detail-cont">
                    <span class="detail-name">[워크샵] 강릉 2박 3일</span>
                    <div class="detail-day">
                      <div class="day-sart">
                                            <span class="cal-day">
                                                <i class="xi-calendar">2022-09-04</i>
                                            </span>
                        <span class="cal-time">
                                                <i class="xi-clock-o">AM 09:04</i>
                                            </span>
                      </div>
                      <div class="day-arrow">
                        <i class="xi-long-arrow-right"></i>
                      </div>
                      <div class="day-end">
                                            <span class="cal-day">
                                                <i class="xi-calendar">2022-09-06</i>
                                            </span>
                        <span class="cal-time">
                                                <i class="xi-clock-o">AM 09:04</i>
                                            </span>
                      </div>
                    </div>
                    <div class="detail-text">
                      <p class="text-box">
                        안녕히 계세요 여러분! <br>
                        전 이 세상의 모든 굴레와 속박을 벗어 던지고 제 행복을 찾아 떠납니다!
                        여러분도 행복하세요~~!
                      </p>
                    </div>
                  </div>
                  <button type="button" class="pop-close">
                    <span class="blind">닫기</span></button>
                </div>
              </div>
              <!-- detail-popup끝 -->

              <!-- add-popup시작 -->
              <div class="add-pop">
                <div class="add-box">
                  <div class="add-hd">
                    <p class="add-title">일정추가</p>
                    <!-- <button type="button" class="add-edit">수정</button> -->
                  </div>
                  <div class="add-cont add-form">
                    <input class="add-name" placeholder="제목 입력" maxlength="25">
                    <div class="add-day">
                      <div class="day-sart">
                                            <span class="cal-day">
                                                <input type="date" class="cal-data">
                                            </span>
                        <span class="cal-time">
                                                <input type="time" class="day-time">
                                            </span>
                      </div>
                      <div class="day-arrow">
                        <i class="xi-long-arrow-right"></i>
                      </div>
                      <div class="day-end">
                                            <span class="cal-day">
                                                <input type="date" class="cal-data">
                                            </span>
                        <span class="cal-time">
                                                <input type="time" class="day-time">
                                            </span>
                      </div>
                    </div>
                    <div class="add-text">
                      <textarea type="textarea" placeholder="내용 입력" class="text-box" maxlength="200"></textarea>
                    </div>
                  </div>
                  <button type="button" class="pop-save">저장</button>
                  <button type="button" class="pop-close">
                    <span class="blind">닫기</span></button>
                </div>
              </div>
              <!-- add-popup끝 -->

              <!-- comment-popup 시작-->
              <div class="comment-pop">
                <div class="com-box">
                  <div class="com-cont">
                    <span class="com-text">일정대로 진행해 주세요!</span>
                    <span class="com-name">by개발팀</span>
                    <span class="com-day">2022-08-17 12:22</span>
                  </div>
                  <div class="com-cont">
                    <span class="com-text">일정대로 진행해 주세요!</span>
                    <span class="com-name">by개발팀</span>
                    <span class="com-day">2022-08-17 12:22</span>
                  </div>
                  <button type="button" class="pop-close">
                    <span class="blind">닫기</span></button>
                </div>
              </div>
              <!-- comment-popup 끝-->

            </div>
          </div>
          <div class="btn-area">
            <button type="button" class="back-btn">뒤로가기</button>
          </div>
        </div>
      </div>
      <!-- mainSection 끝-->

      <!-- notice시작 -->
      <div id="notice">
        <div class="alert-box">
          <div class="alert-hd">
            <p class="alert-title">안내</p>
          </div>
          <div class="alert-cont">
                        <span class="alert-text">입력한 일정을 저장 하시겠습니까?
                        </span>
          </div>
          <div class="alert-button">
            <button type="button" class="confirm alert-btn">확인</button>
            <button type="button" class="cancel alert-btn">취소</button>
          </div>
        </div>
      </div>
      <!-- notice끝 -->
    </div>
    <!-- mainwrap 끝 -->
  </div>
</template>

<script>
export default {
  name: "CalenderDetail"
}
</script>

<style scoped>

</style>