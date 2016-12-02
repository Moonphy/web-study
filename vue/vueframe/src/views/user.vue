<template>
  <div>
    <Panel :show="true"  :volume='"col-8"' :panel-type="'ttv-left'"  @close="onAddCancel">
      <h3 slot="panelHeadLeft">
          用户列表
      </h3>
      <div slot="panelHeadRight" class="right-btn">
        <button class="btn" @click="openDialog()">新增</button>
      </div>
      <div slot="panelBody">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>帐号</th>
              <th>用户名</th>
              <th>位置</th>
              <th>地区</th>
              <th>电话</th>
            </tr>
          </thead>
          <tbody>
            <tr  v-for="user in users">
              <td>{{user.id}}</td>
              <td>{{user.username}}</td>
              <td>{{user.ballplace}}</td>
              <td>{{user.address}}</td>
              <td>{{user.phone}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Panel>
    <Panel :show="true"  :volume='"col-4"' :panel-Type='"ttv-right"' :panel-title="infoState">
      <div slot="panelBody">
        <validator name="validation1">
          <form novalidate  @submit.prevent="onRemoteSubmit">
            <div class="form-row clearfix">
              <label class="ttv-left col-2">用户名：</label>
              <div class="row-cont ttv-left">
                <div>
                  <input type="text" v-model="userModel.username" name="username" class="input-text"  v-validate:username="['required']">
                </div>
                <div class="row-tips" transition="menu" v-show="$validation1.username.touched && ($validation1.username.required)">
                    <p>Required your name.</p>
                </div>
              </div>
            </div>
            <div class="form-row clearfix">
              <label class="ttv-left col-2">昵称：</label>
              <div class="row-cont ttv-left">
                <div>
                  <input type="text" name="likename" v-model="userModel.likename" class="input-text"  v-validate:likename="{required: { rule: true, message: 'required you likename !!' },  minlength: {rule:2,message:'show minlength'}, maxlength:{rule:10,message:'show maxlength'}}">
                </div>
                <div class="row-tips"  transition="menu" v-if="$validation1.likename.touched && ($validation1.likename.required || $validation1.likename.minlength || $validation1.likename.maxlength)">
                      <template v-for="msg in $validation1.likename.errors">
                        {{msg.message}}
                      </template>
                </div>
              </div>
            </div>
            <div class="form-row clearfix">
              <label class="ttv-left col-2">类型：</label>
              <div class="row-cont ttv-left">
                <div>
                <input type="radio" v-model="userModel.rank" id="admin" value="1" v-validate:ranks="{required: { rule: true, message: '请选择类型' }
        }"/>
                  <label for="admin">管理员</label>
                  <input type="radio" id="commonuser" v-model="userModel.rank" value="2" v-validate:ranks="{
          required: { rule: true, message: '请选择类型' }
        }" />
                  <label for="commonuser">普通用户</label>
                </div>
                <div class="row-tips"  transition="menu"  v-show="$validation1.ranks.required">
                  <template  v-for="msg in $validation1.ranks.errors">
                    <p>{{msg.message}}</p>
                  </template>
                </div>
              </div>
            </div>
<!--             <div class="form-row clearfix">
              <label class="ttv-left col-2">：</label>
              <div class="row-cont ttv-left">
                <div>
                  <input v-model="fruits"  id="apple" type="checkbox" value="apple" v-validate:fruits="{
                            required: { rule: true, message: 'requiredErrorMsg' },
                            minlength: { rule: 2, message: 'minlengthErrorMsg' }
                          }">
                  <label for="apple">Apple</label>
                  <input v-model="fruits" id="orange" type="checkbox" value="orange" v-validate:fruits>
                  <label for="orange">Orage</label>
                  <input v-model="fruits" id="grape" type="checkbox" value="grape" v-validate:fruits>
                  <label for="grape">Grape</label>
                  <input  v-model="fruits" id="banana" type="checkbox" value="banana" v-validate:fruits>
                  <label for="banana">Banana</label>
                </div>
                <div class="row-tips" v-show="($validation1.fruits.required || $validation1.fruits.minlength)">
                  <template v-for="msg in $validation1.fruits.errors">
                    <p>{{msg.message}}</p>
                  </template>

                </div>
              </div>
            </div> -->
            <div class="form-row clearfix">
              <label class="ttv-left col-2">位置：</label>
              <div class="row-cont ttv-left">
                <div>
                    <input v-model="userModel.place" id="midfield"  type="checkbox" value="中场" v-validate:place="{ required: { rule: true, message: '请选择场上位置' }}" />
                    <label for="midfield">中场</label>
                    <input v-model="userModel.place" id="vanguard"  type="checkbox" value="前锋" v-validate:place="{ required: { rule: true, message: '请选择场上位置' }}" />
                    <label for="vanguard">前锋</label>
                </div>
                <div class="row-tips"  transition="menu"  v-show="$validation1.place.required">
                  <template  v-for="msg in $validation1.place.errors">
                    <p>{{msg.message}}</p>
                  </template>
                </div>
              </div>
            </div>
