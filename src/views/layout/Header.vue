<template>
        <div class="header">
          <div class="header-wrap">
            <h2 class="header-title">Calendar</h2>
            <span class="d-day" @click="$router.push('/dday')">D-365</span>
            <div class="user">
              <div class="profile">
                                <span class="img-profile"><img src="" alt=""> </span>
                <div class="btn-user">
                  <button type="button" class="user-name" @mouseover="dropDown = true" >홍길동길동</button>
                  <ul class="user-dropDown" v-if="dropDown == true" @mouseleave="dropDown = false">
                    <li><a href="javascript:" @click="$router.push('/profile')">개인정보수정</a></li>
                    <li><a href="javascript:" @click="$router.push('/')">로그아웃</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      dropDown: false,
    }
  }
}
</script>

<style scoped>

</style>