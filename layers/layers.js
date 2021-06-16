var wms_layers = [];


        var lyr_GoogleEarth_0 = new ol.layer.Tile({
            'title': 'Google Earth',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CoordinacionPenjamo_3 = new ol.format.GeoJSON();
var features_CoordinacionPenjamo_3 = format_CoordinacionPenjamo_3.readFeatures(json_CoordinacionPenjamo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionPenjamo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionPenjamo_3.addFeatures(features_CoordinacionPenjamo_3);
var lyr_CoordinacionPenjamo_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionPenjamo_3, 
                style: style_CoordinacionPenjamo_3,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionPenjamo_3.png" /> Coordinacion Penjamo'
            });
var format_EduacionMediaSuperiorySuperior_4 = new ol.format.GeoJSON();
var features_EduacionMediaSuperiorySuperior_4 = format_EduacionMediaSuperiorySuperior_4.readFeatures(json_EduacionMediaSuperiorySuperior_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EduacionMediaSuperiorySuperior_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EduacionMediaSuperiorySuperior_4.addFeatures(features_EduacionMediaSuperiorySuperior_4);
var lyr_EduacionMediaSuperiorySuperior_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EduacionMediaSuperiorySuperior_4, 
                style: style_EduacionMediaSuperiorySuperior_4,
                interactive: true,
                title: '<img src="styles/legend/EduacionMediaSuperiorySuperior_4.png" /> Eduacion MediaSuperior y Superior'
            });
var format_MicroregionP6_5 = new ol.format.GeoJSON();
var features_MicroregionP6_5 = format_MicroregionP6_5.readFeatures(json_MicroregionP6_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionP6_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionP6_5.addFeatures(features_MicroregionP6_5);
var lyr_MicroregionP6_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionP6_5, 
                style: style_MicroregionP6_5,
                interactive: false,
    title: 'Microregion P6<br />\
    <img src="styles/legend/MicroregionP6_5_0.png" /> 4 - 45 Personas<br />\
    <img src="styles/legend/MicroregionP6_5_1.png" /> 45 - 114 Personas<br />\
    <img src="styles/legend/MicroregionP6_5_2.png" /> 114 - 210 Personas<br />\
    <img src="styles/legend/MicroregionP6_5_3.png" /> 210 - 309 Personas<br />\
    <img src="styles/legend/MicroregionP6_5_4.png" /> 309 - 521 Personas<br />'
        });
var format_MicroregionP5_6 = new ol.format.GeoJSON();
var features_MicroregionP5_6 = format_MicroregionP5_6.readFeatures(json_MicroregionP5_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionP5_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionP5_6.addFeatures(features_MicroregionP5_6);
var lyr_MicroregionP5_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionP5_6, 
                style: style_MicroregionP5_6,
                interactive: false,
    title: 'Microregion P5<br />\
    <img src="styles/legend/MicroregionP5_6_0.png" /> 3 - 47 Personas<br />\
    <img src="styles/legend/MicroregionP5_6_1.png" /> 47 - 109 Personas<br />\
    <img src="styles/legend/MicroregionP5_6_2.png" /> 109 - 212 Personas<br />\
    <img src="styles/legend/MicroregionP5_6_3.png" /> 212 - 368 Personas<br />\
    <img src="styles/legend/MicroregionP5_6_4.png" /> 368 - 661 Personas<br />'
        });
var format_MicroregionP4_7 = new ol.format.GeoJSON();
var features_MicroregionP4_7 = format_MicroregionP4_7.readFeatures(json_MicroregionP4_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionP4_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionP4_7.addFeatures(features_MicroregionP4_7);
var lyr_MicroregionP4_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionP4_7, 
                style: style_MicroregionP4_7,
                interactive: false,
    title: 'Microregion P4<br />\
    <img src="styles/legend/MicroregionP4_7_0.png" /> 3 - 37 Personas<br />\
    <img src="styles/legend/MicroregionP4_7_1.png" /> 37 - 107 Personas<br />\
    <img src="styles/legend/MicroregionP4_7_2.png" /> 107 - 254 Personas<br />\
    <img src="styles/legend/MicroregionP4_7_3.png" /> 254 - 566 Personas<br />\
    <img src="styles/legend/MicroregionP4_7_4.png" /> 566 - 907 Personas<br />'
        });
