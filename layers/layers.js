var wms_layers = [];

var lyr_DMRzUAVsrozlenm10cm_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "DMR z UAV s rozlíšením 10cm",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DMRzUAVsrozlenm10cm_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1992560.177599, 6230945.462790, 1992854.030213, 6231203.753842]
                            })
                        });
var lyr_DMRzUAVsrozlenm1m_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "DMR z UAV s rozlíšením 1m",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DMRzUAVsrozlenm1m_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1992560.903923, 6230945.600230, 1992853.345019, 6231203.162851]
                            })
                        });
var lyr_DMRzmeranchdajovsrozlenm1m_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "DMR z meraných údajov s rozlíšením 1m",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DMRzmeranchdajovsrozlenm1m_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1992559.850885, 6230945.378759, 1992857.088376, 6231206.377373]
                            })
                        });
var lyr_DMRzmeranchdajovsrozlenm10cm_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "DMR z meraných údajov s rozlíšením 10cm",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DMRzmeranchdajovsrozlenm10cm_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1992560.072761, 6230945.306603, 1992854.144910, 6231203.710626]
                            })
                        });
var format_Meranbody_4 = new ol.format.GeoJSON();
var features_Meranbody_4 = format_Meranbody_4.readFeatures(json_Meranbody_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Meranbody_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Meranbody_4.addFeatures(features_Meranbody_4);
var lyr_Meranbody_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Meranbody_4, 
                style: style_Meranbody_4,
                interactive: false,
                title: '<img src="styles/legend/Meranbody_4.png" /> Merané body'
            });
var lyr_DMRzGKKsrozlenm10cm_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "DMR z ÚGKK s rozlíšením 10cm",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DMRzGKKsrozlenm10cm_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1992560.148409, 6230945.404186, 1992854.001022, 6231203.695237]
                            })
                        });
var lyr_DMRzGKKsrozlenm1m_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "DMR z ÚGKK s rozlíšením 1m",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DMRzGKKsrozlenm1m_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1992560.970661, 6230946.160105, 1992853.411775, 6231203.722742]
                            })
                        });
var lyr_VkovrozdielyzDMR_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "Výškové rozdiely z DMR",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/VkovrozdielyzDMR_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1992519.775738, 6230857.168115, 1992986.788035, 6231228.100696]
                            })
                        });
var format_Vekoszpornchrozdielov_8 = new ol.format.GeoJSON();
var features_Vekoszpornchrozdielov_8 = format_Vekoszpornchrozdielov_8.readFeatures(json_Vekoszpornchrozdielov_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vekoszpornchrozdielov_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vekoszpornchrozdielov_8.addFeatures(features_Vekoszpornchrozdielov_8);
var lyr_Vekoszpornchrozdielov_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vekoszpornchrozdielov_8, 
                style: style_Vekoszpornchrozdielov_8,
                interactive: false,
    title: 'Veľkosť záporných rozdielov<br />\
    <img src="styles/legend/Vekoszpornchrozdielov_8_0.png" /> -2.175 m - -0.280 m<br />\
    <img src="styles/legend/Vekoszpornchrozdielov_8_1.png" /> -0.280 m - -0.189 m<br />\
    <img src="styles/legend/Vekoszpornchrozdielov_8_2.png" /> -0.189 m - -0.143 m<br />\
    <img src="styles/legend/Vekoszpornchrozdielov_8_3.png" /> -0.143 m - -0.104 m<br />\
    <img src="styles/legend/Vekoszpornchrozdielov_8_4.png" /> -0.104 m - -0.080 m<br />\
    <img src="styles/legend/Vekoszpornchrozdielov_8_5.png" /> -0.080 m - -0.060 m<br />\
    <img src="styles/legend/Vekoszpornchrozdielov_8_6.png" /> -0.060 m - -0.043 m<br />\
    <img src="styles/legend/Vekoszpornchrozdielov_8_7.png" /> -0.043 m - -0.028 m<br />\
    <img src="styles/legend/Vekoszpornchrozdielov_8_8.png" /> -0.028 m - -0.016 m<br />\
    <img src="styles/legend/Vekoszpornchrozdielov_8_9.png" /> -0.016 m - 0 m<br />'
        });
var format_Vekoskladnchrozdielov_9 = new ol.format.GeoJSON();
var features_Vekoskladnchrozdielov_9 = format_Vekoskladnchrozdielov_9.readFeatures(json_Vekoskladnchrozdielov_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vekoskladnchrozdielov_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vekoskladnchrozdielov_9.addFeatures(features_Vekoskladnchrozdielov_9);
var lyr_Vekoskladnchrozdielov_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vekoskladnchrozdielov_9, 
                style: style_Vekoskladnchrozdielov_9,
                interactive: false,
    title: 'Veľkosť kladných rozdielov<br />\
    <img src="styles/legend/Vekoskladnchrozdielov_9_0.png" /> 0.001 m - 0.008 m<br />\
    <img src="styles/legend/Vekoskladnchrozdielov_9_1.png" /> 0.008 m - 0.019 m<br />\
    <img src="styles/legend/Vekoskladnchrozdielov_9_2.png" /> 0.019 m - 0.029 m<br />\
    <img src="styles/legend/Vekoskladnchrozdielov_9_3.png" /> 0.029 m - 0.045 m<br />\
    <img src="styles/legend/Vekoskladnchrozdielov_9_4.png" /> 0.045 m - 0.062 m<br />\
    <img src="styles/legend/Vekoskladnchrozdielov_9_5.png" /> 0.062 m - 0.094 m<br />\
    <img src="styles/legend/Vekoskladnchrozdielov_9_6.png" /> 0.094 m - 0.179 m<br />\
    <img src="styles/legend/Vekoskladnchrozdielov_9_7.png" /> 0.179 m - 0.419 m<br />\
    <img src="styles/legend/Vekoskladnchrozdielov_9_8.png" /> 0.419 m - 1.457 m<br />\
    <img src="styles/legend/Vekoskladnchrozdielov_9_9.png" /> 1.457 m - 3.227 m<br />'
        });