<!--             <div class="form-row clearfix">
              <label class="ttv-left col-2">Url：</label>
              <div class="row-cont ttv-left">
                <div>
                  <input type="text" name="url" class="input-text"  v-validate:url="{url:{rule:true, message:'error url'}}">
                </div>
                <div class="row-tips "> 
                  <template v-if="$validation1.url.touched && ($validation1.url.url )">
                    <template v-for="msg in $validation1.url.errors">
                      {{msg.message}}
                    </template>
                  </template>
                </div>
              </div>
            </div> -->
            <div class="form-row clearfix">
              <label class="ttv-left col-2">地区：</label>
              <div class="row-cont ttv-left">
                <vselect :items="selectItems" @select="selectArea"></vselect>
                <div class="row-tips hidden"> 请选择地区</div>
              </div>
            </div>
            <div class="form-row clearfix">
              <label class="ttv-left col-2">位置：</label>
              <div class="row-cont ttv-left">
                <vselect :items="placeItems"></vselect>
              </div>
            </div>
            <div class="form-row clearfix">
              <div class="form-submit">
                <div class="result-tips" v-show="formTips">{{formTips}}</div>
                <button type="submit"  class="btn btn-default"> 提交 </button>
              </div>
            </div>
          </form>
        </validator>
      </div>
    </Panel>
    <Dialog :show.sync="addDialog"><Dialog>
  </div>
</template>
<script>
  import store from '../store/store.js'
  import BarTop from '../components/Bar.vue'
  import Panel from '../components/Panel'
  import vselect from '../components/Select'
  import Modal from '../components/Modal'
  import Dialog from '../components/Dialog'
  import api from '../api/api'
  import { getUsers, getNavs, setRouter, addUser, setState } from '../store/actions'
  import _ from 'lodash'

  export default {

    components: {
      BarTop,
      Panel,
      vselect,
      Modal,
      Dialog
    },

    data () {
      return {
        selectItems: [{id: 1, text: '广州'}, {id: 2, text: '深圳'}, {id: 3, text: '肇庆'}],
        placeItems: [{id: 1, text: '中场'}, {id: 2, text: '前锋'}, {id: 3, text: '后卫'}],
        infoState: '新增',
        area: null,
        formTips: '',
        username: '99',
        addDialog: false,
        userModel: {
          id: '',
          username: '',
          likename: 'ln',
          place: ['中场', '前锋'],
          rank: ['2']
        },
        validatorObj: ['username', 'likename']
      }
    },

    store,

    vuex: {
      getters: {
        navs: ({ navs }) => navs.navs,
        router: ({ system }) => system.router,
        users: ({ user }) => user.users
      },
      actions: {
        getUsers: getUsers,
        getNav: getNavs,
        setRouter: setRouter,
        addUser,
        setState
      }
    },
    route: {
      data (_route) {
        this.setRouter(_route.to.path)
        if (this.users.length === 0) {
          this.getUsers()
        } else {
          this.setState(false)
        }
      }

    },

    methods: {
      openDialog () {
        this.addDialog = true
      },

      selectArea (item) {
        this.area = {
          id: item.id,
          text: item.text
        }
      },
      onAddCancel () {
        // this.$dispatch('close')
        console.log('dismiss-user')
      },

      onRemoteSubmit () {
        if (this.$validation1.valid) {
          api.user.addUser().then((res) => {
            console.log('success')
            this.addUser({ 'id': '10008',
              'username': this.userModel.username,
              'address': '广州市',
              'ballplace': '中场',
              'phone': 'testdesc',
              'likeTeam': '曼联',
              'rank': 1
            })
          }).catch(() => {

          })
        } else {
          console.log('error')
          this.formTips = '请填写完整'
        }
        // console.log(this.$validation1['fruits'].errors)
        _(this.validatorObj).forEach((value) => {
          if (this.$validation1[value] && this.$validation1[value].touched === false) {
            this.$validation1[value].touched = true
          }
        })

        // this.$resetValidation()
      }
    },

    events: {
      selectArea (item) {
        console.log(item)
      },
      close () {
        // console.log('-----')
      }
    }

  }
</script>
<style lang="stylus" scoped>
  @import '../assets/stylus/color'
  @import '../assets/stylus/util'
  @import '../assets/stylus/admin'
  @import '../assets/stylus/form'
  @import '../assets/stylus/transitions'

  .clearfix
    clearfix()
  .btn
    //position absolute
    top 50%
    width 60px
    right 5px
    margin -14.5px

  .right-btn
    position relative
    height 40px

  .row
    width 100%
    height 40px
    line-height 40px
    background line-color
    padding 0 10px
    .ext-tips
      vertical-align middle
      text-align center
  .table
    th,td
      padding 7px 20px
      text-align left
      cursor default
      white-space nowrap
    tr
      &:nth-child(odd) 
        td  
          background-color line-color
      &:hover td
        background-color #eefdfd

</style>
