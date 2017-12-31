<template>
  <div class="starFlow">
    <div>
      <div class="average">
        <div id="myChart" :style="{width: '600px', height: '450px'}"></div>
      </div>
      <div class="average">
        <div id="myBlockChart" :style="{width: '600px', height: '350px'}"></div>
      </div>
    </div>

    <div>
      <div class="average">
        <div id="idCard">
          <ul>
            <li><i class="fa fa-address-card-o fa-3x"></i><span>刘小四</span></li>
            <li><i class="fa fa-fw fa-weixin fa-3x"></i><span>liu15380925359</span></li>
            <li><i class="fa fa-fw fa-qq fa-3x"></i><span>1240135065</span></li>
          </ul>
        </div>
      </div>
      <div class="average">
        <div id="leaveMessage">
          <h3>可以在这留言给我哦</h3>
          <!-- use with components - bidirectioarticleDatadata binding（双向数据绑定） -->
          <quill-editor :style="{width: '100%',height:'200px'}" ref="myTextEditor"
                        v-model="messageContent"
                        :options="editorOption"
                        @blur="onEditorBlur($event)"
                        @focus="onEditorFocus($event)"
                        @ready="onEditorReady($event)">
          </quill-editor>
        </div>
        <div class="submitButton">
          <input type="text" class="visitorName" placeholder="请一并留下你的名字"/>
          <button class="submitLeave" v-on:click="sendMessage">确定</button>
        </div>
      </div>
    </div>

    <tips :options.sync="options" :show.sync="showNotification" @close="closeNotification"></tips>
  </div>
</template>