var format_MicroregionP3_8 = new ol.format.GeoJSON();
var features_MicroregionP3_8 = format_MicroregionP3_8.readFeatures(json_MicroregionP3_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionP3_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionP3_8.addFeatures(features_MicroregionP3_8);
var lyr_MicroregionP3_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionP3_8, 
                style: style_MicroregionP3_8,
                interactive: false,
    title: 'Microregion P3<br />\
    <img src="styles/legend/MicroregionP3_8_0.png" /> 2 - 58 Personas<br />\
    <img src="styles/legend/MicroregionP3_8_1.png" /> 58 - 137 Personas<br />\
    <img src="styles/legend/MicroregionP3_8_2.png" /> 137 - 253 Personas<br />\
    <img src="styles/legend/MicroregionP3_8_3.png" /> 253 - 449 Personas<br />\
    <img src="styles/legend/MicroregionP3_8_4.png" /> 449 - 840 Personas<br />'
        });
var format_MicroregionP2_9 = new ol.format.GeoJSON();
var features_MicroregionP2_9 = format_MicroregionP2_9.readFeatures(json_MicroregionP2_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionP2_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionP2_9.addFeatures(features_MicroregionP2_9);
var lyr_MicroregionP2_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionP2_9, 
                style: style_MicroregionP2_9,
                interactive: false,
    title: 'Microregion P2<br />\
    <img src="styles/legend/MicroregionP2_9_0.png" /> 1 - 25 Personas<br />\
    <img src="styles/legend/MicroregionP2_9_1.png" /> 25 - 69 Personas<br />\
    <img src="styles/legend/MicroregionP2_9_2.png" /> 69 - 153 Personas<br />\
    <img src="styles/legend/MicroregionP2_9_3.png" /> 153 - 302 Personas<br />\
    <img src="styles/legend/MicroregionP2_9_4.png" /> 302 - 440 Personas<br />'
        });
var format_MicroregionP1_10 = new ol.format.GeoJSON();
var features_MicroregionP1_10 = format_MicroregionP1_10.readFeatures(json_MicroregionP1_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionP1_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionP1_10.addFeatures(features_MicroregionP1_10);
var lyr_MicroregionP1_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionP1_10, 
                style: style_MicroregionP1_10,
                interactive: false,
    title: 'Microregion P1<br />\
    <img src="styles/legend/MicroregionP1_10_0.png" /> 3 - 17 Personas<br />\
    <img src="styles/legend/MicroregionP1_10_1.png" /> 17 - 37 Personas<br />\
    <img src="styles/legend/MicroregionP1_10_2.png" /> 37 - 64 Personas<br />\
    <img src="styles/legend/MicroregionP1_10_3.png" /> 64 - 133 Personas<br />\
    <img src="styles/legend/MicroregionP1_10_4.png" /> 133 - 210 Personas<br />'
        });
var format_CoordinacionPenjamo_11 = new ol.format.GeoJSON();
var features_CoordinacionPenjamo_11 = format_CoordinacionPenjamo_11.readFeatures(json_CoordinacionPenjamo_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionPenjamo_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionPenjamo_11.addFeatures(features_CoordinacionPenjamo_11);
var lyr_CoordinacionPenjamo_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionPenjamo_11, 
                style: style_CoordinacionPenjamo_11,
                interactive: true,
                title: '<img src="styles/legend/CoordinacionPenjamo_11.png" /> Coordinacion Penjamo'
            });
var group_CoordinacionPenjamoRezago = new ol.layer.Group({
                                layers: [lyr_MicroregionP6_5,lyr_MicroregionP5_6,lyr_MicroregionP4_7,lyr_MicroregionP3_8,lyr_MicroregionP2_9,lyr_MicroregionP1_10,],
                                title: "Coordinacion Penjamo Rezago"});
var group_DatosEducacinMediaSuperiorySuperior = new ol.layer.Group({
                                layers: [lyr_EduacionMediaSuperiorySuperior_4,],
                                title: "Datos Educación Media Superior y Superior"});
var group_CapazSecundarias = new ol.layer.Group({
                                layers: [lyr_CoordinacionPenjamo_3,],
                                title: "Capaz Secundarias"});
