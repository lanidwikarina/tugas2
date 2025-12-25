var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_A_1 = new ol.format.GeoJSON();
var features_A_1 = format_A_1.readFeatures(json_A_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_A_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_A_1.addFeatures(features_A_1);
var lyr_A_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_A_1, 
                style: style_A_1,
                popuplayertitle: 'A',
                interactive: true,
    title: 'A<br />\
    <img src="styles/legend/A_1_0.png" /> bangunan<br />\
    <img src="styles/legend/A_1_1.png" /> nonafektif<br />\
    <img src="styles/legend/A_1_2.png" /> teh<br />\
    <img src="styles/legend/A_1_3.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_A_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_A_1];
lyr_A_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Afd': 'Afd', 'Blok': 'Blok', 'TU': 'TU', 'TT': 'TT', 'Shape_Area': 'Shape_Area', 'RE_BLOKING': 'RE_BLOKING', 'Luas_Admi': 'Luas_Admi', 'ARA_NON_EF': 'ARA_NON_EF', 'area': 'area', });
lyr_A_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'Afd': 'TextEdit', 'Blok': 'TextEdit', 'TU': 'TextEdit', 'TT': 'TextEdit', 'Shape_Area': 'TextEdit', 'RE_BLOKING': 'TextEdit', 'Luas_Admi': 'TextEdit', 'ARA_NON_EF': 'TextEdit', 'area': 'TextEdit', });
lyr_A_1.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'Id': 'no label', 'Afd': 'inline label - always visible', 'Blok': 'no label', 'TU': 'inline label - always visible', 'TT': 'no label', 'Shape_Area': 'header label - visible with data', 'RE_BLOKING': 'no label', 'Luas_Admi': 'no label', 'ARA_NON_EF': 'no label', 'area': 'no label', });
lyr_A_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});