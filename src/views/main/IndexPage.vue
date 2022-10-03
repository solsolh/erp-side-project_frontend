<template>
  <div id="wrap">
    <!-- mainWrap 시작 -->
    <div id="mainWrap" class="inner">
<!--       leftSection 시작-->
      <div id="leftSection">
        <div class="logo">
          <h1 class="logo-title"><a href="javascript:">DAY</a></h1>
          <p class="logo-text">Schedule Management</p>
        </div>
        <div class="gnb"><ul class="nav">
          <li><router-link to="/calender">Calendar</router-link></li>
          <li><router-link to="/profile">Project2</router-link></li>
        </ul></div>
      </div>
      <!-- leftSection 끝 -->

      <!-- mainSection 시작-->
      <div id="mainSection">
<!--         header-->
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
                  <button type="button" class="user-name" @mouseover="dropDown = true" >홍길동길동</button>
                  <ul class="user-dropDown" v-if="dropDown == true" @mouseleave="dropDown = false">
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
              <div class="slide-wrap">
                <div class="team-slide"></div>
                <div class="team-slide"></div>
                <div class="team-slide"></div>
                <div class="team-slide"></div>
                <div class="team-slide"></div>
              </div>
            </div>
          </div>
          <div class="main-calender">
            <h3 class="main-title">My calender</h3>
            <div class="calender-cont">
              캘린더영역
            </div>
          </div>
        </div>
      </div>
      <!-- mainSection 끝-->

    </div>
    <!-- mainwrap 끝 -->
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      dropDown: false,
    }
  }
}
</script>

<style scoped>

</style>