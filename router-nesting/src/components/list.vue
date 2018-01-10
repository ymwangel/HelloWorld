<template>
  <div id="list" class="mod-query">
    <div class="breadcrumb"><span style="color:#337ab7">买家保障／</span> 买保审核管理</div>
    <div class="query-item">
      <label class="item-label">公司名称:</label>
      <el-input v-model="queryData.company_name" placeholder="请输入公司名称" style="width:200px;vertical-align:middle" size="small"></el-input>
    </div>
    <div class="query-item">
      <label class="item-label">member_id:</label>
      <el-input v-model="queryData.member_id" placeholder="请输入member_id" style="width:200px;vertical-align:middle" size="small"></el-input>
    </div>
    <div class="query-item">
      <label class="item-label">注册手机号:</label>
      <el-input v-model="queryData.phoneNumber" placeholder="请输入注册手机号" style="width:180px;vertical-align:middle" size="small"></el-input>
    </div>
    <div class="query-item">
      <label class="item-label">身份:</label>
      <el-select v-model="queryData.identityCard" placeholder="请选择" size="small" style="width:100px;vertical-align:middle">
        <el-option
          v-for="item in identityStatus"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div style="height:16px;width:100%"></div>
    <div class="query-item">
      <label class="item-label">申请时间:</label>
      <div class="block" style="display:inline-block;vertical-align:middle">
        <el-date-picker
          v-model="queryData.startTime"
          type="date"
          placeholder="选择日期"
          size="small"
          style="width:200px;">
        </el-date-picker>
      </div>
    </div> 
    <div class="query-item">
      <label class="item-label">至</label>
      <div class="block" style="display:inline-block;vertical-align:middle">
        <el-date-picker
          v-model="queryData.endTime"
          type="date"
          placeholder="选择日期"
          size="small"
          style="width:200px;">
        </el-date-picker>
      </div>
    </div>
    <div class="query-item">
      <label class="item-label">状态:</label>
      <el-select v-model="queryData.status" placeholder="请选择" size="small" style="width:100px;vertical-align:middle">
        <el-option
          v-for="item in guaranStatus"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="query-item" style="margin-left:50px">
      <el-button type="primary" @click="queryLists()" size="small" style="vertical-align:middle">查询</el-button>
    </div> 

    <el-table class="table-lists" v-show="lists != null && lists.length != 0"
      :data="lists"
      style="width: 100%;margin-top:12px"
      border>
      <el-table-column
        label="序号"
        type="index"
        >
      </el-table-column>
      <el-table-column
        label="公司名称"
        prop="company_name"
        min-width="200"
        >
      </el-table-column>
      <el-table-column
        label="member_id"
        prop="member_id"
        min-width="120"
        >
      </el-table-column>
      <el-table-column
        label="身份"
        min-width="100"
        prop="identify"
        >
      </el-table-column>
      <el-table-column
        prop="phoneNumber"
        label="注册手机号"
        min-width="130"
        >
      </el-table-column>
      <el-table-column
        prop="money"
        label="保障金"
        min-width="100"
        >
      </el-table-column>
      <el-table-column
        label="余额"
        prop="balance"
        min-width="100"
        >
      </el-table-column>
      <el-table-column
        prop="gmtTime"
        label="申请时间"
        min-width="150"
        >
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        min-width="100"
        >
      </el-table-column>
      <el-table-column
        label="操作"
        min-width="200">
        <template scope="scope">
          <el-button :plain="true" type="text" :disabled="true" size="mini" @click="openServer(scope.row)">开通</el-button>
          <el-button :plain="true" type="text" size="mini" @click="cancelServer(scope.row)">取消</el-button>
          <span class="link" @click="checkDetail(scope.row)">查看详情</span>
          <!-- <router-link class="link" :to="{name: 'detail',params:{member_id: scope.row.member_id}}">查看详情</router-link> -->
          <!-- <router-link class="link" :to="{path: '/detail/123'}">查看详情</router-link> -->
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>


<script>
  /* eslint-diable */
  import F from '../../../lib/function.js'

  function data() {
    return {
      queryData:{
        company_name:'',  
        member_id:'',        
        phoneNumber:'',    
        identityCard:'',  
        startTime:'',        
        endTime:'',
        status:'' 
      },
      lists:[],
      identityStatus:[
      {
        value: '选项1',
        label: '请选择'
      }, 
      {
        value: '选项2',
        label: '普通卖家'
      }, 
      {
        value: '选项3',
        label: '钢铁拍档'
      }],
      guaranStatus:[
      {
        value: '选项1',
        label: '请选择'
      },
      {
        value: '选项2',
        label: '申请退出'
      },
      {
        value: '选项3',
        label: '未开通'
      },
      {
        value: '选项4',
        label: '已开通'
      }]
    }
  }

  function getLists(vm) {
    var param = {
      company_name: vm.queryData.company_name,  //公司名称
      member_id: vm.queryData.member_id,        //member_id
      phoneNumber: vm.queryData.phoneNumber,    //注册电话
      identityCard: vm.queryData.identityCard,  //身份
      startTime: vm.queryData.startTime,        //申请开始时间
      endTime: vm.queryData.endTime,
      status: vm.queryData.status
    }
    F.getJSON('/guarantee/list',param)
    .then(function (data) {
      vm.lists = data.data
    },function (error) {
      console.log(error)
    })
  }

  let methods = {
    queryLists(){
      var vm = this
      getLists(vm)
    },
    openServer(row){
      console.log(row)
    },
    cancelServer(row){
      console.log(row)
    },
    checkDetail(row){
      var vm = this
      // vm.$router.push({path:('/detail/'+row.company_name+row.member_id)})
      // vm.$router.push({ path: 'detail', query: { company_name: row.company_name,member_id:row.member_id,phoneNumber:row.phoneNumber,status:row.status,identify:row.identify}})
      vm.$router.push({ path: 'detail', query: { row: JSON.stringify(row)}})
    }
  }

  export default {
    name:'list',
    data,
    methods,
    components:{}
  }
</script>