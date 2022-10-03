<template>
  <div id="wrap">
    <div class="black-bg"></div>
    <!-- mainWrap 시작 -->
    <div id="mainWrap" class="inner">
      <!-- leftSection 시작-->
      <div id="leftSection">
        <div class="logo">
          <h1 class="logo-title"><a href="javascript:">DAY</a></h1>
          <p class="logo-text">Schedule Management</p>
        </div>
        <div class="gnb"><ul class="nav">
          <li><a href="./index.html">Calendar</a></li>
          <li><a href="javascript:">Project2</a></li>
        </ul></div>
      </div>
      <!-- leftSection 끝 -->

      <!-- mainSection 시작-->
      <div id="mainSection">
        <!-- header -->
        <div class="header">
          <div class="header-wrap">
            <h2 class="header-title">Calendar</h2>
            <span class="d-day">D-365</span>
            <div class="user">
              <div class="profile">
                                <span class="img-profile">
                                    <img src="" alt="">
                                </span>
                <div class="btn-user">
                  <button type="button" class="user-name">홍길동길동</button>
                  <ul class="user-dropDown">
                    <li><a href="javascript:">개인정보수정</a></li>
                    <li><a href="javascript:">로그아웃</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- mainCont -->
        <div class="main-cont">
          <div class="main-team">
            <h3 class="main-title">Team</h3>
            <div class="team-cont">
            </div>
          </div>
        </div>

      </div>
    </div>
    <!-- mainSection 끝-->

    <!-- d-day modal 시작-->
    <div id="ddayModal">
      <div class="dday-wrap">
        <div class="dday-left">
          <div class="left-main">
            <h3 class="dday-title">D-Day</h3>
            <div class="left-cont left-form">
              <div class="left-hd">
                <span class="ck-star"><i class="xi-star"></i></span>
              </div>
              <div class="left-box">
                                <span class="day-count">
                                    D-365
                                </span>
                <span class="cal-day">
                                    <input type="date" class="cal-data">
                                </span>
                <textarea class="left-name" placeholder="제목 15자 이내 입력" maxlength="15"></textarea>
                <textarea class="left-text" placeholder="내용 200자 이내 입력" maxlength="200"></textarea>
              </div>
              <button type="button" class="pop-save">저장</button>
            </div>
          </div>
        </div>

        <div class="dday-right">
          <div class="right-main">
            <h3 class="dday-title">등록된 D-Day</h3>
            <div class="right-cont">
              <div class="star-box">
                <div class="right-box" id="starBox">
                  <span class="right-count">D-365</span>
                  <p class="right-text">일정관리 시스템 출시</p>
                  <button type="button" class="box-close">
                    <span class="blind">닫기</span></button>
                </div>
              </div>
              <div class="right-box">
                <span class="right-count">D-100</span>
                <p class="right-text">최종 운영 테스트</p>
                <button type="button" class="box-close">
                  <span class="blind">닫기</span></button>
              </div>
              <div class="right-box">
                <span class="right-count">D-204</span>
                <p class="right-text">필드 테스트</p>
                <button type="button" class="box-close">
                  <span class="blind">닫기</span></button>
              </div>
              <div class="right-box">
                <span class="right-count">D-214</span>
                <p class="right-text">MVP 버전 출시</p>
                <button type="button" class="box-close">
                  <span class="blind">닫기</span></button>
              </div>

            </div>
          </div>

        </div>
        <button type="button" class="pop-close">
          <span class="blind">닫기</span></button>
        <button class="add-btn">+</button>
      </div>
    </div>
    <!-- d-day modal 끝-->

    <div id="notice" style="display: none;">
      <div class="alert-box">
        <div class="alert-hd">
          <p class="alert-title">안내</p>
        </div>
        <div class="alert-cont">
                        <span class="alert-text">선택한 D-day를 삭제 하시겠습니까?
                        </span>
        </div>
        <div class="alert-button">
          <button type="button" class="confirm alert-btn">확인</button>
          <button type="button" class="cancel alert-btn">취소</button>
        </div>
      </div>
    </div>

  </div>
  <!-- mainwrap 끝 -->
</template>

<script>
export default {
  name: "DdayCreate"
}
</script>

<style scoped>

</style>