var format_Zpornrozdiely_10 = new ol.format.GeoJSON();
var features_Zpornrozdiely_10 = format_Zpornrozdiely_10.readFeatures(json_Zpornrozdiely_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zpornrozdiely_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zpornrozdiely_10.addFeatures(features_Zpornrozdiely_10);
var lyr_Zpornrozdiely_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zpornrozdiely_10, 
                style: style_Zpornrozdiely_10,
                interactive: false,
    title: 'Záporné rozdiely<br />\
    <img src="styles/legend/Zpornrozdiely_10_0.png" /> -2.175 m - -0.280 m<br />\
    <img src="styles/legend/Zpornrozdiely_10_1.png" /> -0.280 m - -0.189 m<br />\
    <img src="styles/legend/Zpornrozdiely_10_2.png" /> -0.189 m - -0.143 m<br />\
    <img src="styles/legend/Zpornrozdiely_10_3.png" /> -0.143 m - -0.104 m<br />\
    <img src="styles/legend/Zpornrozdiely_10_4.png" /> -0.104 m - -0.080 m<br />\
    <img src="styles/legend/Zpornrozdiely_10_5.png" /> -0.080 m - -0.060 m<br />\
    <img src="styles/legend/Zpornrozdiely_10_6.png" /> -0.060 m - -0.043 m<br />\
    <img src="styles/legend/Zpornrozdiely_10_7.png" /> -0.043 m - -0.028 m<br />\
    <img src="styles/legend/Zpornrozdiely_10_8.png" /> -0.028 m - -0.016 m<br />\
    <img src="styles/legend/Zpornrozdiely_10_9.png" /> -0.016 m - 0 m<br />'
        });
var format_Kladnrozdiely_11 = new ol.format.GeoJSON();
var features_Kladnrozdiely_11 = format_Kladnrozdiely_11.readFeatures(json_Kladnrozdiely_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kladnrozdiely_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kladnrozdiely_11.addFeatures(features_Kladnrozdiely_11);
var lyr_Kladnrozdiely_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kladnrozdiely_11, 
                style: style_Kladnrozdiely_11,
                interactive: false,
    title: 'Kladné rozdiely<br />\
    <img src="styles/legend/Kladnrozdiely_11_0.png" /> 0.001 m - 0.008 m<br />\
    <img src="styles/legend/Kladnrozdiely_11_1.png" /> 0.008 m - 0.019 m<br />\
    <img src="styles/legend/Kladnrozdiely_11_2.png" /> 0.019 m - 0.029 m<br />\
    <img src="styles/legend/Kladnrozdiely_11_3.png" /> 0.029 m - 0.045 m<br />\
    <img src="styles/legend/Kladnrozdiely_11_4.png" /> 0.045 m - 0.062 m<br />\
    <img src="styles/legend/Kladnrozdiely_11_5.png" /> 0.062 m - 0.094 m<br />\
    <img src="styles/legend/Kladnrozdiely_11_6.png" /> 0.094 m - 0.179 m<br />\
    <img src="styles/legend/Kladnrozdiely_11_7.png" /> 0.179 m - 0.419 m<br />\
    <img src="styles/legend/Kladnrozdiely_11_8.png" /> 0.419 m - 1.457 m<br />\
    <img src="styles/legend/Kladnrozdiely_11_9.png" /> 1.457 m - 3.227 m<br />'
        });
var lyr_VkovrozdielyzDMR_12 = new ol.layer.Image({
                            opacity: 1,
                            title: "Výškové rozdiely z DMR",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/VkovrozdielyzDMR_12.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1992560.148424, 6230946.022666, 1992853.411775, 6231196.163295]
                            })
                        });
var format_Vekoszpornchrozdielov_13 = new ol.format.GeoJSON();
var features_Vekoszpornchrozdielov_13 = format_Vekoszpornchrozdielov_13.readFeatures(json_Vekoszpornchrozdielov_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vekoszpornchrozdielov_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vekoszpornchrozdielov_13.addFeatures(features_Vekoszpornchrozdielov_13);
var lyr_Vekoszpornchrozdielov_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vekoszpornchrozdielov_13, 
                style: style_Vekoszpornchrozdielov_13,
                interactive: false,
    title: 'Veľkosť záporných rozdielov<br />\
    <img src="styles/legend/Vekoszpornchrozdielov_13_0.png" /> -2.175 m - -0.280 m<br />\
    <img src="styles/legend/Vekoszpornchrozdielov_13_1.png" /> -0.280 m - -0.189 m<br />\
    <img src="styles/legend/Vekoszpornchrozdielov_13_2.png" /> -0.189 m - -0.143 m<br />\
    <img src="styles/legend/Vekoszpornchrozdielov_13_3.png" /> -0.143 m - -0.104 m<br />\
    <img src="styles/legend/Vekoszpornchrozdielov_13_4.png" /> -0.104 m - -0.080 m<br />\
    <img src="styles/legend/Vekoszpornchrozdielov_13_5.png" /> -0.080 m - -0.060 m<br />\
    <img src="styles/legend/Vekoszpornchrozdielov_13_6.png" /> -0.060 m - -0.043 m<br />\
    <img src="styles/legend/Vekoszpornchrozdielov_13_7.png" /> -0.043 m - -0.028 m<br />\
    <img src="styles/legend/Vekoszpornchrozdielov_13_8.png" /> -0.028 m - -0.016 m<br />\
    <img src="styles/legend/Vekoszpornchrozdielov_13_9.png" /> -0.016 m - 0 m<br />'
        });
