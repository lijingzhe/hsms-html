 $(function(){
        var myChart=echarts.init(document.getElementById('main'));  
        var uploadedDataURL = "../../js/resource/yulin.json";
		myChart.showLoading();
	$.getJSON(uploadedDataURL, function(geoJson) {
	    echarts.registerMap('yulin', geoJson);
	    myChart.hideLoading();
	    var data = [
	        {name:'定边县', value: 0},
	        {name:'府谷县', value: 0},
	        {name:'神木县', value: 0},
	        {name:'靖边县', value: 0},
	        {name:'横山县', value: 0},
	        {name:'米脂县', value: 0},
	        {name:'子洲县', value: 0},
	        {name:'绥德县', value: 0},
	        {name:'吴堡县', value: 0},
	        {name:'佳县', value: 0},
	        {name:'榆阳区', value: 0},
	        {name:'清涧县', value: 0},
	    ];
	    var geoCoordMaphosptal= [{
	        '医院1': [107.601267, 37.594612],
	        '医院5': [111.067366, 39.028116],
	        '医院3': [110.498868, 38.842498],
	        '医院11': [108.793988, 37.599438], 
	    },
	    {
	    	'医院8': [109.294346, 37.962209],
	        '医院2': [110.183754, 37.755417],
	        '医院6': [110.03525, 37.610683],
	    },
        {
        	'医院7': [110.263362, 37.50294],
	        '医院4': [110.739673, 37.452068],
	        '医院9': [110.491345, 38.019511],
	        '医院10':[110.495868, 38.842498],
        }];
	    var datahospotal = [[
	        {name:'医院1', value: 9},
	        {name:'医院5', value: 9},	      
	        {name:'医院3', value: 420},
	        {name:'医院11', value: 380},
	    ],
	    [
	        {name:'医院8', value: 299},
	        {name:'医院2', value: 9},
	        {name:'医院6', value: 480},
	    ],
	    [
	        {name:'医院7', value: 2},
	        {name:'医院4', value: 9},
	        {name:'医院9', value: 452},
	        {name:'医院10', value: 489},

	    ],
	    ];

        var datah=[];
	    for(var i=0;i<datahospotal.length;i++){
	    	for(var y=0;y<datahospotal[i].length;y++){
	    	   datah.push(datahospotal[i][y]);
	    	}

	    }; 
	    console.log(datah);

	    var convertDataCity = function (datahospotal) {
	    var res = [];
		    for (var i = 0; i < datahospotal.length; i++) {
		    	for(var y=0; y< datahospotal[i].length;y++){
	                    var geoCoord = geoCoordMaphosptal[i][datahospotal[i][y].name];
				        if (geoCoord) {
				            res.push({
				                value: geoCoord.concat(datahospotal[i][y].value)
				            });
				        }
		    	}	    	
		        
		    }
            return res;		    
		};
		console.log(convertDataCity(datahospotal));
       
       function sliceArray(array) {
		    var result = [];
		    for (var x = 0; x < datahospotal.length; x++) {	
			        var start = x *datahospotal.length;
			        var end = start + datahospotal[x].length;
			        result.push(array.slice(start, end));
		        
		    }
		    return result;
		};
		var array = convertDataCity(datahospotal);
		var array1 = sliceArray(array);

		console.log(array1);  
	    var max = 480, min = 9; // todo 
	    var maxSize4Pin = 100, minSize4Pin = 20;



	  
	

        $(function(){
        	function creatMapadd(data,array1){
			    option = {
			        title: {
			            text: '',
			            subtext: '',
			            x: 'center',
			            textStyle: {
			                color: '#ccc'
			            }
			        },
			        tooltip: {
			            trigger: 'item',
			            formatter: function (params) {
			              if(typeof(params.value)[2] == "undefined"){
			              	return params.name + ' : ' + params.value+"传染病热力图、传染病数量前三、标注可以治疗传染病的医院";
			              }else{
			              	return params.name + ' : ' + params.value[2]+"传染病热力图、传染病数量前三、标注可以治疗传染病的医院";
			              }
			            }
			        },
			        legend: {
			            orient: 'vertical',
			            y: 'bottom',
			            x: 'right',
			            data: ['credit_pm2.5'],
			            textStyle: {
			                color: '#fff'
			            }
			        },
			        visualMap: {
			            show: false,
			            min: 0,
			            max: 500,
			            left: 'left',
			            top: 'bottom',
			            text: ['高', '低'], // 文本，默认为数值文本
			            calculable: true,
			            seriesIndex: [1],
			            inRange: {
			                 color: ['#135F96', '#277FBE'] // 蓝绿
			            }
			        },
			        geo: {
			            show: true,
			            map: 'yulin',
			            label: {
			                normal: {
			                    show: true,
			                    color:"#F5FDFF",
			                    fontSize:18,
			                    fontFmaily:"微软雅黑"

			                },
			                emphasis: {
			                    show: true,
			                }
			            },
			            roam: true,
			            itemStyle: {
			                normal: {
			                    areaColor: '#031525',
			                    borderColor: '#0AC6FD',
			                    borderWidth:1.5,
			                },
			                emphasis: {
			                    areaColor: '#277FBE',
			                }
			            }
			        },
			        series : [
				      {
				            name: '散点',
				            type: 'scatter',
				            coordinateSystem: 'geo',
				            data: convertDataCity(datahospotal),
				            /*symbol:'image://../../img/sanitationImg/emergencyImg/iconhospital.png',
				            symbolSize: function (val) {
				                return val[2] / 10;
				            },*/
				             label: {
				                normal: {
				                    formatter: '{b}',
				                    position: 'right',
				                    show: false
				                },
				                emphasis: {
				                    show: false
				                }
				            },
				            itemStyle: {
				                normal: {
				                  
				                    color: 'rgba(100,149,237,0)'
				                }
				            }
				        }, //颜色
				         {
				            type: 'map',
				            map: 'yulin',
				            geoIndex: 0,
				            aspectScale: 0.75, //长宽比
				            showLegendSymbol: false, // 存在legend时显示
				            label: {
				                normal: {
				                    show: true
				                },
				                emphasis: {
				                    show: false,
				                    textStyle: {
				                        color: '#fff'
				                    }
				                }
				            },
				            roam: true,
				            itemStyle: {
				                normal: {
				                    areaColor: '#031525',
				                    borderColor: '#3B5077',
				                    show:false
				                },
				                emphasis: {
				                    areaColor: '#2B91B7'
				                }
				            },
				            animation: false,
				            data: data
				        },
				        {
				            name: 'Top 5',
				            type: 'effectScatter',
				            coordinateSystem: 'geo',
				            data: array1[0],
				            symbol:'image://../../img/sanitationImg/emergencyImg/iconhospital.png',
				            symbolSize: function (val) {
				                return val[2] / 10;
				            },
				            showEffectOn: 'render',
				            rippleEffect: {
				                brushType: 'stroke'
				            },
				            hoverAnimation: true,
				            label: {
				                normal: {
				                    formatter: '{b}',
				                    position: 'right',
				                    show: true
				                }
				            },
				            zlevel: 1
				        }, 
				        {
				            name: 'Top 5',
				            type: 'effectScatter',
				            coordinateSystem: 'geo',
				            data: array1[1],
				            symbol:'image://../../img/sanitationImg/emergencyImg/iconhospital2.png',
				            symbolSize: function (val) {
				                return val[2] / 10;
				            },
				            showEffectOn: 'render',
				            rippleEffect: {
				                brushType: 'stroke'
				            },
				            hoverAnimation: true,
				            label: {
				                normal: {
				                    formatter: '{b}',
				                    position: 'right',
				                    show: true
				                }
				            },
				            /*itemStyle: {
				                normal: {
				                    color: 'yellow',
				                    shadowBlur: 10,
				                    shadowColor: 'yellow'
				                }
				            },*/
				            zlevel: 1
				        }, 
				        {
				            name: 'Top 5',
				            type: 'effectScatter',
				            coordinateSystem: 'geo',
				            data: array1[2],
				            symbol:'image://../../img/sanitationImg/emergencyImg/iconhospital3.png',
				            symbolSize: function (val) {
				                return val[2] / 10;
				            },
				            showEffectOn: 'render',
				            rippleEffect: {
				                brushType: 'stroke'
				            },
				            hoverAnimation: true,
				            label: {
				                normal: {
				                    formatter: '{b}',
				                    position: 'right',
				                    show: true
				                }
				            },
				            /*itemStyle: {
				                normal: {
				                    color: 'yellow',
				                    shadowBlur: 10,
				                    shadowColor: 'yellow'
				                }
				            },*/
				            zlevel: 1
				        },         
				        
				        
			    ],
			    };
			    myChart.setOption(option);
		    }
		    creatMapadd(data,array1);

	    })
	});
     myChart.on('click', function (param) {
                 event.stopPropagation();
                 window.location="../../page/sanitationPage/view/map/gaodeMap.html";

             });
})
