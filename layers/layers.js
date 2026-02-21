var wms_layers = [];


        var lyr_EsriTopographic_0 = new ol.layer.Tile({
            'title': 'Esri Topographic',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_CM1_Election_template2026_Master_1 = new ol.format.GeoJSON();
var features_CM1_Election_template2026_Master_1 = format_CM1_Election_template2026_Master_1.readFeatures(json_CM1_Election_template2026_Master_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CM1_Election_template2026_Master_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CM1_Election_template2026_Master_1.addFeatures(features_CM1_Election_template2026_Master_1);
var lyr_CM1_Election_template2026_Master_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CM1_Election_template2026_Master_1, 
                style: style_CM1_Election_template2026_Master_1,
                popuplayertitle: 'CM1_Election_template2026_Master',
                interactive: false,
    title: 'CM1_Election_template2026_Master<br />\
    <img src="styles/legend/CM1_Election_template2026_Master_1_0.png" /> 1<br />\
    <img src="styles/legend/CM1_Election_template2026_Master_1_1.png" /> 2<br />\
    <img src="styles/legend/CM1_Election_template2026_Master_1_2.png" /> 3<br />\
    <img src="styles/legend/CM1_Election_template2026_Master_1_3.png" /> <br />' });
var format_electionscore_data_2026_2 = new ol.format.GeoJSON();
var features_electionscore_data_2026_2 = format_electionscore_data_2026_2.readFeatures(json_electionscore_data_2026_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_electionscore_data_2026_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_electionscore_data_2026_2.addFeatures(features_electionscore_data_2026_2);
var lyr_electionscore_data_2026_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_electionscore_data_2026_2, 
                style: style_electionscore_data_2026_2,
                popuplayertitle: 'electionscore_data_2026',
                interactive: true,
    title: 'electionscore_data_2026<br />\
    <img src="styles/legend/electionscore_data_2026_2_0.png" /> 1<br />\
    <img src="styles/legend/electionscore_data_2026_2_1.png" /> 2<br />\
    <img src="styles/legend/electionscore_data_2026_2_2.png" /> 3<br />\
    <img src="styles/legend/electionscore_data_2026_2_3.png" /> <br />' });
var group_MP2026_CMMC = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'MP2026_CMMC'});
var group_electionresultMP2026 = new ol.layer.Group({
                                layers: [lyr_CM1_Election_template2026_Master_1,lyr_electionscore_data_2026_2,],
                                fold: 'open',
                                title: 'electionresultMP2026'});
var group_polictcalmap_forcollectingscore = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'polictcalmap_forcollectingscore'});
var group_EVENT = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'EVENT'});
var group_ELECTIONRESULT = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'ELECTIONRESULT'});
var group_CMMC2025 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'CMMC2025'});
var group_banner2025 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'banner2025'});
var group_banner2026 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'banner2026'});
var group_POLITICALMAP = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'POLITICALMAP'});
var group_MP_CM1_2023 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MP_CM1_2023'});

lyr_EsriTopographic_0.setVisible(true);lyr_CM1_Election_template2026_Master_1.setVisible(true);lyr_electionscore_data_2026_2.setVisible(true);
var layersList = [lyr_EsriTopographic_0,group_electionresultMP2026];
lyr_CM1_Election_template2026_Master_1.set('fieldAliases', {'id': 'id', 'cat': 'cat', 'Name': 'Name', 'moo': 'moo', 'population': 'population', 'tambon': 'tambon', 'area': 'area', 'layer': 'layer', 'path': 'path', });
lyr_electionscore_data_2026_2.set('fieldAliases', {'ref': 'ref', 'reg_off': 'reg_off', 'tambon': 'tambon', 'el_num': 'el_num', 'el_place': 'el_place', 'pop_E_men': 'pop_E_men', 'pop_E_wome': 'pop_E_wome', 'POPE': 'POPE', 'inter': 'inter', 'ex_region': 'ex_region', 'latitude': 'latitude', 'longitude': 'longitude', '1_NVS': '1_NVS', '2_PPLE': '2_PPLE', '3_setakit': '3_setakit', '4_KLA': '4_KLA', '5_PJT': '5_PJT', '6_PT': '6_PT', '7_DP': '7_DP', '8_okart': '8_okart', '9_RTSC': '9_RTSC', '10_KM': '10_KM', '11_RAK': '11_RAK', '12_SERI': '12_SERI', 'FALSECARD': 'FALSECARD', 'NOVOTE': 'NOVOTE', 'total': 'total', 'winner': 'winner', '%มาใ': '%มาใ', '%ไม่': '%ไม่', 'cat': 'cat', 'difPT': 'difPT', });
lyr_CM1_Election_template2026_Master_1.set('fieldImages', {'id': 'TextEdit', 'cat': 'TextEdit', 'Name': 'TextEdit', 'moo': 'TextEdit', 'population': 'TextEdit', 'tambon': 'TextEdit', 'area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_electionscore_data_2026_2.set('fieldImages', {'ref': 'TextEdit', 'reg_off': 'TextEdit', 'tambon': 'TextEdit', 'el_num': 'TextEdit', 'el_place': 'TextEdit', 'pop_E_men': 'TextEdit', 'pop_E_wome': 'TextEdit', 'POPE': 'TextEdit', 'inter': 'TextEdit', 'ex_region': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', '1_NVS': 'TextEdit', '2_PPLE': 'TextEdit', '3_setakit': 'TextEdit', '4_KLA': 'TextEdit', '5_PJT': 'TextEdit', '6_PT': 'TextEdit', '7_DP': 'TextEdit', '8_okart': 'TextEdit', '9_RTSC': 'TextEdit', '10_KM': 'TextEdit', '11_RAK': 'TextEdit', '12_SERI': 'TextEdit', 'FALSECARD': 'TextEdit', 'NOVOTE': 'TextEdit', 'total': 'TextEdit', 'winner': 'TextEdit', '%มาใ': 'TextEdit', '%ไม่': 'TextEdit', 'cat': 'Range', 'difPT': 'Range', });
lyr_CM1_Election_template2026_Master_1.set('fieldLabels', {'id': 'hidden field', 'cat': 'hidden field', 'Name': 'hidden field', 'moo': 'hidden field', 'population': 'hidden field', 'tambon': 'hidden field', 'area': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_electionscore_data_2026_2.set('fieldLabels', {'ref': 'hidden field', 'reg_off': 'inline label - visible with data', 'tambon': 'inline label - visible with data', 'el_num': 'inline label - visible with data', 'el_place': 'inline label - visible with data', 'pop_E_men': 'hidden field', 'pop_E_wome': 'hidden field', 'POPE': 'inline label - visible with data', 'inter': 'hidden field', 'ex_region': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', '1_NVS': 'inline label - visible with data', '2_PPLE': 'inline label - visible with data', '3_setakit': 'inline label - visible with data', '4_KLA': 'inline label - visible with data', '5_PJT': 'inline label - visible with data', '6_PT': 'inline label - visible with data', '7_DP': 'inline label - visible with data', '8_okart': 'inline label - visible with data', '9_RTSC': 'inline label - visible with data', '10_KM': 'inline label - visible with data', '11_RAK': 'inline label - visible with data', '12_SERI': 'inline label - visible with data', 'FALSECARD': 'inline label - visible with data', 'NOVOTE': 'inline label - visible with data', 'total': 'inline label - visible with data', 'winner': 'inline label - visible with data', '%มาใ': 'hidden field', '%ไม่': 'hidden field', 'cat': 'hidden field', 'difPT': 'hidden field', });
lyr_electionscore_data_2026_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});