var format_Vekoskladnchrozdielov_14 = new ol.format.GeoJSON();
var features_Vekoskladnchrozdielov_14 = format_Vekoskladnchrozdielov_14.readFeatures(json_Vekoskladnchrozdielov_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vekoskladnchrozdielov_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vekoskladnchrozdielov_14.addFeatures(features_Vekoskladnchrozdielov_14);
var lyr_Vekoskladnchrozdielov_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vekoskladnchrozdielov_14, 
                style: style_Vekoskladnchrozdielov_14,
                interactive: false,
    title: 'Veľkosť kladných rozdielov<br />\
    <img src="styles/legend/Vekoskladnchrozdielov_14_0.png" /> 0.001 m - 0.008 m<br />\
    <img src="styles/legend/Vekoskladnchrozdielov_14_1.png" /> 0.008 m - 0.019 m<br />\
    <img src="styles/legend/Vekoskladnchrozdielov_14_2.png" /> 0.019 m - 0.029 m<br />\
    <img src="styles/legend/Vekoskladnchrozdielov_14_3.png" /> 0.029 m- 0.045 m<br />\
    <img src="styles/legend/Vekoskladnchrozdielov_14_4.png" /> 0.045 m - 0.062 m<br />\
    <img src="styles/legend/Vekoskladnchrozdielov_14_5.png" /> 0.062 m - 0.094 m<br />\
    <img src="styles/legend/Vekoskladnchrozdielov_14_6.png" /> 0.094 m - 0.179 m<br />\
    <img src="styles/legend/Vekoskladnchrozdielov_14_7.png" /> 0.179 m - 0.419 m<br />\
    <img src="styles/legend/Vekoskladnchrozdielov_14_8.png" /> 0.419 m - 1.457 m<br />\
    <img src="styles/legend/Vekoskladnchrozdielov_14_9.png" /> 1.457 m - 3.227 m<br />'
        });
var format_Zpornrozdiely_15 = new ol.format.GeoJSON();
var features_Zpornrozdiely_15 = format_Zpornrozdiely_15.readFeatures(json_Zpornrozdiely_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zpornrozdiely_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zpornrozdiely_15.addFeatures(features_Zpornrozdiely_15);
var lyr_Zpornrozdiely_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zpornrozdiely_15, 
                style: style_Zpornrozdiely_15,
                interactive: false,
    title: 'Záporné rozdiely<br />\
    <img src="styles/legend/Zpornrozdiely_15_0.png" /> -2.175 m - -0.280 m<br />\
    <img src="styles/legend/Zpornrozdiely_15_1.png" /> -0.280 m - -0.189 m<br />\
    <img src="styles/legend/Zpornrozdiely_15_2.png" /> -0.189 m - -0.143 m<br />\
    <img src="styles/legend/Zpornrozdiely_15_3.png" /> -0.143 m - -0.104 m<br />\
    <img src="styles/legend/Zpornrozdiely_15_4.png" /> -0.104 m - -0.080 m<br />\
    <img src="styles/legend/Zpornrozdiely_15_5.png" /> -0.080 m - -0.060 m<br />\
    <img src="styles/legend/Zpornrozdiely_15_6.png" /> -0.060 m - -0.043 m<br />\
    <img src="styles/legend/Zpornrozdiely_15_7.png" /> -0.043 m - -0.028 m<br />\
    <img src="styles/legend/Zpornrozdiely_15_8.png" /> -0.028 m - -0.016 m<br />\
    <img src="styles/legend/Zpornrozdiely_15_9.png" /> -0.016 m - 0 m<br />'
        });
var format_Kladnrozdiely_16 = new ol.format.GeoJSON();
var features_Kladnrozdiely_16 = format_Kladnrozdiely_16.readFeatures(json_Kladnrozdiely_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kladnrozdiely_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kladnrozdiely_16.addFeatures(features_Kladnrozdiely_16);
var lyr_Kladnrozdiely_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kladnrozdiely_16, 
                style: style_Kladnrozdiely_16,
                interactive: false,
    title: 'Kladné rozdiely<br />\
    <img src="styles/legend/Kladnrozdiely_16_0.png" /> 0.001 m - 0.008 m<br />\
    <img src="styles/legend/Kladnrozdiely_16_1.png" /> 0.008 m - 0.019 m<br />\
    <img src="styles/legend/Kladnrozdiely_16_2.png" /> 0.019 m - 0.029 m<br />\
    <img src="styles/legend/Kladnrozdiely_16_3.png" /> 0.029 m - 0.045 m<br />\
    <img src="styles/legend/Kladnrozdiely_16_4.png" /> 0.045 m - 0.062 m<br />\
    <img src="styles/legend/Kladnrozdiely_16_5.png" /> 0.062 m - 0.094 m<br />\
    <img src="styles/legend/Kladnrozdiely_16_6.png" /> 0.094 m - 0.179 m<br />\
    <img src="styles/legend/Kladnrozdiely_16_7.png" /> 0.179 m - 0.419 m<br />\
    <img src="styles/legend/Kladnrozdiely_16_8.png" /> 0.419 m - 1.457 m<br />\
    <img src="styles/legend/Kladnrozdiely_16_9.png" /> 1.457 m - 3.227 m<br />'
        });
var lyr_VkovrozdielyzDMR_17 = new ol.layer.Image({
                            opacity: 1,
                            title: "Výškové rozdiely z DMR",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/VkovrozdielyzDMR_17.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1992559.983958, 6230945.390442, 1992854.001022, 6231203.846426]
                            })
                        });
