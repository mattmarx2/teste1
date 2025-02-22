ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-947136.984477, 4953703.683390, -946756.736496, 4953939.425366]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ParcelasLevantadas_1 = new ol.format.GeoJSON();
var features_ParcelasLevantadas_1 = format_ParcelasLevantadas_1.readFeatures(json_ParcelasLevantadas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParcelasLevantadas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParcelasLevantadas_1.addFeatures(features_ParcelasLevantadas_1);
var lyr_ParcelasLevantadas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParcelasLevantadas_1, 
                style: style_ParcelasLevantadas_1,
                popuplayertitle: 'ParcelasLevantadas',
                interactive: true,
    title: 'ParcelasLevantadas<br />\
    <img src="styles/legend/ParcelasLevantadas_1_0.png" /> TESTE<br />\
    <img src="styles/legend/ParcelasLevantadas_1_1.png" /> <br />' });
var group_Lim_Exp = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Lim_Exp'});
var group_Ortofoto = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Ortofoto'});

lyr_GoogleSatellite_0.setVisible(true);lyr_ParcelasLevantadas_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ParcelasLevantadas_1];
lyr_ParcelasLevantadas_1.set('fieldAliases', {'fid': 'fid', 'Parcela': 'Parcela', 'Proprietario': 'Proprietario', 'Foto01': 'Foto01', 'Foto02': 'Foto02', 'Benfeitorias': 'Benfeitorias', 'Anotacoes': 'Anotacoes', 'CadernetaPredial': 'CadernetaPredial', 'DescricaoPredial': 'DescricaoPredial', });
lyr_ParcelasLevantadas_1.set('fieldImages', {'fid': 'TextEdit', 'Parcela': 'TextEdit', 'Proprietario': 'TextEdit', 'Foto01': 'ExternalResource', 'Foto02': 'ExternalResource', 'Benfeitorias': 'TextEdit', 'Anotacoes': 'TextEdit', 'CadernetaPredial': 'TextEdit', 'DescricaoPredial': 'TextEdit', });
lyr_ParcelasLevantadas_1.set('fieldLabels', {'fid': 'inline label - visible with data', 'Parcela': 'inline label - visible with data', 'Proprietario': 'inline label - visible with data', 'Foto01': 'inline label - visible with data', 'Foto02': 'inline label - visible with data', 'Benfeitorias': 'inline label - visible with data', 'Anotacoes': 'inline label - visible with data', 'CadernetaPredial': 'inline label - always visible', 'DescricaoPredial': 'inline label - visible with data', });
lyr_ParcelasLevantadas_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});