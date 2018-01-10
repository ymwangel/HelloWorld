<template>
  <div id="detail" class="mod-detail">
    <div class="breadcrumb"><span style="color:#337ab7">买家保障／</span> 买保审核管理/详情页</div>
    <router-link to="/" class="link-list">返回列表页</router-link>
    <div class="query-item">
      <label class="detail-label">公司名称:</label>
      <label class="item-value">{{detailData.company_name}}</label>
      <!-- <el-input
        class="item-value"
        style="width:200px;vertical-align:middle" 
        size="small"
        v-model="detailData.company_name"
        :disabled="true">
      </el-input> -->
    </div>
    <div class="query-item">
      <label class="detail-label">member_id:</label>
      <label class="item-value">{{detailData.member_id}}</label>
    </div>
    <div class="query-item">
      <label class="detail-label">注册手机号:</label>
      <label class="item-value">{{detailData.phoneNumber}}</label>
    </div>
    <div class="query-item">
      <label class="detail-label">身份:</label>
      <label class="item-value">{{detailData.identify}}</label>
    </div>
    <div style="height:16px"></div>
    <div class="query-item">
      <label class="detail-label">状态:</label>
      <label class="item-value">{{detailData.status}}</label>
    </div>
    <div class="query-item">
      <label class="detail-label">退款申请</label>
      <label class="item-value">{{detailData.refundApply}}</label>
    </div>
    <div class="query-item">
      <label class="detail-label">失败原因：</label>
      <el-input v-model="detailData.failReason" placeholder="请填写失败原因" style="width:200px;vertical-align:middle" size="small"></el-input>
    </div>
    <div class="query-item">
      <el-button v-if="!detailData.failReason" type="primary" size="small" :disabled="true" @click="saveFailReason()" style="vertical-align:middle">保存</el-button>
      <el-button v-else type="primary" size="small" @click="saveFailReason()" style="vertical-align:middle">保存</el-button>
    </div>
    <div style="height:16px;"></div>
    <p>资金明细:</p>
    <div class="query-item">
      <label class="detail-label">保障金金额:</label>
      <label class="item-value">{{detailData.money}}</label>
    </div>
    <div class="query-item">
      <el-button type="primary" size="small" @click="showDialog=true" style="vertical-align:middle">增加</el-button>
    </div>
    <w-dialog :is-show="showDialog">
      <div class="add-dialog">
        <el-form :model="addData" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
          <el-form-item label="申请时间" prop="gmtTime">
            <el-input :disabled="true" v-model="addData.gmtTime" size="small"></el-input>
          </el-form-item>
          <el-form-item label="操作" prop="resource">
            <el-radio-group v-model="addData.operate">
              <el-radio label="1">增加 +</el-radio>
              <el-radio label="2">扣除 -</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="金额" prop="money">
            <el-input v-model="addData.money" type="number" size="small"></el-input>
          </el-form-item>
          <el-form-item label="用途" prop="application">
            <el-input v-model="addData.application" size="small"></el-input>
          </el-form-item>
          <el-form-item label="备注" prop="remark">
            <el-input v-model="addData.remark" size="small"></el-input>
          </el-form-item>
          <el-form-item>  
            <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
            <el-button @click="showDialog=false">关闭</el-button>
          </el-form-item>
        </el-form>
      </div>
    </w-dialog>



  </div>

</template>
<script>
  import Wdialog from './Wdialog.vue'

  function data() {
    return {
      detailData:{},
      showDialog:false,
      addData:{
        gmtTime:'',
        operate:'1',
        money:'',
        application:'',
        remark:''
      },
      rules: {
        operate: [
          { required: true, message: '请选择操作', trigger: 'blur' }
        ],
        money: [
          { required: true, message: '请填写金额', trigger: 'blur' }
        ],
        application: [
          { min: 0, max: 20, message: '最大长度为20个字符', trigger: 'blur' }
        ],
        remark: [
          { min: 0, max: 100, message: '最大长度为100个字符', trigger: 'blur' }
        ]
      }
    }
  }

  function init(vm) {
    vm.addData={
      gmtTime:vm.detailData.gmtTime,
      operate:'1',
      money:''
    }
  }

  function saveData(vm) {
    var param = {
      company_name:vm.detailData.company_name,
      member_id:vm.detailData.member_id,
      phoneNumber: vm.detailData.phoneNumber,
      status: vm.detailData.status,
      identify: vm.detailData.identify,
      refundApply: vm.detailData.refundApply,
      failReason: vm.detailData.failReason
    }
  }

  let methods = {
    saveFailReason(){
      var vm = this
      console.log(vm.detailData)
    },
    submitForm(formName){
      var vm = this
      vm.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
          init(vm)
          vm.showDialog = false
        } else {
          console.log('error submit!!');
          return false;
        }
      })
    }
  }

  export default {
    data,
    methods,
    components:{"w-dialog":Wdialog},
    mounted:function () {
      var vm = this
      vm.detailData = JSON.parse(vm.$route.query.row)
      init(vm)
    }
  }
</script>