var format_Vekoszpornchrozdielov_18 = new ol.format.GeoJSON();
var features_Vekoszpornchrozdielov_18 = format_Vekoszpornchrozdielov_18.readFeatures(json_Vekoszpornchrozdielov_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vekoszpornchrozdielov_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vekoszpornchrozdielov_18.addFeatures(features_Vekoszpornchrozdielov_18);
var lyr_Vekoszpornchrozdielov_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vekoszpornchrozdielov_18, 
                style: style_Vekoszpornchrozdielov_18,
                interactive: false,
    title: 'Veľkosť záporných rozdielov<br />\
    <img src="styles/legend/Vekoszpornchrozdielov_18_0.png" /> -2.175 m - -0.280 m<br />\
    <img src="styles/legend/Vekoszpornchrozdielov_18_1.png" /> -0.280 m - -0.189 m<br />\
    <img src="styles/legend/Vekoszpornchrozdielov_18_2.png" /> -0.189 m - -0.143 m<br />\
    <img src="styles/legend/Vekoszpornchrozdielov_18_3.png" /> -0.143 m - -0.104 m<br />\
    <img src="styles/legend/Vekoszpornchrozdielov_18_4.png" /> -0.104 m - -0.080 m<br />\
    <img src="styles/legend/Vekoszpornchrozdielov_18_5.png" /> -0.080 m - -0.060 m<br />\
    <img src="styles/legend/Vekoszpornchrozdielov_18_6.png" /> -0.060 m - -0.043 m<br />\
    <img src="styles/legend/Vekoszpornchrozdielov_18_7.png" /> -0.043 m - -0.028 m<br />\
    <img src="styles/legend/Vekoszpornchrozdielov_18_8.png" /> -0.028 m - -0.016 m<br />\
    <img src="styles/legend/Vekoszpornchrozdielov_18_9.png" /> -0.016 m - 0 m<br />'
        });
var format_Vekoskladnchrozdielov_19 = new ol.format.GeoJSON();
var features_Vekoskladnchrozdielov_19 = format_Vekoskladnchrozdielov_19.readFeatures(json_Vekoskladnchrozdielov_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vekoskladnchrozdielov_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vekoskladnchrozdielov_19.addFeatures(features_Vekoskladnchrozdielov_19);
var lyr_Vekoskladnchrozdielov_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vekoskladnchrozdielov_19, 
                style: style_Vekoskladnchrozdielov_19,
                interactive: false,
    title: 'Veľkosť kladných rozdielov<br />\
    <img src="styles/legend/Vekoskladnchrozdielov_19_0.png" /> 0.001 m - 0.008 m<br />\
    <img src="styles/legend/Vekoskladnchrozdielov_19_1.png" /> 0.008 m - 0.019 m<br />\
    <img src="styles/legend/Vekoskladnchrozdielov_19_2.png" /> 0.019 m - 0.029 m<br />\
    <img src="styles/legend/Vekoskladnchrozdielov_19_3.png" /> 0.029 m- 0.045 m<br />\
    <img src="styles/legend/Vekoskladnchrozdielov_19_4.png" /> 0.045 m - 0.062 m<br />\
    <img src="styles/legend/Vekoskladnchrozdielov_19_5.png" /> 0.062 m - 0.094 m<br />\
    <img src="styles/legend/Vekoskladnchrozdielov_19_6.png" /> 0.094 m - 0.179 m<br />\
    <img src="styles/legend/Vekoskladnchrozdielov_19_7.png" /> 0.179 m - 0.419 m<br />\
    <img src="styles/legend/Vekoskladnchrozdielov_19_8.png" /> 0.419 m - 1.457 m<br />\
    <img src="styles/legend/Vekoskladnchrozdielov_19_9.png" /> 1.457 m - 3.227 m<br />'
        });
var format_Zpornrozdiely_20 = new ol.format.GeoJSON();
var features_Zpornrozdiely_20 = format_Zpornrozdiely_20.readFeatures(json_Zpornrozdiely_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zpornrozdiely_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zpornrozdiely_20.addFeatures(features_Zpornrozdiely_20);
var lyr_Zpornrozdiely_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zpornrozdiely_20, 
                style: style_Zpornrozdiely_20,
                interactive: false,
    title: 'Záporné rozdiely<br />\
    <img src="styles/legend/Zpornrozdiely_20_0.png" /> -2.175 m - -0.280 m<br />\
    <img src="styles/legend/Zpornrozdiely_20_1.png" /> -0.280 m - -0.189 m<br />\
    <img src="styles/legend/Zpornrozdiely_20_2.png" /> -0.189 m - -0.143 m<br />\
    <img src="styles/legend/Zpornrozdiely_20_3.png" /> -0.143 m - -0.104 m<br />\
    <img src="styles/legend/Zpornrozdiely_20_4.png" /> -0.104 m - -0.080 m<br />\
    <img src="styles/legend/Zpornrozdiely_20_5.png" /> -0.080 m - -0.060 m<br />\
    <img src="styles/legend/Zpornrozdiely_20_6.png" /> -0.060 m - -0.043 m<br />\
    <img src="styles/legend/Zpornrozdiely_20_7.png" /> -0.043 m - -0.028 m<br />\
    <img src="styles/legend/Zpornrozdiely_20_8.png" /> -0.028 m - -0.016 m<br />\
    <img src="styles/legend/Zpornrozdiely_20_9.png" /> -0.016 m - 0 m<br />'
        });
