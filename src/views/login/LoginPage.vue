<template>
  <div id="login">
    <div id="loginPage">
      <div class="loginBox">
        <div class="loginCont">
          <h1 class="loginTitle">LOGIN</h1>
          <div class="loginInner">
            <div class="loginForm">
              <div class="mainInput">
                <input id="id" name="id" class="inputBox" type="text" placeholder="아이디를 입력해 주세요." maxlength="15">
              </div>
              <div class="mainInput">
                <input id="pw" name="pw" class="inputBox" type="password" placeholder="비밀번호를 입력해 주세요." maxlength="15">
              </div>
              <div class="checkId">
                <label class="checkbox"><input type="checkbox" id="checkArea">
                  <span>아이디저장</span></label>
              </div>
              <button type="button" class="loginBtn" @click="$router.push('/index')">로그인</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "LoginPage",


//   methods: index()
// {
// // object
//   this.$router.push({path: 'index'})
// // 이름을 가지는 라우트
//   router.push({name: 'user', params: {userId: 123}})
// // 쿼리와 함께 사용, 결과는 /register?plan=private
//   router.push({path: 'register', query: {plan: 'private'}})
// },
}
</script>

<style scoped>

</style>