var group_MapasBase = new ol.layer.Group({
                                layers: [lyr_GoogleEarth_0,lyr_GoogleSatellite_1,lyr_OpenStreetMap_2,],
                                title: "Mapas Base"});

lyr_GoogleEarth_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_CoordinacionPenjamo_3.setVisible(true);lyr_EduacionMediaSuperiorySuperior_4.setVisible(true);lyr_MicroregionP6_5.setVisible(true);lyr_MicroregionP5_6.setVisible(true);lyr_MicroregionP4_7.setVisible(true);lyr_MicroregionP3_8.setVisible(true);lyr_MicroregionP2_9.setVisible(true);lyr_MicroregionP1_10.setVisible(true);lyr_CoordinacionPenjamo_11.setVisible(true);
var layersList = [group_MapasBase,group_CapazSecundarias,group_DatosEducacinMediaSuperiorySuperior,group_CoordinacionPenjamoRezago,lyr_CoordinacionPenjamo_11];
lyr_CoordinacionPenjamo_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_EduacionMediaSuperiorySuperior_4.set('fieldAliases', {'Clave CT': 'Clave CT', 'Nombre CT': 'Nombre CT', 'Cve. Local': 'Cve. Local', 'Cve. Munic': 'Cve. Munic', 'Ageb': 'Ageb', 'Longitud': 'Longitud', 'Latitud': 'Latitud', 'Nivel': 'Nivel', });
lyr_MicroregionP6_5.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', });
lyr_MicroregionP5_6.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', });
lyr_MicroregionP4_7.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'TipoLocali': 'TipoLocali', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionP3_8.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'TipoLocali': 'TipoLocali', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionP2_9.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'TipoLocali': 'TipoLocali', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionP1_10.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'TipoLocali': 'TipoLocali', 'layer': 'layer', 'path': 'path', });
lyr_CoordinacionPenjamo_11.set('fieldAliases', {'Micro': 'Micro', 'Coord': 'Coord', 'Muni': 'Muni', 'Region': 'Region', 'Analf': 'Analf', 'PrimIncom': 'PrimIncom', 'PrimComp': 'PrimComp', 'SecuComp': 'SecuComp', 'Rezago': 'Rezago', });
lyr_CoordinacionPenjamo_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_EduacionMediaSuperiorySuperior_4.set('fieldImages', {'Clave CT': 'TextEdit', 'Nombre CT': 'TextEdit', 'Cve. Local': 'TextEdit', 'Cve. Munic': 'TextEdit', 'Ageb': 'TextEdit', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', 'Nivel': 'TextEdit', });
lyr_MicroregionP6_5.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', });
lyr_MicroregionP5_6.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', });
lyr_MicroregionP4_7.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'TipoLocali': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionP3_8.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'TipoLocali': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionP2_9.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'TipoLocali': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionP1_10.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'TipoLocali': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CoordinacionPenjamo_11.set('fieldImages', {'Micro': 'TextEdit', 'Coord': 'TextEdit', 'Muni': 'TextEdit', 'Region': 'TextEdit', 'Analf': 'TextEdit', 'PrimIncom': 'TextEdit', 'PrimComp': 'TextEdit', 'SecuComp': 'TextEdit', 'Rezago': 'TextEdit', });
lyr_CoordinacionPenjamo_3.set('fieldLabels', {});
lyr_EduacionMediaSuperiorySuperior_4.set('fieldLabels', {});
lyr_MicroregionP6_5.set('fieldLabels', {});
lyr_MicroregionP5_6.set('fieldLabels', {});
lyr_MicroregionP4_7.set('fieldLabels', {});
lyr_MicroregionP3_8.set('fieldLabels', {});
lyr_MicroregionP2_9.set('fieldLabels', {});
lyr_MicroregionP1_10.set('fieldLabels', {});
lyr_CoordinacionPenjamo_11.set('fieldLabels', {'Micro': 'inline label', 'Coord': 'inline label', 'Muni': 'inline label', 'Region': 'inline label', 'Analf': 'inline label', 'PrimIncom': 'inline label', 'PrimComp': 'inline label', 'SecuComp': 'inline label', 'Rezago': 'inline label', });
lyr_CoordinacionPenjamo_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});