var format_Kladnrozdiely_21 = new ol.format.GeoJSON();
var features_Kladnrozdiely_21 = format_Kladnrozdiely_21.readFeatures(json_Kladnrozdiely_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kladnrozdiely_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kladnrozdiely_21.addFeatures(features_Kladnrozdiely_21);
var lyr_Kladnrozdiely_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kladnrozdiely_21, 
                style: style_Kladnrozdiely_21,
                interactive: false,
    title: 'Kladné rozdiely<br />\
    <img src="styles/legend/Kladnrozdiely_21_0.png" /> 0.001 m - 0.008 m<br />\
    <img src="styles/legend/Kladnrozdiely_21_1.png" /> 0.008 m - 0.019 m<br />\
    <img src="styles/legend/Kladnrozdiely_21_2.png" /> 0.019 m - 0.029 m<br />\
    <img src="styles/legend/Kladnrozdiely_21_3.png" /> 0.029 m - 0.045 m<br />\
    <img src="styles/legend/Kladnrozdiely_21_4.png" /> 0.045 m - 0.062 m<br />\
    <img src="styles/legend/Kladnrozdiely_21_5.png" /> 0.062 m - 0.094 m<br />\
    <img src="styles/legend/Kladnrozdiely_21_6.png" /> 0.094 m - 0.179 m<br />\
    <img src="styles/legend/Kladnrozdiely_21_7.png" /> 0.179 m - 0.419 m<br />\
    <img src="styles/legend/Kladnrozdiely_21_8.png" /> 0.419 m - 1.457 m<br />\
    <img src="styles/legend/Kladnrozdiely_21_9.png" /> 1.457 m - 3.227 m<br />'
        });
var lyr_VkovrozdielyZDMR_22 = new ol.layer.Image({
                            opacity: 1,
                            title: "Výškové rozdiely Z DMR",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/VkovrozdielyZDMR_22.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1992559.463198, 6230946.022666, 1992853.411775, 6231203.722742]
                            })
                        });
var format_Vekoszpornchrozdielov_23 = new ol.format.GeoJSON();
var features_Vekoszpornchrozdielov_23 = format_Vekoszpornchrozdielov_23.readFeatures(json_Vekoszpornchrozdielov_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vekoszpornchrozdielov_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vekoszpornchrozdielov_23.addFeatures(features_Vekoszpornchrozdielov_23);
var lyr_Vekoszpornchrozdielov_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vekoszpornchrozdielov_23, 
                style: style_Vekoszpornchrozdielov_23,
                interactive: false,
    title: 'Veľkosť záporných rozdielov<br />\
    <img src="styles/legend/Vekoszpornchrozdielov_23_0.png" /> -2.175 m - -0.280 m<br />\
    <img src="styles/legend/Vekoszpornchrozdielov_23_1.png" /> -0.280 m - -0.189 m<br />\
    <img src="styles/legend/Vekoszpornchrozdielov_23_2.png" /> -0.189 m - -0.143 m<br />\
    <img src="styles/legend/Vekoszpornchrozdielov_23_3.png" /> -0.143 m - -0.104 m<br />\
    <img src="styles/legend/Vekoszpornchrozdielov_23_4.png" /> -0.104 m - -0.080 m<br />\
    <img src="styles/legend/Vekoszpornchrozdielov_23_5.png" /> -0.080 m - -0.060 m<br />\
    <img src="styles/legend/Vekoszpornchrozdielov_23_6.png" /> -0.060 m - -0.043 m<br />\
    <img src="styles/legend/Vekoszpornchrozdielov_23_7.png" /> -0.043 m - -0.028 m<br />\
    <img src="styles/legend/Vekoszpornchrozdielov_23_8.png" /> -0.028 m - -0.016 m<br />\
    <img src="styles/legend/Vekoszpornchrozdielov_23_9.png" /> -0.016 m - 0 m<br />'
        });
var format_Vekoskladnchrozdielov_24 = new ol.format.GeoJSON();
var features_Vekoskladnchrozdielov_24 = format_Vekoskladnchrozdielov_24.readFeatures(json_Vekoskladnchrozdielov_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vekoskladnchrozdielov_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vekoskladnchrozdielov_24.addFeatures(features_Vekoskladnchrozdielov_24);
var lyr_Vekoskladnchrozdielov_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vekoskladnchrozdielov_24, 
                style: style_Vekoskladnchrozdielov_24,
                interactive: false,
    title: 'Veľkosť kladných rozdielov<br />\
    <img src="styles/legend/Vekoskladnchrozdielov_24_0.png" /> 0.001 m - 0.008 m<br />\
    <img src="styles/legend/Vekoskladnchrozdielov_24_1.png" /> 0.008 m - 0.019 m<br />\
    <img src="styles/legend/Vekoskladnchrozdielov_24_2.png" /> 0.019 m - 0.029 m<br />\
    <img src="styles/legend/Vekoskladnchrozdielov_24_3.png" /> 0.029 m- 0.045 m<br />\
    <img src="styles/legend/Vekoskladnchrozdielov_24_4.png" /> 0.045 m - 0.062 m<br />\
    <img src="styles/legend/Vekoskladnchrozdielov_24_5.png" /> 0.062 m - 0.094 m<br />\
    <img src="styles/legend/Vekoskladnchrozdielov_24_6.png" /> 0.094 m - 0.179 m<br />\
    <img src="styles/legend/Vekoskladnchrozdielov_24_7.png" /> 0.179 m - 0.419 m<br />\
    <img src="styles/legend/Vekoskladnchrozdielov_24_8.png" /> 0.419 m - 1.457 m<br />\
    <img src="styles/legend/Vekoskladnchrozdielov_24_9.png" /> 1.457 m - 3.227 m<br />'
        });