<script>

  import echarts from 'echarts/src/echarts'
  //用echarts时，不同的图需要不同的插件，所以引入就行了
  import * as gauge from 'echarts/src/chart/gauge'
  import * as bar from 'echarts/src/chart/bar'
  import tips  from '../tips/tips'

  import global from './global'
  export default {
    name: 'contactMe',
    data () {
      return {
        show:true,
        //弹窗
        showNotification: false,
        options: {},
        messageContent: '<h5>请留言</h5>',
        editorOption: {
          // something config
        },
        msg: 'Welcome to Your Vue.js App',
        allTipsContent:[
          {
            content: 'success',
            options: {
              autoClose: false,
              content: 'Uhh...it tastes yummy!'
            }
          },
          {
            content: 'warning',
            options: {
              autoClose: false,
              backgroundColor: '#fbff7c',
              textColor: '#92253f',
              content: 'You can also customerize the background color and text color.'
            }
          },
          {
            content: 'error',
            options: {
              autoClose: true,
              backgroundColor: '#fc5050',
              content: 'Yummy notie can be closed automatically.'
            }
          },
          {
            content: 'info',
            options: {
              autoClose: true,
              showTime: 3000,
              backgroundColor: '#769FCD',
              content: '保存成功.',
              countdownBar: true,
              barColor: '#415F77'
            }
          },
          {
            content: 'flexible',
            options: {
              backgroundColor: 'rgba(6,45,146,.6)',
              content: `<P><span style="font-family: anana;font-size: 1.5rem">Yummy notie</span> is extremely flexible! You can use HTML to make any kind of notification.<br><i><a href="https://github.com/Yuyz0112/vue-notie">More information.</a></i></P>`,
              textColor: '#03D6D2'
            }
          }
        ]
      }
    },
    components: {tips},
    mounted(){
      if(!this.$store.state.login){
        this.show = false;
        this.$router.replace('/');
        return false;
      }else{
        this.show = true;
      }
      let self = this;
      //用的jq的ajax请求，接口是后台提供的
      $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/diagram',
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        xhrFields: {
          withCredentials: true
        },
        success: function (data, index) {
          //获取到的技能柱形图的值
          let diagramData = data;
          self.drawLine(diagramData);
          self.drawBlock();
        }
      });

    },
    methods: {
      getBlockData(){
        let self = this;

        //用的jq的ajax请求，接口是后台提供的
        $.ajax({
          type: 'POST',
          url: 'http://localhost:3000/diagram',
          headers: {"Content-Type": "application/x-www-form-urlencoded"},
          xhrFields: {
            withCredentials: true
          },
          success: function (data, index) {
            //获取到的技能柱形图的值
            console.log(data,index);

          }
        });
      },
      drawLine(diagramData){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'));
        // 绘制图表
        let option = {
          title: {
            text: '技能表',
            subtext: '数据来自宇宙'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['2017年']
          },

          //工具栏，目前不需要，所以隐藏
          toolbox: {
            show: false,
            feature: {
              mark: {show: true},
              dataView: {show: true, readOnly: false},
              magicType: {show: true, type: ['line', 'bar']},
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          calculable: true,
          xAxis: [
            {
              axisLine: {
                lineStyle: {
                  type: 'solid',
                  color: '#333',//左边线的颜色
                  width: '0.5'//坐标线的宽度
                }
              },
              axisLabel: {textStyle: {color: '#333'}},
              type: 'value',
              boundaryGap: [0, 0.01]
            }
          ],
          yAxis: [
            {
              splitLine:{show: false},//去除网格线
              //splitArea : {show : true},//保留网格区域
              axisLine: {
                lineStyle: {
                  type: 'solid',
                  color: '#333',//左边线的颜色
                  width: '0.5'//坐标线的宽度
                }
              },
              axisLabel: {textStyle: {color: '#333'}},
              type: 'category',
              data: diagramData.name
            }
          ],
          grid: {
             x: 160,
             //x2:100, //控制Xy显示文字
             //y2:200
          },
          series: [
            {
              //柱的宽度
              barWidth: 20,
              name: '2017年',
              type: 'bar',
              data: diagramData.data,
              itemStyle: {
                //通常情况下：
                normal: {
                  //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                  color: function (params) {
                    let colorList = ['rgb(164,205,238)','rgb(164,205,238)','rgb(164,205,238)','rgb(164,205,238)','rgb(164,205,238)','rgb(164,205,238)','rgb(164,205,238)','rgb(164,205,238)','rgb(164,205,238)','rgb(164,205,238)'];
                    return colorList[params.dataIndex];
                  }
                }
              }
            }
          ]
        };
        myChart.setOption(option);
      },
      drawBlock(data){
        let myBlockChart = this.$echarts.init(document.getElementById('myBlockChart'));
        let option = {
          title: {
            text: '能量值',
            subtext: '数据来自宇宙'
          },
          backgroundColor: '',
          tooltip: {
            formatter: "{a} <br/>{c} {b}"
          },
          toolbox: {
            show: false,
            feature: {
              mark: {show: true},
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          series: [
            {
              name: '能量',
              type: 'gauge',
              min: 0,
              max: 220,
              splitNumber: 11,
              radius: '80%',
              axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                  color: [[0.09, 'lime'], [0.82, '#1e90ff'], [1, '#ff4500']],
                  width: 3,
                  shadowColor: '#333', //默认透明
                  shadowBlur: 10
                }
              },
              axisLabel: {            // 坐标轴小标记
                textStyle: {       // 属性lineStyle控制线条样式
                  fontWeight: 'bolder',
                  color: '#333',
                  shadowColor: '#333', //默认透明
                  shadowBlur: 10
                }
              },
              axisTick: {            // 坐标轴小标记
                length: 15,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                  color: 'auto',
                  shadowColor: '#333', //默认透明
                  shadowBlur: 10
                }
              },
              splitLine: {           // 分隔线
                length: 25,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                  width: 3,
                  color: '#fff',
                  shadowColor: '#fff', //默认透明
                  shadowBlur: 10
                }
              },
              pointer: {           // 分隔线
                shadowColor: '#fff', //默认透明
                shadowBlur: 5
              },
              title: {
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                  fontWeight: 'bolder',
                  fontSize: 20,
                  fontStyle: 'italic',
                  color: '#fff',
                  shadowColor: '#fff', //默认透明
                  shadowBlur: 10
                }
              },
              detail: {
                backgroundColor: 'rgba(30,144,255,0.8)',
                borderWidth: 1,
                borderColor: '#fff',
                shadowColor: '#fff', //默认透明
                shadowBlur: 5,
                offsetCenter: [0, '50%'],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                  fontWeight: 'bolder',
                  color: '#fff'
                }
              },
              data: [{value: 180, name: '能量'}]
            }
          ]
        };
        option.series[0].data[0].value = 220;
        myBlockChart.setOption(option);
      },
      onEditorBlur(editor) {
        console.log('editor blur!', editor)
      },
      onEditorFocus(editor) {
        this.messageContent = '';
      },
      onEditorReady(editor) {
        console.log('editor ready!', editor)
      },
      onEditorChange({editor, html, text}) {
        this.content = html
      },
      sendMessage(){
          let self = this;
          if(this.messageContent!==''){
            $.ajax({
              type:'POST',
              url:'http://localhost:3000/allTheMessage',
              headers:{"Content-Type":"application/x-www-form-urlencoded"},
              dataType:'json',
              data: {
                  "visitorname":$('.visitorName')[0].value,
                  "message":$(this.messageContent).text()
              },
              xhrFields: {
                withCredentials: true
              },
              success:function (data,index) {
                self.options = self.allTipsContent[3].options;
                self.showNotification = true;
                $('.ql-editor').find('p').text('')
                $('.visitorName').val('');
              }
            })
          }else{
              alert('还没输入内容额');
          }
      },
      closeNotification () {
        this.showNotification = false;
      }
    },
    // 如果你需要得到当前的editor对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的editor对象，实际上这里的$refs对应的是当前组件内所有关联了ref属性的组件元素对象
    computed: {
      editor() {
        return this.$refs.myTextEditor.quillEditor
      }
    }
  }
  //  export default {
  //    name: 'starFlow',
  //    articleData () {
  //      return{
  //        msg:'qweqweweq'
  //      }
  //    },
  //    mounted(){
  //      let canvas=document.getElementById('myCanvas');
  //      let ctx=canvas.getContext('2d');
  //      ctx.fillStyle='#FF0000';
  //      ctx.beginPath();
  //      ctx.moveTo(100,100);
  //      ctx.lineTo(700,700);
  //      ctx.stroke();
  //      ctx.lineWidth = 0.1;
  //
  //
  //    }
  //  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @lineHeight: 40px;
  .starFlow {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .average {
    display: flex;
    justify-content: center;
    padding: 50px 0 0 0;
    width: 800px;
  }

  #leaveMessage{
    background: #fff;
    height: 300px;
  }
  .average{
      flex-direction:  column;
  }
  .submitButton{
    text-align: right;
    width: 100%;
  }
  .submitLeave{
    margin-top: 6px;
    font-size: 18px;
    padding: 4px 10px;
    background: #25adf3;
    border: 1px solid #25adf3;
    border-radius: 3px;
    color: white;
  }
  .visitorName{
    width: 100%;
    text-align: center;
    font-size: 15px;
    height: 31px;
    border-top:0;
    outline: none;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }

  #idCard {
    ul {
      text-align: left;
      padding: 50px;
      li {
        color: #333;
        padding: 15px;
        span {
          padding: 0 0 10px 10px;
          line-height: @lineHeight;
          font-size: 23px;
        }
        i {
          line-height: @lineHeight;
          color: #333;
        }
      }
    }
  }
  .ql-container .ql-snow{
  height: 300px;
  }
  h1, h2 {
    font-weight: normal;
  }

  a {
    color: #42b983;
  }
</style>
