<template>
  <div id="wrap">
    <div class="black-bg"></div>
    <!-- mainWrap 시작 -->
    <div id="mainWrap" class="inner">
      <div id="mainSection">
      </div>
    </div>
    <!-- mainSection 끝-->

    <!-- d-day modal 시작-->
    <div id="ddayModal">
      <div class="dday-wrap">
        <div class="dday-left">
          <div class="left-main">
            <h3 class="dday-title">D-Day</h3>
            <div class="left-cont">
              <div class="left-hd">
                <span class="ck-star"><i class="xi-star"></i></span>
                <button type="button" class="detail-edit">수정</button>
              </div>
              <div class="left-box">
                                <span class="left-name">
                                    일정관리 시스템 출시
                                </span>
                <span class="day-count">
                                    D-365
                                </span>
                <span class="day-finish">2023-08-17</span>
                <span class="day-time">8760시간 15분 20초 전</span>
              </div>
              <div class="left-text">
                <p class="day-text">
                  일정관리 시스템 출시 D-day입니다. <br>
                  남은 기간 동안 일정을 잘 확인해 주세요!
                </p>
              </div>
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
        <button type="button" class="pop-close" @click="$router.push('/index')">
          <span class="blind">닫기</span></button>
        <button class="add-btn">+</button>
      </div>
    </div>
    <!-- d-day modal 끝-->

    <div id="notice">
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
  name: "DDay"
}
</script>

<style scoped>

</style>