var format_Zpornrozdiely_25 = new ol.format.GeoJSON();
var features_Zpornrozdiely_25 = format_Zpornrozdiely_25.readFeatures(json_Zpornrozdiely_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zpornrozdiely_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zpornrozdiely_25.addFeatures(features_Zpornrozdiely_25);
var lyr_Zpornrozdiely_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zpornrozdiely_25, 
                style: style_Zpornrozdiely_25,
                interactive: false,
    title: 'Záporné rozdiely<br />\
    <img src="styles/legend/Zpornrozdiely_25_0.png" /> -2.175 m - -0.280 m<br />\
    <img src="styles/legend/Zpornrozdiely_25_1.png" /> -0.280 m - -0.189 m<br />\
    <img src="styles/legend/Zpornrozdiely_25_2.png" /> -0.189 m - -0.143 m<br />\
    <img src="styles/legend/Zpornrozdiely_25_3.png" /> -0.143 m - -0.104 m<br />\
    <img src="styles/legend/Zpornrozdiely_25_4.png" /> -0.104 m - -0.080 m<br />\
    <img src="styles/legend/Zpornrozdiely_25_5.png" /> -0.080 m - -0.060 m<br />\
    <img src="styles/legend/Zpornrozdiely_25_6.png" /> -0.060 m - -0.043 m<br />\
    <img src="styles/legend/Zpornrozdiely_25_7.png" /> -0.043 m - -0.028 m<br />\
    <img src="styles/legend/Zpornrozdiely_25_8.png" /> -0.028 m - -0.016 m<br />\
    <img src="styles/legend/Zpornrozdiely_25_9.png" /> -0.016 m - 0 m<br />'
        });
var format_Kladnrozdiely_26 = new ol.format.GeoJSON();
var features_Kladnrozdiely_26 = format_Kladnrozdiely_26.readFeatures(json_Kladnrozdiely_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kladnrozdiely_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kladnrozdiely_26.addFeatures(features_Kladnrozdiely_26);
var lyr_Kladnrozdiely_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kladnrozdiely_26, 
                style: style_Kladnrozdiely_26,
                interactive: false,
    title: 'Kladné rozdiely<br />\
    <img src="styles/legend/Kladnrozdiely_26_0.png" /> 0.001 m - 0.008 m<br />\
    <img src="styles/legend/Kladnrozdiely_26_1.png" /> 0.008 m - 0.019 m<br />\
    <img src="styles/legend/Kladnrozdiely_26_2.png" /> 0.019 m - 0.029 m<br />\
    <img src="styles/legend/Kladnrozdiely_26_3.png" /> 0.029 m - 0.045 m<br />\
    <img src="styles/legend/Kladnrozdiely_26_4.png" /> 0.045 m - 0.062 m<br />\
    <img src="styles/legend/Kladnrozdiely_26_5.png" /> 0.062 m - 0.094 m<br />\
    <img src="styles/legend/Kladnrozdiely_26_6.png" /> 0.094 m - 0.179 m<br />\
    <img src="styles/legend/Kladnrozdiely_26_7.png" /> 0.179 m - 0.419 m<br />\
    <img src="styles/legend/Kladnrozdiely_26_8.png" /> 0.419 m - 1.457 m<br />\
    <img src="styles/legend/Kladnrozdiely_26_9.png" /> 1.457 m - 3.227 m<br />'
        });
