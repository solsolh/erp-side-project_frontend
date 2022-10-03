<template>
  <div id="wrap">
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
          <div class="main-pro">
            <h3 class="main-title">개인정보 수정</h3>
            <div class="pro-cont">
              <table class="pro-table">
                <colgroup><col style="width: 12%;"><col><col style="width: 12%;"><col></colgroup>
                <tbody>
                <tr>
                  <th>이름</th>
                  <td><span class="input-box"><input type="text" maxlength="5"></span></td>
                  <th>이미지</th>
                  <td>
                    <div class="img-upload">
                      <div class="form-box">
                        <input type="text" readonly="readonly" placeholder="이미지를 등록해주세요." class="input-img">
                        <div class="upload-btn">
                          <button type="button" class="serch-img">찾아보기</button>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>성별</th>
                  <td>
                                        <span class="box_chk-group">
                                    <label class="radio">
                                        <input type="radio" disabled="disabled" name="genderType" id="genderType1" value="M">
                                        <span>남자</span></label> <label class="radio">
                                            <input type="radio" disabled="disabled" name="genderType" id="genderType2" value="F">
                                            <span>여자</span></label></span>
                  </td>
                  <th>연락처</th> <td><span class="input-box">
                                    <input type="text" title="연락처 입력" maxlength="11" class="big">
                                    </span></td>
                </tr>
                <tr>
                  <th>비밀번호</th>
                  <td><span class="input-box"><input type="password"></span></td>
                  <th>비밀번호 확인</th> <td><span class="input-box"><input type="password">
                                                </span></td>
                </tr>
                <tr>
                  <th>부서</th>
                  <td>
                    <span class="input-box"><input type="text"></span>
                  </td>
                </tr>
                </tbody>
              </table>
              <div class="alert-button">
                <button type="button" class="confirm alert-btn modify-confirm">저장</button>
                <button type="button" class="cancel alert-btn modify-cancel">취소</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- mainSection 끝-->
  </div>
</template>

<script>
export default {
  name: "ProFile"
}
</script>

<style scoped>

</style>