var lyr_Ortofotomozaika_27 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://zbgisws.skgeodesy.sk/zbgis_ortofoto_wms/service.svc/get",
    attributions: ' ',
                              params: {
                                "LAYERS": "1",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortofotomozaika",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortofotomozaika_27, 0]);
var group_PorovnanieUGKK1mmerandaje = new ol.layer.Group({
                                layers: [lyr_VkovrozdielyZDMR_22,lyr_Vekoszpornchrozdielov_23,lyr_Vekoskladnchrozdielov_24,lyr_Zpornrozdiely_25,lyr_Kladnrozdiely_26,],
                                title: "Porovnanie UGKK 1m - merané údaje"});
var group_PorovnanieUGKK10cmmerandaje = new ol.layer.Group({
                                layers: [lyr_VkovrozdielyzDMR_17,lyr_Vekoszpornchrozdielov_18,lyr_Vekoskladnchrozdielov_19,lyr_Zpornrozdiely_20,lyr_Kladnrozdiely_21,],
                                title: "Porovnanie UGKK10cm - merané údaje"});
var group_PorovnanieUAV1mmerandaje = new ol.layer.Group({
                                layers: [lyr_VkovrozdielyzDMR_12,lyr_Vekoszpornchrozdielov_13,lyr_Vekoskladnchrozdielov_14,lyr_Zpornrozdiely_15,lyr_Kladnrozdiely_16,],
                                title: "Porovnanie UAV1m - merané údaje"});
var group_PorovnanieUAV010cmmerandaje = new ol.layer.Group({
                                layers: [lyr_VkovrozdielyzDMR_7,lyr_Vekoszpornchrozdielov_8,lyr_Vekoskladnchrozdielov_9,lyr_Zpornrozdiely_10,lyr_Kladnrozdiely_11,],
                                title: "Porovnanie UAV010cm - merané údaje"});
var group_UGKK = new ol.layer.Group({
                                layers: [lyr_DMRzGKKsrozlenm10cm_5,lyr_DMRzGKKsrozlenm1m_6,],
                                title: "UGKK"});
var group_Meranie = new ol.layer.Group({
                                layers: [lyr_DMRzmeranchdajovsrozlenm1m_2,lyr_DMRzmeranchdajovsrozlenm10cm_3,lyr_Meranbody_4,],
                                title: "Meranie"});
var group_UAV = new ol.layer.Group({
                                layers: [lyr_DMRzUAVsrozlenm10cm_0,lyr_DMRzUAVsrozlenm1m_1,],
                                title: "UAV"});

lyr_DMRzUAVsrozlenm10cm_0.setVisible(true);lyr_DMRzUAVsrozlenm1m_1.setVisible(true);lyr_DMRzmeranchdajovsrozlenm1m_2.setVisible(true);lyr_DMRzmeranchdajovsrozlenm10cm_3.setVisible(true);lyr_Meranbody_4.setVisible(true);lyr_DMRzGKKsrozlenm10cm_5.setVisible(true);lyr_DMRzGKKsrozlenm1m_6.setVisible(true);lyr_VkovrozdielyzDMR_7.setVisible(true);lyr_Vekoszpornchrozdielov_8.setVisible(true);lyr_Vekoskladnchrozdielov_9.setVisible(true);lyr_Zpornrozdiely_10.setVisible(true);lyr_Kladnrozdiely_11.setVisible(true);lyr_VkovrozdielyzDMR_12.setVisible(true);lyr_Vekoszpornchrozdielov_13.setVisible(true);lyr_Vekoskladnchrozdielov_14.setVisible(true);lyr_Zpornrozdiely_15.setVisible(true);lyr_Kladnrozdiely_16.setVisible(true);lyr_VkovrozdielyzDMR_17.setVisible(true);lyr_Vekoszpornchrozdielov_18.setVisible(true);lyr_Vekoskladnchrozdielov_19.setVisible(true);lyr_Zpornrozdiely_20.setVisible(true);lyr_Kladnrozdiely_21.setVisible(true);lyr_VkovrozdielyZDMR_22.setVisible(true);lyr_Vekoszpornchrozdielov_23.setVisible(true);lyr_Vekoskladnchrozdielov_24.setVisible(true);lyr_Zpornrozdiely_25.setVisible(true);lyr_Kladnrozdiely_26.setVisible(true);lyr_Ortofotomozaika_27.setVisible(true);
var layersList = [group_UAV,group_Meranie,group_UGKK,group_PorovnanieUAV010cmmerandaje,group_PorovnanieUAV1mmerandaje,group_PorovnanieUGKK10cmmerandaje,group_PorovnanieUGKK1mmerandaje,lyr_Ortofotomozaika_27];
lyr_Meranbody_4.set('fieldAliases', {'CB': 'CB', 'Y': 'Y', 'X': 'X', 'Z': 'Z', 'KOD': 'KOD', });
lyr_Vekoszpornchrozdielov_8.set('fieldAliases', {'CB': 'CB', 'Y': 'Y', 'X': 'X', 'Z': 'Z', 'KOD': 'KOD', 'UAV01m_1': 'UAV01m_1', 'rozdiel': 'rozdiel', });
lyr_Vekoskladnchrozdielov_9.set('fieldAliases', {'CB': 'CB', 'Y': 'Y', 'X': 'X', 'Z': 'Z', 'KOD': 'KOD', 'UAV01m_1': 'UAV01m_1', 'rozdiel': 'rozdiel', });
lyr_Zpornrozdiely_10.set('fieldAliases', {'CB': 'CB', 'Y': 'Y', 'X': 'X', 'Z': 'Z', 'KOD': 'KOD', 'UAV01m_1': 'UAV01m_1', 'rozdiel': 'rozdiel', });
lyr_Kladnrozdiely_11.set('fieldAliases', {'CB': 'CB', 'Y': 'Y', 'X': 'X', 'Z': 'Z', 'KOD': 'KOD', 'UAV01m_1': 'UAV01m_1', 'rozdiel': 'rozdiel', });
lyr_Vekoszpornchrozdielov_13.set('fieldAliases', {'CB': 'CB', 'Y': 'Y', 'X': 'X', 'Z': 'Z', 'KOD': 'KOD', 'UAV1m1': 'UAV1m1', 'rozdiel': 'rozdiel', });
lyr_Vekoskladnchrozdielov_14.set('fieldAliases', {'CB': 'CB', 'Y': 'Y', 'X': 'X', 'Z': 'Z', 'KOD': 'KOD', 'UAV1m1': 'UAV1m1', 'rozdiel': 'rozdiel', });
lyr_Zpornrozdiely_15.set('fieldAliases', {'CB': 'CB', 'Y': 'Y', 'X': 'X', 'Z': 'Z', 'KOD': 'KOD', 'UAV1m1': 'UAV1m1', 'rozdiel': 'rozdiel', });
lyr_Kladnrozdiely_16.set('fieldAliases', {'CB': 'CB', 'Y': 'Y', 'X': 'X', 'Z': 'Z', 'KOD': 'KOD', 'UAV1m1': 'UAV1m1', 'rozdiel': 'rozdiel', });
lyr_Vekoszpornchrozdielov_18.set('fieldAliases', {'CB': 'CB', 'Y': 'Y', 'X': 'X', 'Z': 'Z', 'KOD': 'KOD', 'UGKK_01_1': 'UGKK_01_1', 'rozdiel': 'rozdiel', });
lyr_Vekoskladnchrozdielov_19.set('fieldAliases', {'CB': 'CB', 'Y': 'Y', 'X': 'X', 'Z': 'Z', 'KOD': 'KOD', 'UGKK_01_1': 'UGKK_01_1', 'rozdiel': 'rozdiel', });
lyr_Zpornrozdiely_20.set('fieldAliases', {'CB': 'CB', 'Y': 'Y', 'X': 'X', 'Z': 'Z', 'KOD': 'KOD', 'UGKK_01_1': 'UGKK_01_1', 'rozdiel': 'rozdiel', });
lyr_Kladnrozdiely_21.set('fieldAliases', {'CB': 'CB', 'Y': 'Y', 'X': 'X', 'Z': 'Z', 'KOD': 'KOD', 'UGKK_01_1': 'UGKK_01_1', 'rozdiel': 'rozdiel', });
lyr_Vekoszpornchrozdielov_23.set('fieldAliases', {'CB': 'CB', 'Y': 'Y', 'X': 'X', 'Z': 'Z', 'KOD': 'KOD', 'UGKK_1m_1': 'UGKK_1m_1', 'rozdiel': 'rozdiel', });
lyr_Vekoskladnchrozdielov_24.set('fieldAliases', {'CB': 'CB', 'Y': 'Y', 'X': 'X', 'Z': 'Z', 'KOD': 'KOD', 'UGKK_1m_1': 'UGKK_1m_1', 'rozdiel': 'rozdiel', });
lyr_Zpornrozdiely_25.set('fieldAliases', {'CB': 'CB', 'Y': 'Y', 'X': 'X', 'Z': 'Z', 'KOD': 'KOD', 'UGKK_1m_1': 'UGKK_1m_1', 'rozdiel': 'rozdiel', });
lyr_Kladnrozdiely_26.set('fieldAliases', {'CB': 'CB', 'Y': 'Y', 'X': 'X', 'Z': 'Z', 'KOD': 'KOD', 'UGKK_1m_1': 'UGKK_1m_1', 'rozdiel': 'rozdiel', });
lyr_Meranbody_4.set('fieldImages', {'CB': '', 'Y': '', 'X': '', 'Z': '', 'KOD': '', });
lyr_Vekoszpornchrozdielov_8.set('fieldImages', {'CB': '', 'Y': '', 'X': '', 'Z': '', 'KOD': '', 'UAV01m_1': '', 'rozdiel': '', });
lyr_Vekoskladnchrozdielov_9.set('fieldImages', {'CB': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'Z': 'TextEdit', 'KOD': 'TextEdit', 'UAV01m_1': 'TextEdit', 'rozdiel': 'TextEdit', });
lyr_Zpornrozdiely_10.set('fieldImages', {'CB': '', 'Y': '', 'X': '', 'Z': '', 'KOD': '', 'UAV01m_1': '', 'rozdiel': '', });
lyr_Kladnrozdiely_11.set('fieldImages', {'CB': '', 'Y': '', 'X': '', 'Z': '', 'KOD': '', 'UAV01m_1': '', 'rozdiel': '', });
lyr_Vekoszpornchrozdielov_13.set('fieldImages', {'CB': '', 'Y': '', 'X': '', 'Z': '', 'KOD': '', 'UAV1m1': '', 'rozdiel': '', });
lyr_Vekoskladnchrozdielov_14.set('fieldImages', {'CB': '', 'Y': '', 'X': '', 'Z': '', 'KOD': '', 'UAV1m1': '', 'rozdiel': '', });
lyr_Zpornrozdiely_15.set('fieldImages', {'CB': '', 'Y': '', 'X': '', 'Z': '', 'KOD': '', 'UAV1m1': '', 'rozdiel': '', });
lyr_Kladnrozdiely_16.set('fieldImages', {'CB': '', 'Y': '', 'X': '', 'Z': '', 'KOD': '', 'UAV1m1': '', 'rozdiel': '', });
lyr_Vekoszpornchrozdielov_18.set('fieldImages', {'CB': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'Z': 'TextEdit', 'KOD': 'TextEdit', 'UGKK_01_1': 'TextEdit', 'rozdiel': 'TextEdit', });
lyr_Vekoskladnchrozdielov_19.set('fieldImages', {'CB': '', 'Y': '', 'X': '', 'Z': '', 'KOD': '', 'UGKK_01_1': '', 'rozdiel': '', });
lyr_Zpornrozdiely_20.set('fieldImages', {'CB': '', 'Y': '', 'X': '', 'Z': '', 'KOD': '', 'UGKK_01_1': '', 'rozdiel': '', });
lyr_Kladnrozdiely_21.set('fieldImages', {'CB': '', 'Y': '', 'X': '', 'Z': '', 'KOD': '', 'UGKK_01_1': '', 'rozdiel': '', });
lyr_Vekoszpornchrozdielov_23.set('fieldImages', {'CB': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'Z': 'TextEdit', 'KOD': 'TextEdit', 'UGKK_1m_1': 'TextEdit', 'rozdiel': 'TextEdit', });
lyr_Vekoskladnchrozdielov_24.set('fieldImages', {'CB': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'Z': 'TextEdit', 'KOD': 'TextEdit', 'UGKK_1m_1': 'TextEdit', 'rozdiel': 'TextEdit', });
lyr_Zpornrozdiely_25.set('fieldImages', {'CB': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'Z': 'TextEdit', 'KOD': 'TextEdit', 'UGKK_1m_1': 'TextEdit', 'rozdiel': 'TextEdit', });
lyr_Kladnrozdiely_26.set('fieldImages', {'CB': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'Z': 'TextEdit', 'KOD': 'TextEdit', 'UGKK_1m_1': 'TextEdit', 'rozdiel': 'TextEdit', });
lyr_Meranbody_4.set('fieldLabels', {});
lyr_Vekoszpornchrozdielov_8.set('fieldLabels', {});
lyr_Vekoskladnchrozdielov_9.set('fieldLabels', {});
lyr_Zpornrozdiely_10.set('fieldLabels', {});
lyr_Kladnrozdiely_11.set('fieldLabels', {});
lyr_Vekoszpornchrozdielov_13.set('fieldLabels', {});
lyr_Vekoskladnchrozdielov_14.set('fieldLabels', {});
lyr_Zpornrozdiely_15.set('fieldLabels', {});
lyr_Kladnrozdiely_16.set('fieldLabels', {});
lyr_Vekoszpornchrozdielov_18.set('fieldLabels', {});
lyr_Vekoskladnchrozdielov_19.set('fieldLabels', {});
lyr_Zpornrozdiely_20.set('fieldLabels', {});
lyr_Kladnrozdiely_21.set('fieldLabels', {});
lyr_Vekoszpornchrozdielov_23.set('fieldLabels', {});
lyr_Vekoskladnchrozdielov_24.set('fieldLabels', {});
lyr_Zpornrozdiely_25.set('fieldLabels', {});
lyr_Kladnrozdiely_26.set('fieldLabels', {});
lyr_Kladnrozdiely_26.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});